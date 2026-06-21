import Link from 'next/link';
import React from 'react';
import { IntegrationsGrid } from '@/components/integrations-grid';
import { earlyAccessFormUrl } from '@/lib/site-content';

const problemItems = [
  {
    num: '01',
    label: 'RETENTION',
    title: 'Retention rates are falling.',
    body: 'Best employees leave teams within two years.'
  },
  {
    num: '02',
    label: 'CONTEXT',
    title: 'Critical context is spread out.',
    body: 'Context is scattered across email, threads, documents, and scrum boards.'
  },
  {
    num: '03',
    label: 'CROSS-FUNCTIONAL',
    title: 'Managing a cross-functional team is difficult.',
    body: 'Global companies run global teams — time zones, handoffs, and ownership blur fast.'
  },
  {
    num: '04',
    label: 'CAPACITY',
    title: 'Workload exceeds team capacity.',
    body: 'Teams need additional engineers on demand — not another tool to manage.'
  }
] as const;

const prodigyIntroItems = [
  {
    num: '01',
    label: 'TEAM CHANNELS',
    title: 'Team Channels',
    body: 'Spins up managers, senior engineers, and junior engineers.'
  },
  {
    num: '02',
    label: 'ENTERPRISE AGENT',
    title: 'Private Enterprise Agent',
    body: 'A dedicated helper for every member — intake, context, and handoff in DM.'
  },
  {
    num: '03',
    label: '24/7 EXECUTION',
    title: 'Background work and 24/7 execution',
    body: 'Owns queued work overnight and executes without waiting for the next standup.'
  },
  {
    num: '04',
    label: 'VOICE AGENT',
    title: 'Voice agent',
    body: 'Attends calls, voices concerns in the room, and opens owned work on the portal.'
  }
] as const;

function SectionShell({
  children,
  className = '',
  id
}: React.PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={`site-container my-24 ${className}`}>
      {children}
    </section>
  );
}

function ProblemSection() {
  return (
    <SectionShell className="launch-section px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 border border-[color:var(--accent)]/25 px-4 py-2">
          <span aria-hidden className="text-sm font-bold text-[color:var(--accent)]">
            ×
          </span>
          <p className="mono-label !mb-0">The Problem</p>
        </div>
        <h2 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-[color:var(--cream)]">
          Teams lack the workforce they need
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-5xl border border-[color:var(--line)]">
        <div className="grid md:grid-cols-2">
          {problemItems.map((item, index) => (
            <article
              key={item.num}
              className={`p-8 md:p-10 ${index % 2 === 0 ? 'md:border-r border-[color:var(--line)]' : ''} ${index < 2 ? 'border-b border-[color:var(--line)]' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="mono-label !text-[0.65rem]">{item.label}</p>
                <p className="font-mono text-xs font-bold tracking-wider text-[color:var(--muted)]">
                  {item.num}
                </p>
              </div>
              <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-[-0.03em] text-[color:var(--cream)] md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-[0.95rem]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function IntroducingProdigySection() {
  return (
    <SectionShell className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 border border-[color:var(--accent)]/25 px-4 py-2">
          <span aria-hidden className="text-sm font-bold text-[color:var(--accent)]">
            +
          </span>
          <p className="mono-label !mb-0">Introducing Prodigy</p>
        </div>
        <h2 className="mt-8 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-[color:var(--cream)]">
          Prodigy is AI infrastructure in your team&apos;s workspace
        </h2>
      </div>

      <div className="mx-auto mt-14 max-w-5xl border border-[color:var(--line)]">
        <div className="grid md:grid-cols-2">
          {prodigyIntroItems.map((item, index) => (
            <article
              key={item.num}
              className={`p-8 md:p-10 ${index % 2 === 0 ? 'md:border-r border-[color:var(--line)]' : ''} ${index < 2 ? 'border-b border-[color:var(--line)]' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="mono-label !text-[0.65rem]">{item.label}</p>
                <p className="font-mono text-xs font-bold tracking-wider text-[color:var(--muted)]">
                  {item.num}
                </p>
              </div>
              <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-[-0.03em] text-[color:var(--cream)] md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-[0.95rem]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function IntegrationsSection() {
  return (
    <SectionShell id="integrations" className="launch-section px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mono-label">Integrations</p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-[color:var(--cream)]">
          Lives in your chat. Connects to your stack.
        </h2>
      </div>
      <IntegrationsGrid />
    </SectionShell>
  );
}

function FinalCtaSection() {
  return (
    <SectionShell className="site-container-narrow mb-32">
      <div className="rounded-[1.4rem] border border-[color:var(--line)] bg-[#101720] px-8 py-12 text-center md:py-16">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.06em] text-[color:var(--cream)]">
          We&apos;re the future of work!
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--cream)] px-6 py-3 text-sm font-extrabold text-[#101820] transition hover:bg-white"
          >
            Book a Demo
          </Link>
          <Link
            href={earlyAccessFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-extrabold text-[color:var(--cream)] transition hover:border-[color:var(--accent)]/40"
          >
            Request Early Access
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

export function HomeMarketingRest() {
  return (
    <>
      <ProblemSection />
      <IntroducingProdigySection />
      <IntegrationsSection />
      <FinalCtaSection />
    </>
  );
}
