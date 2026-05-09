import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical writing from Prodigy on architecture, system design, and scalability—shared openly where we can.'
};

export default function BlogPage() {
  return (
    <main>
      <PageSection variant="muted" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Blog
        </p>
        <h1 className="page-intro-title max-w-[44rem] font-display text-[clamp(1.85rem,4vw,3rem)] font-medium text-[color:var(--ink)]">
          Architecture, system design, and scale
        </h1>
        <p className="prose-muted mt-6 max-w-2xl text-lg leading-relaxed">
          We plan to open-source as much of our thinking as responsibly possible—deep dives on how
          we build, operate, and scale Prodigy. Posts will appear here over time.
        </p>
        <p className="prose-muted mt-6 max-w-2xl text-base leading-relaxed">
          Want to collaborate or suggest a topic?{' '}
          <Link
            href="/contact"
            className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
          >
            Contact us
          </Link>
          .
        </p>
        <div className="mt-12 rounded-2xl border border-dashed border-[color:var(--line)] bg-[color:var(--surface-elevated)]/80 p-10 text-center">
          <p className="text-sm font-semibold text-[color:var(--muted)]">No posts published yet.</p>
        </div>
      </PageSection>
    </main>
  );
}
