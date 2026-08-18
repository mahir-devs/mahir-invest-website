'use client';

import React from 'react';
import Image from 'next/image';
import { GlassCard } from './glass-card';
import { cn } from '@/lib/utils';
import { BLOG_DEFAULT_IMAGE } from '@/lib/assets';

export interface BlogCardProps {
  id?: string;
  category: string;
  imageSrc?: string;
  cardTitle: string;
  excerpt: string;
  author: string;
  date: string;
  readTime?: string;
  wordCount?: number;
  priority?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  category,
  imageSrc,
  cardTitle,
  excerpt,
  author,
  date,
  readTime,
  wordCount,
  priority = false,
  href = '/news',
  className,
  onClick,
}) => {
  const resolvedImageSrc = imageSrc || BLOG_DEFAULT_IMAGE;

  const content = (
    <GlassCard
      variant="frosted"
      rounded="3xl"
      padding="none"
      hoverable
      onClick={onClick}
      className={cn(
        ' border border-[var(--blue-normal)] bg-white/30 shadow-md flex flex-col justify-between p-3.5 sm:p-4 rounded-[28px] sm:rounded-[32px] overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full cursor-pointer select-none',
        className
      )}
    >
      {/* Top Image Thumbnail / Dynamic Data Graphic Box */}
      {/* <div className="relative w-full h-[180px] xs:h-[200px] sm:h-[220px] rounded-[22px] overflow-hidden mb-3.5 group shrink-0">
        <Image
          src={resolvedImageSrc}
          alt={cardTitle}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-700/75 via-slate-600/55 to-slate-500/10 px-4 py-3.5 sm:px-5 sm:py-4">
          <p className="text-white font-medium text-xs sm:text-sm leading-snug line-clamp-2">
            {cardTitle}
          </p>
        </div>
      </div> */}

      <div>
        <div className=" z-10   py-3.5 px-1  sm:py-4">
          <p className="text-white text-black! font-medium text-xs sm:text-sm leading-snug line-clamp-2">
            {cardTitle}
          </p>
        </div>
      </div>
      {/* Card Body Content */}
      <div className="flex-1 flex flex-col justify-between space-y-3 px-1.5 pb-1 text-left">
        <span className="inline-flex w-fit px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-sky-50 text-sky-700 border border-sky-100">
          {category}
        </span>
        <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Footer Row (Author, Date, Read time) */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-xs sm:text-[13px]">
          <span className="font-bold text-slate-900"></span>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="font-medium">{date}</span>
            {readTime && (
              <>
                <span>•</span>
                <span className="text-[11px] text-sky-600 font-medium">{readTime}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export default BlogCard;
