import React from 'react';
import InvestorCharterPage from '@/components/pages/investor-charter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Charter - MAHIR Invest',
  description: 'Investor Charter & Regulatory Disclosures for Mahir Investment Advisers Private Limited.',
};

export default function InvestorCharterRoute() {
  return <InvestorCharterPage />;
}
