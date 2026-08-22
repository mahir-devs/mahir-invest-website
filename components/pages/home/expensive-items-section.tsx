'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { GlassCard } from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';
import { BlueLineIcons } from '@/components/svg/icons';

export interface ExpensiveItem {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const EXPENSIVE_ITEMS: ExpensiveItem[] = [
  {
    id: 'ott-add-on',
    imageSrc: '/images/less_then/ott_1l.svg',
    title: 'OTT add on',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'delivery-charge',
    imageSrc: '/images/less_then/delivery_1l.svg',
    title: 'One Delivery Charge',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'one-burger',
    imageSrc: '/images/less_then/burger_1l.svg',
    title: 'One burger',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'cutting-chai',
    imageSrc: '/images/less_then/chaii_1l.svg',
    title: 'Cutting chai',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'platform-fee',
    imageSrc: '/images/less_then/platform_11.svg',
    title: 'One Platform fee',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'auto-fare',
    imageSrc: '/images/less_then/auto_1l.svg',
    title: 'One Auto fare',
    subtitle: 'Gone in one click.',
  },
  {
    id: 'movie-ticket',
    imageSrc: '/images/less_then/Ticket_1.svg',
    title: 'One Movie ticket',
    subtitle: 'Gone in one click.',
  },
];

export const ExpensiveItemsSection: React.FC = () => {
  // Triple array for seamless infinite looping
  const carouselItems = [
    ...EXPENSIVE_ITEMS,
    ...EXPENSIVE_ITEMS,
    ...EXPENSIVE_ITEMS,
  ];

  const baseCount = EXPENSIVE_ITEMS.length;
  // Start in middle set (index = baseCount)
  const [activeIndex, setActiveIndex] = useState(baseCount);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-scroll ALWAYS forward every 1.6 seconds (decreased timing for faster flow)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1600);
    return () => clearInterval(interval);
  }, [isPaused]);

  // GSAP Smooth Continuous Forward Sliding & Scale-Aware Equal Distance Transition
  useEffect(() => {
    if (!trackRef.current) return;

    const cardEl = cardRefs.current[activeIndex];
    if (!cardEl) return;

    const cardWidth = cardEl.offsetWidth || 280;
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;
    const visualGap = isMobile ? 14 : isTablet ? 20 : 24;

    const trackContainer = trackRef.current.parentElement;
    const containerWidth = trackContainer?.offsetWidth || windowWidth;

    // Helper to calculate card scale by distance from focus index
    const getScaleForDist = (dist: number) => {
      if (dist === 0) return isMobile ? 1.08 : 1.14;
      if (dist === 1) return isMobile ? 0.94 : 0.92;
      return 0.82;
    };

    // 1. Calculate scales for all items
    const scales = carouselItems.map((_, idx) => getScaleForDist(Math.abs(idx - activeIndex)));

    // 2. Calculate exact target center for each card relative to active card (0)
    // Ensures visual gap (space between card edges) is ALWAYS equal to visualGap
    const targetCenters: number[] = new Array(carouselItems.length).fill(0);

    for (let i = activeIndex + 1; i < carouselItems.length; i++) {
      const prevScale = scales[i - 1];
      const currScale = scales[i];
      const step = (cardWidth * (prevScale + currScale)) / 2 + visualGap;
      targetCenters[i] = targetCenters[i - 1] + step;
    }

    for (let i = activeIndex - 1; i >= 0; i--) {
      const nextScale = scales[i + 1];
      const currScale = scales[i];
      const step = (cardWidth * (nextScale + currScale)) / 2 + visualGap;
      targetCenters[i] = targetCenters[i + 1] - step;
    }

    // 3. Track horizontal shift: centers active card flex center at container center
    const activeFlexCenter = activeIndex * cardWidth + cardWidth / 2;
    const targetTrackX = containerWidth / 2 - activeFlexCenter;

    // Shift Track Horizontal Position
    gsap.to(trackRef.current, {
      x: targetTrackX,
      duration: 0.45,
      ease: 'power3.inOut',
      overwrite: 'auto',
      onComplete: () => {
        if (activeIndex >= baseCount * 2) {
          const resetIndex = activeIndex - baseCount;
          const resetFlexCenter = resetIndex * cardWidth + cardWidth / 2;
          const resetTrackX = containerWidth / 2 - resetFlexCenter;

          gsap.set(trackRef.current, { x: resetTrackX });

          const resetScales = carouselItems.map((_, idx) => getScaleForDist(Math.abs(idx - resetIndex)));
          const resetCenters: number[] = new Array(carouselItems.length).fill(0);

          for (let i = resetIndex + 1; i < carouselItems.length; i++) {
            const step = (cardWidth * (resetScales[i - 1] + resetScales[i])) / 2 + visualGap;
            resetCenters[i] = resetCenters[i - 1] + step;
          }
          for (let i = resetIndex - 1; i >= 0; i--) {
            const step = (cardWidth * (resetScales[i + 1] + resetScales[i])) / 2 + visualGap;
            resetCenters[i] = resetCenters[i + 1] - step;
          }

          carouselItems.forEach((_, idx) => {
            const el = cardRefs.current[idx];
            if (!el) return;
            const unscaledOffset = (idx - resetIndex) * cardWidth;
            const offsetX = resetCenters[idx] - unscaledOffset;
            const dist = Math.abs(idx - resetIndex);

            gsap.set(el, {
              x: offsetX,
              scale: resetScales[idx],
              y: dist === 0 ? (isMobile ? -6 : -12) : 0,
              opacity: dist === 0 ? 1 : dist === 1 ? 0.85 : 0.45,
            });
          });

          setActiveIndex(resetIndex);
        }
      },
    });

    // 4. Animate each individual card to scale, y-offset, opacity & calculated scale-aware x position
    carouselItems.forEach((_, idx) => {
      const el = cardRefs.current[idx];
      if (!el) return;

      const unscaledOffset = (idx - activeIndex) * cardWidth;
      const offsetX = targetCenters[idx] - unscaledOffset;
      const dist = Math.abs(idx - activeIndex);

      gsap.to(el, {
        x: offsetX,
        scale: scales[idx],
        y: dist === 0 ? (isMobile ? -6 : -12) : 0,
        opacity: dist === 0 ? 1 : dist === 1 ? 0.85 : 0.45,
        duration: 0.45,
        ease: 'power3.inOut',
        overwrite: 'auto',
      });
    });
  }, [activeIndex, baseCount, carouselItems.length]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#e7f4fa] via-[#dbeef8]/50 to-[#e7f4fa] pt-4 sm:pt-8 pb-12 sm:pb-20 overflow-hidden select-none">
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

      <div className="relative max-w-7xl mx-auto  z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-slate-900 tracking-tight leading-tight">
            Somethings that are more expensive than{' '}
            <br /> <span className="relative inline-block font-normal text-slate-900">
              our plans
              <BlueLineIcons />
            </span>
          </h2>
        </div>

        {/* Carousel Container - Ample vertical padding & min-height to prevent top clipping */}
        <div
          className="relative w-full overflow-hidden flex items-center py-6 sm:py-10 min-h-[310px] xs:min-h-[340px] sm:min-h-[370px] lg:min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* GSAP Continuous Horizontal Sliding Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-0 absolute left-0 will-change-transform py-4 sm:py-6"
          >
            {carouselItems.map((item, idx) => {
              const isCenter = idx === activeIndex;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onClick={() => setActiveIndex(idx)}
                  className="cursor-pointer shrink-0 will-change-transform py-5 sm:py-8"
                >
                  <GlassCard
                    variant={isCenter ? 'frosted' : 'pure-glass'}
                    rounded="2xl"
                    padding="none"
                    className={cn(
                      'text-center flex flex-col items-center justify-center border border-white shadow-none transition-colors duration-300',
                      'w-[145px] xs:w-[175px] sm:w-[250px] lg:w-[280px] h-[145px] xs:h-[175px] sm:h-[235px] lg:h-[250px] p-3 sm:p-6 lg:p-7'
                    )}
                  >
                    {/* SVG Image Icon */}
                    <div className="relative flex items-center justify-center mb-1.5 sm:mb-2 w-9 h-9 xs:w-11 xs:h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 44px, 80px"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 text-[11px] xs:text-xs sm:text-base lg:text-[15px] line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-500 font-normal text-[9px] xs:text-[10px] sm:text-xs lg:text-sm mt-0.5">
                      {item.subtitle}
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Mint Glass Pill Banner */}
        <GlassCard padding="sm" variant="emerald" className="rounded-full border border-[#00AD17] !bg-[#00AD17]/8 max-w-6xl shadow-none mx-auto">
          <div>
            <p className="text-[10px] sm:text-base lg:text-[23px] text-[#00AD17] font-medium tracking-wide">
              You spend on these without thinking. Why not spend{' '}
              <strong className="font-bold text-[#00AD17]">₹14</strong> thinking
              about your money?
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ExpensiveItemsSection;
