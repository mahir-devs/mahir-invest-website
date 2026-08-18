'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { ToolCard } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { getFeaturedTools, type ToolListItem } from '@/lib/calculators/config';

export type { ToolListItem as ToolItem };

export const TOOLS_DATA = getFeaturedTools();

export const ToolsPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={90} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer
          staggerDelay={0.15}
          delay={0.1}
          className="relative max-w-6xl mx-auto text-center z-10 space-y-12 sm:space-y-16"
        >
          <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
            <MotionItem direction="down" duration={0.5}>
              <p className="text-xs sm:text-[14px] uppercase text-sky-200 font-medium tracking-widest">
                FINANCIAL CALCULATORS
              </p>
            </MotionItem>

            <MotionItem direction="scaleDown" scale={1.15} duration={0.6}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                Tools &amp; Guides
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-xs sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-xl mx-auto">
                Financial calculators to help you plan smarter — from SIPs and retirement to systematic withdrawals.
              </p>
            </MotionItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto text-left">
            {TOOLS_DATA.map((tool) => (
              <MotionItem key={tool.id} direction="up" distance={25} duration={0.5}>
                <ToolCard
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                />
              </MotionItem>
            ))}
          </div>
        </MotionContainer>
      </section>

      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default ToolsPage;
