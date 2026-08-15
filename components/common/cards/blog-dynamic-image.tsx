'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, BarChart2, ShieldCheck, HelpCircle, FileText } from 'lucide-react';

export interface BlogDynamicImageProps {
  category: string;
  title: string;
  readTime?: string;
  wordCount?: number;
  id?: string | number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CATEGORY_THEMES: Record<
  string,
  {
    bgGradient: string;
    accentColor: string;
    badgeBg: string;
    icon: React.ComponentType<{ className?: string }>;
    accentGlow: string;
    chartPath: string;
  }
> = {
  'Investing Basics': {
    bgGradient: 'from-sky-950 via-slate-900 to-indigo-950',
    accentColor: 'text-sky-400',
    badgeBg: 'bg-sky-500/20 text-sky-200 border-sky-400/30',
    icon: TrendingUp,
    accentGlow: 'bg-sky-500/25',
    chartPath: 'M0,120 Q60,90 120,110 T240,60 T360,40 T480,20',
  },
  'Broker Comparison': {
    bgGradient: 'from-purple-950 via-slate-900 to-indigo-950',
    accentColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
    icon: BarChart2,
    accentGlow: 'bg-purple-500/25',
    chartPath: 'M0,110 Q80,140 160,80 T320,90 T480,30',
  },
  Taxation: {
    bgGradient: 'from-emerald-950 via-slate-900 to-teal-950',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
    icon: ShieldCheck,
    accentGlow: 'bg-emerald-500/25',
    chartPath: 'M0,100 Q100,70 200,90 T400,40 T480,50',
  },
  'Beginner Questions': {
    bgGradient: 'from-amber-950 via-slate-900 to-rose-950',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
    icon: HelpCircle,
    accentGlow: 'bg-amber-500/25',
    chartPath: 'M0,130 Q90,60 180,100 T360,50 T480,25',
  },
};

const DEFAULT_THEME = {
  bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
  accentColor: 'text-blue-400',
  badgeBg: 'bg-blue-500/20 text-blue-200 border-blue-400/30',
  icon: FileText,
  accentGlow: 'bg-blue-500/25',
  chartPath: 'M0,110 Q70,80 140,100 T280,50 T480,30',
};

export const BlogDynamicImage: React.FC<BlogDynamicImageProps> = ({
  category,
  title,
  readTime,
  wordCount,
  className,
  size = 'md',
}) => {
  const theme = CATEGORY_THEMES[category] || DEFAULT_THEME;
  const CategoryIcon = theme.icon;

  return (
    <div
      className={cn(
        'relative w-full h-full min-h-[190px] overflow-hidden rounded-[22px] bg-gradient-to-br select-none flex flex-col justify-between p-5 text-white shadow-inner border border-white/10',
        theme.bgGradient,
        size === 'lg' ? 'min-h-[280px] sm:min-h-[360px] p-6 sm:p-8' : '',
        className
      )}
    >
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Radial Glow Circles */}
      <div
        className={cn(
          'absolute -top-12 -right-12 w-48 h-48 blur-3xl rounded-full pointer-events-none',
          theme.accentGlow
        )}
      />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-white/5 blur-3xl rounded-full pointer-events-none" />

      {/* SVG Trend Line / Financial Graphic Accent */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 480 160"
      >
        <defs>
          <linearGradient id={`grad-${category.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d={theme.chartPath}
          fill="none"
          stroke={`url(#grad-${category.replace(/\s+/g, '-')})`}
          strokeWidth="3.5"
          className={theme.accentColor}
          strokeLinecap="round"
        />
        <path
          d={`${theme.chartPath} L480,160 L0,160 Z`}
          fill="currentColor"
          className={cn(theme.accentColor, 'opacity-10')}
        />
      </svg>

      {/* Header Row: Category Badge + Brand Icon */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border backdrop-blur-md shadow-sm',
            theme.badgeBg
          )}
        >
          <CategoryIcon className="w-3.5 h-3.5" />
          <span>{category}</span>
        </span>

        <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5">
          MAHIR INSIGHTS
        </span>
      </div>

      {/* Center Content: Title & Visual Details */}
      <div className="relative z-10 my-auto py-3 space-y-2">
        <h3
          className={cn(
            'font-bold tracking-tight text-white drop-shadow-md line-clamp-3 leading-snug',
            size === 'lg'
              ? 'text-2xl sm:text-3xl lg:text-4xl'
              : 'text-base sm:text-lg'
          )}
        >
          {title}
        </h3>
      </div>

      {/* Footer Info: Read time & Word count */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-white/70 pt-2 border-t border-white/10">
        <span>{readTime || '3 min read'}</span>
        {wordCount && <span>{wordCount} words</span>}
      </div>
    </div>
  );
};

export default BlogDynamicImage;
