'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/ui/glass-card';

import { SectionHeader } from '@/components/common/section-header';

export const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-light)] via-50% to-white">
      {/* Top Hero Section */}
      <section className="relative w-full text-white pt-34 sm:pt-38 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-4xl mx-auto z-10 space-y-6 text-center">
          <SectionHeader
            isHeadingDark
            eyebrowText="Built for You With Clarity"
            title="About"
            subtitle={
              <>
                <strong className="font-semibold font-syne text-white">MAHIR </strong>Invest is a SEBI-registered Investment Adviser built to help investors think clearly, decide confidently, and build wealth sustainably through research-backed stock recommendations and disciplined risk management.
              </>
            }
            subtitleClassName="max-w-3xl sm:max-w-4xl text-base sm:text-xl leading-relaxed text-white/90"
          />
        </MotionContainer>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 w-full text-slate-900 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="relative max-w-5xl mx-auto z-10 space-y-20">

          {/* --- HOW WE STARTED / CLARITY OVER NOISE GLASSCARD --- */}
          <GlassCard
            variant="light"
            blur="2xl"
            rounded="3xl"
            padding="lg"
            className="bg-white/70 backdrop-blur-2xl border border-[var(--blue-normal)]/30 shadow-xl shadow-sky-900/5 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              <p>
                <span className='font-syne font-semibold'>MAHIR </span> Invest is built to help you invest with more <span className='font-syne'>clarity</span> and less noise. Every research note, portfolio update, and recommendation is designed to make your investment decisions better, simpler, and more confident.
              </p>
              <p>
                We do not chase trends or push commission-driven products. Our advisory starts with one question: <strong className="font-semibold text-slate-900">will this help the client build wealth over time?</strong> That question drives our stock research, risk framework, portfolio reviews, and the way we communicate every investment idea.
              </p>
              <p>
                What you read in our reports is backed by documented research. The strict risk checks, compliance reviews, and our refusal to recommend anything we would not own ourselves are what make the advice worth following. MAHIR Invest is for investors who take the long term seriously and expect the same from their partner.
              </p>
            </div>
          </GlassCard>

          {/* --- DIRECTOR LEADERSHIP SECTION --- */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 pt-4">
            {/* Left Column: Director Image in White Card */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="bg-white rounded-[32px] sm:rounded-[36px] p-3 sm:p-4 shadow-2xl shadow-sky-900/10 border border-white/90 overflow-hidden w-full max-w-md">
                <Image
                  src="/yash-new-director.jpg"
                  alt="Yash Bedmuttha - Director"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain rounded-[24px] sm:rounded-[28px]"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Leadership Copy */}
            <div className="w-full md:w-1/2 space-y-6 text-left">
              <span className="text-md  font-semibold uppercase tracking-widest text-slate-400">
                DIRECTOR
              </span>

              {/* <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight leading-[1.15]">
                <span className="font-semibold text-slate-900">A Steady Hand</span>{' '}
                <span className="text-slate-400 font-normal">Behind Every Recommendation.</span>
              </h2> */}

              <p className="text-sm mt-4 sm:text-base lg:text-[16px] text-slate-600 leading-relaxed font-normal">
                Yash leads <span className='font-syne font-semibold'>MAHIR </span> Invest with a focus on building SEBI-registered advisory systems that serve clients first. His experience across research, advisory, and governance shapes the discipline and transparency behind every MAHIR Invest recommendation.
              </p>

              <blockquote className="text-sm sm:text-base text-slate-700 italic font-normal pt-4 border-t border-slate-200/80">
                &ldquo;We would rather explain a modest recommendation than defend a loud one. That&apos;s the only way this compounds.&rdquo;
              </blockquote>

              <p className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase">
                YASH BEDMUTTHA, DIRECTOR &amp; PRINCIPAL OFFICER, MAHIR INVEST
              </p>

              <div className="pt-2">
                <a
                  href="mailto:admin@mahirinvest.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[var(--blue-normal)] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[var(--blue-normal-hover)] transition-all shadow-md shadow-sky-900/15 active:scale-95 cursor-pointer"
                >
                  TALK TO US
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
