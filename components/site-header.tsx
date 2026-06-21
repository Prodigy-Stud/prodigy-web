'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { earlyAccessFormUrl } from '@/lib/site-content';

const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' }
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function navActive(href: string) {
    if (href.includes('#')) {
      return false;
    }
    const root = href.split('#')[0];
    return pathname === root || (root !== '/' && pathname.startsWith(`${root}/`));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[#101720]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[min(1440px,100%)] items-center justify-between gap-4 px-5 md:h-24 md:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-[-0.05em] text-[color:var(--cream)]"
        >
          Prodigy
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = navActive(link.href);
            return (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={
                  active
                    ? 'text-[color:var(--accent)]'
                    : 'text-[color:var(--muted)] transition hover:text-[color:var(--cream)]'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={earlyAccessFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[color:var(--line)] bg-transparent px-6 py-2.5 text-sm font-extrabold text-[color:var(--cream)] transition hover:border-[color:var(--accent)]/35"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-extrabold text-[color:var(--cream)] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${mobileOpen ? 'grid' : 'hidden'} border-t border-[color:var(--line)] bg-[#101720] p-4 md:hidden`}
        aria-label="Mobile primary"
      >
        {navLinks.map((link) => (
          <Link
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="rounded-xl px-3 py-3 text-sm font-bold text-[color:var(--muted)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={earlyAccessFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 rounded-full border border-[color:var(--line)] px-5 py-3 text-center text-sm font-extrabold text-[color:var(--cream)]"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
