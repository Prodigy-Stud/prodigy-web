import Image from 'next/image';
import React from 'react';
import { InteractiveCard } from '@/components/interactive-card';
import { withBasePath } from '@/lib/base-path';
import { portalFeatures } from '@/lib/site-content';

function ScrumBoardPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--section-deep)] shadow-[var(--shadow)]">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-teal-200">
          Shared scrum board
        </p>
        <p className="mt-1 text-xs text-slate-300">
          Agents and engineers work from the same board—owners, roles, and status in one view.
        </p>
      </div>
      <Image
        src={withBasePath('/screenshots/scrum-board.png')}
        alt="Prodigy shared scrum board with agents and engineers working together on tickets"
        width={1440}
        height={900}
        className="h-auto w-full"
      />
    </div>
  );
}

export function PortalSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      {/* Left: copy */}
      <div>
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Shared workspace
        </p>
        <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-tight tracking-[-0.025em] text-[color:var(--ink)]">
          One board for humans, Prodigy, and every ticket in flight.
        </h2>
        <p className="prose-muted mt-5 max-w-lg text-base leading-relaxed">
          The Prodigy portal is the shared scrum board—owners, roles, agent progress, pull requests,
          and overnight run results in one place your whole team can trust.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {portalFeatures.map((f) => (
            <InteractiveCard key={f.title}>
              <article className="glass-card rounded-2xl p-4">
                <h3 className="text-sm font-bold text-[color:var(--ink)]">{f.title}</h3>
                <p className="prose-muted mt-1.5 text-sm leading-relaxed">{f.body}</p>
              </article>
            </InteractiveCard>
          ))}
        </div>
      </div>

      {/* Right: scrum board screenshot */}
      <div className="flex min-w-0 items-start justify-center">
        <ScrumBoardPreview />
      </div>
    </div>
  );
}
