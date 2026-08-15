import React from 'react';
import BlogPostDetailPage from '@/components/pages/blogs/post-detail';
import { Metadata } from 'next';
import { getBlogById } from '@/lib/blogs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogById(id);
  if (!post) {
    return {
      title: 'Blog Post - MAHIR Invest',
      description: 'Educational insights and research-backed financial guide.',
    };
  }
  return {
    title: `${post.title} - MAHIR Invest`,
    description: post.excerpt,
  };
}

export default async function BlogDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <BlogPostDetailPage
      id={id}
      backLinkHref="/blogs"
      backLinkLabel="Back to Blogs & Guides"
    />
  );
}
