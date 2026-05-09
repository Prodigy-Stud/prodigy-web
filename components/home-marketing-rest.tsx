'use client';

import Link from 'next/link';
import React from 'react';
import { FaqAccordion } from '@/components/faq-accordion';
import { InteractiveCard } from '@/components/interactive-card';
import { PageSection } from '@/components/page-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionHeading } from '@/components/section-heading';
import { comparisonCards, faqs } from '@/lib/site-content';

export function HomeMarketingRest() {
  return (
    <>
      <PageSection variant="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Prodigy"
            id="why"
            title="Built for product decisions, not generic data views."
          />
          <section className="grid gap-5 md:grid-cols-3" aria-labelledby="why">
            {comparisonCards.map((card) => (
              <InteractiveCard key={card.title} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[color:var(--ink)]">{card.title}</h3>
                  <p className="prose-muted mt-2 leading-relaxed">{card.current}</p>
                  <p className="mt-3 font-bold text-[color:var(--ink)]">{card.contrast}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
          <p className="prose-muted mt-10 max-w-2xl text-base leading-relaxed md:mt-12">
            Want the full picture—signals, AI capabilities, scenarios, and outputs?{' '}
            <Link
              href="/product"
              className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/30 underline-offset-4 transition hover:decoration-[color:var(--accent-deep)]"
            >
              Explore the product page
            </Link>
            .
          </p>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="default">
        <ScrollReveal delayMs={40}>
          <InteractiveCard className="overflow-hidden rounded-[1.5rem]">
            <section
              id="cta"
              className="glass-card rounded-[1.5rem] px-6 py-14 text-center md:px-10 md:py-16"
              aria-labelledby="cta-title"
            >
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-deep)]">
                Get Started
              </p>
              <h2
                id="cta-title"
                className="font-display text-3xl font-medium tracking-[-0.02em] text-[color:var(--ink)] md:text-5xl"
              >
                Bring clarity to what to build next.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[color:var(--muted)]">
                Replace reactive roadmap debates with ranked opportunities and implementation-ready
                specs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[color:var(--accent-deep)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_36px_rgba(13,148,136,0.26)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(13,148,136,0.32)]"
                >
                  Book Demo
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-6 py-3 text-sm font-bold text-[color:var(--ink)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
                >
                  Join Waitlist
                </Link>
              </div>
            </section>
          </InteractiveCard>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="muted">
        <ScrollReveal delayMs={80}>
          <SectionHeading eyebrow="FAQ" id="faq" title="Common questions" />
          <section aria-labelledby="faq">
            <FaqAccordion items={faqs} />
          </section>
        </ScrollReveal>
      </PageSection>
    </>
  );
}
