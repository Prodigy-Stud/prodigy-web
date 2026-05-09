'use client';

import Link from 'next/link';
import React from 'react';
import { PageSection } from '@/components/page-section';
import { hero } from '@/lib/site-content';

export function HeroSection() {
  return (
    <>
      {/* Tagline-first fold — clear focal point like Auctor hero */}
      <section
        className="relative mx-auto flex min-h-[min(78svh,720px)] w-[min(1120px,92vw)] flex-col justify-center overflow-hidden pb-12 pt-10 md:min-h-[min(72svh,680px)] md:pb-16 md:pt-14"
        aria-labelledby="hero-heading"
      >
        <div className="hero-soft-glow" aria-hidden />
        <div className="hero-subtle-grid" aria-hidden />

        <div className="relative z-[1] mx-auto w-full max-w-[44rem] text-center md:text-left">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.038em] md:text-[clamp(2.75rem,4.2vw,4.25rem)]"
          >
            <span className="hero-headline block">
              {hero.headlineLines[0]}
              <br />
              {hero.headlineLines[1]}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[1.06rem] leading-[1.65] text-[color:var(--muted-strong)] md:mt-10 md:mx-0 md:text-[1.14rem]">
            {hero.subhead}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-start md:mt-12">
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_36px_rgba(13,148,136,0.28)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(13,148,136,0.34)]"
              >
                Get Early Access
              </Link>
              <Link
                href="/product#outputs"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-8 py-3.5 text-sm font-bold text-[color:var(--ink)] shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
              >
                See outputs
              </Link>
            </div>
            <Link href="/product#how" className="text-link-arrow text-sm">
              <span>How Prodigy works</span>
              <span aria-hidden className="text-[color:var(--accent-deep)]">
                →
              </span>
            </Link>
          </div>

          <p className="mt-14 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[color:var(--dim)] md:mt-16">
            Scroll for walkthrough &amp; pipeline
          </p>
        </div>
      </section>

      {/* Second band: proof points + demo — separated like Auctor section breaks */}
      <PageSection variant="muted" pad="md" className="scroll-mt-24">
        <div id="product-demo" className="mx-auto max-w-[min(920px,100%)]">
          <ul className="mx-auto mb-8 max-w-2xl space-y-3 border-l-2 border-[color:var(--accent-deep)]/30 py-1 pl-5 text-left md:mb-10 md:pl-6">
            {hero.realityLines.map((line) => (
              <li
                key={line}
                className="text-[0.98rem] leading-snug text-[color:var(--muted-strong)] md:text-[1.02rem]"
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mx-auto mb-10 max-w-2xl space-y-4 text-left text-[0.98rem] leading-relaxed text-[color:var(--muted-strong)] md:mb-12 md:text-[1.02rem]">
            <p>{hero.missionQuestion}</p>
            <p className="font-medium text-[color:var(--ink)]">{hero.missionClosing}</p>
          </div>
          <p className="mb-4 text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--dim)] md:text-left">
            Product walkthrough
          </p>
          <div className="video-frame overflow-hidden p-1.5 sm:p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-[0.75rem] bg-[color:var(--bg-deep)]">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/demo/prodigy-demo-poster.svg"
                aria-label="Prodigy product walkthrough"
              >
                <source src="/demo/prodigy-demo.mp4" type="video/mp4" />
                <p className="flex h-full items-center justify-center p-6 text-center text-sm text-[color:var(--muted)]">
                  Your browser does not support this video format. Try Safari or Chrome, or contact
                  us for a file.
                </p>
              </video>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
