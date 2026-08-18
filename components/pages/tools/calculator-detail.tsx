'use client';

import React from 'react';
import Link from 'next/link';
import { getCalculatorConfig } from '@/lib/calculators/config';
import SipCalculator from './sip-calculator';
import LumpsumCalculator from './lumpsum-calculator';
import SwpCalculator from './swp-calculator';
import RetirementPlanner from './retirement-planner';
import EmiCalculator from './emi-calculator';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { ArrowLeft } from 'lucide-react';

export interface CalculatorDetailPageProps {
  id?: string;
}

const CALCULATOR_COMPONENTS: Record<string, React.FC> = {
  'sip-calculator': SipCalculator,
  'lumpsum-calculator': LumpsumCalculator,
  'swp-calculator': SwpCalculator,
  'retirement-planner': RetirementPlanner,
  'emi-calculator': EmiCalculator,
};

const CalculatorNotFound: React.FC = () => (
  <div className="relative w-full min-h-screen overflow-hidden select-none">
    <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <CloudAnimation height={90} opacity={1} speed={26} />
      <MotionContainer className="relative max-w-2xl mx-auto text-center z-10 space-y-8">
        <MotionItem direction="down" duration={0.5}>
          <h1 className="text-4xl sm:text-5xl font-normal text-white tracking-tight">
            Calculator Not Found
          </h1>
        </MotionItem>
        <MotionItem direction="up" duration={0.5}>
          <p className="text-white/80 text-sm sm:text-base">
            The calculator you are looking for does not exist yet.
          </p>
        </MotionItem>
        <MotionItem direction="up" duration={0.5}>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Calculators
          </Link>
        </MotionItem>
      </MotionContainer>
    </section>
    <div className="relative z-10 w-full">
      <SectionDivider />
      <Footer />
    </div>
  </div>
);

export const CalculatorDetailPage: React.FC<CalculatorDetailPageProps> = ({
  id = 'emi-calculator',
}) => {
  const Calculator = CALCULATOR_COMPONENTS[id];

  if (!Calculator) {
    return <CalculatorNotFound />;
  }

  // Ensure config exists (optional validation)
  getCalculatorConfig(id);

  return <Calculator />;
};

export default CalculatorDetailPage;
