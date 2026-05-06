'use client';

import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Item = { question: string; answer: string };

export function FaqAccordion({ items }: { items: readonly Item[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const headerId = `${baseId}-header-${i}`;
        return (
          <motion.article
            key={item.question}
            layout
            className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow)]"
            initial={false}
          >
            <h3 className="text-base font-bold">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left text-[color:var(--ink)] transition hover:bg-[color:var(--surface-hover)]"
              >
                <span className="pt-0.5">{item.question}</span>
                <motion.span
                  aria-hidden
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-lg font-light text-[color:var(--accent-deep)]"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                >
                  +
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="prose-muted border-t border-[color:var(--line)] px-5 pb-5 pt-3 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
