'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{ className?: string; delay?: number }>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: reduce ? 0.2 : 0.52,
        delay,
        ease: [0.42, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
