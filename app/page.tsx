'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/reveal';
import {
  aiCapabilities,
  comparisonCards,
  demoTabs,
  faqs,
  flowSteps,
  impactCards,
  integrations,
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
      <header className="sticky top-0 z-30 mx-auto mt-4 flex w-[min(1120px,92vw)] items-center justify-between gap-4 rounded-2xl border border-[color:var(--line)] bg-[rgba(11,17,29,0.72)] px-4 py-4 backdrop-blur">
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
          className="rounded-full bg-[color:var(--accent-strong)] px-4 py-2 text-sm font-bold text-[#0b1120] shadow-[0_16px_30px_rgba(6,12,24,0.45)] transition hover:-translate-y-0.5"
        >
          Get Early Access
        </a>
      </header>

      <div id="top" className="mx-auto w-[min(1120px,92vw)] pb-16">
        <Reveal className="py-10 md:py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
            Autonomous Product Execution
          </p>
          <h1 className="max-w-xl font-display text-4xl leading-tight md:text-7xl">
            Turn customer feedback into shipped code automatically.
          </h1>
          <p className="prose-muted mt-5 max-w-3xl text-base md:text-lg">
            Prodigy unifies feedback and analytics, prioritizes opportunities, generates structured
            tickets, dispatches coding agents, and delivers PR-ready implementation outputs with
            human oversight.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-full bg-[color:var(--accent-strong)] px-5 py-2.5 text-sm font-bold text-[#0b1120] shadow-[0_16px_30px_rgba(6,12,24,0.45)] transition hover:-translate-y-0.5"
            >
              Book Live Workflow Demo
            </a>
            <a
              href="#ops"
              className="rounded-full border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.75)] px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-[color:var(--accent-strong)]"
            >
              See Live Ops View
            </a>
          </div>
          <ul className="glass-card mt-9 grid gap-2 rounded-2xl p-3 md:grid-cols-3">
            {pipeline.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[color:var(--accent-soft)] bg-[color:var(--pearl)] p-3 text-center text-sm font-extrabold text-[color:var(--accent-strong)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="glass-card mt-6 rounded-2xl p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
              Product Demo Strip
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              Ingestion -&gt; Prioritization -&gt; Tickets -&gt; Agent Execution -&gt; PR
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted">
              <span className="rounded-full border border-[color:var(--line)] bg-[rgba(17,28,45,0.85)] px-3 py-1">
                Feedback + Usage
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-[rgba(17,28,45,0.85)] px-3 py-1">
                Opportunity Scoring
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-[rgba(17,28,45,0.85)] px-3 py-1">
                Jira-Style Drafts
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-[rgba(17,28,45,0.85)] px-3 py-1">
                Agent Dispatch
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-[rgba(17,28,45,0.85)] px-3 py-1">
                Git + PR Automation
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="pt-8" delay={0.05}>
          <SectionHeading
            eyebrow="Ingestion Layer"
            id="features"
            title="Real product signals, not isolated opinions."
          />
          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="features">
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
            eyebrow="Operations Layer"
            id="ops"
            title="Live operator visibility while autonomous work runs."
          />
          <section className="grid gap-4 md:grid-cols-2" aria-labelledby="ops">
            {aiCapabilities.map((capability) => (
              <article key={capability.title} className="glass-card rounded-2xl p-5">
                <h3 className="text-lg font-bold">{capability.title}</h3>
                <p className="prose-muted mt-2">{capability.body}</p>
              </article>
            ))}
          </section>
          <div className="glass-card mt-5 rounded-2xl p-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
              Live Timeline Preview
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.85)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7d2f6f]">
                  Attention
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Payment retries failing after checkout update
                </p>
                <p className="prose-muted mt-2 text-sm">Opened - Agent Running - PR Drafted</p>
              </div>
              <div className="rounded-xl border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.85)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#1f5c9a]">
                  Quick Win
                </p>
                <p className="mt-1 text-sm font-semibold">Improve onboarding tooltip clarity</p>
                <p className="prose-muted mt-2 text-sm">Opened - Implemented - Ready for Review</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="pt-20" delay={0.07}>
          <SectionHeading
            eyebrow="Execution Bridge"
            id="demos"
            title="Dispatch work and track progress."
          />
          <section aria-labelledby="demos">
            {/* Tab Navigation */}
            <div className="mb-6 flex flex-wrap gap-2">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeDemo === tab.id
                      ? 'bg-[color:var(--accent-strong)] text-[#0b1120] shadow-[0_16px_30px_rgba(6,12,24,0.45)]'
                      : 'border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.75)] text-ink hover:border-[color:var(--accent-strong)]'
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
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#131d30] to-[#192741]">
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
            eyebrow="How It Works"
            id="how"
            title="From signals to merged pull request in three steps."
          />
          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="how">
            {flowSteps.map((step) => (
              <article
                key={step.step}
                className="glass-card rounded-2xl bg-gradient-to-br from-[color:var(--pearl)] to-white p-5"
              >
                <p className="text-sm font-extrabold tracking-[0.08em] text-[color:var(--accent-strong)]">
                  {step.step}
                </p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 font-semibold text-[#c3d1e8]">{step.question}</p>
                <p className="prose-muted mt-2">{step.body}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.1}>
          <SectionHeading
            eyebrow="Core Feature Set"
            id="outputs"
            title="Everything needed to move from insight to implementation."
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
            eyebrow="Automation + Safety"
            id="safety"
            title="Governance controls that make automation production-safe."
          />
          <section className="grid gap-4 md:grid-cols-3" aria-labelledby="safety">
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
            eyebrow="Integrations"
            id="integrations"
            title="Pluggable orchestration layer for your stack."
          />
          <section className="glass-card rounded-[1.5rem] border border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--pearl)] to-white p-6">
            <div className="grid gap-3 md:grid-cols-5">
              {integrations.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.9)] px-4 py-3 text-center text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.17}>
          <SectionHeading
            eyebrow="Business Impact"
            id="impact"
            title="Built for teams shipping every week."
          />
          <section className="grid gap-4 md:grid-cols-2">
            {impactCards.map((card) => (
              <article key={card.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <ul className="mt-3 grid gap-2">
                  {card.points.map((point) => (
                    <li key={point} className="prose-muted text-sm">
                      - {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.18}>
          <section
            id="cta"
            className="glass-card rounded-[1.5rem] border border-[color:var(--accent-soft)] bg-gradient-to-b from-[color:var(--pearl)] to-white px-6 py-12 text-center"
            aria-labelledby="cta-title"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
              Built for Teams Shipping Weekly
            </p>
            <h2 id="cta-title" className="font-display text-3xl md:text-5xl">
              Move from product signal to merged PR faster.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Reduce triage toil, accelerate execution, and keep engineers in a trusted approval
              loop.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full bg-[color:var(--accent-strong)] px-5 py-2.5 text-sm font-bold text-[#0b1120] shadow-[0_16px_30px_rgba(6,12,24,0.45)] transition hover:-translate-y-0.5"
              >
                Book a Live Workflow Demo
              </a>
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full border border-[color:var(--accent-soft)] bg-[rgba(16,26,42,0.75)] px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-[color:var(--accent-strong)]"
              >
                Get Early Access
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

        <footer className="glass-card mx-auto mt-20 mb-8 w-[min(1120px,92vw)] rounded-2xl p-8 text-center text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-display text-xl font-bold mb-2">Prodigy</h3>
              <p>Signal to Ship Orchestration</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p>hello@prodigy.ai</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Address</h4>
              <p>502, Om Residency</p>
              <p>Sama-Savli Road</p>
              <p>Vadodara, 390008</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Domain</h4>
              <p>
                <a href="." className="hover:text-[color:var(--accent-strong)]">
                  prodigy-stud.github.io/prodigy-web/
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-[color:var(--accent-soft)] mt-6 pt-6">
            <p>&copy; 2024 Prodigy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
