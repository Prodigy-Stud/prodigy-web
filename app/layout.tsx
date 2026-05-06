import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { AppProviders } from '@/components/app-providers';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});

export const metadata: Metadata = {
  title: 'Prodigy | Product signals to production-ready code',
  description:
    'Turn customer feedback and usage analytics into ranked opportunities, implementation-ready specs, and agent handoffs your team can merge.'
};

export const viewport: Viewport = {
  themeColor: '#f4f2ee'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} bg-soft font-sans text-ink antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
