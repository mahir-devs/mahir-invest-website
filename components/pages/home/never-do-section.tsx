'use client';

import React from 'react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';
import {
  NoRocketIcon,
  NoCommisionIcon,
  NoPrommiseIcon,
  NoHiddenChargesIcon,
} from '@/components/svg/icons';
import { MotionContainer, MotionItem } from '@/components/animations';
import { SectionHeader } from '@/components/common/section-header';

const NEVER_DO_CARDS = [
  {
    id: 'no-quick-money',
    icon: (size: number) => <NoRocketIcon size={size} color="#D41B1B" />,
    title: 'No Quick Money\nTips',
  },
  {
    id: 'no-product-commissions',
    icon: (size: number) => <NoCommisionIcon size={size} color="#D41B1B" />,
    title: 'No Product\nCommissions',
  },
  {
    id: 'no-false-promises',
    icon: (size: number) => <NoPrommiseIcon size={size} color="#D41B1B" />,
    title: 'No False\nPromises',
  },
  {
    id: 'no-hidden-charges',
    icon: (size: number) => <NoHiddenChargesIcon size={size} color="#D41B1B" />,
    title: 'No Hidden\nCharges',
  },
];

export const NeverDoSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none">
      {/* Red Claude cloud background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src="/images/claude/red_claude_3.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 object-center"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      <MotionContainer
        staggerDelay={0.12}
        delay={0.1}
        className="relative max-w-5xl mx-auto z-10 text-center px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8"
      >
        <SectionHeader
          eyebrowText="Our Promise"
          eyebrowClassName="!text-[var(--red-dark)]"
          title={
            <>
              Some things <span className="font-syne font-[500]">MAHIR</span> will never do.
            </>
          }
          subtitle={
            <>
              Because <span className="font-semibold uppercase tracking-wider">YOUR TRUST</span> is more{' '}
              <span className="font-semibold uppercase tracking-wider">IMPORTANT</span> than anythings else.
            </>
          }
        />

        {/* 2-Column Cards Grid on Mobile & Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 max-w-3xl mx-auto pt-2 sm:pt-6">
          {NEVER_DO_CARDS.map((card) => (
            <MotionItem key={card.id} direction="up" distance={30} duration={0.55}>
              <GlassCard
                variant="dark"
                rounded="full"
                padding="none"
                blur="xl"
                className="border-[var(--red-light-active)] shadow-md shadow-[var(--red-normal)]/[0.04] text-center flex flex-col items-center justify-center rounded-[24px] lg:rounded-full px-3 sm:px-8 lg:px-10 py-5 sm:py-10 lg:py-12"
              >
                {/* Icon */}
                <div className="mb-2 sm:mb-4 flex items-center justify-center">
                  <div className="block sm:hidden">{card.icon(38)}</div>
                  <div className="hidden sm:block">{card.icon(52)}</div>
                </div>

                {/* Title (with line breaks) */}
                <h3 className="text-xs sm:text-base lg:text-[20px] font-normal text-slate-800 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
              </GlassCard>
            </MotionItem>
          ))}
        </div>

        {/* Bottom Red Glass Pill Banner */}
        <MotionItem direction="up" distance={25} duration={0.6} className="pt-4 sm:pt-6">
          <GlassCard
            variant="light"
            rounded="full"
            padding="sm"
            blur="xl"
            className="bg-[var(--red-light)]/60 border-[var(--red-light-active)] shadow-md shadow-[var(--red-normal)]/[0.06] max-w-3xl mx-auto inline-flex items-center justify-center rounded-full sm:rounded-full"
          >
            <p className="text-xs sm:text-sm lg:text-[16px] text-[var(--red-normal)] font-medium leading-relaxed px-3 sm:px-4 py-1 sm:py-0">
              If this is what you want, <span className="font-syne font-[500]">MAHIR</span> is not for you, and we will tell you that{' '}
              <span className="font-bold uppercase tracking-wider">HONESTLY.</span>
            </p>
          </GlassCard>
        </MotionItem>
      </MotionContainer>
    </section>
  );
};

export default NeverDoSection;
