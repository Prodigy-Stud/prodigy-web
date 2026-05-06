'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 280, damping: 38, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 280, damping: 38, mass: 0.4 });

  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`group ${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{
        y: -4,
        transition: { type: 'spring', stiffness: 440, damping: 30 }
      }}
    >
      <div className="h-full rounded-2xl ring-1 ring-transparent transition-[box-shadow,ring-color] duration-300 group-hover:ring-[rgba(37,99,235,0.22)]">
        {children}
      </div>
    </motion.div>
  );
}
