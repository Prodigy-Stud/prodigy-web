'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/**
 * Shared item variant — fade + 20px upward translate with a smooth ease.
 * Use this with `AnimatedSection` to get a coordinated stagger out of the box.
 *
 * Example:
 *   <AnimatedSection stagger={0.08}>
 *     <motion.div variants={animatedItem}>...</motion.div>
 *     <motion.div variants={animatedItem}>...</motion.div>
 *   </AnimatedSection>
 */
export const animatedItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

/** A scale-in variant for the rare element that benefits from a small pop. */
export const animatedItemScale: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay between direct motion children (default 0.08s). */
  stagger?: number;
  /** Initial delay before the first child appears (default 0). */
  delayChildren?: number;
  /** Visibility threshold to trigger (default 0.15). */
  amount?: number;
};

/**
 * Lightweight scroll-reveal container that:
 *  - Triggers once on enter
 *  - Coordinates a stagger across direct children that opt in via `variants`
 *  - Respects `prefers-reduced-motion` (instant reveal, no movement)
 */
export function AnimatedSection({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  amount = 0.15
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
            delayChildren: reduce ? 0 : delayChildren
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
