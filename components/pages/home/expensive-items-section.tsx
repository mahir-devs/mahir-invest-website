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

  // GSAP Smooth Continuous Forward Sliding & Scaling Transition
  useEffect(() => {
    if (!trackRef.current) return;

    // Calculate exact card step distance dynamically (card width + computed CSS gap)
    const cardEl = cardRefs.current[activeIndex];
    if (!cardEl) return;

    const cardWidth = cardEl.offsetWidth || 150;
    const computedStyle = window.getComputedStyle(trackRef.current);
    const gap = parseFloat(computedStyle.gap) || 12;
    const step = cardWidth + gap;

    // Center offset relative to track container width
    const trackContainer = trackRef.current.parentElement;
    const containerWidth = trackContainer?.offsetWidth || window.innerWidth;
    const centerOffset = containerWidth / 2 - cardWidth / 2;

    const targetX = -activeIndex * step + centerOffset;
    const isMobile = window.innerWidth < 640;

    // 1. GSAP Track Horizontal Shift (ALWAYS FORWARD)
    gsap.to(trackRef.current, {
      x: targetX,
      duration: 0.45,
      ease: 'power3.inOut',
      overwrite: 'auto',
      onComplete: () => {
        // If we reach or exceed set 2, silently snap back to set 1 without animation
        if (activeIndex >= baseCount * 2) {
          const resetIndex = activeIndex - baseCount;
          const resetX = -resetIndex * step + centerOffset;

          // Silent instant position snap
          gsap.set(trackRef.current, { x: resetX });

          // Instantly update card GSAP styles for resetIndex
          carouselItems.forEach((_, idx) => {
            const el = cardRefs.current[idx];
            if (!el) return;
            const dist = Math.abs(idx - resetIndex);
            gsap.set(el, {
              scale: dist === 0 ? (isMobile ? 1.08 : 1.14) : dist === 1 ? (isMobile ? 0.94 : 0.92) : 0.82,
              y: dist === 0 ? (isMobile ? -6 : -12) : 0,
              opacity: dist === 0 ? 1 : dist === 1 ? 0.85 : 0.5,
            });
          });

          setActiveIndex(resetIndex);
        }
      },
    });

    // 2. GSAP Individual Card Scale, Opacity & Y Lift
    carouselItems.forEach((_, idx) => {
      const el = cardRefs.current[idx];
      if (!el) return;

      const dist = Math.abs(idx - activeIndex);

      if (dist === 0) {
        // Center Active Card Focus
        gsap.to(el, {
          scale: isMobile ? 1.08 : 1.14,
          y: isMobile ? -6 : -12,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.inOut',
          overwrite: 'auto',
        });
      } else if (dist === 1) {
        // Immediate Neighbors
        gsap.to(el, {
          scale: isMobile ? 0.94 : 0.92,
          y: 0,
          opacity: 0.85,
          duration: 0.45,
          ease: 'power3.inOut',
          overwrite: 'auto',
        });
      } else {
        // Outer Cards
        gsap.to(el, {
          scale: 0.82,
          y: 4,
          opacity: 0.45,
          duration: 0.45,
          ease: 'power3.inOut',
          overwrite: 'auto',
        });
      }
    });
  }, [activeIndex, baseCount, carouselItems.length]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#e7f4fa] via-[#dbeef8]/50 to-[#e7f4fa] py-12 sm:py-24 overflow-hidden select-none">
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

      <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-14 z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-slate-900 tracking-tight leading-tight">
            Somethings that are more expensive than{' '}
            <span className="relative inline-block font-normal text-slate-900">
              our plans
              <BlueLineIcons />
            </span>
          </h2>
        </div>

        {/* Carousel Container - Ample vertical padding & min-height for mobile */}
        <div
          className="relative w-full py-10 sm:py-16 overflow-hidden flex items-center min-h-[290px] xs:min-h-[320px] sm:min-h-[380px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* GSAP Continuous Horizontal Sliding Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-3 sm:gap-6 absolute left-0 will-change-transform"
          >
            {carouselItems.map((item, idx) => {
              const isCenter = idx === activeIndex;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onClick={() => setActiveIndex(idx)}
                  className="cursor-pointer shrink-0 will-change-transform py-3 sm:py-4"
                >
                  <GlassCard
                    variant={isCenter ? 'frosted' : 'pure-glass'}
                    rounded="2xl"
                    padding="none"
                    className={cn(
                      'text-center flex flex-col items-center justify-center border border-white shadow-xl transition-colors duration-300',
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
        <GlassCard padding="sm" variant="emerald" className="rounded-full max-w-6xl shadow-none mx-auto">
          <div>
            <p className="text-sm sm:text-base lg:text-[23px] text-[#0f8b4d] font-medium tracking-wide">
              You spend on these without thinking. Why not spend{' '}
              <strong className="font-bold text-[#0c7a42]">₹14</strong> thinking
              about your money?
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ExpensiveItemsSection;
