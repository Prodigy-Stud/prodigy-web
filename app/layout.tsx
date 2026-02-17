import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
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
  title: 'Prodigy | From Signals to Shipped Decisions',
  description:
    'Prodigy turns customer feedback and usage analytics into prioritized insights, product ideas, rollout plans, and implementation-ready specs.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} bg-soft font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
