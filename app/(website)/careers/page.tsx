import React from 'react';
import CareersPage from '@/components/pages/careers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - MAHIR Invest',
  description: 'Learn about life at MAHIR and the values that shape how we work.',
};

export default function Careers() {
  return <CareersPage />;
}
