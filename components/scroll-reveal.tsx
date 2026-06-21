'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  delayMs?: number;
}>;

export function ScrollReveal({ children, className = '', delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const mq =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    if (mq?.matches) {
      setVisible(true);
      return;
    }

    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight + 160) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px 18% 0px', threshold: 0.02 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 3200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition:
          'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: visible ? `${delayMs}ms` : '0ms',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      {children}
    </div>
  );
}
