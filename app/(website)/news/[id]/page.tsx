import React from 'react';
import BlogPostDetailPage from '@/components/pages/blogs/post-detail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Article - MAHIR Invest',
  description: 'Asset Allocation: The Real Driver of Portfolio Returns',
};

export default async function NewsDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <BlogPostDetailPage
      id={id}
      backLinkHref="/news"
      backLinkLabel="Back to News & Articles"
    />
  );
}
