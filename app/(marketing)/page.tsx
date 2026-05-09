import type { Metadata } from 'next';
import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { HomeMarketingRest } from '@/components/home-marketing-rest';
import { PipelineFlow } from '@/components/pipeline-flow';

export const metadata: Metadata = {
  title: 'Agents Decide, Agents Code',
  description: 'We take your product feedback, create opportunities and ship code for you.'
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PipelineFlow />
      <HomeMarketingRest />
    </main>
  );
}
