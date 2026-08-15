import React from 'react';
import GetAppPage from '@/components/pages/get-app';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MAHIR App - SEBI Registered Stock Recommendation Platform',
  description: 'Download the MAHIR Invest mobile app for iOS and Android to access AI-driven insights, transparent performance tracking, and research tools.',
};

export default function MahirAppRoute() {
  return <GetAppPage />;
}
