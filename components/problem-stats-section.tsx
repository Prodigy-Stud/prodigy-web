'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/primitives';
import { problemStats } from '@/lib/site-content';

export function ProblemStatsSection() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {problemStats.map((stat, index) => (
        <motion.div
          key={stat.value}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: reduce ? 0 : index * 0.08 }}
        >
          <Card className="p-6 text-center md:p-8">
            <p className="font-display text-4xl font-medium tracking-[-0.03em] text-[color:var(--accent-deep)] md:text-5xl">
              {stat.value}
            </p>
            <p className="prose-muted mt-3 text-sm leading-relaxed md:text-base">{stat.label}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
