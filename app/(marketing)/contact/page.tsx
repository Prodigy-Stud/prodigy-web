import type { Metadata } from 'next';
import React from 'react';
import { ContactForm } from '@/components/contact-form';
import { PageSection } from '@/components/page-section';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach the Prodigy team for demos, partnerships, and product questions.'
};

export default function ContactPage() {
  return (
    <main>
      <PageSection variant="default" pad="md" className="!border-t-0">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[color:var(--accent-deep)]">
          Contact
        </p>
        <h1 className="page-intro-title font-display text-[clamp(1.85rem,4vw,3rem)] font-medium text-[color:var(--ink)]">
          Let&apos;s talk
        </h1>
        <p className="prose-muted mt-6 max-w-2xl text-lg leading-relaxed">
          For demos, design partners, and press—reach us by email or send a note with the form. We
          route form submissions to{' '}
          <a
            href="mailto:prodigy.sam10@gmail.com"
            className="font-semibold text-[color:var(--accent-deep)] underline decoration-[color:var(--accent)]/25 underline-offset-4 hover:decoration-[color:var(--accent-deep)]"
          >
            prodigy.sam10@gmail.com
          </a>
          .
        </p>
        <ContactForm />
      </PageSection>
    </main>
  );
}
