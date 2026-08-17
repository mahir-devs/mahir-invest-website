'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { GlassButton } from '@/components/ui/glass-button';
import { GlassCard } from '@/components/ui/glass-card';
import { TradeUpIcons } from '@/components/svg/icons';
import { MotionContainer, MotionItem } from '@/components/animations';
import { useStoreUrl } from '@/hooks/use-store-url';

const ZERO_CARDS = [
  {
    id: 'commission',
    value: '0%',
    description: 'Commission on mutual fund or stock recommendations',
  },
  {
    id: 'hidden-fees',
    value: '0%',
    description: 'Hidden charges or platform fees beyond your plan',
  },
  {
    id: 'conflict',
    value: '0%',
    description: 'Conflict of interest, your goals are our only priority',
  },
];

// Custom Synchronized Mirror Fan-Out Animation Variants
const fanContainerVariants: Variants = {
  hidden: {},
  visible: {},
};

const centerPhoneVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
};

const phoneLeft1Variant: Variants = {
  hidden: { opacity: 0, x: 0, y: 15, rotate: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    x: '-52%',
    y: 0,
    rotate: -10,
    scale: 0.98,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 },
  },
};

const phoneRight1Variant: Variants = {
  hidden: { opacity: 0, x: 0, y: 15, rotate: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    x: '52%',
    y: 0,
    rotate: 10,
    scale: 0.98,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 },
  },
};

const phoneLeft2Variant: Variants = {
  hidden: { opacity: 0, x: 0, y: 25, rotate: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    x: '-98%',
    y: 6,
    rotate: -18,
    scale: 0.92,
    transition: { duration: 0.75, ease: 'easeOut', delay: 0.4 },
  },
};

const phoneRight2Variant: Variants = {
  hidden: { opacity: 0, x: 0, y: 25, rotate: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    x: '98%',
    y: 6,
    rotate: 18,
    scale: 0.92,
    transition: { duration: 0.75, ease: 'easeOut', delay: 0.4 },
  },
};

