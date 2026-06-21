import React from 'react';
import { statsBar } from '@/lib/site-content';

export function StatsBar() {
  return (
    <div className="mx-auto w-full py-10 md:py-12">
      <dl className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-y-0">
        {statsBar.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              'flex flex-col items-center gap-1 text-center',
              i < statsBar.length - 1 ? 'md:border-r md:border-[color:var(--line-subtle)]' : ''
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <dt className="font-display text-[clamp(1.65rem,8vw,2rem)] font-semibold leading-none tracking-tight text-[color:var(--accent-deep)]">
              {stat.value}
            </dt>
            <dd className="max-w-[8rem] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)] sm:text-[0.72rem] sm:tracking-[0.18em]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
