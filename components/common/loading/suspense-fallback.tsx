'use client';

import React from 'react';
import { WhiteLogo } from '@/components/svg/logo';
import { cn } from '@/lib/utils';

export interface SuspenseFallbackProps {
  /** Variant style of the loading fallback */
  variant?: 'fullPage' | 'card' | 'pricing';
  /** Optional custom text overlay */
  message?: string;
  className?: string;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  variant = 'fullPage',
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-center select-none  via-40% to-[var(--blue-light)]',
        variant === 'fullPage' && 'min-h-[60vh] py-12',
        variant === 'card' && 'min-h-[320px] p-8',
        variant === 'pricing' && 'min-h-[40vh] py-16',
        className
      )}
    >
      <WhiteLogo color="white" width={140} height={60} />
    </div>
  );
};

export default SuspenseFallback;
