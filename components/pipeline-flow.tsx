'use client';

import React from 'react';
import { PageSection } from '@/components/page-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { pipelineFlowSteps } from '@/lib/site-content';

export function PipelineFlow() {
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
            From raw signals to merged code
          </h2>
          <p className="prose-muted mt-3 max-w-xl text-base leading-relaxed md:text-[1.05rem]">
            One continuous flow—hover a stage to see what Prodigy delivers.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-[2.1rem] hidden h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/18 to-transparent md:block"
            aria-hidden
          />
          <div className="relative hidden items-center md:flex md:flex-nowrap md:gap-0">
            {pipelineFlowSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="group relative z-[1] flex min-w-0 flex-1 flex-col items-center">
                  <div className="relative w-full max-w-[10rem]">
                    <div
                      className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3.5 text-center shadow-[var(--shadow-soft)] transition-[border-color,box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:border-[color:var(--accent-soft)] group-hover:shadow-[0_16px_44px_rgba(13,148,136,0.14)] group-focus-within:border-[color:var(--accent-soft)]"
                      tabIndex={0}
                    >
                      <span className="text-sm font-bold tracking-wide text-[color:var(--ink)]">
                        {step.label}
                      </span>
                    </div>
                    <p className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-[min(12rem,calc(100vw-3rem))] -translate-x-1/2 text-center text-[0.75rem] leading-snug text-[color:var(--muted-strong)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < pipelineFlowSteps.length - 1 ? (
                  <div
                    className="relative z-[1] flex min-w-[1.75rem] flex-1 items-center self-center px-0.5"
                    aria-hidden
                  >
                    <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[color:var(--line)]/90">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[color:var(--accent-deep)]/12 via-[color:var(--accent-deep)]/35 to-[color:var(--accent-deep)]/12" />
                    </div>
                    <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 text-[0.68rem] text-[color:var(--dim)]">
                      →
                    </span>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {pipelineFlowSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm font-bold text-[color:var(--ink)]">{step.label}</p>
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
