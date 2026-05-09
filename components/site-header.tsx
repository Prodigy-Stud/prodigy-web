'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { mainNavLinks } from '@/lib/site-content';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function navActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b py-4 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? 'border-[color:var(--line)] bg-[color:var(--bg)]/95 shadow-[0_4px_24px_rgba(15,23,42,0.04)] backdrop-blur-md supports-[backdrop-filter]:bg-[color:var(--bg)]/88'
          : 'border-transparent bg-[color:var(--bg)]/80 backdrop-blur-sm supports-[backdrop-filter]:bg-[color:var(--bg)]/70'
      }`}
    >
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight transition-opacity hover:opacity-85 md:text-2xl"
        >
          <span className="text-brand-prodigy">Prodigy</span>
        </Link>
        <nav
          className="no-scrollbar ml-auto mr-1 flex max-w-[min(520px,70vw)] flex-1 items-center justify-end gap-1 overflow-x-auto lg:mx-0 lg:max-w-none lg:justify-center"
          aria-label="Primary navigation"
        >
          {mainNavLinks.map((link) => {
            const active = navActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative shrink-0 rounded-full px-3 py-2 text-sm font-semibold transition-colors md:px-3.5 ${
                  active
                    ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent-deep)] ring-1 ring-[color:var(--accent)]/15'
                    : 'text-[color:var(--muted)] hover:bg-[color:var(--bg-deep)] hover:text-[color:var(--ink)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-[color:var(--accent-deep)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(13,148,136,0.28)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(13,148,136,0.34)]"
        >
          Get Early Access
        </Link>
      </div>
    </header>
  );
}
