'use client';

import React, { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      company: String(fd.get('company') ?? ''),
      message: String(fd.get('message') ?? '')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        setStatus('err');
        return;
      }
      setStatus('ok');
      e.currentTarget.reset();
    } catch {
      setError('Network error. Please try again or email us directly.');
      setStatus('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-semibold text-[color:var(--ink)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent-deep)]/45 focus:ring-2 focus:ring-[color:var(--accent)]/18"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-semibold text-[color:var(--ink)]"
        >
          Work email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent-deep)]/45 focus:ring-2 focus:ring-[color:var(--accent)]/18"
        />
      </div>
      <div>
        <label
          htmlFor="contact-company"
          className="mb-1.5 block text-sm font-semibold text-[color:var(--ink)]"
        >
          Company <span className="font-normal text-[color:var(--dim)]">(optional)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className="w-full rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent-deep)]/45 focus:ring-2 focus:ring-[color:var(--accent)]/18"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-semibold text-[color:var(--ink)]"
        >
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent-deep)]/45 focus:ring-2 focus:ring-[color:var(--accent)]/18"
        />
      </div>

      {error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      {status === 'ok' ? (
        <p className="text-sm font-medium text-[color:var(--accent-deep)]" role="status">
          Thanks — we received your message and will get back to you soon.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full bg-[color:var(--accent-deep)] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(13,148,136,0.26)] transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
