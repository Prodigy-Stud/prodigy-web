import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.prodigy.org.in';
export const dynamic = 'force-static';

const routes = [
  '',
  '/product',
  '/investors',
  '/design',
  '/resources',
  '/blog',
  '/team',
  '/contact'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route || '/'}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
