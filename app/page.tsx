'use client';

import { useState } from 'react';
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
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5d453e]">{eyebrow}</p>
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
        <a href="#top" className="font-display text-2xl tracking-wide">
          Prodigy
        </a>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(217,77,43,0.35)] transition hover:-translate-y-0.5"
        >
          Get Early Access
        </a>
      </header>

      <div id="top" className="mx-auto w-[min(1120px,92vw)] pb-16">
        <Reveal className="py-10 md:py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5d453e]">
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
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(217,77,43,0.35)] transition hover:-translate-y-0.5"
            >
              Request Demo
            </a>
            <a
              href="#outputs"
              className="rounded-full border border-[var(--line)] bg-white/60 px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
            >
              View Sample Output
            </a>
          </div>
          <ul className="surface-card mt-9 grid gap-2 rounded-2xl p-3 md:grid-cols-5">
            {pipeline.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[#d94d2b2e] bg-gradient-to-br from-white to-[#fbf0eb] p-3 text-center text-sm font-extrabold"
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
              <article key={card.title} className="surface-card rounded-2xl p-5">
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
              <article key={capability.title} className="surface-card rounded-2xl p-5">
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
                      ? 'bg-accent text-white shadow-[0_10px_24px_rgba(217,77,43,0.35)]'
                      : 'border border-[var(--line)] bg-white/60 text-ink hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Demo Content Area */}
            <div className="surface-card rounded-2xl p-6">
              <p className="text-lg font-medium text-ink">
                {demoTabs.find((t) => t.id === activeDemo)?.description}
              </p>

              {/* Placeholder for Screen Recording */}
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#f5f0eb] to-[#e8e2dc] flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <svg
                      className="h-8 w-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-muted">Screen Recording Coming Soon</p>
                  <p className="mt-1 text-xs text-muted/70">
                    Demo for {demoTabs.find((t) => t.id === activeDemo)?.label}
                  </p>
                </div>
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
                className="surface-card rounded-2xl bg-gradient-to-br from-white to-[#fff1eb] p-5"
              >
                <p className="text-sm font-extrabold tracking-[0.08em] text-accent">{step.step}</p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1 font-semibold text-[#393d44]">{step.question}</p>
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
              <article key={card.title} className="surface-card rounded-2xl p-5">
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
              <article key={card.title} className="surface-card rounded-2xl p-5">
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
            className="surface-card rounded-[1.5rem] border border-[var(--line)] bg-gradient-to-b from-white to-[#feece2] p-6"
            aria-labelledby="method"
          >
            <p className="text-[#4a4f57]">
              Ranking combines <strong>frequency</strong>, <strong>impact</strong>,{' '}
              <strong>urgency</strong>, and
              <strong> confidence</strong> from both feedback and behavioral analytics signals.
            </p>
            <p className="mt-3 text-[#4a4f57]">
              Every insight includes source traceability and decision rationale so PM, design, and
              engineering stay aligned.
            </p>
          </section>
        </Reveal>

        <Reveal className="pt-20" delay={0.18}>
          <section
            id="cta"
            className="surface-card rounded-[1.5rem] border border-[#d94d2b40] bg-gradient-to-b from-white to-[#ffe7da] px-6 py-12 text-center"
            aria-labelledby="cta-title"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#5d453e]">
              Get Started
            </p>
            <h2 id="cta-title" className="font-display text-3xl md:text-5xl">
              Bring clarity to what to build next.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#4a5058]">
              Replace reactive roadmap debates with ranked opportunities and implementation-ready
              specs.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(217,77,43,0.35)] transition hover:-translate-y-0.5"
              >
                Book Demo
              </a>
              <a
                href="mailto:hello@prodigy.ai"
                className="rounded-full border border-[var(--line)] bg-white/60 px-5 py-2.5 text-sm font-bold text-ink transition hover:-translate-y-0.5"
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
                className="rounded-2xl border border-[var(--line)] bg-white/75 p-5"
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
