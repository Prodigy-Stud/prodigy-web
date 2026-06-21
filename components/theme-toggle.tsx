'use client';

import React from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--muted-strong)] shadow-[var(--shadow-soft)] transition-colors hover:text-[color:var(--ink)]"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
