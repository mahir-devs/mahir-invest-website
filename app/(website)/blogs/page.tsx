import React from 'react';
import BlogsPage from '@/components/pages/blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Insights - MAHIR Invest',
  description: 'Educational insights and research-backed advisory content from MAHIR Research.',
};

export default function Blogs() {
  return <BlogsPage />;
}
