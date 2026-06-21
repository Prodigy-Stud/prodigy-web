import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { earlyAccessFormUrl } from '@/lib/site-content';

const roles = ['Product Manager', 'Senior SDE', 'Junior SDE', 'QA Engineer', 'SDET'] as const;

export function HeroSection() {
  return (
    <section className="site-container grid min-h-[calc(100svh-var(--header-h))] max-h-[calc(100svh-var(--header-h))] items-center gap-6 py-6 lg:grid-cols-[0.68fr_1.32fr] lg:gap-8 lg:py-8">
      <div className="max-w-xl">
        <span className="inline-flex items-center rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[color:var(--accent-bright)]">
          Engineering
        </span>

        <h1 className="mt-4 max-w-lg font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[0.92] tracking-[-0.075em] text-[color:var(--cream)]">
          AI Workforce for Product and Engineering
        </h1>

        <div className="mt-5">
          <Link
            href={earlyAccessFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[color:var(--cream)] px-6 py-3 text-sm font-extrabold text-[#101820] transition hover:bg-white"
          >
            Request Early Access
          </Link>
        </div>

        <div className="mt-5 flex flex-nowrap items-center gap-2 overflow-x-auto text-[0.68rem] font-extrabold text-[color:var(--cream)] sm:text-xs lg:overflow-visible">
          {roles.map((role) => (
            <span
              key={role}
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[#101720] px-2.5 py-1.5 sm:px-3 sm:py-2"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center lg:translate-x-8 lg:justify-end xl:translate-x-12">
        <div className="relative w-full max-w-[1100px] overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[#07101a] shadow-[var(--shadow)]">
          <Image
            src="/product/box-right.png"
            alt="Prodigy robot hugging the product box"
            width={1400}
            height={1180}
            priority
            className="h-auto w-full object-cover object-right lg:scale-[1.08] lg:origin-right"
          />
        </div>
      </div>
    </section>
  );
}
