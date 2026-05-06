'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function makeDiscTexture(): THREE.CanvasTexture | null {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  if (!ctx) return null;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.6)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  return tex;
}

type FlowParams = {
  count: number;
  yRange: number; // vertical jitter band (full extent)
  speedMin: number;
  speedMax: number;
  size: number;
  color: string;
  opacity: number;
  /** Vertical wobble amplitude (0 = flat). */
  wobble: number;
  /** Used so the two layers don't share textures or buffers. */
  seed: number;
};

/**
 * One stream of particles flowing left → right.
 * We keep the per-frame loop short (≤ ~110 writes) so two layers cost almost nothing.
 */
function FlowLayer({ texture, params }: { texture: THREE.Texture | null; params: FlowParams }) {
  const pointsRef = useRef<THREE.Points>(null);

  const data = useMemo(() => {
    const { count, yRange, speedMin, speedMax, seed } = params;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const ys = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2;
      ys[i] = (Math.random() - 0.5) * yRange;
      positions[i * 3 + 1] = ys[i];
      positions[i * 3 + 2] = 0;
      speeds[i] = speedMin + Math.random() * (speedMax - speedMin);
      phases[i] = Math.random() * Math.PI * 2 + seed;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { geometry: g, speeds, ys, phases };
    // Recreate when params change (count etc.).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.count, params.yRange, params.speedMin, params.speedMax, params.seed]);

  useEffect(() => () => data.geometry.dispose(), [data.geometry]);

  const { viewport } = useThree();

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;
    const halfW = viewport.width / 2 + 0.6;
    const pos = points.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < params.count; i++) {
      pos[i * 3] += data.speeds[i] * delta * 0.55;
      if (pos[i * 3] > halfW) pos[i * 3] = -halfW;
      pos[i * 3 + 1] = data.ys[i] + Math.sin(t * 0.4 + data.phases[i]) * params.wobble;
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={data.geometry}>
      <pointsMaterial
        map={texture ?? undefined}
        color={params.color}
        size={params.size}
        sizeAttenuation
        transparent
        depthWrite={false}
        opacity={params.opacity}
      />
    </points>
  );
}

/**
 * Two stacked layers:
 *  - Bright fast stream (the "current")
 *  - Slower, larger soft halo behind (depth)
 */
function FlowFields() {
  const texture = useMemo(makeDiscTexture, []);
  useEffect(() => () => texture?.dispose(), [texture]);

  const fast = useMemo<FlowParams>(
    () => ({
      count: 90,
      yRange: 0.5,
      speedMin: 0.22,
      speedMax: 0.5,
      size: 0.085,
      color: '#2952d5',
      opacity: 0.78,
      wobble: 0.04,
      seed: 0
    }),
    []
  );

  const slow = useMemo<FlowParams>(
    () => ({
      count: 28,
      yRange: 0.65,
      speedMin: 0.08,
      speedMax: 0.18,
      size: 0.16,
      color: '#7c9ae8',
      opacity: 0.32,
      wobble: 0.05,
      seed: 100
    }),
    []
  );

  return (
    <>
      <FlowLayer texture={texture} params={slow} />
      <FlowLayer texture={texture} params={fast} />
    </>
  );
}

function FrameloopGate({ active }: { active: boolean }) {
  const set = useThree((s) => s.set);
  useEffect(() => {
    set({ frameloop: active ? 'always' : 'never' });
  }, [active, set]);
  return null;
}

type Props = { active: boolean };

export default function PipelineCanvas({ active }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false
      }}
    >
      <FrameloopGate active={active} />
      <FlowFields />
    </Canvas>
  );
}
