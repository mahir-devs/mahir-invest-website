'use client';

import React from 'react';
import { Clock, BookOpen, Home, TrendingUp, Users, Heart } from 'lucide-react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { GlassCard } from '@/components/ui/glass-card';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

export interface PerkItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const PERKS_DATA: PerkItem[] = [
  {
    id: 'flexible-timings',
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Flexible Timings',
    description: 'We trust you to manage your time. Work when you’re most productive — early mornings or late nights, it’s your call.',
  },
  {
    id: 'learning-budget',
    icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Learning Budget',
    description: 'Annual budget for courses, certifications, and conferences. We invest in your growth because it benefits everyone.',
  },
  {
    id: 'remote-friendly',
    icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Remote Friendly',
    description: 'Work from anywhere. We have team members across India and believe great work doesn’t require a specific location.',
  },
  {
    id: 'performance-bonuses',
    icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Performance Bonuses',
    description: 'Hard work is recognized and rewarded. Quarterly bonuses tied to individual and team performance metrics.',
  },
  {
    id: 'small-team-big-impact',
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Small Team, Big Impact',
    description: 'You won’t be a cog in a machine. Every team member directly shapes the product and impacts thousands of investors.',
  },
  {
    id: 'health-benefits',
    icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 stroke-[1.75]" />,
    title: 'Health Benefits',
    description: 'Comprehensive health insurance for you and your family. Your well-being matters to us.',
  },
];

export const CareersPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Single Top Sky Blue Gradient Background Container wrapping Hero & Perks Section */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={80} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-5xl mx-auto text-center z-10 space-y-16 sm:space-y-24">
          {/* Careers Hero Section */}
          <div className="space-y-8 sm:space-y-12">
            {/* Header Title */}
            <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
              <MotionItem direction="down" duration={0.5}>
                <p className="text-xs sm:text-[14px] uppercase text-sky-200 font-medium tracking-widest">
                  JOIN OUR MISSION
                </p>
              </MotionItem>

              <MotionItem direction="scaleDown" scale={1.15} duration={0.6}>
                <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                  Careers
                </h1>
              </MotionItem>

              <MotionItem direction="up" distance={15} duration={0.5}>
                <p className="text-xs sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-xl mx-auto">
                  Learn about life at MAHIR and the values that shape how we work.
                </p>
              </MotionItem>
            </div>

            {/* "We're not hiring right now" Glass Card */}
            <MotionItem direction="up" distance={30} duration={0.65} className="max-w-2xl mx-auto w-full">
              <GlassCard
                variant="dark"
                rounded="3xl"
                padding="none"
                className=" border border-white/90 shadow-xl text-center p-8 sm:p-12 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-center mx-auto mb-2 text-slate-700">
                  <Clock className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight">
                  We&apos;re not hiring right now
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-md mx-auto">
                  There are no open positions at the moment. We&apos;ll share new opportunities here when they become available — thank you for your interest in MAHIR.
                </p>
              </GlassCard>
            </MotionItem>
          </div>

          {/* Perks & Benefits Section inside Blue Sky Background */}
          <div className="space-y-10 sm:space-y-14">
            {/* Section Heading */}
            <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
              <MotionItem direction="up" distance={20} duration={0.5}>
                <p className="text-xs sm:text-[14px] uppercase text-[var(--blue-normal)]/50 font-medium tracking-widest">
                  JOIN US
                </p>
              </MotionItem>

              <MotionItem direction="up" distance={25} duration={0.6}>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-gray-700 tracking-tight leading-tight">
                  Our Perks And Benefits
                </h2>
              </MotionItem>

              <MotionItem direction="up" distance={20} duration={0.5}>
                <p className="text-xs sm:text-sm lg:text-[15px] text-gray-500/90 font-normal leading-relaxed max-w-lg mx-auto">
                  We believe great work happens where people feel supported, trusted, and valued.
                </p>
              </MotionItem>
            </div>

            {/* 6 Perks Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto text-left">
              {PERKS_DATA.map((perk) => (
                <MotionItem key={perk.id} direction="up" distance={25} duration={0.5}>
                  <GlassCard
                    variant="frosted"
                    rounded="2xl"
                    padding="none"
                    className=" border border-white/90 shadow-md text-left flex flex-col justify-start p-4 sm:p-7 space-y-3 h-full rounded-[24px] lg:rounded-3xl"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
                      {perk.icon}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-base lg:text-[17px] font-semibold text-slate-900 leading-snug">
                        {perk.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs lg:text-[13px] text-slate-500 font-normal leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </GlassCard>
                </MotionItem>
              ))}
            </div>

            {/* Bottom Email Contact Note */}
            <MotionItem direction="up" distance={20} duration={0.5} className="pt-2">
              <p className="text-xs sm:text-sm text-black/50 font-medium">
                Don&apos;t see your role? Email us at{' '}
                <a
                  href="mailto:contact@mahir.in"
                  className="text-gray-800/70 font-semibold underline underline-offset-4 hover:text-gray-800"
                >
                  contact@mahir.in
                </a>
              </p>
            </MotionItem>
          </div>
        </MotionContainer>
      </section>

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default CareersPage;
