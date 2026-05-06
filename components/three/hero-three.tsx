'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Lazy-load the WebGL hero so:
 *  - Three.js never ships with the SSR HTML
 *  - The Canvas only mounts on the client after hydration
 */
const HeroCanvas = dynamic(() => import('./hero-canvas'), {
  ssr: false,
  loading: () => null
});

type Props = {
  /** When user prefers reduced motion, skip WebGL entirely. */
  reducedMotion: boolean | null;
};

/**
 * Wrapper around <HeroCanvas /> that:
 *  - Hides the layer for reduced-motion users
 *  - Pauses the render loop when the hero scrolls out of view
 */
export function HeroThree({ reducedMotion }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.05
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reducedMotion) return null;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* Soft top wash + bottom fade so the WebGL dissolves into the warm paper background. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--bg)]/20 via-transparent to-[color:var(--bg)]/55" />
      <div className="relative h-full w-full opacity-[0.95]">
        <HeroCanvas active={active} />
      </div>
    </div>
  );
}
