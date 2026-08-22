'use client';

import React from 'react';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

const CIN_NUMBER = 'U66190PN2025PTC244016';
const SEBI_NUMBER = 'INA000022668';

export const SebiDisclosuresPage = () => {
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
                SEBI Disclosures
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
                Mahir Invest — SEBI Registered Investment Adviser
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

              {/* Main Content Box */}
              <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm space-y-8">
                {/* --- PART A: MANDATORY INVESTMENT ADVISER DISCLOSURE --- */}
                <section className="space-y-4 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    PART A: MANDATORY INVESTMENT ADVISER DISCLOSURE
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    As mandated by SEBI (IA) Regulations, 2013, SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2020/182 dated September 23, 2020, and all subsequent amendments, the following details are mandatorily disclosed:
                  </p>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
                    <table className="w-full text-xs sm:text-sm text-slate-700 font-normal border-collapse">
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Name of Investment Adviser</td>
                          <td className="p-3 text-slate-900 font-semibold">Mahir Investment Advisers Private Limited (Mahir Invest)</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Type of Registration</td>
                          <td className="p-3 text-slate-800">Non-Individual (Company)</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">SEBI IA Registration No.</td>
                          <td className="p-3 text-slate-900 font-semibold">{SEBI_NUMBER}</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Date of Registration</td>
                          <td className="p-3 text-slate-800">June 01, 2026</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Validity of Registration</td>
                          <td className="p-3 text-slate-800">Perpetual — Valid until suspended or cancelled by SEBI</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">CIN</td>
                          <td className="p-3 text-slate-800 font-mono">{CIN_NUMBER}</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Registered Office Address</td>
                          <td className="p-3 text-slate-800">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra, India</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Correspondence Address</td>
                          <td className="p-3 text-slate-800">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra, India</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Principal Officer Name</td>
                          <td className="p-3 text-slate-900 font-semibold">Yash Mahavir Bedmuttha</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Principal Officer Qualification</td>
                          <td className="p-3 text-slate-800">Bachelor of Business Administration (BBA) — International Business, MIT World Peace University (MIT-WPU), Pune | CGPA: 8.67 | Year: 2021</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Principal Officer NISM Certification</td>
                          <td className="p-3 text-slate-800">NISM-Series-XA: Investment Adviser (Level 1) — Completed<br />NISM-Series-XB: Investment Adviser (Level 2) — Completed</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Compliance Officer Name</td>
                          <td className="p-3 text-slate-900 font-semibold">Bharat Makkar</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Contact Email</td>
                          <td className="p-3 text-slate-800"><a href="mailto:compliance@mahir.in" className="text-[var(--blue-normal)] hover:underline font-mono">compliance@mahir.in</a></td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">Website</td>
                          <td className="p-3 text-slate-800"><a href="https://www.mahirinvest.com" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">www.mahirinvest.com</a></td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">SEBI Regional Office</td>
                          <td className="p-3 text-slate-800">SEBI Bhavan II, Plot No. C-7, &apos;G&apos; Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">SEBI SCORES Portal</td>
                          <td className="p-3 text-slate-800"><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">https://scores.sebi.gov.in/</a> | Toll Free: 1800 266 7575</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">SEBI ODR Platform</td>
                          <td className="p-3 text-slate-800"><a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">https://smartodr.in</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* --- PART B: FEE DISCLOSURE --- */}
                <section className="space-y-4 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    PART B: FEE DISCLOSURE (As per Regulation 22, SEBI IA Regulations)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    In accordance with Regulation 22 of SEBI (IA) Regulations, 2013 and SEBI Circular dated September 23, 2020, Mahir Invest&apos;s fee structure is disclosed as under:
                  </p>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
                    <table className="w-full text-xs sm:text-sm text-slate-700 font-normal border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200 w-1/4">Fee Mode</th>
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200 w-1/3">Description</th>
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200 w-1/4">Fee Amount</th>
                          <th className="p-3 text-left font-semibold text-slate-600 w-1/4">SEBI Maximum Limit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-800 border-r border-slate-100">Fixed Fee</td>
                          <td className="p-3 text-slate-700 border-r border-slate-100">Flat annual fee per client family</td>
                          <td className="p-3 text-slate-700 border-r border-slate-100">As per Client Agreement (INR per annum)</td>
                          <td className="p-3 font-semibold text-[var(--blue-normal)]">INR 1,25,000/- per annum per family</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 font-semibold text-slate-800 border-r border-slate-100">AUA-Based Fee</td>
                          <td className="p-3 text-slate-700 border-r border-slate-100">Percentage of Assets Under Advice per annum</td>
                          <td className="p-3 text-slate-700 border-r border-slate-100">As per Client Agreement (% of AUA)</td>
                          <td className="p-3 font-semibold text-[var(--blue-normal)]">2.5% per annum of AUA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    <li>GST at applicable rate and other statutory taxes are payable by the client over and above the advisory fee.</li>
                    <li className="font-semibold text-slate-900">Mahir Invest does not accept trail fees, referral commissions, or any other payment from product manufacturers, fund houses, or third-party intermediaries.</li>
                    <li>Fee receipts and GST invoices will be issued for all advisory fee payments within 7 working days.</li>
                    <li>The fee mode applicable to each client is specified in their individual Client Agreement.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                {/* --- PART C: CLIENT-LEVEL DISCLOSURES --- */}
                <section className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    PART C: CLIENT-LEVEL DISCLOSURES
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    The following disclosures are made to each client at onboarding and periodically thereafter, as mandated by SEBI:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    <li>Mahir Invest does not hold a discretionary mandate over client portfolios. All investment decisions are made solely by the client on their own account.</li>
                    <li>Mahir Invest is registered as an Investment Adviser with SEBI and is NOT registered as a Stock Broker, Portfolio Manager, Mutual Fund Distributor, Research Analyst, or any other intermediary unless separately disclosed in writing.</li>
                    <li>Mahir Invest earns its revenue solely from advisory fees paid directly by clients. Mahir Invest does not receive referral fees, distribution commissions, trail commissions, or any other payment from product manufacturers.</li>
                    <li>Mahir Invest maintains a written Board-approved Conflict of Interest Policy. All material conflicts of interest, if any, shall be disclosed to the client in writing before providing any advice.</li>
                    <li>Mahir Invest maintains comprehensive client suitability records, risk profile assessments, and written investment rationale for all advice given, which are available for client inspection upon request.</li>
                    <li>Clients have the right to receive: (a) a copy of the Client Agreement before commencement of services; (b) the Risk Profiling Report; (c) all investment advice in writing with stated rationale; and (d) a copy of these SEBI Disclosures.</li>
                    <li>Investment advice is based entirely on information provided by the client. Clients are solely responsible for the accuracy and completeness of information furnished to Mahir Invest.</li>
                    <li>Mahir Invest maintains records of all client interactions, written advice, investment rationale, and related communications for the minimum period prescribed by SEBI regulations.</li>
                    <li>Clients have the right to approach SEBI SCORES (<a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">scores.gov.in</a>) for unresolved grievances at any stage.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                {/* --- PART D: AML / KYC DECLARATION --- */}
                <section className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    PART D: AML / KYC DECLARATION
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal">
                    Mahir Investment Advisers Private Limited hereby declares and confirms:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    <li>Mahir Invest is fully committed to compliance with PMLA, 2002, the PMLA Rules, 2005, and SEBI AML/CFT guidelines applicable to Investment Advisers.</li>
                    <li>Mahir Invest has implemented a comprehensive Board-approved AML/CFT Policy reviewed at least annually.</li>
                    <li>Mahir Invest carries out Customer Due Diligence (CDD) for all clients and Enhanced Due Diligence (EDD) for high-risk clients including Politically Exposed Persons (PEPs), Non-Resident Indians, and clients from high-risk jurisdictions.</li>
                    <li>Mahir Invest maintains a risk-based client classification system (Low / Medium / High risk) as per SEBI/PMLA guidelines, reviewed periodically.</li>
                    <li>Mahir Invest conducts KYC verification through CKYCRR/KRAs and maintains all KYC records for a minimum period of 5 years post-relationship cessation, as required under PMLA.</li>
                    <li>Mahir Invest reserves the right to decline or terminate client relationships at any time where KYC/AML requirements cannot be satisfied.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                {/* --- PART E: GRIEVANCE REDRESSAL MATRIX --- */}
                <section className="space-y-3 font-normal">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 border-b pb-2 border-slate-100">
                    PART E: GRIEVANCE REDRESSAL MATRIX
                  </h2>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
                    <table className="w-full text-xs sm:text-sm text-slate-700 font-normal border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="p-3 text-center font-semibold text-slate-600 border-r border-slate-200 w-16">Level</th>
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200">Authority</th>
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200">Contact Details</th>
                          <th className="p-3 text-left font-semibold text-slate-600 border-r border-slate-200">TAT</th>
                          <th className="p-3 text-left font-semibold text-slate-600">Mode</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 text-center font-semibold bg-slate-50 border-r border-slate-100">Level 1</td>
                          <td className="p-3 font-medium text-slate-900 border-r border-slate-100">Compliance Officer (Bharat Makkar)</td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">Email: <a href="mailto:compliance@mahir.in" className="text-[var(--blue-normal)] font-mono hover:underline">compliance@mahir.in</a></td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">30 days</td>
                          <td className="p-3 text-slate-800">Email / Written</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 text-center font-semibold bg-slate-50 border-r border-slate-100">Level 2</td>
                          <td className="p-3 font-medium text-slate-900 border-r border-slate-100">Principal Officer (Yash Mahavir Bedmuttha)</td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">Email: <a href="mailto:principalofficer@mahir.in" className="text-[var(--blue-normal)] font-mono hover:underline">principalofficer@mahir.in</a></td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">15 days from escalation</td>
                          <td className="p-3 text-slate-800">Email / Written</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 text-center font-semibold bg-slate-50 border-r border-slate-100">Level 3</td>
                          <td className="p-3 font-medium text-slate-900 border-r border-slate-100">SEBI SCORES Portal</td>
                          <td className="p-3 text-slate-800 border-r border-slate-100"><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">scores.gov.in</a> | Toll Free: 1800 266 7575</td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">As per SEBI guidelines</td>
                          <td className="p-3 text-slate-800">Online Portal</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="p-3 text-center font-semibold bg-slate-50 border-r border-slate-100">Level 4</td>
                          <td className="p-3 font-medium text-slate-900 border-r border-slate-100">SEBI ODR Platform</td>
                          <td className="p-3 text-slate-800 border-r border-slate-100"><a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] hover:underline">smartodr.in</a></td>
                          <td className="p-3 text-slate-800 border-r border-slate-100">As per ODR timelines</td>
                          <td className="p-3 text-slate-800">Online Platform</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Signatories Card */}
              <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 text-lg">✱</span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">Certification</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  We hereby certify that all disclosures, declarations, and information contained in this document are true, accurate, and complete to the best of our knowledge and belief, and have been made in accordance with SEBI (Investment Advisers) Regulations, 2013, applicable SEBI Circulars, and all other applicable laws and regulations of India.
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
                  <span className="font-semibold text-[var(--blue-normal)]">Mahir Investment Advisers Private Limited — Pune</span>
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

export default SebiDisclosuresPage;
