'use client';

import React from 'react';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

const CIN_NUMBER = 'U66190PN2025PTC244016';
const SEBI_NUMBER = 'INA000022668';

const COMPANY_INFO: { label: string; value: string }[] = [
  { label: 'Company Name', value: 'Mahir Investment Advisers Private Limited (Mahir Invest)' },
  { label: 'CIN', value: CIN_NUMBER },
  { label: 'SEBI Reg. No.', value: SEBI_NUMBER },
  { label: 'SEBI Reg. Type', value: 'Investment Adviser (Non-Individual)' },
  { label: 'Reg. Validity', value: 'June 01, 2026 — Perpetual' },
  {
    label: 'Registered Office',
    value: 'PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra',
  },
  { label: 'Principal Officer', value: 'Yash Mahavir Bedmuttha | principalofficer@mahir.in' },
  { label: 'Compliance Officer', value: 'Bharat Makkar | compliance@mahir.in' },
  { label: 'Website', value: 'www.mahirinvest.com' },
];

export const CancellationPolicyPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Sky Blue Gradient Background Section */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-5xl mx-auto z-10 space-y-10">
          {/* Header Title */}
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
              <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                Cancellation Policy
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                Mahir Invest — Advisory Engagement Cancellation &amp; Cooling-Off Framework
              </p>
            </MotionItem>
          </div>

          {/* Main Legal Content Card */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full">
            <GlassCard rounded="3xl" variant="frosted" className="max-w-5xl mx-auto bg-white p-6 sm:p-10 text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-6 select-text font-normal">
              {/* Version Badge Row */}
              <div className="flex items-center gap-3">
                <span className="bg-sky-50 text-[var(--blue-normal)] font-semibold text-xs px-3 py-1 rounded-full border border-sky-100">
                  Version 1.0
                </span>
                <span className="text-xs text-slate-400 font-normal">Effective Date: June 01, 2026</span>
              </div>

              {/* Company Info Card */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Company Details</h3>
                </div>
                <div className="p-4 space-y-2 text-xs sm:text-sm">
                  {COMPANY_INFO.map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start border-b last:border-b-0 border-slate-100 pb-2 last:pb-0 gap-1 sm:gap-4">
                      <span className="font-semibold text-slate-600 sm:w-44 shrink-0">{row.label}</span>
                      <span className="text-slate-800 font-normal">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Box */}
              <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm space-y-6">
                {/* Section 1: Introduction */}
                <section id="introduction" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    1. INTRODUCTION
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    This Cancellation Policy (&apos;Policy&apos;) governs the terms under which clients of Mahir Invest (&apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, &apos;our&apos;) may cancel their advisory engagement. This Policy is issued in compliance with the SEBI (Investment Advisers) Regulations, 2013 (&apos;IA Regulations&apos;), applicable SEBI Circulars, the Consumer Protection Act, 2019, and the Information Technology Act, 2000.
                  </p>
                  <div className="p-4 rounded-xl text-xs sm:text-sm font-normal border border-amber-200 bg-amber-50/70 text-slate-700 leading-relaxed">
                    This Policy shall be read in conjunction with the Refund Policy, Terms and Conditions, Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are incorporated herein by reference and form an integral part of this Agreement.
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Section 2: Definitions */}
                <section id="definitions" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    2. DEFINITIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    In this Policy, the following expressions shall have the meanings assigned to them below:
                  </p>

                  <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    <li><strong className="font-semibold text-slate-900">&quot;Advisory Fee&quot;</strong> means the fee charged by Mahir Invest for rendering investment advisory services, whether on a fixed fee basis or as a percentage of Assets Under Advice (AUA), as agreed upon in the Client Agreement.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Subscription Plan&quot;</strong> means any periodic (monthly, quarterly, semi-annual, or annual) advisory service plan offered by Mahir Invest through the Platform.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Cooling-Off Period&quot;</strong> means the initial period following the execution of the Client Agreement during which the Client may terminate the engagement without penalty, as prescribed under SEBI IA Regulations.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Client Agreement&quot;</strong> means the formal agreement executed between Mahir Invest and the Client as mandated under SEBI IA Regulations, 2013.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Platform&quot;</strong> collectively means the Mahir Invest mobile application and website (www.mahirinvest.com) and all associated digital interfaces.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Services&quot;</strong> means investment advisory services, portfolio guidance, financial planning content, risk profiling, and any other offerings provided by Mahir Invest through the Platform.</li>
                    <li><strong className="font-semibold text-slate-900">&quot;Applicable Laws&quot;</strong> means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Consumer Protection Act, 2019; Information Technology Act, 2000; and all other applicable laws, rules, and regulations of India in force from time to time.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                {/* Section 3: Right to Cancel */}
                <section id="right-to-cancel" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    3. RIGHT TO CANCEL
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    Clients can cancel their subscription at any time during the subscription period by providing a written request to <a href="mailto:compliance@mahir.in" className="text-[var(--blue-normal)] font-medium hover:underline font-mono">compliance@mahir.in</a> or through the Platform settings.
                  </p>
                </section>

                <hr className="border-slate-100" />

                {/* Section 4: Cancellation by Mahir Invest */}
                <section id="cancellation-by-company" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    4. CANCELLATION BY MAHIR INVEST
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    Mahir Invest reserves the right to cancel or terminate the advisory engagement with a Client under the following circumstances:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    <li>Non-compliance by the Client with KYC/AML requirements or provision of false/misleading information.</li>
                    <li>Non-payment of advisory fees within the stipulated due date after reasonable reminders.</li>
                    <li>Client&apos;s conduct that is in violation of Applicable Laws or poses a regulatory risk to Mahir Invest.</li>
                    <li>Regulatory direction or order from SEBI or any competent authority requiring cessation of services.</li>
                    <li>Any event of force majeure making continued advisory engagement impracticable.</li>
                  </ul>

                  <div className="p-4 rounded-xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200 bg-amber-50/70 leading-relaxed mt-3">
                    In the event of cancellation by Mahir Invest, the Client shall be given at least <strong className="font-semibold text-slate-900">30 (thirty) days&apos;</strong> prior written notice (except in cases of regulatory directives or fraud), and a pro-rata refund of any unused prepaid fees shall be processed in accordance with the Refund Policy.
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Section 5: Amendments */}
                <section id="amendments" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    5. AMENDMENTS TO THIS POLICY
                  </h2>
                  <p className="p-4 rounded-xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200 bg-amber-50/70 leading-relaxed">
                    Mahir Invest reserves the right to amend, modify, or update this Policy at any time. All amendments shall be published on the Platform and communicated to registered Clients via email at least <strong className="font-semibold text-slate-900">15 (fifteen) days</strong> prior to the update taking effect. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Policy. If you do not agree with the amended Policy, you must terminate your engagement with Mahir Invest by providing 30 days written notice to <a href="mailto:compliance@mahir.in" className="text-[var(--blue-normal)] font-medium hover:underline font-mono">compliance@mahir.in</a>.
                  </p>
                </section>

                <hr className="border-slate-100" />

                {/* Section 6: Contact Information */}
                <section id="contact" className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    6. CONTACT INFORMATION
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    For cancellation requests or any questions regarding this Policy, please contact:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm p-4 bg-slate-50 rounded-xl border border-slate-200 font-normal">
                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliance Officer</h3>
                      <p className="font-semibold text-slate-900">Bharat Makkar</p>
                      <p className="text-slate-700">Email: <a href="mailto:compliance@mahir.in" className="text-[var(--blue-normal)] hover:underline font-medium">compliance@mahir.in</a></p>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Registered Office</h3>
                      <p className="font-semibold text-slate-900">Mahir Investment Advisers Private Limited</p>
                      <p className="text-slate-600 font-normal">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
                      <p className="pt-1 text-slate-700"><span className="font-semibold text-slate-900">Resolution Timeline:</span> Within 30 days from date of receipt of complaint</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-xl text-xs sm:text-sm text-slate-700 font-normal leading-relaxed text-center">
                    <strong className="font-semibold text-slate-900">Grievance Escalation:</strong> If your cancellation grievance is not resolved within 30 days, you may escalate it to SEBI SCORES (<a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline font-medium">scores.gov.in</a>) or approach the competent courts at Pune, Maharashtra, India.
                  </div>
                </section>
              </div>

              {/* Signatories Card */}
              <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 text-lg">✱</span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">Acknowledgement by Client</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  By accessing and using the Mahir Invest Platform and/or availing Mahir Invest&apos;s advisory services, you acknowledge that you have read, understood, and agree to the Cancellation &amp; Cooling-Off Framework set out in this Policy.
                </p>

                {/* Signatories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-sky-200/80 rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b sm:border-b-0 sm:border-r border-sky-200/80 space-y-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Principal Officer</p>
                    <p className="text-xs font-semibold text-slate-900">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs font-normal text-[var(--blue-normal)]">principalofficer@mahir.in</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Compliance Officer</p>
                    <p className="text-xs font-semibold text-slate-900">BHARAT MAKKAR</p>
                    <p className="text-xs font-normal text-[var(--blue-normal)]">compliance@mahir.in</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-sky-200/80 flex items-center gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-400">For:</span>
                  <span className="font-semibold text-[var(--blue-normal)]">Mahir Investment Advisers Private Limited</span>
                </div>
              </div>
            </GlassCard>
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

export default CancellationPolicyPage;
