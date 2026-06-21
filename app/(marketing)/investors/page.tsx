import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';
import { Card } from '@/components/ui/primitives';
import { earlyAccessFormUrl, outcomeMetrics, problemStats } from '@/lib/site-content';

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Prodigy is an AI FTE for product and engineering teams—lives in Slack, owns work end to end with convertible PM and engineering roles.'
};

const valuePoints = [
  {
    title: 'AI FTE, not another tool',
    body: 'Prodigy lives in Slack and acts as PM, Senior Engineer, or Junior Engineer—owning work with accountability, not just generating drafts.'
  },
  {
    title: 'Convertible roles',
    body: 'Teams assign Prodigy a role for the day. When a senior is out or a PM is absent, Prodigy fills the gap and keeps the sprint moving.'
  },
  {
    title: 'Governed end-to-end execution',
    body: 'Shared board, smart delegation, approval gates, and overnight runs—from decision through merged pull requests.'
  }
] as const;

const roadmap = [
  {
    quarter: 'Now',
    focus: 'Slack-native agent, convertible roles, shared board, overnight execution'
  },
  { quarter: 'Next', focus: 'Microsoft Teams and Discord, deeper governance, enterprise rollout' },
  {
    quarter: 'Later',
    focus: 'Multi-team orchestration, portfolio-level visibility, expanded agent runtimes'
  }
] as const;

export default function InvestorsPage() {
  return (
    <main>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Investor brief
        </p>
        <h1 className="page-intro-title max-w-[50rem] font-display text-[clamp(2rem,4.6vw,3.5rem)] font-medium text-[color:var(--ink)]">
          The world&apos;s first AI teammate organizations can trust with real ownership.
        </h1>
        <p className="prose-muted mt-6 max-w-3xl text-lg leading-relaxed">
          Prodigy is an AI FTE for product and engineering teams. It lives inside Slack (Teams and
          Discord on the roadmap), dynamically takes on PM or engineering roles, and owns work end
          to end—from context and delegation through coded pull requests and overnight execution.
        </p>
      </PageSection>

      <PageSection variant="muted">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-deep)]">
              Problem
            </p>
            <p className="mt-3 text-[color:var(--muted-strong)]">
              Critical context is trapped across Slack threads, docs, tickets, and memory. Teams
              lose speed from context-switching and unclear ownership. Existing AI tools generate
              outputs but rarely produce accountable execution—leading to slower delivery and missed
              opportunities.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-deep)]">
              Market signal
            </p>
            <div className="mt-3 space-y-4">
              {problemStats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-2xl font-semibold text-[color:var(--ink)]">{stat.value}</p>
                  <p className="text-sm text-[color:var(--muted-strong)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection variant="default">
        <h2 className="font-display text-2xl font-medium text-[color:var(--ink)]">
          What Prodigy delivers
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {valuePoints.map((point) => (
            <Card key={point.title} className="p-5">
              <h3 className="text-sm font-bold text-[color:var(--ink)]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                {point.body}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection variant="muted">
        <h2 className="font-display text-2xl font-medium text-[color:var(--ink)]">
          Early traction
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {outcomeMetrics.map((metric) => (
            <Card key={metric.label} className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-deep)]">
                {metric.label}
              </p>
              <p className="mt-2 text-3xl font-semibold text-[color:var(--ink)]">{metric.value}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{metric.trend}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection variant="default">
        <h2 className="font-display text-2xl font-medium text-[color:var(--ink)]">Roadmap</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {roadmap.map((item) => (
            <Card key={item.quarter} className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-deep)]">
                {item.quarter}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                {item.focus}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={earlyAccessFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--accent-deep)] px-6 py-3 text-sm font-bold text-white"
          >
            Request investor demo
          </Link>
          <Link
            href="/product"
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
          >
            View product
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
