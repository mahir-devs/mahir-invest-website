import React from 'react';
import ToolsPage from '@/components/pages/tools';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools & Guides - MAHIR Invest',
  description: 'Financial calculators to help you plan smarter — from SIPs and loans to retirement and tax savings.',
};

export default function Tools() {
  return <ToolsPage />;
}
