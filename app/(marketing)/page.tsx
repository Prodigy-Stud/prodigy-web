import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { HomeMarketingRest } from '@/components/home-marketing-rest';

export const metadata: Metadata = {
  title: 'Your AI FTE for Product & Engineering',
  description:
    'Prodigy lives in Slack, switches between PM and engineering roles, and owns work end to end—from decision through shipped code.'
};

export default function HomePage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prodigy',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prodigy.org.in',
    description:
      'Prodigy is an AI FTE for product and engineering teams—lives in Slack, owns work end to end, and ships with accountability.',
    sameAs: ['https://github.com/Prodigy-Stud']
  };

  return (
    <main>
      <Script
        id="prodigy-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <HeroSection />
      <HomeMarketingRest />
    </main>
  );
}
