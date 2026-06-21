import Image from 'next/image';
import React from 'react';
import { withBasePath } from '@/lib/base-path';
import {
  agentDestinations,
  analyticsIntegrations,
  chatPlatforms,
  sourceIntegrations,
  workIntegrations
} from '@/lib/site-content';

type LogoItem = {
  name: string;
  category: string;
  logo?: string;
};

function LogoCard({ item, compact = false }: { item: LogoItem; compact?: boolean }) {
  return (
    <div
      className={[
        'flex shrink-0 flex-col items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-soft)]',
        compact ? 'h-20 w-32 gap-2 px-3 md:w-36' : 'mx-2 h-24 w-40 gap-3 px-5 md:h-28 md:w-48'
      ].join(' ')}
    >
      {item.logo ? (
        <Image
          src={withBasePath(item.logo)}
          alt={`${item.name} logo`}
          width={120}
          height={32}
          className={
            compact
              ? 'h-7 w-auto max-w-[6.5rem] object-contain'
              : 'h-8 w-auto max-w-[7.5rem] object-contain'
          }
        />
      ) : (
        <span className="flex h-8 items-center rounded-full bg-[color:var(--accent-soft)] px-3 text-xs font-bold text-[color:var(--accent-deep)]">
          {item.name}
        </span>
      )}
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--dim)]">
        {item.category}
      </span>
    </div>
  );
}

function LogoMarquee({ label, items }: { label: string; items: ReadonlyArray<LogoItem> }) {
  const marqueeItems = [...items, ...items];

  return (
    <section aria-label={`${label} integrations`}>
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
        {label}
      </p>
      <div className="logo-marquee group relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-[color:var(--section-muted)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[color:var(--section-muted)] to-transparent" />
        <div className="logo-marquee-track flex w-max">
          {marqueeItems.map((item, index) => (
            <LogoCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StaticLogoGrid({ label, items }: { label: string; items: ReadonlyArray<LogoItem> }) {
  return (
    <section aria-label={`${label} integrations`}>
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => (
          <LogoCard key={item.name} item={item} compact />
        ))}
      </div>
    </section>
  );
}

export function IntegrationsGrid() {
  return (
    <div className="space-y-8">
      <StaticLogoGrid label="Where Prodigy lives" items={chatPlatforms} />
      <StaticLogoGrid label="Work tools" items={workIntegrations} />
      <LogoMarquee label="Context sources" items={sourceIntegrations} />
      <StaticLogoGrid label="Analytics" items={analyticsIntegrations} />
      <StaticLogoGrid label="Agent runtimes" items={agentDestinations} />
    </div>
  );
}
