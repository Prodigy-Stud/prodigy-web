import type { Metadata } from 'next';
import React from 'react';
import { ProductMarketing } from '@/components/product-marketing';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'How Prodigy combines signals, AI, and delivery workflows—ideas and opportunities, structured tickets, and paths to implementation.'
};

export default function ProductPage() {
  return (
    <main>
      <ProductMarketing />
    </main>
  );
}
