import React from 'react';
import AboutPage from '@/components/pages/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who Are We - About MAHIR Invest',
  description: 'Learn about Mahir Investment Advisers Private Limited, our mission, leadership, and dedicated team.',
};

export default function AboutRoute() {
  return <AboutPage />;
}
