import React, { Suspense } from 'react';
import { VerifyOtpPage } from '@/components/pages/auth/verify-otp';
import { SuspenseFallback } from '@/components/common/loading/suspense-fallback';

export const metadata = {
  title: 'Verify OTP | MAHIR Invest',
  description: 'Verify your phone number with OTP to securely log in or register on MAHIR Invest.',
};

export default function Page() {
  return (
    <Suspense fallback={<SuspenseFallback variant="card" message="Verifying session..." />}>
      <VerifyOtpPage />
    </Suspense>
  );
}
