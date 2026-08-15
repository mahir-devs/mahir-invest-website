'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/glass-card';
import { WhiteLogo } from '@/components/svg/logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t-1 !border-[var(--blue-normal)] w-full bg-[#ffffff] pt-16 pb-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8">
        {/* Top Logo Glass Pill Container with border-blue-normal */}
        <div className="flex justify-center">
          <GlassCard
            variant="dark"
            rounded="3xl"
            padding="none"
            blur="xl"
            className=" border border-[var(--blue-normal)] shadow-md shadow-sky-900/5 px-8 sm:px-10 py-3 sm:py-3.5 inline-flex items-center justify-center transition-all hover:shadow-lg"
          >
            <WhiteLogo width={145} height={52} color="#0f172a" />
          </GlassCard>
        </div>

        {/* SEBI Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 font-normal tracking-wide">
          SEBI Registered Investment Adviser · INA000022668
        </p>

        {/* Primary Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-xs sm:text-sm text-slate-600 font-normal">
          <Link href="/pricing" className="hover:text-[var(--blue-normal)] transition-colors">
            Pricing
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/tools" className="hover:text-[var(--blue-normal)] transition-colors">
            Tools
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/blogs" className="hover:text-[var(--blue-normal)] transition-colors">
            Blogs
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/careers" className="hover:text-[var(--blue-normal)] transition-colors">
            Careers
          </Link>
          <span className="text-slate-300">·</span>
          {/* <Link href="/team" className="hover:text-[var(--blue-normal)] transition-colors">
            Team
          </Link> */}
        </div>

        {/* Secondary / Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-[11px] sm:text-xs text-slate-400 font-normal">
          <Link href="/terms-and-conditions" className="hover:text-slate-600 transition-colors">
            Terms
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">
            Privacy
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/cancellation-policy" className="hover:text-slate-600 transition-colors">
            Cancellation Policy
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/refund-policy" className="hover:text-slate-600 transition-colors">
            Refund Policy
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/disclaimer" className="hover:text-slate-600 transition-colors">
            Disclaimer
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/sebi-disclosures" className="hover:text-slate-600 transition-colors">
            SEBI Disclosures
          </Link>
          <span className="text-slate-300">·</span>
          <Link href="/investor-charter" className="hover:text-slate-600 transition-colors">
            Investor Charter
          </Link>
        </div>

        {/* Company & Entity Info Block */}
        <div className="space-y-1.5 text-slate-500 text-[11px] sm:text-xs font-normal leading-relaxed max-w-4xl mx-auto pt-2">
          <p className="font-semibold text-slate-700 text-xs sm:text-sm">
            MAHIR Investment Advisers Private Limited
          </p>

          <p className="text-slate-400">
            CIN: U66190PN2025PTC244016 · GSTIN: 27AATCM6083H1ZU · SEBI RIA No: INA000022668 · BSE: 2526
          </p>

          <p className="text-slate-400">
            Principal Officer: Yash Mahavir Bedmuttha
          </p>

          <p className="text-slate-400">
            <a
              href="mailto:admin@mahiradvisers.com"
              className="underline hover:text-[var(--blue-normal)] transition-colors"
            >
              admin@mahiradvisers.com
            </a>{' '}
            · PL G/A-9/1, MIDC, Chinchwad East, Pune 411019
          </p>

          <p className="text-slate-400 pt-1">
            Grievances:{' '}
            <a
              href="mailto:support@mahir.in"
              className="underline hover:text-[var(--blue-normal)] transition-colors"
            >
              support@mahir.in
            </a>{' '}
            · Escalation:{' '}
            <a
              href="mailto:compliance@mahir.in"
              className="underline hover:text-[var(--blue-normal)] transition-colors"
            >
              compliance@mahir.in
            </a>
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-5xl mx-auto border-t border-slate-200/80 pt-6 my-4" />

        {/* Regulatory Disclaimer & Copyright */}
        <div className="space-y-3 max-w-5xl mx-auto text-[10px] sm:text-[11px] text-slate-400 font-normal leading-relaxed">
          <p>
            Investment in securities market are subject to market risks. Read all related documents carefully before investing. Registration by SEBI and certification from NISM in no way guarantees performance or provide any assurance of returns. Securities quoted are for illustration only and are not recommendatory.
          </p>

          <p className="pt-2 text-[11px] text-slate-400">
            © 2026 MAHIR Investment Advisers Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
