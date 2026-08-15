import React from 'react';
import SubscriptionSuccessPage from '@/components/pages/subscription-success';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscription Successful - MAHIR Invest',
  description: 'Congratulations! You are now a premium member of MAHIR Invest.',
};

export default function SubscriptionSuccess() {
  return <SubscriptionSuccessPage />;
}
