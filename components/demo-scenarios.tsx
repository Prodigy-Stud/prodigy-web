'use client';

import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { demoTabs } from '@/lib/site-content';

type Props = {
  activeDemo: string;
  onSelect: (id: string) => void;
};

export function DemoScenarios({ activeDemo, onSelect }: Props) {
  const active = demoTabs.find((t) => t.id === activeDemo);

  return (
    <section aria-labelledby="demos">
      <p className="prose-muted mb-6 max-w-2xl text-sm md:text-base">
        The walkthrough shows Prodigy end to end. Pick a lens—each maps to a part of the pipeline
        from ingest to shipped handoffs.
      </p>

      <LayoutGroup>
        <div className="relative mb-6 flex flex-wrap gap-2">
          {demoTabs.map((tab) => {
            const selected = activeDemo === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelect(tab.id)}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold outline-none transition ${
                  selected
                    ? 'text-white'
                    : 'text-[color:var(--muted)] hover:text-[color:var(--ink)]'
                }`}
              >
                {selected ? (
                  <motion.span
                    layoutId="demo-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-[color:var(--accent-deep)] shadow-[0_10px_36px_rgba(37,99,235,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-[1]">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-6 shadow-[var(--shadow)] md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg font-medium leading-relaxed text-[color:var(--ink)]">
              {active?.description}
            </p>
            <p className="prose-muted mt-5 text-sm">
              <a
                href="#product-demo"
                className="inline-flex items-center gap-1 font-semibold text-[color:var(--accent-deep)] transition-[gap] duration-200 hover:gap-1.5"
              >
                <span>Jump to the video</span>
                <span aria-hidden>→</span>
              </a>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
