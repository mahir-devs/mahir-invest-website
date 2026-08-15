'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

export const TermsAndConditionsPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Sky Blue Gradient Background Section */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-5xl mx-auto z-10 space-y-10">
          {/* Header Title */}
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
              <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                Terms &amp; Conditions
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                Mahir Investment Advisers Private Limited — User Agreement
              </p>
            </MotionItem>
          </div>

          {/* Main Legal Content Card */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full">
            <GlassCard rounded="3xl" variant="frosted" className="max-w-5xl mx-auto bg-white p-6 sm:p-10 text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-8 select-text font-normal">
              {/* --- HEADER BANNER & META DATA --- */}
              <header className="legal-header pb-8 border-b border-slate-200 font-normal">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                    MAHIR INVESTMENT ADVISERS PRIVATE LIMITED
                  </h2>
                  <p className="text-base sm:text-lg font-normal text-slate-600 mt-1">
                    SEBI Registered Investment Adviser | Registration No. INA000022668
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-normal mt-4 border-b pb-2 text-slate-900">
                  TERMS &amp; CONDITIONS
                </h3>
                <p className="text-base sm:text-lg mt-2 font-normal text-slate-700">
                  User Agreement — Mahir Investment Advisers (MIA) App &amp; Web Platform
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

              {/* --- SECTION 1. INTRODUCTION AND ACCEPTANCE OF TERMS --- */}
              <section id="introduction" className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">These Terms and Conditions (&apos;Terms&apos;, &apos;Agreement&apos;) constitute a legally binding contract between you (&apos;Client&apos;, &apos;User&apos;, &apos;you&apos;) and Mahir Investment Advisers Private Limited (&apos;MIA&apos;, &apos;Company&apos;, &apos;we&apos;, &apos;us&apos;, &apos;our&apos;), a company incorporated under the Companies Act, 2013 and registered as an Investment Adviser with the Securities and Exchange Board of India (&apos;SEBI&apos;) under the SEBI (Investment Advisers) Regulations, 2013 (&apos;IA Regulations&apos;).</p>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">By accessing, downloading, installing, or using the MIA mobile application (&apos;App&apos;) or website (&apos;Platform&apos;), or availing any services offered thereon, you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms, please immediately discontinue use of the Platform and Services.</p>
                <div className="legal-alert-secondary p-4 rounded-2xl text-xs sm:text-sm font-normal border border-amber-200 text-slate-700">
                  <p className="text-slate-700 italic font-normal">These Terms shall be read in conjunction with the Privacy Policy, Disclaimers, SEBI Disclosures, and the Investor Charter, all of which are incorporated herein by reference and form an integral part of this Agreement.</p>
                </div>
              </section>

              {/* --- SECTION 2. DEFINITIONS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">2. DEFINITIONS</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">In these Terms, the following expressions shall have the meanings assigned to them below:</p>

                <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm text-slate-800 font-normal">
                  <li><strong className="font-normal text-slate-900">&quot;Services&quot;</strong> means investment advisory services, portfolio guidance, financial planning content, risk profiling, educational resources, and any other offerings provided by MIA through the Platform.</li>
                  <li><strong className="font-normal text-slate-900">&quot;Platform&quot;</strong> collectively means the MIA mobile application and website (www.mahiradvisers.com) and all associated digital interfaces.</li>
                  <li><strong className="font-normal text-slate-900">&quot;Client Agreement&quot;</strong> means the separate formal agreement executed between MIA and each Client as mandated under SEBI IA Regulations, 2013.</li>
                  <li><strong className="font-normal text-slate-900">&quot;KYC&quot;</strong> means Know Your Customer documentation and verification as required under applicable SEBI, PMLA, and RBI guidelines.</li>
                  <li><strong className="font-normal text-slate-900">&quot;AUA&quot;</strong> means Assets Under Advice the aggregate value of the client&apos;s investment portfolio for which MIA provides advisory services.</li>
                  <li><strong className="font-normal text-slate-900">&quot;Investment Advice&quot;</strong> means advice relating to investing in, purchasing, selling, or otherwise dealing in securities or investment products, or advice on investment portfolio, as defined under SEBI IA Regulations.</li>
                  <li><strong className="font-normal text-slate-900">&quot;Principal Officer&quot;</strong> means Yash Mahavir Bedmuttha, the key management person designated and registered with SEBI for MIA.</li>
                  <li><strong className="font-normal text-slate-900">&quot;Applicable Laws&quot;</strong> means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Prevention of Money Laundering Act, 2002; Information Technology Act, 2000; Digital Personal Data Protection Act, 2023; and all other applicable laws, rules, and regulations of India in force from time to time.</li>
                  <li><strong className="font-normal text-slate-900">&quot;SEBI&quot;</strong> means the Securities and Exchange Board of India constituted under the SEBI Act, 1992.</li>
                  <li><strong className="font-normal text-slate-900">&quot;PMLA&quot;</strong> means the Prevention of Money Laundering Act, 2002 and the rules framed thereunder.</li>
                </ul>
              </div>

              {/* --- SECTION 3. ELIGIBILITY CRITERIA --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">3. ELIGIBILITY CRITERIA</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">To use the Platform and avail MIA&apos;s Services, you must satisfy all of the following conditions:</p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Be a natural person of at least 18 years of age possessing legal capacity to enter into binding contracts, or a body corporate, LLP, partnership firm, HUF, AOP, or trust duly authorized under its constitutional documents.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Not be a person barred or prohibited from receiving investment advisory services under any court order, regulatory direction, or applicable law.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Complete full KYC verification as mandated by SEBI and PMLA guidelines before availing investment advisory services.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Provide accurate, complete, and up-to-date information including income details, net worth, investment horizon, risk tolerance, and financial goals.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Reside and be domiciled in India. Non-resident clients are subject to additional regulatory requirements and must notify MIA of their NRI/OCI/PIO status at onboarding.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal">Not be a Politically Exposed Person (PEP) or a close associate of a PEP unless MIA expressly agrees to onboard you after conducting Enhanced Due Diligence.</li>
                </ul>

                <div className="p-4 legal-alert-primary rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-blue-100">
                  <strong className="font-normal text-slate-900">Disclaimer:</strong> MIA reserves the right to decline or terminate services to any person at its sole discretion and without assigning reasons, subject to applicable regulatory guidelines.
                </div>
              </div>

              {/* --- SECTION 4. NATURE AND SCOPE OF SERVICES --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">4. NATURE AND SCOPE OF SERVICES</h2>

                <h3 className="text-lg font-normal mt-4 text-slate-800">4.1 Investment Advisory Services</h3>
                <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed">MIA provides personalized investment advisory services as a SEBI-registered Investment Adviser. All advice is based on your risk profile, financial situation, investment objectives, investment horizon, and other relevant parameters disclosed by you. MIA does not exercise discretionary management over client portfolios; all final investment decisions rest with the client.</p>

                <h3 className="text-lg font-normal mt-4 text-slate-800">4.2 Services Offered</h3>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li>Personal investment planning and goal-based financial advisory.</li>
                  <li>Portfolio review, monitoring, and rebalancing recommendations.</li>
                  <li>Asset allocation guidance across equity, debt, mutual funds, ETFs, and other SEBI-regulated securities.</li>
                  <li>Research-based investment recommendations with written rationale.</li>
                  <li>Comprehensive financial planning including retirement planning, wealth creation, and goal-based planning.</li>
                  <li>Risk profiling and suitability assessment.</li>
                  <li>Financial planning tools, portfolio trackers, and calculators on the Platform.</li>
                  <li>Investor education content on financial markets, products, and regulatory matters.</li>
                </ul>

                <h3 className="text-lg font-normal mt-6 text-slate-900">4.3 Services NOT Offered</h3>
                <p className="p-3.5 legal-alert-red rounded-xl text-xs sm:text-sm text-rose-950 font-normal border border-rose-200">MIA does NOT offer the following services, and nothing on the Platform shall be construed as:</p>
                <ul className="space-y-1.5 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li>Portfolio Management Services (PMS) requiring a separate SEBI registration.</li>
                  <li>Stock broking, trading, or order execution services.</li>
                  <li>Research Analyst services (unless separately registered with SEBI).</li>
                  <li>Insurance advisory, distribution, or brokerage services.</li>
                  <li>Commodity trading advisory or futures/options advisory.</li>
                  <li>Guaranteed returns products or capital protection schemes.</li>
                </ul>
                <p className="text-xs italic text-slate-500 font-normal">Any service outside the scope of SEBI (IA) Regulations, 2013.</p>
              </div>

              {/* --- SECTION 5. CLIENT ONBOARDING AND KYC REQUIREMENTS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">5. CLIENT ONBOARDING AND KYC REQUIREMENTS</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">In strict accordance with SEBI (IA) Regulations, 2013 and PMLA, 2002, the following onboarding procedure applies:</p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Full KYC Mandate:</strong> All clients must complete full KYC verification before receiving any investment advisory services from MIA.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Required Documents:</strong> PAN card, Aadhaar card (for address/identity proof), recent passport-size photograph, active bank account details (cancelled cheque), income proof (latest ITR, Form 16, or salary slip), and net worth certificate where applicable.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Risk Assessment:</strong> MIA shall conduct a comprehensive Risk Profiling of each client covering risk tolerance, investment horizon, financial goals, and existing investments prior to providing investment advice.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Client Agreement:</strong> Each client shall execute a formal Client Agreement as mandated by SEBI before commencement of any advisory services. The Client Agreement shall specify fee structure, scope of services, and rights and obligations of both parties.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Updates:</strong> Any material change in the client&apos;s financial situation, employment, risk appetite, or investment objectives must be promptly communicated to MIA in writing or via the Platform.</li>
                  <li className="border-l-4 legal-border-primary pl-3 py-1 font-normal"><strong className="font-normal text-slate-900">Compliance Cycles:</strong> MIA shall conduct periodic re-KYC, risk profile reassessment, and portfolio reviews in accordance with SEBI guidelines and the Client Agreement.</li>
                </ul>
                <div className="p-4 legal-alert-primary rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-blue-100">
                  <strong className="font-normal text-slate-900">Note:</strong> Clients who fail to complete KYC or provide requisite documents shall not be eligible to receive advisory services until compliance is achieved.
                </div>
              </div>

              {/* --- SECTION 6. FEE STRUCTURE AND PAYMENT TERMS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">6. FEE STRUCTURE AND PAYMENT TERMS</h2>

                <h3 className="text-lg font-normal mt-4 text-slate-800">6.1 Fee Structure</h3>
                <p className="text-slate-700 text-xs sm:text-sm font-normal">MIA charges fees for investment advisory services in strict compliance with SEBI (IA) Regulations, 2013. Advisory fees shall not exceed the limits prescribed by SEBI from time to time:</p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Fee Mode</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Description</th>
                        <th scope="col" className="p-4 font-normal w-1/3">SEBI Maximum Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50">Fixed Fee</td>
                        <td className="p-4 font-normal">Predetermined flat fee per annum per client/family</td>
                        <td className="p-4 font-normal text-slate-900">INR 1,25,000/- per annum per family</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50">AUA-Based Fee</td>
                        <td className="p-4 font-normal">Percentage of Assets Under Advice per annum</td>
                        <td className="p-4 font-normal text-slate-900">2.5% per annum of AUA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-normal mt-6 text-slate-800">6.2 Payment Terms</h3>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li>All fees are payable as per the schedule specified in the individual Client Agreement.</li>
                  <li>All payments must be made by NEFT/RTGS/UPI/online transfer directly to MIA&apos;s registered and disclosed bank account. Cash payments are strictly not accepted.</li>
                  <li>GST at the applicable rate and all other statutory taxes shall be charged over and above the advisory fee.</li>
                  <li>Fee receipts and GST invoices shall be issued for all payments within 7 working days.</li>
                  <li className="font-normal text-slate-900">MIA does not accept any commission, trail fee, referral fee, or any other remuneration from product manufacturers, fund houses, or any third party in connection with advice given to clients.</li>
                </ul>

                <h3 className="text-lg font-normal mt-6 text-slate-800">6.3 Refund Policy</h3>
                <p className="legal-alert-primary p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-blue-100">Advisory fees once paid are non-refundable, except in the following circumstances: (a) service failure directly and solely attributable to MIA and established after due inquiry; (b) as required under applicable law or SEBI directives. All fee disputes must be raised with the Compliance Officer within 30 calendar days of the relevant invoice date.</p>
              </div>

              {/* --- SECTION 7. CLIENT OBLIGATIONS AND REPRESENTATIONS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">7. CLIENT OBLIGATIONS AND REPRESENTATIONS</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">As a Client of MIA, you represent, warrant, and unconditionally agree that:</p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="border-b border-slate-100 pb-2 font-normal">All information provided during onboarding, KYC, risk profiling, and thereafter is truthful, accurate, complete, and not misleading.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">You will promptly notify MIA in writing of any material change in your financial circumstances, employment, risk appetite, or investment goals.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">You understand and accept that investment advice is based entirely on information provided by you, and inaccurate or incomplete information may result in unsuitable advice for which MIA bears no liability.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">You shall not use the Platform or Services for any unlawful purpose including money laundering, tax evasion, fraud, market manipulation, or circumvention of regulatory requirements.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">You shall not attempt to reverse engineer, decompile, disassemble, or compromise any software or security component of the Platform.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">Your login credentials, OTP, password, and account access are personal and non-transferable. You shall be solely responsible for all activities conducted through your account.</li>
                  <li className="border-b border-slate-100 pb-2 font-normal">You shall maintain the confidentiality of all investment advice, research, and communications received from MIA and shall not share, publish, or distribute such content without MIA&apos;s prior written consent.</li>
                  <li className="font-normal">You acknowledge that investment in securities markets involves market risk and you are capable of bearing such risk based on your disclosed financial profile.</li>
                </ul>
              </div>

              {/* --- SECTION 8. INTELLECTUAL PROPERTY RIGHTS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">8. INTELLECTUAL PROPERTY RIGHTS</h2>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">All content on the Platform including but not limited to text, graphics, logos, icons, images, software code, research reports, financial models, algorithms, and educational contentis the exclusive intellectual property of MIA or its licensors and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws.</p>
                <p className="legal-alert-primary p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-blue-100">You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your personal investment advisory and financial planning purposes. You shall not reproduce, modify, distribute, publicly display, sublicense, or create derivative works from any content without the prior written consent of MIA.</p>
              </div>

              {/* --- SECTION 9. DISCLAIMER OF LIABILITY --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">9. DISCLAIMER OF LIABILITY</h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal">To the fullest extent permitted by applicable law, MIA, its directors, officers, employees, and agents shall not be liable for:</p>

                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="font-normal">Any investment losses arising from advice provided in good faith based on information furnished by the client.</li>
                  <li className="font-normal">Market risks, systemic risks, geopolitical risks, regulatory changes, or force majeure events.</li>
                  <li className="font-normal">Decisions made by the client contrary to, or independent of, advice given by MIA.</li>
                  <li className="font-normal">Interruption, unavailability, errors, or data loss arising from Platform downtime or technical failures.</li>
                  <li className="font-normal">Third-party services, websites, financial products, or platforms accessible through or linked from our Platform.</li>
                  <li className="font-normal">Tax consequences of investment decisions.</li>
                </ul>

                <div className="p-4 legal-alert-secondary rounded-2xl text-xs sm:text-sm text-slate-700 border border-amber-200 font-normal">
                  <strong className="font-normal text-slate-900">Limitation:</strong> MIA&apos;s total aggregate liability under or in connection with these Terms, if any, shall not exceed the advisory fees actually paid by you to MIA in the six months immediately preceding the event giving rise to the claim.
                </div>
              </div>

              {/* --- SECTION 10. GRIEVANCE REDRESSAL MECHANISM --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">10. GRIEVANCE REDRESSAL MECHANISM</h2>
                <p className="text-slate-700 text-xs sm:text-sm font-normal">In accordance with SEBI IA Regulations and SEBI Circular on investor grievance redressal:</p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/5">Level</th>
                        <th scope="col" className="p-4 font-normal w-2/5">Authority</th>
                        <th scope="col" className="p-4 font-normal w-2/5">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 text-center">Level 1</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 text-xs font-normal"><strong className="font-normal text-slate-900">Email:</strong> compliance@mahiradvisers.com <br /> <strong className="font-normal text-slate-900">Phone No:</strong> +91 9084945151<br /><strong className="font-normal text-slate-900">Resolution TAT:</strong> 30 days from complaint date</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 text-center">Level 2</td>
                        <td className="p-4 font-normal">Principal Officer</td>
                        <td className="p-4 text-xs font-normal"><strong className="font-normal text-slate-900">Email:</strong> admin@mahiradvisers.com<br /> <strong className="font-normal text-slate-900">Phone No:</strong> +91 9084945151<br /><strong className="font-normal text-slate-900">Resolution TAT:</strong> 15 days from escalation date</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 text-center">Level 3</td>
                        <td className="p-4 font-normal">SEBI SCORES Portal</td>
                        <td className="p-4 text-xs font-normal">scores.gov.in<br />Toll Free: 1800 266 7575<br /><strong className="font-normal text-slate-900">Resolution TAT:</strong> As per SEBI guidelines</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 text-center">Level 4</td>
                        <td className="p-4 font-normal">SEBI ODR Platform</td>
                        <td className="p-4 text-xs font-normal">smartodr.in<br /><strong className="font-normal text-slate-900">Resolution TAT:</strong> As per ODR timelines</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 text-center">Level 5</td>
                        <td className="p-4 font-normal">SEBI Ombudsman / Court</td>
                        <td className="p-4 text-xs font-normal">As per applicable law<br /><strong className="font-normal text-slate-900">Resolution TAT:</strong> As per regulatory/judicial timeline</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* --- SECTION 11. ANTI-MONEY LAUNDERING COMPLIANCE --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">11. ANTI-MONEY LAUNDERING COMPLIANCE</h2>
                <p className="text-slate-700 text-xs sm:text-sm font-normal">MIA is committed to full compliance with PMLA, 2002 and SEBI&apos;s AML/CFT guidelines. MIA maintains robust Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) procedures for high-risk clients and transactions.</p>
                <div className="p-4 legal-alert-primary rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-blue-100">
                  <strong className="font-normal text-slate-900">Regulatory Mandate:</strong> MIA may report suspicious transactions to the Financial Intelligence Unit India (FIU-IND) and may be required by law to share client information with regulatory or law enforcement authorities without prior notice.
                </div>
              </div>

              {/* --- SECTION 12, 13, 14 --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal text-slate-900 border-b pb-2">12. GOVERNING LAW AND JURISDICTION</h2>
                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of courts located in Pune, Maharashtra, subject to arbitration provisions contained in the individual Client Agreement. Disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996 as specified in the Client Agreement.</p>

                <h3 className="text-lg font-normal mt-6 text-slate-800">13. AMENDMENTS TO TERMS</h3>
                <p className="legal-alert-secondary p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200">MIA reserves the right to amend, modify, or update these Terms at any time with or without prior notice. All amendments shall be published on the Platform. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Terms. If you do not agree with amended Terms, you must terminate your engagement with MIA by providing 30 days written notice to compliance@mahiradvisers.com .</p>

                <h3 className="text-lg font-normal mt-6 text-slate-800">14. MISCELLANEOUS PROVISIONS</h3>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li><strong className="font-normal text-slate-900">Severability:</strong> If any provision of these Terms is found to be invalid, void, or unenforceable by a competent court, such provision shall be deemed severed and the remaining provisions shall continue in full force and effect.</li>
                  <li><strong className="font-normal text-slate-900">Entire Agreement:</strong> These Terms, together with the Privacy Policy, Disclaimers, Client Agreement, and SEBI Disclosures, constitute the entire agreement between you and MIA, superseding all prior agreements, representations, and understandings.</li>
                  <li><strong className="font-normal text-slate-900">Waiver:</strong> Failure by MIA to enforce any provision of these Terms on one occasion shall not constitute a waiver of that provision or any right on any subsequent occasion.</li>
                  <li><strong className="font-normal text-slate-900">Assignment:</strong> You may not assign, transfer, or sub-license your rights or obligations under these Terms without MIA&apos;s prior written consent. MIA may assign its rights to a successor entity following regulatory approvals.</li>
                  <li><strong className="font-normal text-slate-900">Force Majeure:</strong> MIA shall not be liable for failure or delay in performance due to circumstances beyond its reasonable control including acts of God, pandemic, war, regulatory action, or internet failure.</li>
                </ul>
              </div>

              {/* --- SIGNATORY BLOCK (FOOTER) --- */}
              <footer className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <p className="text-base font-normal mb-6 text-slate-900">ACKNOWLEDGEMENT BY CLIENT</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
                  <div className="flex flex-col items-center signature">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-900">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-800 mt-1 font-sans">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-600 font-normal">Principal Officer <br /> <strong className="font-normal text-slate-800">Email:</strong> <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline">admin@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>

                  <div className="flex flex-col items-center signature">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-900">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-800 mt-1 font-sans">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-600 font-normal">Compliance Officer <br /> <strong className="font-normal text-slate-800">Email:</strong> <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline">compliance@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>
                </div>
              </footer>
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

export default TermsAndConditionsPage;
