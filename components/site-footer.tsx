import Link from 'next/link';
import React from 'react';

const footerLinks = [
  { href: '/product', label: 'Product' },
  { href: '/product#security', label: 'Security' },
  { href: '/contact', label: 'Contact' }
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[#101820]">
      <div className="site-container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-extrabold tracking-[-0.05em] text-[color:var(--cream)]"
          >
            Prodigy
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--muted-strong)]">
            AI workforce infrastructure for product and engineering teams inside chat, across
            tickets, code, and shipped outcomes.
          </p>
        </div>
        <nav className="flex flex-wrap gap-8 text-sm font-bold" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === '/product'
                  ? 'text-[color:var(--accent)]'
                  : 'text-[color:var(--muted)] transition hover:text-[color:var(--cream)]'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
