'use client';

import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { GlassCardProps } from './types';

export const glassCardVariants = cva(
  'relative transition-all duration-300 select-none overflow-hidden',
  {
    variants: {
      variant: {
        'pure-glass':
          'bg-white/10 border border-white/20 text-white shadow-xl shadow-black/10',
        frosted:
          'bg-white/25 border border-white/40 text-white shadow-2xl shadow-black/15',
        dark:
          'bg-white/10 backdrop-blur-xl border border-white/25 text-white shadow-lg shadow-black/10',
        light:
          'bg-white/55 backdrop-blur-xl border border-white/30 text-slate-900 shadow-lg shadow-slate-900/10',
        cyan:
          'bg-cyan-950/40 backdrop-blur-xl border border-cyan-400/30 text-white shadow-lg shadow-cyan-950/20',
        emerald:
          'bg-[#00AD17]/5 backdrop-blur-xl border border-[#00AD17]/30 text-white shadow-lg shadow-[#00AD17]/20',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
        '2xl': 'rounded-[32px]',
        '3xl': 'rounded-[40px]',
        full: 'rounded-full',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4 sm:p-5',
        md: 'p-6 sm:p-8',
        lg: 'p-8 sm:p-10',
        xl: 'p-10 sm:p-12',
      },
      blur: {
        none: 'backdrop-blur-none',
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg',
        xl: 'backdrop-blur-xl',
        '2xl': 'backdrop-blur-2xl',
        '3xl': 'backdrop-blur-3xl',
      },
    },
    defaultVariants: {
      variant: 'pure-glass',
      rounded: '3xl',
      padding: 'md',
      blur: 'xl',
    },
  }
);

/**
 * Modular GlassCard component that wraps any children content with 'pure-glass' or 'frosted' styles.
 */
export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(
  (
    {
      variant = 'pure-glass',
      rounded = '3xl',
      padding = 'md',
      blur = 'xl',
      hoverable = false,
      interactive = false,
      glow = false,
      as: Component = 'div',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          glassCardVariants({ variant, rounded, padding, blur }),
          hoverable && 'hover:-translate-y-1.5 hover:shadow-2xl',
          interactive && 'cursor-pointer active:scale-[0.99]',
          className
        )}
        {...props}
      >
        {/* Optional ambient background glow highlight */}
        {glow && (
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none" />
        )}
        {children}
      </Component>
    );
  }
);

GlassCard.displayName = 'GlassCard';
