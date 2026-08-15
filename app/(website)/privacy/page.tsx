import React from 'react';
import PrivacyPolicyPage from '@/components/pages/privacy-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - MAHIR Invest',
  description: 'Privacy Policy for Mahir Investment Advisers Private Limited - Compliant with DPDP Act, 2023 & IT SPDI Rules.',
};

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
