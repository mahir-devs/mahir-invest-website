import React from 'react';
import NewsPage from '@/components/pages/news';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Articles - MAHIR Invest',
  description: 'Read the latest market news, company updates, expert insights, and economic developments.',
};

export default function News() {
  return <NewsPage />;
}
