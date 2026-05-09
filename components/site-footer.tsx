import Link from 'next/link';
import React from 'react';
import { mainNavLinks } from '@/lib/site-content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line-subtle)] bg-[color:var(--section-muted)]">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between md:py-16">
        <div>
          <p className="font-display text-base font-medium">
            <Link href="/" className="text-brand-prodigy">
              Prodigy
            </Link>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--dim)]">
            From feedback and analytics signals to ranked opportunities, specs, and code-ready
            handoffs.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Footer">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
