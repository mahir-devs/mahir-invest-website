'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

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
                Mahir Investment Advisers Private Limited — Advisory Engagement Cancellation &amp; Cooling-Off Framework
              </p>
            </MotionItem>
          </div>

          {/* Main Legal Content Card */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full">
            <div className="max-w-5xl mx-auto p-6 sm:p-10 bg-white text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-8 select-text font-normal">
              {/* --- HEADER BANNER & META DATA --- */}
              <header className="legal-header pb-8 border-b border-slate-200 font-normal">
                <div className="text-center mb-3">
                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                    MAHIR INVESTMENT ADVISERS PRIVATE LIMITED
                  </h2>
                  <p className="text-base sm:text-lg font-normal legal-text-primary mt-1">
                    SEBI Registered Investment Adviser | Registration No. INA000022668
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-normal mt-4 border-b pb-2 text-slate-800">
                  CANCELLATION POLICY
                </h3>
                <p className="text-base sm:text-lg mt-2 font-normal text-slate-700">
                  Advisory Engagement Cancellation &amp; Cooling-Off Framework
                </p>

                {/* Metadata Grid */}
                <div className="metadata grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-xs sm:text-sm mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 font-normal text-slate-700">
                  <div>
                    <p><strong className="font-normal text-slate-800">Company Name:</strong> Mahir Investment Advisers Private Limited</p>
                    <p className="text-xs text-slate-500 font-normal">CIN: U66190PN2025PTC244016</p>
                  </div>
                  <div>
                    <p><strong className="font-normal text-slate-800">SEBI Reg. No.:</strong> INA000022668</p>
                    <p><strong className="font-normal text-slate-800">SEBI Reg. Type:</strong> Investment Adviser (Non-Individual)</p>
                    <p className="text-xs text-slate-500 font-normal">Registration Validity: June 01, 2026 — Perpetual</p>
                  </div>
                  <div>
                    <p><strong className="font-normal text-slate-800">Registered Office:</strong> PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
                    <p className="text-xs text-slate-500 font-normal">www.mahiradvisers.com</p>
                  </div>

                  <div className="col-span-full pt-3 border-t border-slate-200 mt-2 flex flex-wrap justify-between gap-4 text-xs text-slate-600 font-normal">
                    <div>
                      <p><strong className="font-normal text-slate-800">Principal Officer:</strong> Yash Mahavir Bedmuttha</p>
                      <p><strong className="font-normal text-slate-800">Phone No.:</strong> +91 9084945151</p>
                    </div>
                    <div>
                      <p><strong className="font-normal text-slate-800">Compliance Officer:</strong> Bharat Makkar</p>
                      <p><strong className="font-normal text-slate-800">Phone No.:</strong> +91 9084945151</p>
                    </div>
                  </div>
                </div>

                <div className="metadata grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 font-normal text-slate-700">
                  <div>
                    <p><strong className="font-normal text-slate-800">Version:</strong> 1.0</p>
                  </div>
                  <div className="sm:text-right">
                    <p><strong className="font-normal text-slate-800">Effective Date:</strong> June 01, 2026</p>
                  </div>
                </div>
              </header>

              {/* --- SECTION 1. INTRODUCTION --- */}
              <section id="introduction" className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">1. INTRODUCTION</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">This Cancellation Policy (&apos;Policy&apos;) governs the terms under which clients of Mahir Investment Advisers Private Limited (&apos;MIA (Mahir Invest)&apos;, &apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, &apos;our&apos;) may cancel their advisory engagement. This Policy is issued in compliance with the SEBI (Investment Advisers) Regulations, 2013 (&apos;IA Regulations&apos;), applicable SEBI Circulars, the Consumer Protection Act, 2019, and the Information Technology Act, 2000.</p>
                <div className="legal-alert-secondary p-4 rounded-2xl text-xs sm:text-sm font-normal border border-amber-200 text-slate-700">
                  <p className="text-slate-700 italic font-normal">This Policy shall be read in conjunction with the Refund Policy, Terms and Conditions, Client Agreement, Privacy Policy, and SEBI Disclosures, all of which are incorporated herein by reference and form an integral part of this Agreement.</p>
                </div>
              </section>

              {/* --- SECTION 2. DEFINITIONS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">2. DEFINITIONS</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">In this Policy, the following expressions shall have the meanings assigned to them below:</p>

                <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm text-slate-800 font-normal">
                  <li><strong className="font-normal legal-text-primary">&quot;Advisory Fee&quot;</strong> means the fee charged by MIA (Mahir Invest) for rendering investment advisory services, whether on a fixed fee basis or as a percentage of Assets Under Advice (AUA), as agreed upon in the Client Agreement.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Subscription Plan&quot;</strong> means any periodic (monthly, quarterly, semi-annual, or annual) advisory service plan offered by MIA (Mahir Invest) through the Platform.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Cooling-Off Period&quot;</strong> means the initial period following the execution of the Client Agreement during which the Client may terminate the engagement without penalty, as prescribed under SEBI IA Regulations.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Client Agreement&quot;</strong> means the formal agreement executed between MIA (Mahir Invest) and the Client as mandated under SEBI IA Regulations, 2013.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Platform&quot;</strong> collectively means the MIA (Mahir Invest) mobile application and website (www.mahiradvisers.com) and all associated digital interfaces.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Services&quot;</strong> means investment advisory services, portfolio guidance, financial planning content, risk profiling, and any other offerings provided by MIA (Mahir Invest) through the Platform.</li>
                  <li><strong className="font-normal legal-text-primary">&quot;Applicable Laws&quot;</strong> means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Consumer Protection Act, 2019; Information Technology Act, 2000; and all other applicable laws, rules, and regulations of India in force from time to time.</li>
                </ul>
              </div>

              {/* --- SECTION 3. RIGHT TO CANCEL --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">3. RIGHT TO CANCEL</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">Clients can cancel their subscription at any time during the subscription period by providing a written request to <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a> or through the Platform settings.</p>
              </div>

              {/* --- SECTION 4. CANCELLATION BY MIA (Mahir Invest) --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">4. CANCELLATION BY MIA (Mahir Invest)</h2>
                <p className="text-slate-700 text-xs sm:text-sm font-normal">MIA (Mahir Invest) reserves the right to cancel or terminate the advisory engagement with a Client under the following circumstances:</p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="font-normal">Non-compliance by the Client with KYC/AML requirements or provision of false/misleading information.</li>
                  <li className="font-normal">Non-payment of advisory fees within the stipulated due date after reasonable reminders.</li>
                  <li className="font-normal">Client&apos;s conduct that is in violation of Applicable Laws or poses a regulatory risk to MIA (Mahir Invest).</li>
                  <li className="font-normal">Regulatory direction or order from SEBI or any competent authority requiring cessation of services.</li>
                  <li className="font-normal">Any event of force majeure making continued advisory engagement impracticable.</li>
                </ul>

                <p className="legal-alert-secondary p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200">In the event of cancellation by MIA (Mahir Invest), the Client shall be given at least <strong className="font-normal text-slate-900">30 (thirty) days&apos;</strong> prior written notice (except in cases of regulatory directives or fraud), and a pro-rata refund of any unused prepaid fees shall be processed in accordance with the Refund Policy.</p>
              </div>

              {/* --- SECTION 5. AMENDMENTS TO THIS POLICY --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">5  . AMENDMENTS TO THIS POLICY</h2>
                <p className="legal-alert-secondary p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200">MIA (Mahir Invest) reserves the right to amend, modify, or update this Policy at any time. All amendments shall be published on the Platform and communicated to registered Clients via email at least <strong className="font-normal text-slate-900">15 (fifteen) days</strong> prior to the update taking effect. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Policy. If you do not agree with the amended Policy, you must terminate your engagement with MIA (Mahir Invest) by providing 30 days written notice to <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a>.</p>
              </div>

              {/* --- SECTION 6. CONTACT INFORMATION --- */}
              <div className="space-y-4 border-t border-slate-200 pt-6 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">6. CONTACT INFORMATION</h2>
                <p className="text-xs sm:text-sm text-slate-700 font-normal">For cancellation requests or any questions regarding this Policy, please contact:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm p-5 bg-slate-50 rounded-2xl border border-slate-200 font-normal">
                  <div>
                    <h3 className="text-base font-normal legal-text-primary mb-2">Compliance Officer</h3>
                    <p><strong className="font-normal text-slate-900">Bharat Makkar</strong></p>
                    <p>Email: <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></p>
                    <p>Phone: <a className="hover:underline text-blue-600 font-normal" href="tel:+919084945151">+91 9084945151</a></p>
                  </div>

                  <div>
                    <h3 className="text-base font-normal legal-text-primary mb-2">Registered Office</h3>
                    <p><strong className="font-normal text-slate-900">Mahir Investment Advisers Private Limited</strong></p>
                    <p>PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
                    <p className="mt-2"><strong className="font-normal text-slate-900">Resolution Timeline:</strong> Within 30 days from date of receipt of complaint</p>
                  </div>
                </div>

                <div className="text-center p-4 legal-alert-primary rounded-2xl text-xs sm:text-sm font-normal">
                  <strong className="font-normal legal-text-primary">Grievance Escalation:</strong> If your cancellation grievance is not resolved within 30 days, you may escalate it to SEBI SCORES (<a href="https://scores.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a>) or approach the competent courts at Pune, Maharashtra, India.
                </div>
              </div>

              {/* --- SIGNATORY BLOCK (FOOTER) --- */}
              <footer className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <p className="text-base font-normal mb-6 legal-text-primary">ACKNOWLEDGEMENT BY CLIENT</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-900">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-800 mt-1 font-sans">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-600 font-normal">Principal Officer <br /> <strong className="font-normal text-slate-800">Email:</strong> <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">admin@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>

                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-900">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-800 mt-1 font-sans">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-600 font-normal">Compliance Officer <br /> <strong className="font-normal text-slate-800">Email:</strong> <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">compliance@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>
                </div>
              </footer>
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

export default CancellationPolicyPage;
