import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Funding, client stories, and other updates from Prodigy.'
};

export default function ResourcesPage() {
  return (
    <main>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Resources
        </p>
        <h1 className="page-intro-title max-w-[40rem] font-display text-[clamp(1.85rem,4vw,3rem)] font-medium text-[color:var(--ink)]">
          Funding, stories, and media
        </h1>
        <p className="prose-muted mt-6 max-w-2xl text-lg leading-relaxed">
          We will publish funding milestones, selected client videos, and other public materials
          here. Nothing is live in this section yet—check back soon or{' '}
          <Link
            href="/contact"
            className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
          >
            get in touch
          </Link>
          .
        </p>
        <div className="mt-12 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-8 shadow-[var(--shadow-soft)] md:p-10">
          <h2 className="text-lg font-bold text-[color:var(--ink)]">Coming soon</h2>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Funding rounds raised</li>
            <li>Client video spotlights</li>
            <li>Press and downloadable assets</li>
          </ul>
        </div>
      </PageSection>
    </main>
  );
}
