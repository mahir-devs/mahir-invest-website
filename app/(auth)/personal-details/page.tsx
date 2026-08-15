import React, { Suspense } from 'react';
import { PersonalDetailsPage } from '@/components/pages/auth/personal-details';
import { SuspenseFallback } from '@/components/common/loading/suspense-fallback';

export const metadata = {
  title: 'Personal Details | MAHIR Invest',
  description: 'Complete your profile with your personal details to get started with MAHIR Invest.',
};

export default function Page() {
  return (
    <Suspense fallback={<SuspenseFallback variant="card" message="Loading profile..." />}>
      <PersonalDetailsPage />
    </Suspense>
  );
}
