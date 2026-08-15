'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { GlassButton } from '@/components/ui/glass-button';
import { Text } from '@/components/common/text';
import { TradeUpIcons } from '@/components/svg/icons';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { MotionContainer, MotionItem } from '@/components/animations';
import { useStoreUrl } from '@/hooks/use-store-url';

export const HeroSection: React.FC = () => {
  const { storeUrl } = useStoreUrl();
  return (
    <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-8 sm:pt-12 overflow-hidden select-none">
      <CloudAnimation height={90} opacity={.8} speed={26} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

      <MotionContainer
        staggerDelay={0.15}
        delay={0.1}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-0 text-center space-y-5 sm:space-y-6 z-10"
      >
        {/* 1. Star Rating & User Avatars Header */}
        <MotionItem direction="down" duration={0.5} className="flex flex-col items-center justify-center space-y-2.5">
          {/* 5 Solid White Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="size-[20px] sm:size-[20px] fill-white text-white stroke-none" />
            ))}
          </div>

          {/* Overlapping User Avatars + 10,000+ Happy Users */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <Image
                width={20}
                height={20}
                className="inline-block h-[20px] w-[20px] rounded-full ring-2 ring-[var(--blue-normal)] object-cover"
                src="/images/hero/user_1.png"
                alt="User 1"
              />
              <Image
                width={20}
                height={20}
                className="inline-block h-[20px] w-[20px] rounded-full ring-2 ring-[var(--blue-normal)] object-cover"
                src="/images/hero/user_2.png"
                alt="User 2"
              />
              <Image
                width={20}
                height={20}
                className="inline-block h-[20px] w-[20px] rounded-full ring-2 ring-[var(--blue-normal)] object-cover"
                src="/images/hero/user_3.png"
                alt="User 3"
              />
              <Image
                width={20}
                height={20}
                className="inline-block h-[20px] w-[20px] rounded-full ring-2 ring-[var(--blue-normal)] object-cover"
                src="/images/hero/user_4.png"
                alt="User 4"
              />
              <Image
                width={20}
                height={20}
                className="inline-block h-[20px] w-[20px] rounded-full ring-2 ring-[var(--blue-normal)] object-cover"
                src="/images/hero/user_5.png"
                alt="User 5"
              />
            </div>

            <Text variant="body-sm" weight="semibold" color="inverse" className="tracking-wide">
              10,000+ Happy Users
            </Text>
          </div>
        </MotionItem>

        {/* 2. Main Headline */}
        <MotionItem direction="scaleDown" scale={1.22} duration={0.6} className="space-y-2 mx-auto">
          <Text
            variant="hero-title"
            weight="normal"
            align="center"
            color="inverse"
            className="drop-shadow-sm"
          >
            Nobody Taught us About Money, <br className="hidden sm:inline" />
            So We Built <span className="font-syne font-[500]">MAHIR!</span>
          </Text>
        </MotionItem>

        {/* 3. Subtitle Text */}
        <MotionItem direction="up" distance={20} duration={0.5}>
          <Text
            variant="subtitle"
            weight="normal"
            align="center"
            color="inverse"
            className="max-w-2xl mx-auto tracking-wide"
          >
            <span className="opacity-50"> Trusted by People, Regulated by</span>{' '}
            <strong className="font-bold !opacity-80 text-white">SEBI.</strong>
          </Text>
        </MotionItem>

        {/* 4. CTA Glass Buttons */}
        <MotionItem direction="between" duration={0.5} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
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

          <Link href="/pricing" className="inline-flex">
            <GlassButton
              variant="light"
              size="md"
              label="Find your Plan"
              isGlowIcon
              icon={<TradeUpIcons size={18} color="white" />}
              iconBgColor="bg-[var(--green-normal)]"
              className="w-[215px] sm:w-[225px]"
            />
          </Link>
        </MotionItem>
      </MotionContainer>

      {/* 5. 3 Mobile Phone Image Mockups Showcase */}
      <MotionContainer
        staggerDelay={0.15}
        delay={0.4}
        className="relative max-w-7xl mx-auto px-2 sm:px-6 pt-4 sm:pt-8  mt-2 sm:mt-2 z-10"
      >
        <div className="flex flex-row items-end justify-center gap-2 xs:gap-3 sm:gap-5 md:gap-6 lg:gap-10">
          {/* LEFT PHONE MOCKUP */}
          <MotionItem
            direction="up"
            distance={40}
            className="w-[33%] max-w-[150px] xs:max-w-[190px] sm:max-w-[280px] md:max-w-[370px] lg:max-w-[470px] shrink-0 z-20"
          >
            <Image
              src="/images/hero/moc/hero_right_mockup.png"
              alt="MAHIR App Performance & Past Recommendations Mockup"
              width={470}
              height={940}
              className="w-full h-auto object-contain"
              priority
            />
          </MotionItem>

          {/* CENTER PHONE MOCKUP */}
          <MotionItem
            direction="up"
            distance={50}
            className="w-[33%] max-w-[145px] xs:max-w-[185px] sm:max-w-[270px] md:max-w-[350px] lg:max-w-[450px] shrink-0 z-10"
          >
            <Image
              src="/images/hero/moc/hero_middle_mockup.png"
              alt="MAHIR App Recommendations Mockup"
              width={450}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />
          </MotionItem>

          {/* RIGHT PHONE MOCKUP */}
          <MotionItem
            direction="up"
            distance={40}
            className="w-[32%] max-w-[140px] xs:max-w-[175px] sm:max-w-[250px] md:max-w-[330px] lg:max-w-[420px] shrink-0"
          >
            <Image
              src="/images/hero/moc/hero_left_mockup.png"
              alt="MAHIR App Market Overview Mockup"
              width={420}
              height={940}
              className="w-full h-auto object-contain"
              priority
            />
          </MotionItem>
        </div>
      </MotionContainer>
    </section>
  );
};

export default HeroSection;
