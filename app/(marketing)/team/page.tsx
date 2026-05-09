import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the founder behind Prodigy.'
};

export default function TeamPage() {
  return (
    <main>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Team
        </p>
        <h1 className="page-intro-title font-display text-[clamp(1.85rem,4vw,3rem)] font-medium text-[color:var(--ink)]">
          Founder
        </h1>
        <div className="mt-10 max-w-2xl">
          <p className="text-lg font-semibold text-[color:var(--ink)]">Sam</p>
          <p className="prose-muted mt-4 leading-relaxed">
            Prodigy is founded on the belief that product teams deserve a single, trustworthy thread
            from real user signals to what ships next. This page is a short introduction—we will add
            bio, background, and how to connect as the site evolves.
          </p>
          <p className="mt-6">
            <Link
              href="/contact"
              className="text-sm font-bold text-[color:var(--accent-deep)] transition hover:underline"
            >
              Contact →
            </Link>
          </p>
        </div>
      </PageSection>
    </main>
  );
}
