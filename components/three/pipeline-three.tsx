'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

const PipelineCanvas = dynamic(() => import('./pipeline-canvas'), {
  ssr: false,
  loading: () => null
});

type Props = {
  reducedMotion: boolean | null;
};

/**
 * Wrapper for the pipeline particle flow.
 *
 * Performance:
 *  - The Canvas is only **mounted** when the band first scrolls into view
 *    (saves all GPU work for users who never reach this section).
 *  - After mount, the render loop pauses when the band leaves the viewport.
 *  - A horizontal CSS mask hides particles at the very edges so the flow
 *    appears to fade into the page.
 */
export function PipelineThree({ reducedMotion }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
        setActive(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: '120px 0px 120px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
      style={{
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)'
      }}
    >
      {mounted ? <PipelineCanvas active={active} /> : null}
    </div>
  );
}
