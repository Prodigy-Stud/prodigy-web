import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';
import { Card } from '@/components/ui/primitives';

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
          Funding, client stories, and docs
        </h1>
        <p className="prose-muted mt-6 max-w-2xl text-lg leading-relaxed">
          Funding milestones, client stories, integration guides, and public materials from Prodigy.
          Check back as the company grows or{' '}
          <Link
            href="/contact"
            className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
          >
            get in touch
          </Link>
          .
        </p>
        <Card className="mt-12 p-8 md:p-10">
          <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
            Milestone
          </p>
          <h2 className="text-lg font-bold text-[color:var(--ink)]">
            Prodigy received $25,000 in credits from YC.
          </h2>
          <p className="prose-muted mt-4 leading-relaxed">
            The credits support Prodigy&apos;s work building the AI pipeline from product signals to
            shipped code.
          </p>
        </Card>
        <Card className="mt-6 p-8 md:p-10">
          <h2 className="text-lg font-bold text-[color:var(--ink)]">More coming soon</h2>
          <ul className="prose-muted mt-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Funding rounds raised</li>
            <li>Client video spotlights and ROI stories</li>
            <li>Connector and integration setup guides</li>
            <li>Press and downloadable assets</li>
          </ul>
        </Card>
      </PageSection>
    </main>
  );
}
