import type { Metadata } from 'next';
import React from 'react';
import { ProductMarketing } from '@/components/product-marketing';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'How Prodigy lives in Slack, switches between PM and engineering roles, delegates work on a shared board, and ships code with accountability.'
};

export default function ProductPage() {
  return (
    <main>
      <ProductMarketing />
    </main>
  );
}
