'use client';

import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{ className?: string; delay?: number }>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
