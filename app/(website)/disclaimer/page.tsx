import React from 'react';
import DisclaimerPage from '@/components/pages/disclaimer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - MAHIR Invest',
  description: 'Comprehensive Disclosures and Legal Notices for Mahir Investment Advisers Private Limited.',
};

export default function DisclaimerRoute() {
  return <DisclaimerPage />;
}
