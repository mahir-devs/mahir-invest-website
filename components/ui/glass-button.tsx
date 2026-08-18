'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const glassButtonVariants = cva(
  'group inline-flex shrink-0 items-center justify-between overflow-visible rounded-full cursor-pointer transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        dark: 'bg-white/10 backdrop-blur-xl border border-white/25 text-white shadow-lg shadow-black/10 hover:bg-white/20 hover:border-white/40 hover:shadow-xl',
        light: 'bg-white/55 backdrop-blur-xl border border-white/30 text-slate-900 shadow-lg shadow-slate-900/10 hover:bg-white/65 hover:border-white/80 hover:shadow-xl',
        cyan: 'bg-cyan-950/40 backdrop-blur-xl border border-cyan-400/30 text-white shadow-lg shadow-cyan-950/20 hover:bg-cyan-950/60 hover:border-cyan-400/50',
        emerald: 'bg-emerald-950/40 backdrop-blur-xl border border-emerald-400/30 text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-950/60 hover:border-emerald-400/50',
      },
      size: {
        sm: 'h-9 pl-2 pr-1 text-[12px] font-medium gap-3',
        md: 'h-11 pl-6 pr-1.5 text-[14.32px] font-normal gap-4 sm:text-base',
        lg: 'h-14 pl-7 pr-2 text-base font-semibold gap-5 sm:text-lg',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'md',
    },
  }
);

type SizeType = 'sm' | 'md' | 'lg';

const iconSizeMap: Record<SizeType, string> = {
  sm: 'w-5 h-5 ',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
};

const defaultSvgIconSize: Record<SizeType, string> = {
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-5',
};

export interface GlassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof glassButtonVariants> {
  /** Text content for the button, can also be passed as children */
  label?: ReactNode;
  /** Dynamic icon element (defaults to TrendingUp arrow) */
  icon?: ReactNode;
  /** Whether to render the circular badge icon (defaults to true) */
  showIcon?: boolean;
  /** Whether the circular icon badge should glow with an orbiting ambient halo */
  isGlowIcon?: boolean;
  /** Custom animated glow shadow class (defaults to orbiting green shadow) */
  iconGlowClassName?: string;
  /** Custom background color for the circular icon badge (e.g. 'bg-[var(--green-normal)]', 'bg-sky-500') */
  iconBgColor?: string;
  /** Custom size preset ('sm' | 'md' | 'lg') or Tailwind class ('w-6 h-6') for circular icon background */
  iconBgSize?: 'sm' | 'md' | 'lg' | (string & {});
  /** Custom text/stroke color for the icon */
  iconTextColor?: string;
  /** Position of the circular icon pill ('right' | 'left') */
  iconPosition?: 'right' | 'left';
  /** Extra custom CSS classes for the circular icon container */
  iconClassName?: string;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      className,
      variant = 'dark',
      size = 'md',
      label,
      children,
      icon,
      showIcon = true,
      isGlowIcon = false,
      iconGlowClassName,
      iconBgColor = 'bg-[#16a34a]',
      iconBgSize,
      iconTextColor = 'text-white',
      iconPosition = 'right',
      iconClassName,
      ...props
    },
    ref
  ) => {
    const currentSize: SizeType = (size as SizeType) || 'md';
    const content = label || children;

    // Resolve iconBgSize whether passed as 'sm' | 'md' | 'lg' or custom CSS class string
    const resolvedBgSize =
      iconBgSize === 'sm' || iconBgSize === 'md' || iconBgSize === 'lg'
        ? iconSizeMap[iconBgSize as SizeType]
        : iconBgSize || iconSizeMap[currentSize];

    const renderedIcon = (
      <span
        className={cn(
          'relative z-10 inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 overflow-visible',
          resolvedBgSize,
          iconBgColor,
          iconTextColor,
          isGlowIcon &&
          (iconGlowClassName || 'animate-icon-glow-orbit shadow-[3px_0_7px_rgba(0,179,40,0.85)]'),
          !isGlowIcon && 'shadow-sm',
          iconClassName
        )}
      >
        {icon || <TrendingUp className={cn('stroke-[2.5]', defaultSvgIconSize[currentSize])} />}
      </span>
    );

    return (
      <button
        ref={ref}
        type="button"
        className={cn(glassButtonVariants({ variant, size, className }))}
        {...props}
      >
        {iconPosition === 'left' && showIcon && renderedIcon}
        <span className="flex-1 text-center truncate py-0.5">{content}</span>
        {iconPosition === 'right' && showIcon && renderedIcon}
      </button>
    );
  }
);

GlassButton.displayName = 'GlassButton';
