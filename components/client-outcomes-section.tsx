'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/primitives';
import { outputCards } from '@/lib/site-content';

export function ClientOutcomesSection() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {outputCards.map((item, index) => (
        <motion.div
          key={item.title}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.05 }}
        >
          <Card className="h-full p-5 md:p-6">
            <h3 className="text-base font-bold text-[color:var(--ink)]">{item.title}</h3>
            <p className="prose-muted mt-2 text-sm leading-relaxed">{item.body}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
