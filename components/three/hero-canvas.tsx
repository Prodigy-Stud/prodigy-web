'use client';

import React, { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * GLSL — vertex displaces the plane with three layered sine waves.
 * Same shader powers both the foreground wireframe and the soft fill below;
 * each material owns its own uniforms (color/opacity/phase offset).
 */
const WAVE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uPhaseOffset;
  varying float vElev;
  varying vec2 vUv;

  void main() {
    vec3 p = position;
    float t = uTime + uPhaseOffset;

    // Three sine layers stacked along X, Y, and a diagonal — gives us
    // a fluid surface without ever spending more than ~6 ALU ops/vertex.
    float w1 = sin(p.x * 0.55 + t * 0.30) * 0.60;
    float w2 = sin(p.y * 0.70 + t * 0.22 + 1.4) * 0.32;
    float w3 = sin((p.x * 0.60 + p.y * 0.40) * 0.80 + t * 0.18) * 0.40;

    float elev = w1 + w2 + w3;
    p.z += elev * 0.42;

    vElev = elev;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

/**
 * GLSL — fragment colors by elevation, with soft edge fade so the plane
 * dissolves into the page (no harsh borders).
 */
const WAVE_FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uOpacity;
  varying float vElev;
  varying vec2 vUv;

  void main() {
    // Map elevation [-~1.3, +~1.3] to [0..1] for color blending.
    float k = clamp(vElev * 0.5 + 0.5, 0.0, 1.0);
    vec3 mid = mix(uColorA, uColorB, k);
    vec3 col = mix(mid, uColorC, smoothstep(0.7, 1.0, k));

    // Soft mask along both axes so the surface fades to transparent.
    float fadeX = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
    float fadeY = smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.92, vUv.y);

    gl_FragColor = vec4(col, fadeX * fadeY * uOpacity);
  }
`;

type WaveUniforms = {
  uTime: { value: number };
  uPhaseOffset: { value: number };
  uColorA: { value: THREE.Color };
  uColorB: { value: THREE.Color };
  uColorC: { value: THREE.Color };
  uOpacity: { value: number };
};

function makeUniforms(opts: {
  colorA: string;
  colorB: string;
  colorC: string;
  opacity: number;
  phaseOffset: number;
}): WaveUniforms {
  return {
    uTime: { value: 0 },
    uPhaseOffset: { value: opts.phaseOffset },
    uColorA: { value: new THREE.Color(opts.colorA) },
    uColorB: { value: new THREE.Color(opts.colorB) },
    uColorC: { value: new THREE.Color(opts.colorC) },
    uOpacity: { value: opts.opacity }
  };
}

/**
 * Two stacked wave planes:
 *  - A soft filled "fog" layer behind for depth/color
 *  - A crisp wireframe layer in front for the iconic signal-mesh look
 *
 * The whole group tilts subtly with the pointer for parallax.
 */
function WaveSurface() {
  const groupRef = useRef<THREE.Group>(null);
  const wireMatRef = useRef<THREE.ShaderMaterial>(null);
  const fillMatRef = useRef<THREE.ShaderMaterial>(null);

  // Build uniforms once. We mutate `.value` from useFrame.
  const wireUniforms = useMemo(
    () =>
      makeUniforms({
        colorA: '#3b62d3', // valleys: deeper blue
        colorB: '#7c9ae8', // mid
        colorC: '#c4d4f2', // peaks: light blue
        opacity: 0.7,
        phaseOffset: 0
      }),
    []
  );

  const fillUniforms = useMemo(
    () =>
      makeUniforms({
        colorA: '#b0c2eb',
        colorB: '#dde5fa',
        colorC: '#f0f4fc',
        opacity: 0.22,
        phaseOffset: 1.6 // slight phase lag → second wave reads as a "fog"
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (wireMatRef.current) wireMatRef.current.uniforms.uTime.value = t;
    if (fillMatRef.current) fillMatRef.current.uniforms.uTime.value = t;

    // Pointer-driven group tilt — calm, low-pass eased.
    const g = groupRef.current;
    if (!g) return;
    const targetY = state.pointer.x * 0.08;
    const targetX = -state.pointer.y * 0.05;
    g.rotation.y += (targetY - g.rotation.y) * 0.04;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Soft filled depth layer */}
      <mesh rotation={[-Math.PI * 0.42, 0, 0]} position={[0, -0.95, -0.25]}>
        <planeGeometry args={[18, 12, 80, 40]} />
        <shaderMaterial
          ref={fillMatRef}
          vertexShader={WAVE_VERT}
          fragmentShader={WAVE_FRAG}
          uniforms={fillUniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Foreground wireframe — the "signal mesh" */}
      <mesh rotation={[-Math.PI * 0.42, 0, 0]} position={[0, -0.7, 0]}>
        <planeGeometry args={[16, 10, 60, 36]} />
        <shaderMaterial
          ref={wireMatRef}
          vertexShader={WAVE_VERT}
          fragmentShader={WAVE_FRAG}
          uniforms={wireUniforms}
          transparent
          depthWrite={false}
          wireframe
        />
      </mesh>
    </group>
  );
}

/** Pause R3F render loop when off-screen — zero GPU cost when hidden. */
function FrameloopGate({ active }: { active: boolean }) {
  const set = useThree((s) => s.set);
  useEffect(() => {
    set({ frameloop: active ? 'always' : 'never' });
  }, [active, set]);
  return null;
}

type Props = {
  /** When false, the canvas pauses rendering. */
  active: boolean;
};

export default function HeroCanvas({ active }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5.6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true
      }}
    >
      <FrameloopGate active={active} />
      <Suspense fallback={null}>
        <WaveSurface />
      </Suspense>
    </Canvas>
  );
}
