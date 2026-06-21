'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { InteractiveCard } from '@/components/interactive-card';
import { teamScenarios } from '@/lib/site-content';

export function TeamScenariosSection() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {teamScenarios.map((scenario, index) => (
        <motion.div
          key={scenario.title}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.06 }}
        >
          <InteractiveCard className="h-full">
            <article className="glass-card flex h-full flex-col rounded-2xl p-5 md:p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
                {scenario.situation}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[color:var(--ink)]">{scenario.title}</h3>
              <p className="prose-muted mt-3 grow text-sm leading-relaxed">{scenario.body}</p>
            </article>
          </InteractiveCard>
        </motion.div>
      ))}
    </div>
  );
}
