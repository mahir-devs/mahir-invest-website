import React, { Suspense } from 'react';
import { LoginPage } from '@/components/pages/auth/login';
import { SuspenseFallback } from '@/components/common/loading/suspense-fallback';

export const metadata = {
  title: 'Log In | MAHIR Invest',
  description: 'Log in to your MAHIR Invest account to manage your investments, view portfolios, and access premium tools.',
};

export default function Page() {
  return (
    <>
      <Suspense fallback={<SuspenseFallback variant="card" message="Loading login portal..." />}>
        <LoginPage />
      </Suspense>
    </>
  );
}
