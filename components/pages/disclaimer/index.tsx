'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

export const DisclaimerPage = () => {
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
                Disclaimer
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
                  COMPREHENSIVE DISCLAIMERS
                </h3>
                <p className="text-base sm:text-lg mt-2 font-normal text-slate-700">
                  MIA App &amp; Web Platform — Important Legal Notices
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

              {/* --- IMPORTANT NOTICE ALERT --- */}
              <div className="legal-alert-primary p-4 sm:p-5 rounded-2xl text-xs sm:text-sm border border-blue-100 font-normal">
                <h3 className="text-base font-normal legal-text-primary flex items-center gap-2 mb-2">
                  <span>⚠</span> IMPORTANT NOTICE — PLEASE READ ALL DISCLAIMERS CAREFULLY
                </h3>
                <p className="text-slate-700 italic font-normal">
                  These Disclaimers form an integral part of your agreement with Mahir Investment Advisers Private Limited. By accessing the MIA Platform or availing advisory services, you unconditionally accept all disclaimers set out herein.
                </p>
              </div>

              {/* --- DISCLAIMER 1. SEBI REGISTRATION STATUS AND REGULATORY DISCLOSURE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 1: SEBI REGISTRATION STATUS AND REGULATORY DISCLOSURE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Mahir Investment Advisers Private Limited is registered as an Investment Adviser with the Securities and Exchange Board of India (SEBI) under the SEBI (Investment Advisers) Regulations, 2013.
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI Registration No.</td>
                        <td className="p-4 font-normal text-slate-900">INA000022668</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Registration Type</td>
                        <td className="p-4 font-normal">Investment Adviser (Non-Individual) under SEBI (IA) Regulations, 2013</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Registration Date</td>
                        <td className="p-4 font-normal">June 01, 2026</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Validity</td>
                        <td className="p-4 font-normal">Perpetual (subject to compliance with SEBI Regulations)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Principal Officer</td>
                        <td className="p-4 font-normal text-slate-900">Yash Mahavir Bedmuttha</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Compliance Officer</td>
                        <td className="p-4 font-normal text-slate-900">Bharat Makkar <br /> Email: <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Registered Office</td>
                        <td className="p-4 font-normal">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI Regional Office</td>
                        <td className="p-4 font-normal">SEBI Bhavan II, Plot No. C-7, &apos;G&apos; Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI SCORES Portal</td>
                        <td className="p-4 font-normal"><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">https://scores.sebi.gov.in/</a> | Toll Free: 1800 266 7575</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  SEBI registration does not in any manner guarantee the quality of advice, services, or the profitability of investments. Clients are advised to verify MIA&apos;s registration at <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.sebi.gov.in</a> before engaging services.
                </p>
              </section>

              {/* --- DISCLAIMER 2. INVESTMENT RISK DISCLAIMER --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 2: INVESTMENT RISK DISCLAIMER</h2>

                <div className="legal-alert-red p-4 rounded-2xl text-xs sm:text-sm text-rose-900 border border-rose-200 font-normal">
                  MUTUAL FUNDS AND SECURITIES INVESTMENTS ARE SUBJECT TO MARKET RISKS. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RETURNS. PLEASE READ ALL SCHEME-RELATED DOCUMENTS CAREFULLY BEFORE INVESTING.
                </div>

                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Investment in securities markets is subject to inherent market risk. The value of investments and income derived therefrom can go up as well as down, and investors may not recover the full principal amount invested. The specific risk types include:
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Risk Type</th>
                        <th scope="col" className="p-4 font-normal">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Market Risk</td>
                        <td className="p-4 font-normal">Prices of securities fluctuate due to macroeconomic conditions, market sentiment, and factors beyond MIA&apos;s control.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Liquidity Risk</td>
                        <td className="p-4 font-normal">Some investments may not be easily liquidated at fair market value, particularly in volatile or thin markets.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Concentration Risk</td>
                        <td className="p-4 font-normal">Concentrated investment in any single sector, geography, or security carries amplified downside risk.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Interest Rate Risk</td>
                        <td className="p-4 font-normal">Bond and fixed income security prices generally fall when interest rates rise.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Currency/Exchange Risk</td>
                        <td className="p-4 font-normal">Investments in foreign securities, international funds, or dollar-linked instruments are affected by currency movements.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Regulatory/Policy Risk</td>
                        <td className="p-4 font-normal">Changes in government policies, tax laws, import/export rules, or SEBI regulations may adversely affect investment values.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Inflation Risk</td>
                        <td className="p-4 font-normal">Investment returns may not keep pace with inflation, reducing real purchasing power over time.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Credit/Default Risk</td>
                        <td className="p-4 font-normal">Issuers of debt instruments may default on interest payments or principal repayment.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Geopolitical Risk</td>
                        <td className="p-4 font-normal">International events, wars, sanctions, or political instability may impact securities markets.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- DISCLAIMER 3. NO GUARANTEE OF RETURNS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 3: NO GUARANTEE OF RETURNS</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA does not guarantee, promise, assure, or project any specific return on investment under any circumstances. Any projections, illustrations, scenarios, or examples used in investment advice or published on the Platform are strictly for illustrative and educational purposes only. They shall not be construed as promises, forecasts, or assurances of actual future returns.
                </p>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Historical performance data, if referenced, is provided for informational context only and is expressly not indicative of future performance. Projected returns may vary materially from actual returns due to market conditions, economic factors, taxation changes, fund management decisions, and other variables entirely beyond MIA&apos;s control.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-2xl text-xs sm:text-sm text-slate-800 font-normal">
                  Clients are strongly cautioned against selecting investments based solely on historical return data or projected return illustrations.
                </div>
              </section>

              {/* --- DISCLAIMER 4. INDEPENDENCE AND CONFLICT-FREE ADVICE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 4: INDEPENDENCE AND CONFLICT-FREE ADVICE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA provides independent investment advice based solely on the client&apos;s risk profile, financial objectives, and investment horizon. MIA strictly does not receive and is prohibited by SEBI from receiving any commission, brokerage, referral fee, trail fee, or any other form of remuneration from product manufacturers, fund houses, brokers, or third-party product issuers in connection with advice given to clients.
                </p>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA&apos;s sole and exclusive source of compensation is advisory fees charged directly to clients in accordance with SEBI IA Regulations. This structure eliminates product-linked conflicts of interest.
                </p>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  However, MIA, its directors, employees, or associates may hold personal investments in securities that may be recommended to clients. Such personal holdings, if material, are disclosed to the relevant client in writing before providing advice. MIA maintains a Conflict of Interest Register that is available for client inspection upon written request.
                </p>
              </section>

              {/* --- DISCLAIMER 5. RESEARCH, CONTENT, AND EDUCATIONAL MATERIAL DISCLAIMER --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 5: RESEARCH, CONTENT, AND EDUCATIONAL MATERIAL DISCLAIMER</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Any research reports, articles, market updates, newsletters, social media posts, blog content, webinars, or educational material published or shared by MIA through the Platform or other channels are provided strictly for general informational and educational purposes only.
                </p>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  Such content does not constitute personalized investment advice unless it has been specifically addressed to an individual client as part of their advisory engagement with MIA. Readers/viewers of such content are advised to:
                </p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">Conduct their own independent due diligence before making any investment decision.</li>
                  <li className="font-normal">Consult their personal investment adviser (MIA&apos;s advisory team) for advice tailored to their specific financial profile.</li>
                  <li className="font-normal">Not solely rely on general research or market commentary for investment decisions.</li>
                </ul>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  MIA makes no representation or warranty regarding the accuracy, completeness, timeliness, or fitness for purpose of any such content, which is prepared based on publicly available information.
                </p>
              </section>

              {/* --- DISCLAIMER 6. TECHNOLOGY, PLATFORM, AND CYBERSECURITY DISCLAIMER --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 6: TECHNOLOGY, PLATFORM, AND CYBERSECURITY DISCLAIMER</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  While MIA endeavours to maintain the Platform&apos;s continuous availability, accuracy, and security, MIA cannot and does not warrant that:
                </p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">The Platform will be error-free, uninterrupted, virus-free, or completely secure at all times.</li>
                  <li className="font-normal">Market data, NAV feeds, or financial information displayed on the Platform is real-time or completely accurate.</li>
                  <li className="font-normal">The Platform&apos;s functionality will be compatible with all devices, operating systems, browsers, or internet connections.</li>
                  <li className="font-normal">The Platform or its servers are free from malicious code, cyber-attacks, or unauthorized intrusion attempts.</li>
                </ul>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  MIA shall not be liable for losses arising from: system downtime, data transmission delays, cyber-attacks on third-party systems, technical failures, or internet connectivity issues beyond MIA&apos;s direct control. Clients are advised to verify all critical investment information through official SEBI, exchange, or AMC sources before acting.
                </p>
              </section>

              {/* --- DISCLAIMER 7. LIMITATION OF LIABILITY --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 7: LIMITATION OF LIABILITY</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  To the maximum extent permitted by applicable law in India, MIA&apos;s total cumulative liability for any and all claims, losses, damages, costs, and expenses arising from or related to advisory services, use of the Platform, or any breach of these Terms whether in contract, tort, negligence, strict liability, or otherwise shall be strictly limited to the aggregate advisory fees actually paid by the client to MIA in the six (6) calendar months immediately preceding the event giving rise to the claim.
                </p>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  In no event shall MIA, its directors, officers, employees, or agents be liable for any indirect, consequential, incidental, special, exemplary, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or reputational harm, even if MIA has been advised of the possibility of such damages.
                </p>
              </section>

              {/* --- DISCLAIMER 8. THIRD-PARTY LINKS, SERVICES, AND PLATFORMS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 8: THIRD-PARTY LINKS, SERVICES, AND PLATFORMS</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  The MIA Platform may contain hyperlinks to third-party websites, financial aggregators, stock exchange portals, AMC websites, financial calculators, or other external services. Such links are provided for convenience and reference only. MIA does not endorse, control, verify, or take responsibility for:
                </p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">The accuracy, reliability, or completeness of content on third-party websites.</li>
                  <li className="font-normal">The privacy practices or data security measures of third-party services.</li>
                  <li className="font-normal">Products, services, or investments offered through third-party platforms.</li>
                </ul>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  Accessing third-party links is entirely at the user&apos;s own risk. MIA strongly advises clients to review the terms and privacy policies of any third-party platform before engaging with it.
                </p>
              </section>

              {/* --- DISCLAIMER 9. TAX DISCLAIMER --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 9: TAX DISCLAIMER</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Investment advice provided by MIA does not constitute tax advice, tax planning guidance, or legal advice. Tax implications of investments including capital gains tax (short-term and long-term), dividend distribution tax, STT, and other applicable levies vary significantly based on individual client circumstances, holding periods, investment quantum, and applicable tax laws which are subject to change.
                </p>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  Clients are strongly advised to consult a qualified tax professional, Chartered Accountant, or tax adviser for all tax planning, computation, and compliance requirements. MIA shall not be responsible for any tax liability, interest, penalties, or legal consequences arising from client investment decisions.
                </p>
              </section>

              {/* --- DISCLAIMER 10. CONFLICT OF INTEREST POLICY SUMMARY --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 10: CONFLICT OF INTEREST POLICY SUMMARY</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA maintains a Board-approved written Conflict of Interest Policy in accordance with SEBI IA Regulations, 2013. Key provisions:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">MIA and its employees may hold personal investments in securities that may be recommended to clients. Such interests are disclosed to the relevant client in writing before advice is given.</li>
                  <li className="font-normal">MIA does not accept any pecuniary benefit, gift, entertainment, or non-cash consideration from product manufacturers, brokers, or distributors.</li>
                  <li className="font-normal">All material conflicts of interest known or reasonably foreseeable are disclosed to clients before providing advice.</li>
                  <li className="font-normal">MIA maintains a Conflict-of-Interest Register, updated periodically, which is available for client inspection upon written request.</li>
                  <li className="font-normal">Employees are required to pre-clear personal securities transactions above prescribed thresholds with the Compliance Officer.</li>
                </ul>
              </section>

              {/* --- DISCLAIMER 11. SUITABILITY AND APPROPRIATENESS OF ADVICE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 11: SUITABILITY AND APPROPRIATENESS OF ADVICE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  All investment advice provided by MIA is personalized based on the client&apos;s risk profile, financial objectives, investment horizon, and information provided during onboarding. MIA shall not be held responsible for the unsuitability or inappropriateness of advice where such unsuitability arises from:
                </p>
                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">Incorrect, incomplete, or misleading information provided by the client during KYC, risk profiling, or thereafter.</li>
                  <li className="font-normal">Material changes in the client&apos;s financial circumstances, employment, income, or risk tolerance that were not communicated to MIA.</li>
                  <li className="font-normal">Investment decisions taken by the client contrary to, or independent of, MIA&apos;s written advice.</li>
                  <li className="font-normal">Client&apos;s failure to read, understand, or acknowledge the written advice, risk disclosures, or suitability rationale provided by MIA.</li>
                </ul>
                <p className="text-slate-800 text-xs sm:text-sm font-normal">
                  Clients are strongly urged to provide complete and accurate information at all times and to immediately notify MIA of any material change in their financial profile.
                </p>
              </section>

              {/* --- DISCLAIMER 12. REGULATORY DISCLAIMERS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">DISCLAIMER 12: REGULATORY DISCLAIMERS</h2>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">Investments in securities are NOT deposits with any bank and are NOT insured or guaranteed by DICGC, RBI, SEBI, or any government authority.</li>
                  <li className="font-normal">SEBI registration of MIA as an Investment Adviser does not constitute an endorsement of MIA&apos;s advisory approach, investment views, or guarantee of investment performance.</li>
                  <li className="font-normal">Clients should independently verify MIA&apos;s current SEBI registration status at: <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.sebi.gov.in</a> (Registered Intermediaries / Investment Advisers section).</li>
                  <li className="font-normal">SEBI does not approve, recommend, or endorse any particular investment adviser, financial product, or investment strategy.</li>
                  <li className="font-normal">For unresolved complaints, clients may approach SEBI SCORES at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a> or SEBI ODR at <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">smartodr.in</a>.</li>
                  <li className="font-normal">Past performance of MIA&apos;s advisory recommendations, if disclosed, does not guarantee or predict future results.</li>
                </ul>
              </section>

              {/* --- SIGNATORY BLOCK (FOOTER) --- */}
              <footer className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <p className="text-xs sm:text-sm text-slate-600 mb-2 font-normal">
                  Effective Date: June 01, 2026 | All disclaimers are updated periodically. The latest version is always available on the MIA Platform at <a href="https://www.mahiradvisers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.mahiradvisers.com</a>.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-normal mb-8">
                  Governing Law: Laws of India | Jurisdiction: Pune, Maharashtra
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-600 font-normal">Principal Officer <br /> <strong className="font-normal">Email:</strong> <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">admin@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>

                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-600 font-normal">Compliance Officer <br /> <strong className="font-normal">Email:</strong> <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">compliance@mahiradvisers.com</a></p>
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

export default DisclaimerPage;
