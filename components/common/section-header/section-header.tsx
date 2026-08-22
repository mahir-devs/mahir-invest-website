'use client';

import React from 'react';
import { MotionItem } from '@/components/animations';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  /** Eyebrow badge content (JSX node, plain text string, or HTML string) */
  eyebrow?: React.ReactNode;
  /** Eyebrow text string (alias for eyebrow) */
  eyebrowText?: string;
  /** If true, eyebrow badge will not be rendered */
  hideEyebrow?: boolean;
  /** Main heading title (JSX node, plain text string, or HTML string) */
  title?: React.ReactNode;
  /** Subtitle content (JSX node, plain text string, or HTML string) */
  subtitle?: React.ReactNode;
  /** If true, subtitle paragraph will not be rendered */
  hideSubtitle?: boolean;
  /** If true, applies white text styling suited for dark background */
  isHeadingDark?: boolean;
  /** Additional container classes */
  className?: string;
  /** Custom classes for eyebrow badge element */
  eyebrowClassName?: string;
  /** Custom classes for title element */
  titleClassName?: string;
  /** Custom classes for subtitle element */
  subtitleClassName?: string;
}

/** Helper to render string HTML content via dangerouslySetInnerHTML or normal ReactNode */
const renderNodeOrHtml = (node: React.ReactNode) => {
  if (typeof node === 'string' && /<[a-z][\s\S]*>/i.test(node)) {
    return <span dangerouslySetInnerHTML={{ __html: node }} />;
  }
  return node;
};

/** Helper to capitalize string eyebrow text (e.g. "FINANCIAL CALCULATORS" -> "Financial Calculators") */
const formatCapitalize = (node: React.ReactNode) => {
  if (typeof node === 'string') {
    const formatted = node
      .toLowerCase()
      .split(' ')
      .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ''))
      .join(' ');
    return renderNodeOrHtml(formatted);
  }
  return renderNodeOrHtml(node);
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowText,
  hideEyebrow = false,
  title,
  subtitle,
  hideSubtitle = false,
  isHeadingDark = false,
  className,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
}) => {
  const rawEyebrow = eyebrow ?? eyebrowText;
  const eyebrowContent = rawEyebrow !== undefined ? rawEyebrow : 'Starting your investment journey';
  const titleContent = title || 'Aarambh';

  const defaultSubtitle = (
    <>
      Choose how you’d like to{' '}
      <span className="font-bold text-[var(--green-normal)]">
        START YOUR JOURNEY.
      </span>
    </>
  );

  const subtitleContent = subtitle !== undefined ? subtitle : defaultSubtitle;

  return (
    <div className={cn('space-y-1.5 sm:space-y-2 lg:space-y-3 text-center mx-auto', className)}>
      {!hideEyebrow && eyebrowContent && (
        <MotionItem direction="down" duration={0.5}>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[15px] font-normal tracking-widest',
              isHeadingDark ? 'text-white/60' : 'text-slate-500',
              eyebrowClassName
            )}
          >
            {formatCapitalize(eyebrowContent)}
          </span>
        </MotionItem>
      )}

      <MotionItem direction="scaleDown" scale={1.15} duration={0.6}>
        <h1
          className={cn(
            'text-2xl sm:text-6xl lg:text-[60px] font-normal tracking-tight leading-tight drop-shadow-sm',
            isHeadingDark ? 'text-white' : 'text-slate-900',
            titleClassName
          )}
        >
          {renderNodeOrHtml(titleContent)}
        </h1>
      </MotionItem>

      {!hideSubtitle && Boolean(subtitleContent) && (
        <MotionItem direction="up" distance={15} duration={0.5}>
          <p
            className={cn(
              'text-[11px] sm:text-base lg:text-[16.73px] font-normal leading-relaxed max-w-2xl tracking-[1px] mx-auto',
              isHeadingDark ? 'text-white/60' : 'text-slate-500',
              subtitleClassName
            )}
          >
            {renderNodeOrHtml(subtitleContent)}
          </p>
        </MotionItem>
      )}
    </div>
  );
};

export default SectionHeader;
