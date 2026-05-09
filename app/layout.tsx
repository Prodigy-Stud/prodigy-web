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
  title: { default: 'Prodigy', template: '%s | Prodigy' },
  description: 'We take your product feedback, create opportunities and ship code for you.'
};

export const viewport: Viewport = {
  themeColor: '#0f766e'
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
