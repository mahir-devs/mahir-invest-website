import React from 'react';
import HeroSection from './hero';
import FeaturesSection from './features-section';
import PricingSection from './pricing-section';
import ExpensiveItemsSection from './expensive-items-section';
import MobileAppSection from './mobile-app-section';
import WhyMahirSection from './why-mahir-section';
import NeverDoSection from './never-do-section';
import DownloadJourneySection from './download-journey-section';
import FaqSection from './faq-section';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';

const HomePage = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 w-full">
        <HeroSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <ExpensiveItemsSection />
        <SectionDivider />
        <MobileAppSection />
        <SectionDivider />
        <WhyMahirSection />
        <SectionDivider />
        <NeverDoSection />
        <SectionDivider />
        <DownloadJourneySection />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
