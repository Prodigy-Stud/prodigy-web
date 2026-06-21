'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PageSection } from '@/components/page-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { pipelineFlowSteps } from '@/lib/site-content';
import { Badge, Card } from '@/components/ui/primitives';

const stageMeta: Record<
  string,
  {
    title: string;
    signal: string;
    output: string;
    metric: string;
    nextAction: string;
  }
> = {
  context: {
    title: 'Hold context across every thread',
    signal: 'Slack threads, docs, tickets, and prior sessions feed one persistent workspace.',
    output: 'No more hunting through channels for the decision that was made last week.',
    metric: 'Thread-native memory',
    nextAction: 'Prodigy ranks what matters and sets priorities.'
  },
  decide: {
    title: 'Prioritize with PM judgment',
    signal:
      'In PM mode, Prodigy analyzes the backlog, surfaces blockers, and recommends next moves.',
    output: 'A ranked plan with clear rationale your team can approve or adjust.',
    metric: 'Evidence-backed decisions',
    nextAction: 'Work is delegated to the right owner.'
  },
  delegate: {
    title: 'Assign by workload and expertise',
    signal:
      'Incoming work routes to humans or Prodigy based on who is available and who can do it best.',
    output: 'Every ticket has an owner, a next action, and visible status on the shared board.',
    metric: 'Smart ownership routing',
    nextAction: 'Assigned work moves to execution.'
  },
  execute: {
    title: 'Code, update, and escalate',
    signal:
      'As Senior or Junior Engineer, Prodigy implements, posts status, and takes over when juniors are blocked.',
    output: 'Live progress in Slack with ticket numbers, blockers, and handoffs.',
    metric: 'Role-appropriate execution',
    nextAction: 'Completed work opens pull requests.'
  },
  ship: {
    title: 'Merge, digest, and run overnight',
    signal: 'PRs land in GitHub. Pending work runs while the team is offline.',
    output: 'Shipped changes, overnight results, and accountable digests when the team returns.',
    metric: 'End-to-end accountability',
    nextAction: 'Team reviews and merges.'
  }
};

export function PipelineFlow() {
  const reduce = useReducedMotion();
  const [activeStage, setActiveStage] = useState<string>(pipelineFlowSteps[0]?.id ?? 'context');
  const active = useMemo(
    () => pipelineFlowSteps.find((step) => step.id === activeStage) ?? pipelineFlowSteps[0],
    [activeStage]
  );
  const meta = active ? stageMeta[active.id] : undefined;

  return (
    <PageSection
      id="pipeline"
      variant="default"
      className="border-b border-[color:var(--line-subtle)]"
    >
      <ScrollReveal>
        <div className="mb-12 md:mb-16">
          <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
            The pipeline
          </p>
          <h2
            id="pipeline-heading"
            className="font-display text-[1.65rem] font-medium leading-[1.12] tracking-[-0.025em] text-[color:var(--ink)] md:text-3xl lg:text-[2rem]"
          >
            From context to accountable delivery
          </h2>
          <p className="prose-muted mt-3 max-w-xl text-base leading-relaxed md:text-[1.05rem]">
            Click each stage to see how Prodigy holds context, delegates, executes, and ships.
          </p>
        </div>

        <div className="relative hidden md:block">
          <div
            className="pointer-events-none absolute left-[4%] right-[4%] top-[2.1rem] hidden h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/18 to-transparent md:block lg:left-[3%] lg:right-[3%]"
            aria-hidden
          />
          <div className="relative items-center md:flex md:flex-nowrap md:justify-center md:gap-x-2 lg:gap-x-4">
            {pipelineFlowSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="relative z-[1] flex w-[8.25rem] shrink-0 flex-col items-center sm:w-[9rem] lg:w-[9.5rem]">
                  <motion.button
                    type="button"
                    onClick={() => setActiveStage(step.id)}
                    className={`w-full rounded-2xl border px-3 py-3.5 text-center shadow-[var(--shadow-soft)] transition-[border-color,box-shadow,transform,background-color,color] duration-300 lg:px-4 ${
                      active?.id === step.id
                        ? 'border-[color:var(--accent)]/35 bg-[color:var(--accent-soft)] text-[color:var(--accent-deep)]'
                        : 'border-[color:var(--line)] bg-[color:var(--surface-elevated)] text-[color:var(--ink)] hover:-translate-y-1 hover:border-[color:var(--accent-soft)] hover:shadow-[0_16px_44px_rgba(13,148,136,0.14)]'
                    }`}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    <span className="text-sm font-bold tracking-wide">{step.label}</span>
                  </motion.button>
                </div>
                {i < pipelineFlowSteps.length - 1 ? (
                  <div
                    className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center sm:w-12 md:w-14 lg:w-20"
                    aria-hidden
                  >
                    <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[color:var(--line)]/90">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[color:var(--accent-deep)]/12 via-[color:var(--accent-deep)]/35 to-[color:var(--accent-deep)]/12" />
                    </div>
                    <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 text-sm font-semibold leading-none text-[color:var(--accent-deep)]">
                      →
                    </span>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {active && meta ? (
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32 }}
            >
              <Card className="mt-8 p-6 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--accent-deep)]">
                      Active stage
                    </p>
                    <h3 className="mt-1 text-2xl font-display font-medium tracking-[-0.02em] text-[color:var(--ink)]">
                      {active.label}: {meta.title}
                    </h3>
                  </div>
                  <Badge variant="accent">{meta.metric}</Badge>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      Signal in
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                      {meta.signal}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      Output
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                      {meta.output}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      Next action
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                      {meta.nextAction}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex flex-col gap-3 md:hidden">
          {pipelineFlowSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold text-[color:var(--ink)]">{step.label}</p>
                {stageMeta[step.id] ? (
                  <Badge variant="neutral">{stageMeta[step.id].metric}</Badge>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </PageSection>
  );
}