export const MobileAppSection: React.FC = () => {
  const { storeUrl } = useStoreUrl();

  return (
    <>
      <div className="relative w-full bg-gradient-to-b from-[#e7f4fa] via-[#e7f4fa] to-white select-none overflow-hidden">
        {/* Background Image Asset */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/claude/commonbgfinal.png"
            alt="Section Background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* ─── Hero Mobile Mockup Showcase Section ─── */}
        <section className="relative w-full pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none z-10">
          <MotionContainer
            staggerDelay={0.15}
            delay={0.1}
            className="relative max-w-6xl mx-auto text-center space-y-8 sm:space-y-12"
          >
            {/* Header Content */}
            <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              <MotionItem direction="down" duration={0.5}>
                <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-widest uppercase">
                  DOWNLOAD MAHIR APP
                </p>
              </MotionItem>

              <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
                <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-slate-900 tracking-tight leading-tight">
                  Built for clarity, speed, and peace of mind
                </h2>
              </MotionItem>

              <MotionItem direction="up" distance={15} duration={0.5}>
                <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
                  Access non-conflicted research, track portfolios, and invest directly from our mobile application.
                </p>
              </MotionItem>
            </div>

            {/* CTA Button */}
            <MotionItem direction="between" duration={0.5} className="flex justify-center pt-1">
              <a href={storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <GlassButton
                  variant="cyan"
                  size="md"
                  isGlowIcon
                  label="Download Our App"
                  icon={<TradeUpIcons size={18} color="white" />}
                  iconBgColor="bg-[var(--green-normal)]"
                  className="w-[215px] sm:w-[225px]"
                />
              </a>
            </MotionItem>

            {/* 5 Synchronized Fan-Out Mobile Mockups Showcase Container */}
            <motion.div
              variants={fanContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative w-full max-w-5xl mx-auto min-h-[250px] xs:min-h-[300px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] flex items-center justify-center pt-6 sm:pt-10 pb-6 overflow-visible"
            >
              {/* Phone Left 2 (glides out fourth) */}
              <motion.div
                variants={phoneLeft2Variant}
                className="absolute bottom-2 sm:bottom-4 w-[80px] xs:w-[98px] sm:w-[150px] md:w-[175px] lg:w-[220px] z-[1]"
              >
                <div className="relative w-full drop-shadow-2xl">
                  <Image
                    src="/images/mobile_app/mobile_left2_mockup.png"
                    alt="MAHIR App - Sector Insights"
                    width={410}
                    height={840}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Phone Left 1 (glides out second) */}
              <motion.div
                variants={phoneLeft1Variant}
                className="absolute bottom-1 sm:bottom-2 w-[95px] xs:w-[115px] sm:w-[175px] md:w-[205px] lg:w-[240px] z-[2]"
              >
                <div className="relative w-full drop-shadow-2xl">
                  <Image
                    src="/images/mobile_app/mobile_left1_mockup.png"
                    alt="MAHIR App - Screener Filters"
                    width={410}
                    height={840}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Phone Center Anchor (glides up first) */}
              <motion.div
                variants={centerPhoneVariant}
                className="relative w-[115px] xs:w-[138px] sm:w-[210px] md:w-[240px] lg:w-[250px] z-[10] drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] shrink-0"
              >
                <Image
                  src="/images/mobile_app/mobile_middle_mockup.png"
                  alt="MAHIR App Main Screen"
                  width={440}
                  height={800}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* Phone Right 1 (glides out third) */}
              <motion.div
                variants={phoneRight1Variant}
                className="absolute bottom-1 sm:bottom-2 w-[95px] xs:w-[115px] sm:w-[175px] md:w-[205px] lg:w-[240px] z-[2]"
              >
                <div className="relative w-full drop-shadow-2xl">
                  <Image
                    src="/images/mobile_app/mobile_right1_mockup.png"
                    alt="MAHIR App - Financial Dashboard"
                    width={410}
                    height={840}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Phone Right 2 (glides out fifth) */}
              <motion.div
                variants={phoneRight2Variant}
                className="absolute bottom-2 sm:bottom-4 w-[80px] xs:w-[98px] sm:w-[150px] md:w-[175px] lg:w-[220px] z-[1]"
              >
                <div className="relative w-full drop-shadow-2xl">
                  <Image
                    src="/images/mobile_app/mobile_right2_mockup.png"
                    alt="MAHIR App - Warren Buffett Insights"
                    width={410}
                    height={840}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </MotionContainer>
        </section>

        {/* ─── Zero Commissions / Pricing Philosophy Section ─── */}
        <section className="relative w-full py-10 sm:py-16 overflow-hidden select-none">
          {/* Subtle cloud-like decoration */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/30 blur-[130px] rounded-full" />
          </div>

          <MotionContainer
            staggerDelay={0.15}
            delay={0.1}
            className="relative max-w-5xl mx-auto z-10 text-center px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8"
          >
            {/* Eyebrow */}
            <MotionItem direction="up" distance={20} duration={0.5}>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Pricing Philosophy
              </p>
            </MotionItem>

            {/* Heading */}
            <MotionItem direction="up" distance={25} duration={0.6} className="space-y-1">
              <h2 className="text-3xl sm:text-[60px] md:text-5xl lg:text-[52px] font-normal text-slate-900 tracking-tight leading-[1.15]">
                Zero Commissions
              </h2>
              <h2 className="text-3xl sm:text-[60px] md:text-5xl lg:text-[52px] font-normal text-slate-900 tracking-tight leading-[1.15]">
                Zero Hidden Fees.
              </h2>
            </MotionItem>

            {/* Description */}
            <MotionItem direction="up" distance={20} duration={0.5} className="max-w-2xl mx-auto space-y-0.5">
              <p className="text-xs sm:text-[15.05px] text-slate-500 font-normal leading-relaxed">
                We never earn commissions from AMCs, brokers or third parties.
              </p>
              <p className="text-xs sm:text-[15.05px] text-slate-500 font-normal leading-relaxed">
                Our only revenue is the advisory fee you pay, and that is why we are only answerable to you!
              </p>
            </MotionItem>

            {/* 0% Cards Grid - Compact Horizontal Bar Layout on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6 max-w-4xl mx-auto pt-2 sm:pt-4">
              {ZERO_CARDS.map((card) => (
                <MotionItem key={card.id} direction="up" distance={20} duration={0.5}>
                  <GlassCard
                    variant="light"
                    rounded="2xl"
                    padding="none"
                    blur="xl"
                    className="bg-white/50 border-[var(--blue-normal)]/80 shadow-md shadow-slate-900/[0.03] flex flex-row sm:flex-col items-center justify-start sm:justify-center p-3.5 xs:p-4 sm:px-8 sm:py-9 sm:rounded-full rounded-2xl transition-all"
                  >
                    {/* 0% Value */}
                    <span className="text-2xl xs:text-3xl sm:text-[44px] lg:text-[50px] font-light sm:font-extralight text-slate-800 tracking-tight leading-none shrink-0 sm:mb-3 w-12 xs:w-14 sm:w-auto text-center">
                      {card.value}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-xs lg:text-[13px] text-slate-700 sm:text-slate-400 font-medium sm:font-normal leading-snug sm:leading-[1.5] text-left sm:text-center flex-1 sm:flex-initial max-w-full sm:max-w-[190px]">
                      {card.description}
                    </p>
                  </GlassCard>
                </MotionItem>
              ))}
            </div>
          </MotionContainer>
        </section>
      </div>
    </>
  );
};

export default MobileAppSection;
