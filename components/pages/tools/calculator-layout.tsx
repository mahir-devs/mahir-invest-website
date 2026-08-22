'use client';

import React from 'react';
import Link from 'next/link';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { SectionHeader } from '@/components/common/section-header';
import { ArrowLeft } from 'lucide-react';
import type { CalculatorConfig } from '@/lib/calculators/config';

interface CalculatorPageLayoutProps {
  config: CalculatorConfig;
  children: React.ReactNode;
}

export const CalculatorPageLayout: React.FC<CalculatorPageLayoutProps> = ({
  config,
  children,
}) => (
  <div className="relative w-full min-h-screen overflow-hidden select-none">
    <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <CloudAnimation height={90} opacity={1} speed={26} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

      <MotionContainer
        staggerDelay={0.15}
        delay={0.1}
        className="relative max-w-6xl mx-auto text-center z-10 space-y-10 sm:space-y-14"
      >
        <SectionHeader
          isHeadingDark
          eyebrowText={config.eyebrow}
          eyebrowClassName="!text-sky-200"
          title={config.title}
          subtitle={config.description}
        />

        <MotionItem direction="down" duration={0.4}>
          <div className="flex justify-start max-w-5xl mx-auto">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Calculators</span>
            </Link>
          </div>
        </MotionItem>

        {children}

        <MotionItem direction="up" distance={15} duration={0.5} className="pt-4 max-w-3xl mx-auto">
          <p className="text-xs text-black/50 font-normal leading-relaxed text-center">
            {config.disclaimer}
          </p>
        </MotionItem>
      </MotionContainer>
    </section>

    <div className="relative z-10 w-full">
      <SectionDivider />
      <Footer />
    </div>
  </div>
);
