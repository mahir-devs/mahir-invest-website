import React from 'react';
import CancellationPolicyPage from '@/components/pages/cancellation-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cancellation Policy - MAHIR Invest',
  description: 'Cancellation Policy and Cooling-Off Framework for Mahir Investment Advisers Private Limited.',
};

export default function CancellationPolicyRoute() {
  return <CancellationPolicyPage />;
}
