import React from 'react';

type Variant = 'default' | 'muted' | 'deep';

const variantClass: Record<Variant, string> = {
  default: 'bg-[color:var(--bg)]',
  muted: 'bg-[color:var(--section-muted)]',
  deep: 'bg-[color:var(--section-deep)] text-[color:var(--on-deep)]'
};

type Props = React.PropsWithChildren<{
  id?: string;
  variant?: Variant;
  /** Extra classes on outer section */
  className?: string;
  /** Extra classes on inner width container */
  innerClassName?: string;
  /** Vertical padding (default generous Auctor-like rhythm) */
  pad?: 'lg' | 'md';
}>;

export function PageSection({
  id,
  variant = 'default',
  className = '',
  innerClassName = '',
  pad = 'lg',
  children
}: Props) {
  const py = pad === 'lg' ? 'py-20 md:py-28 lg:py-32' : 'py-14 md:py-20';
  return (
    <section
      id={id}
      className={`relative border-t border-[color:var(--line-subtle)] ${variantClass[variant]} ${className}`}
    >
      <div className={`mx-auto w-[min(1120px,92vw)] ${py} ${innerClassName}`}>{children}</div>
    </section>
  );
}
