'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DemoScenarios } from '@/components/demo-scenarios';
import { InteractiveCard } from '@/components/interactive-card';
import { PageSection } from '@/components/page-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionHeading } from '@/components/section-heading';
import {
  aiCapabilities,
  comparisonCards,
  demoTabs,
  flowSteps,
  outputCards,
  productPillars,
  sourceCards
} from '@/lib/site-content';

export function ProductMarketing() {
  const [activeDemo, setActiveDemo] = useState<string>(demoTabs[0].id);

  return (
    <>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <div className="max-w-[48rem]">
          <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
            Product
          </p>
          <h1 className="page-intro-title font-display text-[clamp(1.85rem,4vw,3.1rem)] font-medium text-[color:var(--ink)]">
            How Prodigy turns signals into shipped work—without giving away the secret sauce.
          </h1>
          <p className="prose-muted mt-6 max-w-2xl text-lg leading-relaxed">
            The public site stays high-level. For a deeper walkthrough,{' '}
            <Link
              href="/"
              className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
            >
              watch the overview on the home page
            </Link>{' '}
            or reach out on{' '}
            <Link
              href="/contact"
              className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
            >
              Contact
            </Link>
            .
          </p>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="At a glance"
            id="pillars"
            title="Three places Prodigy meets your workflow."
          />
          <section className="grid gap-5 md:grid-cols-3" aria-labelledby="pillars">
            {productPillars.map((p) => (
              <InteractiveCard key={p.title} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[color:var(--ink)]">{p.title}</h3>
                  <p className="prose-muted mt-2 leading-relaxed">{p.body}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="default">
        <ScrollReveal delayMs={40}>
          <SectionHeading
            eyebrow="Signal Sources"
            id="sources"
            title="Real product signals, not isolated opinions."
          />
          <section className="grid gap-5 md:grid-cols-3" aria-labelledby="sources">
            {sourceCards.map((card) => (
              <InteractiveCard key={card.title} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[color:var(--ink)]">{card.title}</h3>
                  <p className="prose-muted mt-2 leading-relaxed">{card.body}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="muted">
        <ScrollReveal delayMs={40}>
          <SectionHeading
            eyebrow="AI-Powered"
            id="ai"
            title="Intelligence that transforms product decisions."
          />
          <section className="grid gap-5 md:grid-cols-2" aria-labelledby="ai">
            {aiCapabilities.map((capability) => (
              <InteractiveCard key={capability.title} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[color:var(--ink)]">{capability.title}</h3>
                  <p className="prose-muted mt-2 leading-relaxed">{capability.body}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="default">
        <ScrollReveal delayMs={60}>
          <SectionHeading eyebrow="Scenarios" id="demos" title="What the walkthrough covers." />
          <DemoScenarios activeDemo={activeDemo} onSelect={setActiveDemo} />
        </ScrollReveal>
      </PageSection>

      <PageSection variant="muted">
        <ScrollReveal delayMs={60}>
          <SectionHeading
            eyebrow="How Prodigy Thinks"
            id="how"
            title="A decision flow teams can trust."
          />
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-labelledby="how">
            {flowSteps.map((step) => (
              <InteractiveCard key={step.step} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <p className="text-sm font-extrabold tracking-[0.1em] text-[color:var(--accent-deep)]">
                    #{step.step}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-[color:var(--ink)]">{step.title}</h3>
                  <p className="mt-1 font-semibold text-[color:var(--dim)]">{step.question}</p>
                  <p className="prose-muted mt-2 leading-relaxed">{step.body}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="default">
        <ScrollReveal delayMs={80}>
          <SectionHeading
            eyebrow="Output Showcase"
            id="outputs"
            title="What your team actually receives."
          />
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-labelledby="outputs">
            {outputCards.map((card) => (
              <InteractiveCard key={card.title} className="h-full">
                <article className="glass-card h-full rounded-2xl p-5 md:p-6">
                  <h3 className="text-lg font-bold text-[color:var(--ink)]">{card.title}</h3>
                  <p className="prose-muted mt-2 leading-relaxed">{card.body}</p>
                </article>
              </InteractiveCard>
            ))}
          </section>
        </ScrollReveal>
      </PageSection>

      <PageSection variant="muted">
        <ScrollReveal delayMs={80}>
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
        </ScrollReveal>
      </PageSection>

      <PageSection variant="default" className="pb-8 md:pb-12">
        <ScrollReveal delayMs={100}>
          <SectionHeading
            eyebrow="Method Transparency"
            id="method"
            title="Prioritization logic your team can inspect."
          />
          <InteractiveCard className="overflow-hidden rounded-[1.5rem]">
            <section className="glass-card rounded-[1.5rem] p-6 md:p-8" aria-labelledby="method">
              <p className="leading-relaxed text-[color:var(--muted)]">
                Ranking combines <strong className="text-[color:var(--ink)]">frequency</strong>,{' '}
                <strong className="text-[color:var(--ink)]">impact</strong>,{' '}
                <strong className="text-[color:var(--ink)]">urgency</strong>, and
                <strong className="text-[color:var(--ink)]"> confidence</strong> from both feedback
                and behavioral analytics signals.
              </p>
              <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
                Every insight includes source traceability and decision rationale so PM, design, and
                engineering stay aligned.
              </p>
            </section>
          </InteractiveCard>
        </ScrollReveal>
      </PageSection>
    </>
  );
}
