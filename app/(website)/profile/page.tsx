import React from 'react';
import ProfilePage from '@/components/pages/profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile - MAHIR Invest',
  description: 'Manage your profile and personal information.',
};

export default function Profile() {
  return <ProfilePage />;
}
