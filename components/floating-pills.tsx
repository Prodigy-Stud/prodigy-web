'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import type { PointerOffset } from '@/components/use-pointer-parallax';

type PillConfig = {
  label: string;
  className: string;
  /** Float loop duration in seconds. */
  duration: number;
  /** Float loop start offset in seconds. */
  delay: number;
  /** Max parallax offset in px, multiplied by the normalized pointer. */
  parallax: number;
};

const configs: readonly PillConfig[] = [
  {
    label: 'Signals',
    className: 'left-[4%] top-[14%] md:left-[2%] md:top-[18%]',
    duration: 9,
    delay: 0,
    parallax: 14
  },
  {
    label: 'Insights',
    className: 'right-[6%] top-[22%] md:right-[4%]',
    duration: 11,
    delay: 1.2,
    parallax: 10
  },
  {
    label: 'Ideas',
    className: 'left-[8%] bottom-[32%] md:bottom-[28%]',
    duration: 10,
    delay: 0.6,
    parallax: 12
  },
  {
    label: 'Code',
    className: 'right-[10%] bottom-[26%] md:right-[6%]',
    duration: 12,
    delay: 2,
    parallax: 8
  }
];

/**
 * One pill = two stacked motion layers:
 *  - Outer: pointer-driven parallax (transform x/y from a smoothed pointer)
 *  - Inner: an infinite, gentle floating loop (independent transform)
 *
 * Splitting them avoids fighting between two `y` animations on the same node.
 */
function Pill({ pill, pointer }: { pill: PillConfig; pointer: PointerOffset }) {
  const x = useTransform(pointer.x, (v) => v * pill.parallax);
  const y = useTransform(pointer.y, (v) => v * (pill.parallax * 0.7));

  return (
    <motion.div className={`absolute will-change-transform ${pill.className}`} style={{ x, y }}>
      <motion.span
        className="inline-block rounded-full border border-[color:var(--line)]/80 bg-[color:var(--surface-strong)]/45 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent-deep)]/70 shadow-[var(--shadow-soft)] backdrop-blur-md"
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{
          duration: pill.duration,
          delay: pill.delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {pill.label}
      </motion.span>
    </motion.div>
  );
}

type Props = {
  pointer: PointerOffset;
  reducedMotion: boolean | null;
};

/**
 * Floating pills layer for the hero. Decorative only — `aria-hidden`.
 */
export function FloatingPills({ pointer, reducedMotion }: Props) {
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {configs.map((c) => (
        <Pill key={c.label} pill={c} pointer={pointer} />
      ))}
    </div>
  );
}
