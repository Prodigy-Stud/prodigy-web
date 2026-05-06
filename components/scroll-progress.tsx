'use client';

import React from 'react';
import { useLenis } from 'lenis/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 210, damping: 38, mass: 0.15 });

  useLenis((lenis) => {
    raw.set(lenis.progress);
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-amber-200/90 via-[color:var(--accent-deep)] to-[color:var(--accent-strong)]"
      style={{ scaleX: smooth }}
      aria-hidden
    />
  );
}
