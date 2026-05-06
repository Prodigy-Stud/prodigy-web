'use client';

import React, { useMemo, useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { PipelineThree } from '@/components/three/pipeline-three';
import { pipelineFlowSteps } from '@/lib/site-content';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 420, damping: 34 }
  }
};

const connectorVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.42, 0, 0.2, 1] }
  }
};

export function PipelineFlow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.28, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const active = reduceMotion ? true : inView;

  const desktopRows = useMemo(() => {
    const nodes: React.ReactNode[] = [];
    pipelineFlowSteps.forEach((step, i) => {
      nodes.push(
        <motion.div
          key={step.id}
          variants={stepVariant}
          className="group relative flex min-w-0 flex-1 flex-col items-center"
        >
          <div className="relative w-full max-w-[10rem]">
            {/*
              Card surface — opaque so it sits cleanly on top of the
              flowing-particle layer below. Hover lifts + adds blue glow.
            */}
            <div
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3.5 text-center shadow-[var(--shadow-soft)] transition-[border-color,box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-[color:var(--accent-soft)] group-hover:shadow-[0_18px_48px_rgba(37,99,235,0.18)] group-focus-within:border-[color:var(--accent-soft)]"
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
        </motion.div>
      );

      if (i < pipelineFlowSteps.length - 1) {
        nodes.push(
          <motion.div
            key={`conn-${step.id}`}
            variants={connectorVariant}
            style={{ transformOrigin: 'left center' }}
            className="relative flex min-w-[1.75rem] flex-1 items-center self-center px-0.5"
            aria-hidden
          >
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[color:var(--line)]/80">
              <div className="h-full w-full origin-left rounded-full bg-gradient-to-r from-transparent via-[color:var(--accent-deep)]/30 to-transparent" />
            </div>
            <span className="absolute -right-0.5 top-1/2 -translate-y-1/2 text-[0.68rem] text-[color:var(--dim)]">
              →
            </span>
          </motion.div>
        );
      }
    });
    return nodes;
  }, []);

  return (
    <section
      id="pipeline"
      ref={ref}
      className="relative scroll-mt-28 border-y border-[color:var(--line)]/60 bg-gradient-to-b from-[color:var(--bg)]/80 via-[color:var(--surface)]/25 to-[color:var(--bg)]/80 py-20 md:py-28"
      aria-labelledby="pipeline-heading"
    >
      <div className="mx-auto max-w-[1120px] px-[4vw]">
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

        {/* Desktop row: WebGL flow particles behind, cards on top */}
        <div className="relative">
          <PipelineThree reducedMotion={reduceMotion} />
          <motion.div
            className="relative z-[1] hidden items-center md:flex md:flex-nowrap md:gap-0"
            variants={container}
            initial="hidden"
            animate={active ? 'show' : 'hidden'}
          >
            {desktopRows}
          </motion.div>
        </div>

        {/* Mobile stacked list */}
        <motion.div
          className="flex flex-col gap-3 md:hidden"
          variants={container}
          initial="hidden"
          animate={active ? 'show' : 'hidden'}
        >
          {pipelineFlowSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={stepVariant}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-4 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm font-bold text-[color:var(--ink)]">{step.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
