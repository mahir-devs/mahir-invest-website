import React, { Suspense } from 'react';
import { PricingPage } from '@/components/pages/pricing';
import { SuspenseFallback } from '@/components/common/loading/suspense-fallback';

export const metadata = {
  title: 'Investment Plans & Pricing | MAHIR Invest',
  description: 'Explore transparent, low-cost pricing plans tailored for your wealth creation journey with MAHIR Invest.',
};

export default function Page() {
  return (
    <Suspense fallback={<SuspenseFallback variant="fullPage" message="Loading pricing plans..." />}>
      <PricingPage />
    </Suspense>
  );
}
