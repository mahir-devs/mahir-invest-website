'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'money',
    question: 'I don’t have a lot of money. Can I still start?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Accumsan sit et curabitur quisque purus quis dictum eget. Lorem ipsum dolor sit amet consectetur. Accumsan sit et curabitur quisque purus quis dictum eget.',
  },
  {
    id: 'different',
    question: 'How is MAHIR different from Telegram or YouTube tips?',
    answer:
      'Unlike unverified social media tips, MAHIR provides SEBI-registered advisory backed by deep quantitative and fundamental research. We focus on risk management first, tell you exactly when to enter and exit, and take zero commissions.',
  },
  {
    id: 'market-falls',
    question: 'What if the market falls after I invest?',
    answer:
      'Market volatility is natural. Our advisory strategies focus on risk mitigation, capital preservation, and identifying high-conviction opportunities even during market pullbacks to protect your long-term wealth.',
  },
  {
    id: 'trust',
    question: 'Can I trust MAHIR with my money?',
    answer:
      'Absolutely. MAHIR is a SEBI-registered advisory entity. We never hold or touch your funds — all trades are executed directly through your registered broker, ensuring 100% transparency and security.',
  },
];

export const FaqSection: React.FC = () => {
  // Default first FAQ item expanded as shown in mockup
  const [openId, setOpenId] = useState<string | null>('money');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-16 sm:py-28 overflow-hidden select-none">
      {/* Background Image Asset */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/claude/commonbgfinal.png"
          alt="Pricing Section Background"
          fill
          priority
          className="object-cover object-[center_100px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 text-center px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-4">
        {/* Eyebrow */}
        <p className="text-xs sm:text-[14px] uppercase text-slate-400 font-medium">
          FAQ&apos;s
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-normal text-slate-900 tracking-tight leading-tight">
          Still Wondering?
        </h2>

        {/* Questions Subtitle */}
        <p className="text-xs sm:text-[15px] text-slate-500 font-medium tracking-wide">
          Questions
        </p>

        {/* Accordion Container */}
        <div className="space-y-4 sm:space-y-5 pt-8 text-left max-w-3xl mx-auto">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <GlassCard
                key={faq.id}
                variant="dark"
                rounded="2xl"
                padding="none"
                blur="xl"
                className="backdrop-blur-xl border border-[var(--blue-normal)]/40 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-4  flex items-center justify-between gap-2 text-left outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base lg:text-[16px] font-medium text-slate-800">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="text-slate-400 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                {/* Accordion Body with Smooth Open/Close Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      {/* Inset border line to match text padding alignment */}
                      <div className="mx-6 sm:mx-8 " />

                      {/* Answer content with balanced top and bottom padding */}
                      <div className="px-6 sm:px-8 pt-4 pb-6 sm:pb-7">
                        <p className="text-xs sm:text-sm lg:text-[14px] text-slate-500 font-normal leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
