'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/reveal';
import {
  aiCapabilities,
  comparisonCards,
  demoTabs,
  faqs,
  flowSteps,
  navLinks,
  outputCards,
  pipeline,
  sourceCards
} from '@/lib/site-content';

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 id={id} className="max-w-3xl font-display text-3xl leading-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<string>(demoTabs[0].id);

  return (
    <main>
      <header className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4 py-7">
        <a href="#top" className="font-display text-2xl tracking-wide text-ink">
          Prodigy
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-muted transition hover:text-[color:var(--accent-strong)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-[color:var(--accent-strong)] px-4 py-2 text-sm font-bold text-white shadow-[0_16px_30px_rgba(35,70,81,0.35)] transition hover:-translate-y-0.5"
        >
          Get Early Access
        </a>
      </header>

      <div id="top" className="mx-auto w-[min(1120px,92vw)] pb-16">
        <Reveal className="py-10 md:py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
            Product Direction Engine
          </p>
          <h1 className="max-w-xl font-display text-4xl leading-tight md:text-7xl">
            From Signals to Shipped Decisions.
          </h1>
          <p className="prose-muted mt-5 max-w-3xl text-base md:text-lg">
            Prodigy turns customer feedback and usage analytics into ranked opportunities, feature
            concepts, rollout plans, and implementation-ready specs your team can execute with
            confidence.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-full bg-[color:var(--accent-strong)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(35,70,81,0.35)] transition hover:-translate-y-0.5"
            >
              Request Demo
            </a>
            <a
              href="#outputs"
              className="rounded-full border border-[color:var(--accent-soft)] bg-white/70 px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-[color:var(--accent-strong)]"
            >
              View Sample Output
            </a>
          </div>
          <ul className="glass-card mt-9 grid gap-2 rounded-2xl p-3 md:grid-cols-5">
            {pipeline.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[color:var(--accent-soft)] bg-[color:var(--pearl)] p-3 text-center text-sm font-extrabold text-[color:var(--accent-strong)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="pt-8" delay={0.05}>
          <SectionHeading
            eyebrow="Signal Sources"
            id="sources"
            title="Real product signals, not isolated opinions."
          />
          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="sources">
            {sourceCards.map((card) => (
              <article key={card.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="prose-muted mt-2">{card.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.06}>
          <SectionHeading
            eyebrow="AI-Powered"
            id="ai"
            title="Intelligence that transforms product decisions."
          />
          <section className="grid gap-4 md:grid-cols-2" aria-labelledby="ai">
            {aiCapabilities.map((capability) => (
              <article key={capability.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-lg font-bold">{capability.title}</h3>
                <p className="prose-muted mt-2">{capability.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.07}>
          <SectionHeading eyebrow="See It In Action" id="demos" title="Watch Prodigy in action." />
          <section aria-labelledby="demos">
            {/* Tab Navigation */}
            <div className="mb-6 flex flex-wrap gap-2">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeDemo === tab.id
                      ? 'bg-[color:var(--accent-strong)] text-white shadow-[0_16px_30px_rgba(35,70,81,0.35)]'
                      : 'border border-[color:var(--accent-soft)] bg-white/70 text-ink hover:border-[color:var(--accent-strong)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Demo Content Area */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg font-medium text-ink">
                {demoTabs.find((t) => t.id === activeDemo)?.description}
              </p>

              {/* Screen Recording Video */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f4eee7] to-[#e6ded4]">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/demo/prodigy-demo.mov" type="video/quicktime" />
                  <p className="p-4 text-center text-sm text-muted">
                    Your browser does not support the video format. Please try a different browser.
                  </p>
                </video>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.08}>
          <SectionHeading
            eyebrow="How Prodigy Thinks"
            id="how"
            title="A decision flow teams can trust."
          />
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-labelledby="how">
            {flowSteps.map((step) => (
              <article
                key={step.step}
                className="glass-card rounded-2xl bg-gradient-to-br from-[color:var(--pearl)] to-white p-5"
              >
                <p className="text-sm font-extrabold tracking-[0.08em] text-[color:var(--accent-strong)]">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 font-semibold text-[#3b444d]">{step.question}</p>
                <p className="prose-muted mt-2">{step.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.1}>
          <SectionHeading
            eyebrow="Output Showcase"
            id="outputs"
            title="What your team actually receives."
          />
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-labelledby="outputs">
            {outputCards.map((card) => (
              <article key={card.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="prose-muted mt-2">{card.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.14}>
          <SectionHeading
            eyebrow="Why Prodigy"
            id="why"
            title="Built for product decisions, not generic data views."
          />
          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="why">
            {comparisonCards.map((card) => (
              <article key={card.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="prose-muted mt-2">{card.current}</p>
                <p className="mt-2 font-bold">{card.contrast}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.16}>
          <SectionHeading
            eyebrow="Method Transparency"
            id="method"
            title="Prioritization logic your team can inspect."
          />
          <section
            className="glass-card rounded-[1.5rem] border border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--pearl)] to-white p-6"
            aria-labelledby="method"
          >
            <p className="text-[#44515c]">
              Ranking combines <strong>frequency</strong>, <strong>impact</strong>,{' '}
              <strong>urgency</strong>, and
              <strong> confidence</strong> from both feedback and behavioral analytics signals.
            </p>
            <p className="mt-3 text-[#44515c]">
              Every insight includes source traceability and decision rationale so PM, design, and
              engineering stay aligned.
            </p>
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.18}>
          <section
            id="cta"
            className="glass-card rounded-[1.5rem] border border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--pearl)] to-white px-6 py-12 text-center"
            aria-labelledby="cta-title"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              Get Started
            </p>
            <h2 id="cta-title" className="font-display text-3xl md:text-5xl">
              Bring clarity to what to build next.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#44515c]">
              Replace reactive roadmap debates with ranked opportunities and implementation-ready
              specs.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full bg-[color:var(--accent-strong)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_16px_30px_rgba(35,70,81,0.35)] transition hover:-translate-y-0.5"
              >
                Book Demo
              </a>
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full border border-[color:var(--accent-soft)] bg-white/70 px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-[color:var(--accent-strong)]"
              >
                Join Waitlist
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.2}>
          <SectionHeading eyebrow="FAQ" id="faq" title="Common questions" />
          <section className="grid gap-3" aria-labelledby="faq">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="glass-card rounded-2xl border border-[color:var(--accent-soft)] p-5"
              >
                <h3 className="text-base font-bold">{item.question}</h3>
                <p className="prose-muted mt-1">{item.answer}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <footer className="flex flex-wrap justify-between gap-3 py-16 text-sm font-medium text-[#596068]">
          <p>Prodigy</p>
          <p>
            Turning customer feedback and usage analytics into implementation-ready product
            direction.
          </p>
        </footer>
      </div>
    </main>
  );
}
