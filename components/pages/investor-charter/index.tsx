'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

export const InvestorCharterPage = () => {
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
                Investor Charter
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                Mahir Investment Advisers Private Limited — SEBI Registered Investment Adviser
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

                <h3 className="text-xl sm:text-2xl font-normal mt-6 border-b pb-2 text-slate-800">
                  INVESTOR CHARTER &amp; REGULATORY DISCLOSURES
                </h3>
                <p className="text-base sm:text-lg mt-2 font-normal text-slate-700">
                  Pursuant to SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2022/35 dated March 18, 2022
                </p>

                {/* Metadata Grid */}
                <div className="metadata grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 font-normal text-slate-700">
                  <div>
                    <p><strong className="font-normal text-slate-800">Version:</strong> 1.0</p>
                  </div>
                  <div className="sm:text-right">
                    <p><strong className="font-normal text-slate-800">Effective Date:</strong> June 01, 2026</p>
                  </div>
                </div>
              </header>

              {/* --- VISION & MISSION PANELS --- */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 font-normal">
                <div className="legal-alert-primary p-6 rounded-2xl border border-blue-100 font-normal">
                  <h3 className="text-base font-normal legal-text-primary mb-3 uppercase tracking-wider">Vision</h3>
                  <p className="text-slate-750 text-xs sm:text-sm leading-relaxed font-normal">
                    To empower every Indian investor with transparent, independent, and personalized investment advisory services, enabling them to achieve their financial goals with confidence, clarity, and complete regulatory protection.
                  </p>
                </div>
                <div className="legal-alert-secondary p-6 rounded-2xl border border-amber-200 font-normal">
                  <h3 className="text-base font-normal text-amber-900 mb-3 uppercase tracking-wider">Mission</h3>
                  <p className="text-slate-750 text-xs sm:text-sm leading-relaxed font-normal">
                    To provide suitability-based, conflict-free investment advice aligned to each client&apos;s unique risk profile, financial objectives, and investment horizon, with unwavering compliance with SEBI regulations.
                  </p>
                </div>
              </section>

              {/* --- SECTION 1: SERVICES OFFERED BY MIA --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 1: SERVICES OFFERED BY MIA</h2>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Service</th>
                        <th scope="col" className="p-4 font-normal">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Personalized Investment Advisory</td>
                        <td className="p-4 font-normal">Goal-based, risk-profiled financial planning tailored to each client&apos;s specific objectives, income, and investment horizon.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Portfolio Review &amp; Rebalancing</td>
                        <td className="p-4 font-normal">Periodic review of client portfolios with recommendations to realign with stated financial goals and risk profile.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Asset Allocation Advisory</td>
                        <td className="p-4 font-normal">Guidance on optimal allocation across equity, debt, mutual funds, ETFs, and other SEBI-regulated asset classes.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Comprehensive Financial Planning</td>
                        <td className="p-4 font-normal">Holistic financial planning covering retirement, children&apos;s education, wealth creation, and emergency fund planning.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Investment Research &amp; Analysis</td>
                        <td className="p-4 font-normal">Research-backed investment recommendations on securities, mutual funds, and market trends with documented rationale.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Risk Profiling &amp; Suitability Assessment</td>
                        <td className="p-4 font-normal">Detailed assessment of client risk tolerance, capacity, and investment objectives to ensure suitability of advice.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Investor Education Content</td>
                        <td className="p-4 font-normal">Financial literacy content, webinars, and resources to help investors make informed decisions.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Grievance Redressal Support</td>
                        <td className="p-4 font-normal">End-to-end assistance in resolving investor complaints through MIA&apos;s internal mechanism and SEBI SCORES.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- SECTION 2: INVESTOR RIGHTS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 2: INVESTOR RIGHTS — WHAT INVESTORS CAN EXPECT FROM MIA</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  As a SEBI-registered Investment Adviser, MIA commits to providing every client the following rights and assurances:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">Receive personalized, suitability-based investment advice founded exclusively on your individual risk profile, financial goals, investment horizon, and financial profile.</li>
                  <li className="font-normal">Receive and execute a written Client Agreement before commencement of any advisory services, clearly detailing scope, fees, rights, and obligations.</li>
                  <li className="font-normal">Receive a copy of the Risk Profiling Report prepared for you and all investment advice in writing with stated investment rationale.</li>
                  <li className="font-normal">Full and transparent disclosure of advisory fee structure, total fee payable, and payment schedule before signing the Client Agreement.</li>
                  <li className="font-normal">Transparent written disclosure of all potential or actual conflicts of interest, if any, before receiving advice.</li>
                  <li className="font-normal">Access to SEBI SCORES Portal (<a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a>) for registration and tracking of unresolved complaints at any stage.</li>
                  <li className="font-normal">Treatment with dignity, respect, professional courtesy, and absolute confidentiality of your personal and financial information.</li>
                  <li className="font-normal">Assurance that MIA shall never receive commissions, referral fees, or any other payment from product manufacturers — advisory fees paid by you are MIA&apos;s only revenue source.</li>
                  <li className="font-normal">Right to receive a copy of all records maintained by MIA relating to your advisory engagement upon written request.</li>
                  <li className="font-normal">Right to terminate the advisory relationship at any time subject to the terms of the Client Agreement.</li>
                  <li className="font-normal">Right to approach SEBI SCORES, SEBI ODR (<a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">smartodr.in</a>), or SEBI Ombudsman for grievances not resolved by MIA.</li>
                </ul>
              </section>

              {/* --- SECTION 3: WHAT MIA EXPECTS FROM INVESTORS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 3: WHAT MIA EXPECTS FROM INVESTORS</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  To enable MIA to provide effective, suitable, and compliant advisory services, MIA expects investors to:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">Provide true, complete, accurate, and up-to-date information during KYC, risk profiling, and throughout the advisory engagement.</li>
                  <li className="font-normal">Read and carefully understand the Client Agreement, Disclaimers, Risk Profile, Terms &amp; Conditions, and all advisory communications before acting.</li>
                  <li className="font-normal">Notify MIA promptly and in writing of any material change in your financial situation, employment status, risk tolerance, investment objectives, or family circumstances.</li>
                  <li className="font-normal">Pay advisory fees as per the schedule agreed in the Client Agreement.</li>
                  <li className="font-normal">Contact MIA&apos;s advisory team for clarification or additional information before taking any investment decision based on advice received.</li>
                  <li className="font-normal">Maintain the confidentiality of your login credentials, OTP, password, and Platform account.</li>
                  <li className="font-normal">Not share MIA&apos;s research, advice documents, or client portal access with unauthorized third parties.</li>
                </ul>
              </section>

              {/* --- SECTION 4: DO'S AND DON'TS FOR INVESTORS --- */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-normal">
                {/* DO's Panel */}
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-600 shadow-xs border border-slate-200/80 font-normal">
                  <h3 className="text-base font-normal text-emerald-800 mb-4 flex items-center gap-2 border-b border-emerald-200 pb-2">
                    <span>✔</span> 4.1 DO&apos;S — Best Practices for Investors
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 text-slate-800 text-xs sm:text-sm font-normal">
                    <li className="font-normal"><strong className="font-normal">DO</strong> verify SEBI registration of any investment adviser including MIA at <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.sebi.gov.in</a> before engaging services.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> read the Client Agreement, Risk Disclosure Documents, Investor Charter, Disclaimers, and all Terms carefully before signing or clicking &apos;I Agree&apos;.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> understand your risk profile and ensure you invest only in financial products suitable for your risk tolerance and investment horizon.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> always insist on written investment advice with a clear rationale; never act on verbal advice alone.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> review your portfolio, risk profile, and advisory services at least annually or when there is a material change in your circumstances.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> keep copies of all investment advice, fee receipts, Client Agreement, and communications received from MIA.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> register your complaint at SEBI SCORES (<a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a>) if your grievance is not resolved by MIA within prescribed timelines.</li>
                    <li className="font-normal"><strong className="font-normal">DO</strong> check and understand all charges, taxes, and fees before investing.</li>
                  </ul>
                </div>

                {/* DON'Ts Panel */}
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-rose-500 shadow-xs border border-slate-200/80 font-normal">
                  <h3 className="text-base font-normal text-rose-800 mb-4 flex items-center gap-2 border-b border-rose-200 pb-2">
                    <span>✖</span> 4.2 DON&apos;TS — Investor Cautions
                  </h3>
                  <ul className="space-y-2.5 list-disc pl-5 text-slate-800 text-xs sm:text-sm font-normal">
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> make investment decisions based solely on verbal advice, social media tips, or unwritten recommendations.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> pay fees in cash, by bearer cheque, to personal accounts of MIA representatives, or to any account other than MIA&apos;s officially disclosed and registered bank account.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> fall for promises of guaranteed, assured, or unrealistically high returns — all securities investments involve market risk.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> share your login credentials, OTP, password, or account access with anyone, including MIA&apos;s own staff — MIA will never ask for your OTP.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> invest without completing mandatory KYC formalities — KYC protects you as an investor.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> ignore communications from SEBI, MIA, depositories, Registrar and Transfer Agents, or other regulatory bodies.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> deal with unregistered investment advisers, market tipsters, stock market &apos;gurus&apos;, or social media influencers offering investment advice without a valid SEBI registration.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> make investment decisions under pressure or urgency — take adequate time to review advice, rationale, and your own risk profile.</li>
                    <li className="font-normal"><strong className="font-normal">DON&apos;T</strong> invest borrowed money or funds earmarked for essential expenses in securities markets.</li>
                  </ul>
                </div>
              </section>

              {/* --- SECTION 5: INVESTOR GRIEVANCE REDRESSAL PROCESS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 5: INVESTOR GRIEVANCE REDRESSAL PROCESS</h2>

                <h3 className="text-base sm:text-lg font-normal text-slate-800">5.1 Step-by-Step Complaint Filing Process</h3>
                <div className="space-y-3 font-normal">
                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 legal-border-primary border border-slate-200/80 font-normal">
                    <p className="font-normal text-slate-900">Step 1 — Contact MIA Compliance Officer</p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                      Submit your complaint in writing with all supporting documents to <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a> or +91 9084945151. MIA shall acknowledge within 5 working days and aim to resolve within 30 days.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 legal-border-primary border border-slate-200/80 font-normal">
                    <p className="font-normal text-slate-900">Step 2 — Escalate to Principal Officer</p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                      If not satisfactorily resolved within 30 days by the Compliance Officer, escalate in writing to the Principal Officer at <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">admin@mahiradvisers.com</a> | +91 9084945151. Resolution expected within 15 days of escalation.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 legal-border-primary border border-slate-200/80 font-normal">
                    <p className="font-normal text-slate-900">Step 3 — SEBI SCORES Portal</p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                      If still unresolved, register your complaint on SEBI SCORES at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a>. Provide MIA&apos;s SEBI Registration No. INA000022668 and all complaint details with documentary evidence.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 legal-border-primary border border-slate-200/80 font-normal">
                    <p className="font-normal text-slate-900">Step 4 — SEBI ODR Platform</p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                      Access Online Dispute Resolution through SEBI&apos;s ODR Portal at <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">smartodr.in</a> for structured mediation and arbitration.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border-l-4 legal-border-primary border border-slate-200/80 font-normal">
                    <p className="font-normal text-slate-900">Step 5 — SEBI Ombudsman / Legal Recourse</p>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 font-normal">
                      Approach the SEBI Ombudsman or appropriate court/consumer forum/tribunal as per applicable law.
                    </p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-normal mt-6 text-slate-800">5.2 Important Regulatory Contact Details</h3>
                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Authority</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Contact Details</th>
                        <th scope="col" className="p-4 font-normal">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI SCORES Portal</td>
                        <td className="p-4 font-normal"><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a> | 1800 266 7575 (Toll Free)</td>
                        <td className="p-4 font-normal">Online complaint registration and tracking</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI ODR Platform</td>
                        <td className="p-4 font-normal"><a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">smartodr.in</a></td>
                        <td className="p-4 font-normal">Online Dispute Resolution — mediation &amp; arbitration</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI Investor Helpline</td>
                        <td className="p-4 font-normal">1800 266 7575 (Toll Free) | SMS &apos;SEBI&apos; to 9999</td>
                        <td className="p-4 font-normal">Investor queries, complaints, and education</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI Website</td>
                        <td className="p-4 font-normal"><a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.sebi.gov.in</a></td>
                        <td className="p-4 font-normal">Regulations, circulars, registered intermediary verification</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">MIA Compliance Officer</td>
                        <td className="p-4 font-normal"><a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a> | +91 9084945151</td>
                        <td className="p-4 font-normal">Level 1 — Primary complaint contact</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">MIA Principal Officer</td>
                        <td className="p-4 font-normal"><a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">admin@mahiradvisers.com</a> | +91 9084945151</td>
                        <td className="p-4 font-normal">Level 2 — Escalation contact</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- SECTION 6: ANNUAL COMPLIANCE CHECKLIST --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 6: ANNUAL COMPLIANCE CHECKLIST</h2>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Compliance Activity</th>
                        <th scope="col" className="p-4 font-normal w-1/6">Frequency</th>
                        <th scope="col" className="p-4 font-normal w-1/6">Responsible Person</th>
                        <th scope="col" className="p-4 font-normal w-1/4">Deadline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Annual Compliance Report (ACR) filing with SEBI</td>
                        <td className="p-4 font-normal">Annual</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">April 30 each year</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Client Risk Profile Review</td>
                        <td className="p-4 font-normal">Annual / on material change</td>
                        <td className="p-4 font-normal">Principal Officer</td>
                        <td className="p-4 font-normal">Rolling</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">NISM Certification Renewal for advisory staff</td>
                        <td className="p-4 font-normal">As per NISM validity</td>
                        <td className="p-4 font-normal">All advisory staff</td>
                        <td className="p-4 font-normal">Before expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Professional Indemnity Insurance Renewal</td>
                        <td className="p-4 font-normal">Annual</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">Before expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Net Worth Certificate submission to SEBI</td>
                        <td className="p-4 font-normal">Annual</td>
                        <td className="p-4 font-normal">CFO / Management</td>
                        <td className="p-4 font-normal">As required</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">AML/CFT Policy Review and Board Approval</td>
                        <td className="p-4 font-normal">Annual</td>
                        <td className="p-4 font-normal">Board / Compliance Officer</td>
                        <td className="p-4 font-normal">April 30 each year</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Client Complaints Disclosure update on Platform</td>
                        <td className="p-4 font-normal">Monthly</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">By 7th of next month</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Internal Compliance Audit</td>
                        <td className="p-4 font-normal">Semi-annual</td>
                        <td className="p-4 font-normal">Internal Auditor</td>
                        <td className="p-4 font-normal">April and October</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Client Agreement Review and Update</td>
                        <td className="p-4 font-normal">Annual or on regulatory change</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">Rolling</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Investor Charter Review and Update</td>
                        <td className="p-4 font-normal">On regulatory change</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">As required</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">FATCA/CRS Reporting (if applicable)</td>
                        <td className="p-4 font-normal">Annual</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">As per CBDT/RBI</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI IA Registration Renewal (if applicable)</td>
                        <td className="p-4 font-normal">As required</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">Before expiry</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Conflict of Interest Register Update</td>
                        <td className="p-4 font-normal">Quarterly</td>
                        <td className="p-4 font-normal">Compliance Officer</td>
                        <td className="p-4 font-normal">Rolling</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Employee KYC and Background Verification</td>
                        <td className="p-4 font-normal">At onboarding &amp; annually</td>
                        <td className="p-4 font-normal">HR / Compliance Officer</td>
                        <td className="p-4 font-normal">Rolling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- SECTION 7: REGULATORY FRAMEWORK --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">SECTION 7: REGULATORY FRAMEWORK</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA operates in strict compliance with the following regulatory framework:
                </p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">SEBI Act, 1992;</li>
                  <li className="font-normal">SEBI (Investment Advisers) Regulations, 2013 and all amendments;</li>
                  <li className="font-normal">SEBI Circular on Investment Advisers (September 23, 2020 — SEBI/HO/IMD/DF1/CIR/P/2020/182);</li>
                  <li className="font-normal">SEBI Circular on Investor Charter (March 18, 2022 — SEBI/HO/IMD/DF1/CIR/P/2022/35);</li>
                  <li className="font-normal">Prevention of Money Laundering Act, 2002 (PMLA) and PMLA Rules, 2005;</li>
                  <li className="font-normal">SEBI AML/CFT Guidelines for Market Intermediaries;</li>
                  <li className="font-normal">Digital Personal Data Protection Act, 2023 (DPDP Act);</li>
                  <li className="font-normal">Information Technology (Reasonable Security Practices) Rules, 2011;</li>
                  <li className="font-normal">Information Technology Act, 2000;</li>
                  <li className="font-normal">Companies Act, 2013;</li>
                  <li className="font-normal">Income Tax Act, 1961;</li>
                  <li className="font-normal">FATCA/CRS Inter-Governmental Agreements (where applicable);</li>
                  <li className="font-normal">All applicable SEBI Circulars, Notifications, and Guidance Notes issued from time to time;</li>
                </ul>

                <div className="legal-alert-secondary p-4 mt-6 text-xs sm:text-sm text-slate-700 italic rounded-2xl border border-amber-200 font-normal">
                  This Investor Charter is published in accordance with SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2022/35 dated March 18, 2022. Mahir Investment Advisers Private Limited is unconditionally committed to upholding the rights of investors and maintaining the highest standards of transparency, integrity, and regulatory compliance in all its operations.
                </div>
              </section>

              {/* --- SIGNATORY BLOCK (FOOTER) --- */}
              <footer className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal">
                  Version: 1.01 | Effective Date: June 01, 2026 | Next Review Date: April 30, 2027 (or earlier upon regulatory change)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-600 font-normal">Principal Officer | SEBI IA Reg. No. INA000022668</p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>

                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-600 font-normal">Compliance Officer | <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1 font-normal">
                  <p>Place: Pune, Maharashtra, India</p>
                  <p>Confidential | For Regulatory Compliance Use Only</p>
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

export default InvestorCharterPage;
