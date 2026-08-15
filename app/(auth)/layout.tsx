import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden select-none">
      <CloudAnimation height={90} opacity={1} speed={26} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[100vh] py-12">
        {children}
      </div>
    </div>
  );
}
