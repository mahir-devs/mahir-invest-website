'use client';

import React from 'react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui/glass-card';
import { Brain } from 'lucide-react';
import {
  TradeChartIcons,
  InsightBulbIcons,
  BellIcons,
  LearnBookIcons,
  ExitGateIcons,
  BlueLineIcons,
} from '@/components/svg/icons';
import { MotionContainer, MotionItem } from '@/components/animations';

export interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'know-what-to-buy',
    icon: <TradeChartIcons size={28} color="#00b328" />,
    title: 'Know what to buy',
    description: 'Research backed recommendations',
  },
  {
    id: 'expert-research',
    icon: <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-red-500 stroke-[1.75]" />,
    title: 'Expert Research',
    description: 'In-depth analysis, by SEBI registered analysts',
  },
  {
    id: 'market-insights',
    icon: <InsightBulbIcons size={28} color="#febe0e" />,
    title: 'Market insights',
    description: 'Visual Insigts for Better clarity',
  },
  {
    id: 'learn-while-you-invest',
    icon: <LearnBookIcons size={28} color="#ef4444" />,
    title: 'Learn while you Invest',
    description: 'Weekly audio & visual updates',
  },
  {
    id: 'never-miss-opportunity',
    icon: <BellIcons size={28} color="#febe0e" />,
    title: 'Never miss an opportunity',
    description: 'Instant Buy & Sell Alerts',
  },
  {
    id: 'know-when-to-buy-sell',
    icon: <ExitGateIcons size={28} color="#00b328" />,
    title: 'Know when to Buy & Sell',
    description: 'Clear entry, target & exit',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Image Asset */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/claude/commonbgfinal.png"
          alt="Pricing Section Background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <MotionContainer
        staggerDelay={0.1}
        delay={0.1}
        className="relative max-w-5xl mx-auto space-y-8 sm:space-y-12 z-10"
      >
        {/* Main Heading with Blue Brush Underline */}
        <MotionItem direction="up" distance={25} duration={0.6}>
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-normal sm:font-medium text-slate-900 tracking-tight leading-tight">
              What changes when you
            </h2>
            <div className="relative inline-flex flex-col items-center mt-0.5">
              <span className="text-2xl sm:text-4xl lg:text-[40px] font-normal sm:font-medium text-slate-900 tracking-tight leading-tight">
                have <span className="font-syne font-medium">MAHIR</span>
              </span>
              <div className="w-36 sm:w-48 -mt-1 sm:-mt-1.5 overflow-hidden flex justify-center">
                <BlueLineIcons />
              </div>
            </div>
          </div>
        </MotionItem>

        {/* Features 2-Column Grid on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {FEATURES_DATA.map((feature) => (
            <MotionItem key={feature.id} direction="up" distance={25} duration={0.5}>
              <GlassCard
                variant="frosted"
                rounded="2xl"
                padding="none"
                hoverable
                className="bg-white/50 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-slate-900/5 text-center flex flex-col items-center justify-center p-3.5 sm:p-7 space-y-2 sm:space-y-3 transition-transform duration-300 hover:scale-[1.03] min-h-[150px] sm:min-h-[200px]"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center h-8 sm:h-12">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-base lg:text-[17px] font-medium text-slate-900 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-[13px] text-slate-400 font-normal leading-tight max-w-[140px] sm:max-w-[200px]">
                  {feature.description}
                </p>
              </GlassCard>
            </MotionItem>
          ))}
        </div>
      </MotionContainer>
    </section>
  );
};

export default FeaturesSection;
