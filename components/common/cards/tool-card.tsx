'use client';

import React from 'react';
import { GlassCard } from './glass-card';
import { Calculator, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToolCardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  comingSoon?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  href = '#',
  className,
  onClick,
  comingSoon = false,
}) => {
  const content = (
    <GlassCard
      variant="dark"
      rounded="3xl"
      padding="none"
      hoverable={!comingSoon}
      onClick={comingSoon ? undefined : onClick}
      className={cn(
        ' border border-white/90 shadow-md flex flex-col justify-between p-5 sm:p-6 rounded-[28px] sm:rounded-[32px] overflow-hidden transition-all duration-300 h-full select-none text-left space-y-4',
        comingSoon
          ? 'opacity-60 cursor-not-allowed'
          : 'hover:scale-[1.02] cursor-pointer',
        className
      )}
    >
      <div className="space-y-3">
        {/* Top Calculator Icon Badge */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
          <Calculator className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-normal text-slate-900 leading-snug tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Link */}
      <div
        className={cn(
          'inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium pt-1 transition-colors',
          comingSoon ? 'text-slate-400' : 'text-slate-700 hover:text-[var(--blue-normal)]'
        )}
      >
        <span>{comingSoon ? 'Coming Soon' : 'Open'}</span>
        {!comingSoon && <ArrowRight className="w-3.5 h-3.5" />}
      </div>
    </GlassCard>
  );

  if (href && !comingSoon) {
    return (
      <a href={href} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export default ToolCard;
