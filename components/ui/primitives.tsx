import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type BadgeVariant = 'neutral' | 'accent' | 'success';

const buttonVariantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-[color:var(--accent-deep)] text-white shadow-[0_10px_36px_rgba(13,148,136,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(13,148,136,0.34)]',
  secondary:
    'bg-[color:var(--surface-elevated)] text-[color:var(--ink)] border border-[color:var(--line)] hover:bg-[color:var(--bg-deep)]',
  ghost: 'text-[color:var(--accent-deep)] hover:bg-[color:var(--accent-soft)]'
};

const badgeVariantClass: Record<BadgeVariant, string> = {
  neutral:
    'border-[color:var(--line)] text-[color:var(--muted-strong)] bg-[color:var(--surface-elevated)]',
  accent:
    'border-[color:var(--accent)]/30 text-[color:var(--accent-deep)] bg-[color:var(--accent-soft)]',
  success: 'border-emerald-300/40 text-emerald-100 bg-emerald-400/15'
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-[transform,box-shadow,background-color,color] duration-300 ${buttonVariantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({
  children,
  className = ''
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`glass-card rounded-2xl ${className}`}>{children}</div>;
}

export function Badge({
  children,
  variant = 'neutral',
  className = ''
}: React.PropsWithChildren<{ variant?: BadgeVariant; className?: string }>) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeVariantClass[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
