'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { PlayStoreIcon, AppStoreIcon } from '@/components/svg/icons';
import Image from 'next/image';
import { MotionContainer, MotionItem } from '@/components/animations';
import { SectionHeader } from '@/components/common/section-header';
import { GET_APP_QR_SRC, PLAY_STORE_URL, APP_STORE_URL } from '@/lib/assets';

export const DownloadJourneySection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden select-none">
      {/* Background Image Asset */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/claude/commonbgfinal.png"
          alt="Pricing Section Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <MotionContainer
        staggerDelay={0.12}
        delay={0.1}
        className="relative max-w-6xl mx-auto z-10 text-center px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-4"
      >
        <SectionHeader
          eyebrowText="MAHIR APP"
          title={
            <>
              Start Your Journey to Become{' '}
              <span className="font-syne font-[500]">MAHIR.</span>
            </>
          }
          subtitle="Download the MAHIR App"
        />

        {/* QR Code Container */}
        <MotionItem direction="scaleUp" scale={0.92} duration={0.6} className="flex justify-center pt-6 sm:pt-8">
          <GlassCard
            variant="light"
            rounded="2xl"
            padding="none"
            blur="xl"
            className="bg-white/60 backdrop-blur-2xl border border-[var(--blue-normal)]/40 shadow-xl shadow-sky-900/5 p-6 sm:p-8 w-[200px] sm:w-[230px] h-[200px] sm:h-[230px] flex items-center justify-center"
          >
            <Image
              src={GET_APP_QR_SRC}
              alt="Scan to download the MAHIR App"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </GlassCard>
        </MotionItem>

        {/* Store Download Buttons */}
        <MotionItem direction="between" duration={0.6} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
          {/* Google Play Button */}
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <GlassCard
              variant="light"
              rounded="full"
              padding="none"
              blur="xl"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/40 shadow-md shadow-sky-900/5 hover:bg-white transition-all cursor-pointer px-6 py-2.5 flex items-center justify-center gap-3 min-w-[190px]"
            >
              <PlayStoreIcon size={24} color="#111111" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-500 font-medium">Get it on</p>
                <p className="text-sm font-semibold text-slate-900">Google Play</p>
              </div>
            </GlassCard>
          </a>

          {/* App Store Button */}
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <GlassCard
              variant="light"
              rounded="full"
              padding="none"
              blur="xl"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/40 shadow-md shadow-sky-900/5 hover:bg-white transition-all cursor-pointer px-6 py-2.5 flex items-center justify-center gap-3 min-w-[190px]"
            >
              <AppStoreIcon size={26} color="#111111" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-500 font-medium">Download on the</p>
                <p className="text-sm font-semibold text-slate-900">App Store</p>
              </div>
            </GlassCard>
          </a>
        </MotionItem>
      </MotionContainer>
    </section>
  );
};

export default DownloadJourneySection;

