import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { AppProviders } from '@/components/app-providers';
import { RobotLoaderSequence } from '@/components/robot-loader-sequence';
import '@/components/robot-loader.css';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prodigy.org.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Prodigy', template: '%s | Prodigy' },
  description:
    'Prodigy is an AI FTE for product and engineering teams—lives in Slack, switches between PM and engineering roles, and owns work end to end.',
  openGraph: {
    title: 'Prodigy',
    description:
      'The AI teammate your team can trust with real work—convertible roles, shared board, accountable execution.',
    type: 'website',
    url: siteUrl,
    siteName: 'Prodigy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prodigy',
    description:
      'An AI FTE that lives in Slack, owns work end to end, and ships while your team sleeps.'
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  themeColor: '#0f766e'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${fraunces.variable} bg-soft font-sans text-ink antialiased`}
      >
        <AppProviders>
          <RobotLoaderSequence>{children}</RobotLoaderSequence>
        </AppProviders>
      </body>
    </html>
  );
}
