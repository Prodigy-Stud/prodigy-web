'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FloatingPills } from '@/components/floating-pills';
import { HeroThree } from '@/components/three/hero-three';
import { usePointerParallax } from '@/components/use-pointer-parallax';
import { hero } from '@/lib/site-content';

const storyContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 }
  }
};

const storyItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 }
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based parallax for ambient layers (existing).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 52]);
  const gridShift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 36]);
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -24]);

  // Pointer-based parallax — single source of truth shared with floating pills.
  // Hero text moves a tiny amount (slower than background) so it feels "in front".
  const pointer = usePointerParallax(sectionRef);
  const textX = useTransform(pointer.x, (v) => (reduceMotion ? 0 : v * 6));
  const textY = useTransform(pointer.y, (v) => (reduceMotion ? 0 : v * 4));

  const t = {
    stagger: reduceMotion ? 0 : 0.09,
    duration: reduceMotion ? 0 : 0.6
  };

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] w-[min(1120px,92vw)] flex-col overflow-hidden pb-20 pt-8 md:min-h-[min(92svh,880px)] md:pb-28 md:pt-12"
      aria-labelledby="hero-heading"
    >
      {/* Ambient layers — independent z-stack behind everything */}
      <motion.div
        className="hero-noise pointer-events-none absolute inset-0 z-0"
        style={{ y: bgShift }}
        aria-hidden
      />
      <motion.div
        className="hero-ambient hero-grid-live pointer-events-none absolute inset-0 z-0"
        style={{ y: gridShift }}
        aria-hidden
      />
      <motion.div
        className="hero-glow pointer-events-none absolute inset-0 z-0"
        style={{ y: glowShift }}
        aria-hidden
      />
      <HeroThree reducedMotion={reduceMotion} />
      <FloatingPills pointer={pointer} reducedMotion={reduceMotion} />

      <div className="relative z-[1] flex flex-1 flex-col">
        {/*
          Apply pointer parallax ONLY to the text container.
          The video below remains anchored — keeps it stable & readable.
        */}
        <motion.div
          className="relative mx-auto max-w-[40rem] flex-1 lg:max-w-[44rem]"
          style={{ x: textX, y: textY }}
        >
          <motion.p
            className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[color:var(--accent-deep)]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t.duration, ease: 'easeOut' }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-display text-[2.85rem] font-medium leading-[1.03] tracking-[-0.035em] md:text-[3.5rem] lg:text-[4.25rem]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t.duration, delay: t.stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="headline-live block">
              {hero.headlineLines[0]}
              <br />
              {hero.headlineLines[1]}
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-[color:var(--muted-strong)] md:mt-9 md:text-[1.15rem] md:leading-[1.65]"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t.duration, delay: t.stagger * 2, ease: [0.42, 0, 0.2, 1] }}
          >
            {hero.subhead}
          </motion.p>

          <motion.ul
            className="mt-9 max-w-2xl space-y-3 border-l-2 border-[color:var(--accent-deep)]/35 py-1 pl-5 md:mt-11 md:pl-6"
            variants={storyContainer}
            initial="hidden"
            animate="show"
          >
            {hero.storyLines.map((line) => (
              <motion.li
                key={line}
                variants={storyItem}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.2, 1] }}
                className="text-[0.98rem] leading-snug text-[color:var(--muted-strong)] md:text-[1.02rem]"
              >
                {line}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center md:mt-12"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: t.duration, delay: t.stagger * 3.2, ease: [0.42, 0, 0.2, 1] }}
          >
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.28)] transition-shadow hover:shadow-[0_14px_48px_rgba(37,99,235,0.4)]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 480, damping: 28 }}
              >
                Get Early Access
              </motion.a>
              <motion.a
                href="#outputs"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-7 py-3.5 text-sm font-bold text-[color:var(--ink)] shadow-[var(--shadow-soft)] backdrop-blur-sm transition-shadow hover:shadow-[var(--shadow)]"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 480, damping: 28 }}
              >
                See outputs
              </motion.a>
            </div>
            <motion.a href="#how" className="text-link-arrow text-sm" whileHover={{ x: 3 }}>
              <span>How Prodigy works</span>
              <span aria-hidden className="text-[color:var(--accent-deep)]">
                →
              </span>
            </motion.a>
          </motion.div>

          <p className="mt-12 text-center text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--dim)] md:mt-14 md:text-left">
            Scroll to explore the pipeline
          </p>
        </motion.div>

        <motion.div
          id="product-demo"
          className="relative z-[1] mt-16 w-full scroll-mt-28 md:mt-24"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: t.duration, delay: t.stagger * 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end">
            <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--dim)] sm:text-left">
              Product walkthrough
            </p>
          </div>
          <motion.div
            className="video-frame overflow-hidden p-1.5 sm:p-2"
            whileHover={reduceMotion ? undefined : { scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[0.7rem] bg-gradient-to-br from-[#eef4ff] via-[#f9f7f4] to-[#f2ebe2]">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Prodigy product walkthrough"
              >
                <source src="/demo/prodigy-demo.mov" type="video/quicktime" />
                <p className="flex h-full items-center justify-center p-6 text-center text-sm text-[color:var(--muted)]">
                  Your browser does not support this video format. Try Safari or Chrome, or contact
                  us for a file.
                </p>
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
