import type { Metadata } from 'next';
import React from 'react';
import { PageSection } from '@/components/page-section';
import { Badge, Button, Card } from '@/components/ui/primitives';

export const metadata: Metadata = {
  title: 'Design System',
  description:
    'Prodigy Infra Luxury design direction: visual principles, palette, motion and component moodboard.'
};

const principles = [
  {
    title: 'Infra clarity first',
    body: 'Every section answers one question: signal in, decision out, code shipped. No decorative ambiguity.'
  },
  {
    title: 'Premium restraint',
    body: 'Strong type, careful spacing, and sparse accent color. Feels expensive without being loud.'
  },
  {
    title: 'Operational confidence',
    body: 'Show states, status, and flow. Visual language should feel like a command center, not a brochure.'
  },
  {
    title: 'Proof over promises',
    body: 'Prefer measured outcomes, architecture views, and process traces to generic marketing claims.'
  }
] as const;

const motionGuidelines = [
  'Use motion to explain flow, not decorate surfaces.',
  'Default transitions: 180–260ms with soft easing.',
  'One dominant animated element per viewport section.',
  'Respect reduced-motion and preserve full readability.'
] as const;

const stackChoices = [
  { name: 'Next.js + Tailwind', reason: 'Fast iteration with strong production defaults.' },
  { name: 'Radix primitives', reason: 'Accessible interactions with clean headless APIs.' },
  { name: 'Framer Motion', reason: 'Narrative transitions for pipeline storytelling.' },
  { name: 'Shared token package', reason: 'Keep web + analytics + app visually aligned.' }
] as const;

export default function DesignPage() {
  return (
    <main>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Design Direction
        </p>
        <h1 className="page-intro-title max-w-[48rem] font-display text-[clamp(1.95rem,4.4vw,3.4rem)] font-medium text-[color:var(--ink)]">
          Infra Luxury: clean, technical, and unmistakably premium
        </h1>
        <p className="prose-muted mt-6 max-w-3xl text-lg leading-relaxed">
          This is the visual contract for investor-facing Prodigy surfaces. We combine
          infrastructure credibility with cinematic polish so the product feels both reliable and
          category-defining.
        </p>
      </PageSection>

      <PageSection variant="muted" pad="md">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
          Core Principles
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-lg font-semibold text-[color:var(--ink)]">{item.title}</h3>
              <p className="prose-muted mt-2 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection variant="default" pad="md">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-7 shadow-[var(--shadow-soft)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
              Visual Tokens
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Token
                label="Base Surface"
                className="bg-[color:var(--surface-strong)] border-[color:var(--line)]"
              />
              <Token
                label="Section Muted"
                className="bg-[color:var(--section-muted)] border-[color:var(--line)]"
              />
              <Token label="Accent" className="bg-[color:var(--accent)] border-transparent" />
              <Token
                label="Accent Deep"
                className="bg-[color:var(--accent-deep)] border-transparent"
              />
              <Token label="Ink" className="bg-[color:var(--ink)] border-transparent" />
              <Token
                label="On Deep"
                className="bg-[color:var(--on-deep)] border-[color:var(--line)]"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-7 shadow-[var(--shadow-soft)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
              Motion Rules
            </h2>
            <ul className="prose-muted mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              {motionGuidelines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection variant="deep" pad="md">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-bright)]">
          Component Moodboard
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Primary CTA
            </p>
            <Button
              variant="primary"
              className="mt-4 bg-[color:var(--accent-bright)] text-[color:var(--section-deep)]"
            >
              Launch Pipeline
            </Button>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Status Badge
            </p>
            <Badge variant="success" className="mt-4">
              Agent Queue Healthy
            </Badge>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Metric Card
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">94%</p>
            <p className="mt-1 text-sm text-slate-300">Spec-to-PR completion</p>
          </div>
        </div>
      </PageSection>

      <PageSection variant="default" pad="md">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)]">
          Implementation Stack
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stackChoices.map((choice) => (
            <Card key={choice.name} className="p-5">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">{choice.name}</h3>
              <p className="prose-muted mt-2 text-sm leading-relaxed">{choice.reason}</p>
            </Card>
          ))}
        </div>
      </PageSection>
    </main>
  );
}

function Token({ label, className }: { label: string; className: string }) {
  return (
    <div>
      <div className={`h-16 w-full rounded-xl border ${className}`} />
      <p className="mt-2 text-xs font-medium text-[color:var(--muted-strong)]">{label}</p>
    </div>
  );
}
