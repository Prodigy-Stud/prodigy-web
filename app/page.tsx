'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DemoScenarios } from '@/components/demo-scenarios';
import { FaqAccordion } from '@/components/faq-accordion';
import { HeroSection } from '@/components/hero-section';
import { InteractiveCard } from '@/components/interactive-card';
import { PipelineFlow } from '@/components/pipeline-flow';
import { Reveal } from '@/components/reveal';
import { SiteHeader } from '@/components/site-header';
import {
  aiCapabilities,
  comparisonCards,
  demoTabs,
  faqs,
  flowSteps,
  outputCards,
  sourceCards
} from '@/lib/site-content';

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-[45rem] font-display text-[2.1rem] font-medium leading-[1.06] tracking-[-0.025em] text-[color:var(--ink)] md:text-5xl lg:text-[3.25rem]"
      >
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<string>(demoTabs[0].id);

  return (
    <main>
      <SiteHeader />

      <div id="top" className="mx-auto w-[min(1120px,92vw)]">
        <HeroSection />
      </div>

      <PipelineFlow />

      <div className="mx-auto w-[min(1120px,92vw)] pb-24 md:pb-32">
        <Reveal className="pt-16 md:pt-24" delay={0.05}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.06}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.07}>
          <SectionHeading eyebrow="Scenarios" id="demos" title="What the walkthrough covers." />
          <DemoScenarios activeDemo={activeDemo} onSelect={setActiveDemo} />
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.08}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.1}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.14}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.16}>
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
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.18}>
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
                <motion.a
                  href="mailto:hello@prodigy.ai"
                  className="rounded-full bg-[color:var(--accent-deep)] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_40px_rgba(37,99,235,0.28)]"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Demo
                </motion.a>
                <motion.a
                  href="mailto:hello@prodigy.ai"
                  className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-6 py-3 text-sm font-bold text-[color:var(--ink)] shadow-[var(--shadow-soft)]"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Join Waitlist
                </motion.a>
              </div>
            </section>
          </InteractiveCard>
        </Reveal>

        <Reveal className="pt-28 md:pt-36" delay={0.2}>
          <SectionHeading eyebrow="FAQ" id="faq" title="Common questions" />
          <section aria-labelledby="faq">
            <FaqAccordion items={faqs} />
          </section>
        </Reveal>

        <footer className="mt-4 flex flex-wrap justify-between gap-4 border-t border-[color:var(--line)] py-16 text-sm font-medium text-[color:var(--dim)]">
          <p className="text-[color:var(--ink)]">Prodigy</p>
          <p className="max-w-md text-right">
            From feedback and analytics signals to ranked opportunities, specs, and code-ready
            handoffs.
          </p>
        </footer>
      </div>
    </main>
  );
}
