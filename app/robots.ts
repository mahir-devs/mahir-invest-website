import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/login',
          '/verify-otp',
          '/personal-details',
          '/profile',
          '/subscription-success',
          '/test-razorpay',
          '/testings/',
        ],
      },
    ],
    sitemap: 'https://www.mahiradvisers.com/sitemap.xml',
  };
}
