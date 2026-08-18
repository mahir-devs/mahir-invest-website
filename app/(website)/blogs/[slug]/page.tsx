import React from 'react';
import BlogPostDetailPage from '@/components/pages/blogs/post-detail';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogBySlug, BLOG_POSTS } from '@/lib/blogs';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostDetailPage
      slug={slug}
      backLinkHref="/blogs"
      backLinkLabel="Back to Blogs & Guides"
    />
  );
}
