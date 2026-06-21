import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the founder behind Prodigy—the AI FTE for product and engineering teams.'
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

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="glass-card rounded-[1.5rem] p-6 md:p-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
              Prodigy
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-[color:var(--ink)]">
              The AI teammate that owns work end to end.
            </h2>
            <p className="prose-muted mt-4 leading-relaxed">
              Prodigy lives in Slack and acts as PM, Senior Engineer, or Junior Engineer based on
              what your team needs. It holds context across threads, delegates work on a shared
              board, codes when humans are unavailable, and ships with accountability.
            </p>
            <p className="mt-5 inline-flex rounded-full border border-[color:var(--accent)]/25 bg-[color:var(--accent-soft)] px-4 py-2 text-sm font-bold text-[color:var(--accent-deep)]">
              Received $25,000 in credits from YC.
            </p>
          </section>

          <section className="glass-card overflow-hidden rounded-[1.5rem] lg:grid lg:grid-cols-[minmax(180px,240px)_1fr]">
            <div className="flex items-center justify-center bg-[color:var(--bg-deep)] p-4 sm:p-5">
              <div className="relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden rounded-[1.1rem] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-soft)] md:max-w-full">
                <Image
                  src={withBasePath('/team/samay-ashar.png')}
                  alt="Samay Ashar"
                  fill
                  sizes="(min-width: 1024px) 240px, 72vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
                Founder
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-[color:var(--ink)]">
                Samay Ashar
              </h2>
              <div className="prose-muted mt-4 space-y-4 leading-relaxed">
                <p>
                  Samay is a software engineer who loves solving problems at the intersection of
                  product and technology.
                </p>
                <p>
                  Most recently he worked with Turing, where he delivered over 300 data points for
                  clients like Amazon, Google, and Meta. Prior to that, he led a cross-functional
                  team of 10 at Launchpad, where he built autonomous browser agents.
                </p>
                <p>
                  He is a certified ML researcher with a thesis indexed in CERN&apos;s online
                  repository.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="prose-muted leading-relaxed">
            If you are a product or engineering team that needs an AI teammate—not another tool that
            generates drafts,{' '}
            <Link
              href="/contact"
              className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
            >
              reach out
            </Link>
            .
          </p>
        </div>
      </PageSection>
    </main>
  );
}
