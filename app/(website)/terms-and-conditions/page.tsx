import React from 'react';
import TermsAndConditionsPage from '@/components/pages/terms-and-conditions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - MAHIR Invest',
  description: 'Terms and Conditions and User Agreement for Mahir Investment Advisers Private Limited.',
};

export default function TermsAndConditionsRoute() {
  return <TermsAndConditionsPage />;
}
