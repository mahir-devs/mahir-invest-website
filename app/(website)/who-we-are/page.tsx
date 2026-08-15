import React from 'react';
import AboutPage from '@/components/pages/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are - About MAHIR Invest',
  description: 'Learn about Mahir Investment Advisers Private Limited, our mission, leadership, and dedicated team.',
};

export default function WhoWeAreRoute() {
  return <AboutPage />;
}
