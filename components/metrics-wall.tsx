'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Badge, Card } from '@/components/ui/primitives';
import { outcomeMetrics } from '@/lib/site-content';

export function MetricsWall() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Customer outcomes" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {outcomeMetrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.05 }}
        >
          <Card className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                {metric.label}
              </p>
              <Badge variant="accent">{metric.trend}</Badge>
            </div>
            <p className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-[color:var(--ink)]">
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-[color:var(--muted)]">{metric.source}</p>
            <Sparkline points={metric.series} animate={!reduce} />
          </Card>
        </motion.div>
      ))}
    </section>
  );
}

function Sparkline({ points, animate }: { points: readonly number[]; animate: boolean }) {
  const width = 160;
  const height = 44;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = Math.max(max - min, 1);
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = height - ((point - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="mt-4 rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-2">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-11 w-full" role="img" aria-label="Trend">
        <motion.polyline
          fill="none"
          stroke="var(--accent-deep)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={path}
          initial={animate ? { pathLength: 0, opacity: 0.4 } : false}
          whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true, amount: 0.4 }}
          transition={animate ? { duration: 0.8, ease: 'easeOut' } : undefined}
        />
      </svg>
    </div>
  );
}
