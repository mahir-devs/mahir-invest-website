import React from 'react';
import SebiDisclosuresPage from '@/components/pages/sebi-disclosures';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEBI Disclosures - MAHIR Invest',
  description: 'SEBI Mandatory Disclosures, Declarations & Compliance Content for Mahir Investment Advisers Private Limited.',
};

export default function SebiDisclosuresRoute() {
  return <SebiDisclosuresPage />;
}
