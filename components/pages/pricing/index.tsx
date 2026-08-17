'use client';

import React, { useState } from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import PricingSection from '@/components/pages/home/pricing-section';
import FeaturesSection from '@/components/pages/home/features-section';
import ExpensiveItemsSection from '@/components/pages/home/expensive-items-section';
import { Footer } from '@/components/common/footer';
import { GlassCard } from '@/components/ui/glass-card';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { ContactSupportDialog } from '@/components/common/contact-support-dialog';

export const PricingPage = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Hero Blue Gradient & Cloud Background Container */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-14 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={70} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Pricing Section Component (Renders plan cards & header) */}
        <PricingSection hideBackground isHeadingDark />
      </section>

      {/* Main Page Content */}
      <div className="relative z-10 w-full">
        <SectionDivider />

        {/* 2. Features Section (What changes when you have MAHIR) */}
        <FeaturesSection />

        <SectionDivider />

        {/* 3. Expensive Items Section (Somethings that are more expensive than our plans) */}
        <ExpensiveItemsSection />

        {/* 4. Still Have Questions Contact CTA Card */}
        <section className="relative w-full pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 select-none z-10">
          <MotionContainer className="max-w-md mx-auto">
            <MotionItem direction="up" distance={25} duration={0.6}>
              <GlassCard
                variant="light"
                rounded="2xl"
                padding="lg"
                className="text-center space-y-4 border-[var(--blue-normal)]! border-1 shadow-xl border-white/40"
              >
                <div className="space-y-1 mb-8">
                  <h3 className="text-xl sm:text-2xl font-normal text-slate-900">
                    Still Have Questions?
                  </h3>
                  <p className="text-xs sm:text-[12px] text-slate-600 font-normal">
                    We&apos;re here to help you choose the right plan for your journey.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowContactDialog(true)}
                    className="w-full text-black! rounded-full! cursor-pointer! border-[var(--blue-normal)]! border-1 font-medium sm:w-auto px-8 py-3 rounded-full text-white font-medium"
                  >
                    Talk to Us
                  </button>
                </div>
              </GlassCard>
            </MotionItem>
          </MotionContainer>
        </section>

        <Footer />
      </div>

      {/* Contact Support Dialog */}
      <ContactSupportDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
    </div>
  );
};

export default PricingPage;

