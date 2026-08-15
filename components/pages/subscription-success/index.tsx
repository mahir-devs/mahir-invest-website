'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { GlassCard } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { Check } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import {
  UnlockIcon,
  TimeLapseIcon,
  SmartTrachingIcon,
  PlayStoreIcon,
  AppStoreIcon,
} from '@/components/svg/icons';
import { GET_APP_QR_SRC, PLAY_STORE_URL, APP_STORE_URL } from '@/lib/assets';
export interface NextStepItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const WHAT_HAPPENS_NEXT_ITEMS: NextStepItem[] = [
  {
    id: 'access-unlocked',
    icon: <UnlockIcon size={26} color="#00AD17" />,
    title: 'Access Unlocked',
    description: 'You now have full access to all features, insights and recommendations',
  },
  {
    id: 'real-time-updates',
    icon: <TimeLapseIcon size={26} color="#00AD17" />,
    title: 'Real-Time Updates',
    description: 'Get timely alerts and updates to help you take the right actions',
  },
  {
    id: 'smart-tracking',
    icon: <SmartTrachingIcon size={26} color="#00AD17" />,
    title: 'Smart Tracking',
    description: 'Track your portfolio and performance with simple, clear insights',
  },
];

export interface MobileAppFeatureItem {
  id: string;
  title: string;
  description: string;
}

export const MOBILE_APP_FEATURES: MobileAppFeatureItem[] = [
  {
    id: 'instant-stock-alerts',
    title: 'Instant Stock Alerts',
    description: 'Get real-time updates on stock recommendations and key actions',
  },
  {
    id: 'weekly-market-insights',
    title: 'Weekly Market Insights',
    description: 'Stay updated with simple summaries of market trends and movements',
  },
  {
    id: 'portfolio-tracking',
    title: 'Portfolio Tracking',
    description: 'Monitor your investments and performance anytime, anywhere',
  },
];

export const SubscriptionSuccessPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Sky Blue Gradient Background Section */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={90} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-4xl mx-auto text-center z-10 space-y-12">
          {/* Main Outer Glass Card Container */}
          <MotionItem direction="scaleDown" scale={1.05} duration={0.65} className="w-full">
            <GlassCard
              variant="frosted"
              rounded="3xl"
              padding="none"
              className="border border-white/90 shadow-2xl p-6 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[44px] text-center space-y-10 sm:space-y-12 w-full"
            >
              {/* Success Green Checkmark & Header */}
              <div className="space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <Check className="w-9 h-9 sm:w-11 sm:h-11 stroke-[2.5]" />
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
                    Congratulations!<br />
                    You&apos;re Now a Premium Member
                  </h1>
                  <p className="text-xs sm:text-sm text-white/50 font-normal max-w-md mx-auto leading-relaxed">
                    Your subscription is active and you can now explore all recommendations and tools.
                  </p>
                </div>
              </div>

              {/* Section 1: What Happens Next */}
              <div className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight">
                  What Happens Next
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {WHAT_HAPPENS_NEXT_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className="bg-sky-200/40 border border-white/40 rounded-[24px] p-5 text-center space-y-2"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto  ">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-normal text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Get All Updates on our mobile App */}
              <div className="bg-sky-200/30 border border-sky-300/40 rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                {/* Left Mobile Frame Mockup */}
                <div className="relative w-44 sm:w-52 h-76 sm:h-84">
                  <Image src="/images/mock_up.png"
                    alt="Mobile Frame" fill className="object-contain" />
                </div>

                {/* Right Info & Feature Banners */}
                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      Get All Updates on our mobile App
                    </h2>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      Download our app to receive instant alerts, market insights and track your investments in one place
                    </p>
                  </div>

                  {/* 3 Translucent Banners */}
                  <div className="space-y-3 pt-1">
                    {MOBILE_APP_FEATURES.map((feature) => (
                      <GlassCard
                        variant="frosted"
                        rounded="full"
                        padding="none"
                        key={feature.id}
                        className="p-5 shadow-none rounded-full border border-sky-300/80 space-y-0.5"
                      >
                        <h4 className="text-xs font-normal text-slate-900">
                          {feature.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-normal">
                          {feature.description}
                        </p>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </MotionItem>

          {/* Section 3: Scan QR and Download — same design as home download journey */}
          <MotionItem direction="up" distance={30} duration={0.65} className="space-y-4 pt-4">
            <div className="space-y-1 text-center">
              <p className="text-xs sm:text-[15px] uppercase text-slate-500 font-medium tracking-[0.25em]">
                MAHIR APP
              </p>
              <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight mx-auto">
                Scan the QR and download the mobile version
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-normal tracking-wide">
                Download the MAHIR App
              </p>
            </div>

            {/* QR Code Container */}
            <div className="flex justify-center pt-6 sm:pt-8">
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
            </div>

            {/* Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
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
            </div>
          </MotionItem>
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

export default SubscriptionSuccessPage;
