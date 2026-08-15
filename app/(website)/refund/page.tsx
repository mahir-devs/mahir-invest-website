import React from 'react';
import RefundPolicyPage from '@/components/pages/refund-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - MAHIR Invest',
  description: 'Advisory Fee Refund Framework for Mahir Investment Advisers Private Limited.',
};

export default function RefundRoute() {
  return <RefundPolicyPage />;
}
