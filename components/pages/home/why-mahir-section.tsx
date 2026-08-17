'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import {
  TradeUpChart,
  CopySearchIcon,
  RiskFirstIcon,
  BuildForYouIcon,
} from '@/components/svg/icons';
import Image from 'next/image';
import { MotionContainer, MotionItem } from '@/components/animations';

const WHY_MAHIR_CARDS = [
  {
    id: 'right-entry-exit',
    icon: (size: number) => <TradeUpChart size={size} color="#1B99D4" />,
    title: 'Right Entry & Exit',
    description: 'We tell you when to enter and exit.',
  },
  {
    id: 'research-backed',
    icon: (size: number) => <CopySearchIcon size={size} color="#1B99D4" />,
    title: 'Research Backed',
    description: 'In-depth research by SEBI registered analysis',
  },
  {
    id: 'highlighting-risk',
    icon: (size: number) => <RiskFirstIcon size={size} color="#1B99D4" />,
    title: 'Highlighting Risk First',
    description: 'We highlight risks before opportunity',
  },
  {
    id: 'built-for-you',
    icon: (size: number) => <BuildForYouIcon size={size} color="#1B99D4" />,
    title: 'Built for You',
    description: 'Simple, focused and made for investors',
  },
];

export const WhyMahirSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none">
      {/* Background Image Asset */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/claude/commonbgfinal.png"
          alt="Pricing Section Background"
          fill
          priority
          className="object-cover object-[center_200px]"
        />
      </div>

      <MotionContainer
        staggerDelay={0.12}
        delay={0.1}
        className="relative max-w-4xl mx-auto z-10 text-center px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-4"
      >
        {/* Eyebrow */}
        <MotionItem direction="up" distance={20} duration={0.5}>
          <p className="text-xs sm:text-[15px] uppercase text-slate-500 font-medium tracking-wide">
            Why MAHIR
          </p>
        </MotionItem>

        {/* Heading */}
        <MotionItem direction="up" distance={25} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-normal text-[var(--blue-darker)] tracking-tight leading-tight">
            Why is <span className="font-syne font-[500]">MAHIR</span> different?
          </h2>
        </MotionItem>

        {/* Subtitle */}
        <MotionItem direction="up" distance={20} duration={0.5}>
          <p className="text-sm sm:text-[22px] text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            Everyone has Stock tips, <span className="font-syne font-[500]">MAHIR</span> has the{' '}
            <span className="font-semibold tracking-wider uppercase">RESEARCH</span>
          </p>
        </MotionItem>

        {/* 2-Column Cards Grid on Mobile & Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 max-w-3xl mx-auto pt-2 sm:pt-8">
          {WHY_MAHIR_CARDS.map((card) => (
            <MotionItem key={card.id} direction="up" distance={30} duration={0.55}>
              <GlassCard
                variant="dark"
                rounded="full"
                padding="none"
                blur="xl"
                className="border-[var(--blue-normal)] rounded-[24px] lg:rounded-full text-center flex flex-col items-center justify-center px-3 py-5 sm:px-6 sm:py-8 lg:p-10 min-h-[160px] sm:min-h-[220px]"
              >
                {/* Icon */}
                <div className="mb-2 sm:mb-4 flex items-center justify-center">
                  <div className="block sm:hidden">{card.icon(32)}</div>
                  <div className="hidden sm:block">{card.icon(42)}</div>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-base lg:text-[20px] font-semibold text-[var(--blue-darker)] mb-1 sm:mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs lg:text-[18px] text-[#666666] font-normal leading-snug sm:leading-[1.5] max-w-[140px] sm:max-w-[220px] mx-auto">
                  {card.description}
                </p>
              </GlassCard>
            </MotionItem>
          ))}
        </div>
      </MotionContainer>
    </section>
  );
};

export default WhyMahirSection;
