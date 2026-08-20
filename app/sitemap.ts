import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blogs';
import { CALCULATOR_CONFIG } from '@/lib/calculators/config';

const BASE_URL = 'https://www.mahirinvest.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ─── Static Pages ───
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/who-we-are`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/get-app`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/mahir-app`,
      lastModified: now,
    },
    // Legal & Policy Pages
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/refund`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/cancellation`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/cancellation-policy`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/sebi-disclosures`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/investor-charter`,
      lastModified: now,
    },
  ];

  // ─── Dynamic Blog Pages ───
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: now,
  }));

  // ─── Dynamic Tool/Calculator Pages ───
  const toolPages: MetadataRoute.Sitemap = Object.keys(CALCULATOR_CONFIG).map(
    (id) => ({
      url: `${BASE_URL}/tools/${id}`,
      lastModified: now,
    })
  );

  return [...staticPages, ...blogPages, ...toolPages];
}
