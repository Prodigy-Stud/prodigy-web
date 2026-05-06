'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { LayoutGroup, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { navLinks, navScrollSpyIds } from '@/lib/site-content';

const HEADER_OFFSET = 108;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [activeHash, setActiveHash] = useState(navScrollSpyIds[0] ?? 'product-demo');
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 12);
  });

  const updateActive = useCallback(() => {
    const y = window.scrollY;
    let current = '';
    for (const id of navScrollSpyIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.offsetTop <= y + HEADER_OFFSET) {
        current = id;
      }
    }
    setActiveHash(current || navScrollSpyIds[0] || '');
  }, []);

  useEffect(() => {
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  return (
    <motion.header
      className={`sticky top-0 z-40 border-b py-4 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out ${
        scrolled
          ? 'border-[color:var(--line)] bg-[color:var(--bg)]/88 shadow-[0_8px_32px_rgba(18,24,32,0.05)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[color:var(--bg)]/76'
          : 'border-transparent bg-[color:var(--bg)]/55 backdrop-blur-md supports-[backdrop-filter]:bg-[color:var(--bg)]/42'
      }`}
      initial={{ y: -10, opacity: 0.97 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-[color:var(--ink)] transition hover:opacity-80 md:text-2xl"
        >
          Prodigy
        </a>
        <LayoutGroup>
          <nav
            className="no-scrollbar ml-auto mr-1 flex max-w-[min(420px,56vw)] flex-1 items-center justify-end gap-1 overflow-x-auto lg:mx-0 lg:max-w-none lg:justify-center"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeHash === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[color:var(--ink)]'
                      : 'text-[color:var(--muted)] hover:text-[color:var(--ink)]'
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[color:var(--surface-strong)] shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--line)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-[1]">{link.label}</span>
                </a>
              );
            })}
          </nav>
        </LayoutGroup>
        <motion.a
          href="#cta"
          className="rounded-full bg-[color:var(--accent-deep)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_36px_rgba(37,99,235,0.26)] transition-shadow hover:shadow-[0_14px_44px_rgba(37,99,235,0.35)]"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          Get Early Access
        </motion.a>
      </div>
    </motion.header>
  );
}
