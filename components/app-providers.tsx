'use client';

import React, { useMemo } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import { ScrollProgress } from '@/components/scroll-progress';

export function AppProviders({ children }: { children: React.ReactNode }) {
  const lenisOptions = useMemo(
    () => ({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.12,
      anchors: true,
      autoRaf: true
    }),
    []
  );

  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollProgress />
      {children}
    </ReactLenis>
  );
}
