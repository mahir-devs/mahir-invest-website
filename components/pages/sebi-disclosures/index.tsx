'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

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
                  SEBI DISCLOSURES, DECLARATIONS &amp; MANDATORY COMPLIANCE CONTENT
                </h3>
                <p className="text-base sm:text-lg mt-2 font-normal text-slate-700">
                  Pursuant to SEBI (IA) Regulations, 2013 and all applicable SEBI Circulars
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

              {/* --- PART A: MANDATORY INVESTMENT ADVISER DISCLOSURE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART A: MANDATORY INVESTMENT ADVISER DISCLOSURE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  As mandated by SEBI (IA) Regulations, 2013, SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2020/182 dated September 23, 2020, and all subsequent amendments, the following details are mandatorily disclosed:
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Name of Investment Adviser</td>
                        <td className="p-4 font-normal text-slate-950">Mahir Investment Advisers Private Limited</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Type of Registration</td>
                        <td className="p-4 font-normal">Non-Individual (Company)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI IA Registration No.</td>
                        <td className="p-4 font-normal text-slate-950">INA000022668</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Date of Registration</td>
                        <td className="p-4 font-normal">June 01, 2026</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Validity of Registration</td>
                        <td className="p-4 font-normal">Perpetual — Valid until suspended or cancelled by SEBI</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">CIN</td>
                        <td className="p-4 font-mono font-normal">U66190PN2025PTC244016</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">PAN</td>
                        <td className="p-4 text-slate-500 italic font-normal">To be updated</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Registered Office Address</td>
                        <td className="p-4 font-normal">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra, India</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Correspondence Address</td>
                        <td className="p-4 font-normal">PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra, India</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Principal Officer Name</td>
                        <td className="p-4 font-normal text-slate-900">Yash Mahavir Bedmuttha</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Principal Officer Qualification</td>
                        <td className="p-4 font-normal">Bachelor of Business Administration (BBA) — International Business, MIT World Peace University (MIT-WPU), Pune | CGPA: 8.67 | Year: 2021</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Principal Officer NISM Certification</td>
                        <td className="p-4 font-normal">NISM-Series-XA: Investment Adviser (Level 1) — Completed<br />NISM-Series-XB: Investment Adviser (Level 2) — Completed</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Compliance Officer Name</td>
                        <td className="p-4 font-normal text-slate-900">Bharat Makkar</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Contact Email</td>
                        <td className="p-4 font-normal"><a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Contact Phone</td>
                        <td className="p-4 font-normal">+91 9084945151</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Website</td>
                        <td className="p-4 font-normal"><a href="https://www.mahiradvisers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">www.mahiradvisers.com</a></td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">BASL Membership No.</td>
                        <td className="p-4 text-slate-500 italic font-normal">To be updated upon BASL membership confirmation</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI Regional Office</td>
                        <td className="p-4 font-normal">SEBI Bhavan II, Plot No. C-7, &apos;G&apos; Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI SCORES Portal</td>
                        <td className="p-4 font-normal"><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">https://scores.sebi.gov.in/</a> | Toll Free: 1800 266 7575</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">SEBI ODR Platform</td>
                        <td className="p-4 font-normal"><a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">https://smartodr.in</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- PART B: FEE DISCLOSURE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART B: FEE DISCLOSURE (As per Regulation 22, SEBI IA Regulations)</h2>
                <h3 className="text-base sm:text-lg font-normal text-slate-800">B.1 Fee Structure and SEBI Limits</h3>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  In accordance with Regulation 22 of SEBI (IA) Regulations, 2013 and SEBI Circular dated September 23, 2020, MIA&apos;s fee structure is disclosed as under:
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/4">Fee Mode</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Description</th>
                        <th scope="col" className="p-4 font-normal w-1/4">MIA Fee Amount</th>
                        <th scope="col" className="p-4 font-normal w-1/4">SEBI Maximum Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell">Fixed Fee</td>
                        <td className="p-4 font-normal">Flat annual fee per client family</td>
                        <td className="p-4 font-normal">As per Client Agreement (INR per annum)</td>
                        <td className="p-4 font-normal legal-text-primary">INR 1,25,000/- per annum per family</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell">AUA-Based Fee</td>
                        <td className="p-4 font-normal">Percentage of Assets Under Advice per annum</td>
                        <td className="p-4 font-normal">As per Client Agreement (% of AUA)</td>
                        <td className="p-4 font-normal legal-text-primary">2.5% per annum of AUA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">GST at applicable rate and other statutory taxes are payable by the client over and above the advisory fee.</li>
                  <li className="font-normal legal-text-primary">MIA does not accept trail fees, referral commissions, or any other payment from product manufacturers, fund houses, or third-party intermediaries.</li>
                  <li className="font-normal">Fee receipts and GST invoices will be issued for all advisory fee payments within 7 working days.</li>
                  <li className="font-normal">The fee mode applicable to each client is specified in their individual Client Agreement.</li>
                  <li className="font-normal">Clients may switch between fee modes with mutual consent, subject to SEBI guidelines and execution of an amended Client Agreement.</li>
                </ul>
              </section>

              {/* --- PART C: CLIENT-LEVEL DISCLOSURES --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART C: CLIENT-LEVEL DISCLOSURES</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  The following disclosures are made to each client at onboarding and periodically thereafter, as mandated by SEBI:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">MIA does not hold a discretionary mandate over client portfolios. All investment decisions are made solely by the client on their own account.</li>
                  <li className="font-normal">MIA is registered as an Investment Adviser with SEBI and is NOT registered as a Stock Broker, Portfolio Manager, Mutual Fund Distributor, Research Analyst, or any other intermediary unless separately disclosed in writing.</li>
                  <li className="font-normal">MIA earns its revenue solely from advisory fees paid directly by clients. MIA does not receive referral fees, distribution commissions, trail commissions, or any other payment from product manufacturers.</li>
                  <li className="font-normal">MIA maintains a written Board-approved Conflict of Interest Policy. All material conflicts of interest, if any, shall be disclosed to the client in writing before providing any advice.</li>
                  <li className="font-normal">MIA maintains comprehensive client suitability records, risk profile assessments, and written investment rationale for all advice given, which are available for client inspection upon request.</li>
                  <li className="font-normal">Clients have the right to receive: (a) a copy of the Client Agreement before commencement of services; (b) the Risk Profiling Report; (c) all investment advice in writing with stated rationale; and (d) a copy of these SEBI Disclosures.</li>
                  <li className="font-normal">Investment advice is based entirely on information provided by the client. Clients are solely responsible for the accuracy and completeness of information furnished to MIA.</li>
                  <li className="font-normal">MIA maintains records of all client interactions, written advice, investment rationale, and related communications for the minimum period prescribed by SEBI regulations.</li>
                  <li className="font-normal">Clients have the right to approach SEBI SCORES (<a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a>) for unresolved grievances at any stage.</li>
                </ul>
              </section>

              {/* --- PART D: AML / KYC DECLARATION --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART D: AML / KYC DECLARATION</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  Mahir Investment Advisers Private Limited hereby declares and confirms:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">MIA is fully committed to compliance with PMLA, 2002, the PMLA Rules, 2005, and SEBI AML/CFT guidelines applicable to Investment Advisers.</li>
                  <li className="font-normal">MIA has implemented a comprehensive Board-approved AML/CFT Policy reviewed at least annually.</li>
                  <li className="font-normal">MIA carries out Customer Due Diligence (CDD) for all clients and Enhanced Due Diligence (EDD) for high-risk clients including Politically Exposed Persons (PEPs), Non-Resident Indians, and clients from high-risk jurisdictions.</li>
                  <li className="font-normal">MIA maintains a risk-based client classification system (Low / Medium / High risk) as per SEBI/PMLA guidelines, reviewed periodically.</li>
                  <li className="font-normal">MIA has designated an AML Reporting Officer responsible for monitoring, detecting, and reporting suspicious transactions to FIU-IND.</li>
                  <li className="font-normal">MIA conducts KYC verification through CKYCRR/KRAs and maintains all KYC records for a minimum period of 5 years post-relationship cessation, as required under PMLA.</li>
                  <li className="font-normal">MIA conducts real-time sanctions screening against UN, OFAC, and Government of India sanctioned lists for all clients.</li>
                  <li className="font-normal">MIA does not onboard shell companies, persons on sanctions lists, or clients from FATF high-risk jurisdictions without satisfying mandatory enhanced verification requirements.</li>
                  <li className="font-normal">MIA reserves the right to decline or terminate client relationships at any time where KYC/AML requirements cannot be satisfied, or where MIA has reasonable grounds to suspect money laundering or terrorist financing.</li>
                </ul>
              </section>

              {/* --- PART E: CODE OF CONDUCT COMPLIANCE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART E: CODE OF CONDUCT COMPLIANCE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  MIA declares strict adherence to the Code of Conduct prescribed under the Third Schedule to SEBI (Investment Advisers) Regulations, 2013:
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Principle</th>
                        <th scope="col" className="p-4 font-normal">MIA&apos;s Commitment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Honesty and Fairness</td>
                        <td className="p-4 font-normal">Act with integrity, transparency, and exclusively in the best interest of clients at all times.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Diligence</td>
                        <td className="p-4 font-normal">Apply appropriate skill, expertise, care, and professional diligence in preparing and delivering investment advice.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Capabilities</td>
                        <td className="p-4 font-normal">Ensure the Principal Officer and all advisory personnel hold and maintain NISM certifications, qualifications, and competencies required under SEBI IA Regulations.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Information to Clients</td>
                        <td className="p-4 font-normal">Ensure all information provided to clients is fair, accurate, clear, and not misleading or deceptive in any manner.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Client Assets</td>
                        <td className="p-4 font-normal">Not misuse, misappropriate, or hold client assets beyond strictly necessary durations; client funds are not commingled with MIA&apos;s own funds.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Disclosures</td>
                        <td className="p-4 font-normal">Make all mandated disclosures to clients and SEBI including fees, conflicts, qualifications, and registration details.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Regulatory Compliance</td>
                        <td className="p-4 font-normal">Act in strict accordance with SEBI Act, SEBI IA Regulations, PMLA, IT Act, DPDP Act, and all other applicable laws.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Best Interest</td>
                        <td className="p-4 font-normal">At all times prioritize client interests over MIA&apos;s own commercial interests or the interests of any third party.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">No Insider Trading</td>
                        <td className="p-4 font-normal">Not engage in or advise on transactions in securities where MIA possesses material non-public information.</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell w-1/3">Confidentiality</td>
                        <td className="p-4 font-normal">Maintain strict confidentiality of all client information and not disclose it except as required by law or with client consent.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- PART F: GRIEVANCE REDRESSAL MATRIX --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART F: GRIEVANCE REDRESSAL MATRIX</h2>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/12">Level</th>
                        <th scope="col" className="p-4 font-normal w-1/4">Authority</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Contact Details</th>
                        <th scope="col" className="p-4 font-normal w-1/6">TAT</th>
                        <th scope="col" className="p-4 font-normal w-1/6">Mode</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 border-r text-center">Level 1</td>
                        <td className="p-4 font-normal">Compliance Officer (Bharat Makkar)</td>
                        <td className="p-4 text-xs font-normal">
                          <strong className="font-normal">Email :</strong><a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a><br />
                          <strong className="font-normal">Phone No :</strong> +91 9084945151
                        </td>
                        <td className="p-4 font-normal">30 days</td>
                        <td className="p-4 font-normal">Email / App / Phone / Written</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 border-r text-center">Level 2</td>
                        <td className="p-4 font-normal">Principal Officer (Yash Mahavir Bedmuttha)</td>
                        <td className="p-4 text-xs font-normal">
                          <strong className="font-normal">Email :</strong><a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">admin@mahiradvisers.com</a><br />
                          <strong className="font-normal">Phone No :</strong> +91 9084945151
                        </td>
                        <td className="p-4 font-normal">15 days from escalation</td>
                        <td className="p-4 font-normal">Written / Email</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 border-r text-center">Level 3</td>
                        <td className="p-4 font-normal">SEBI SCORES Portal</td>
                        <td className="p-4 text-xs font-normal">
                          <strong className="font-normal">Website :</strong><a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">scores.gov.in</a><br />
                          <strong className="font-normal">Toll Free No :</strong> 1800 266 7575
                        </td>
                        <td className="p-4 font-normal">As per SEBI guidelines</td>
                        <td className="p-4 font-normal">Online Portal</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 border-r text-center">Level 4</td>
                        <td className="p-4 font-normal">SEBI ODR Platform</td>
                        <td className="p-4 text-xs font-normal">
                          <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-normal">smartodr.in</a>
                        </td>
                        <td className="p-4 font-normal">As per ODR timelines</td>
                        <td className="p-4 font-normal">Online Platform</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal bg-slate-50 border-r text-center">Level 5</td>
                        <td className="p-4 font-normal">BASL / SEBI Ombudsman</td>
                        <td className="p-4 text-xs text-slate-500 italic font-normal">To be updated on BASL membership</td>
                        <td className="p-4 font-normal">As per BASL/SEBI</td>
                        <td className="p-4 font-normal">Written / Online</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- PART G: ANNUAL COMPLIANCE DECLARATIONS --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART G: ANNUAL COMPLIANCE DECLARATIONS</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  The following declarations are made on behalf of Mahir Investment Advisers Private Limited for the current compliance period:
                </p>
                <ul className="space-y-2.5 list-disc pl-6 text-xs sm:text-sm text-slate-800 font-normal">
                  <li className="font-normal">All personnel providing investment advice hold valid NISM-Series XA and XB certifications as mandated under SEBI IA Regulations.</li>
                  <li className="font-normal">MIA shall file all periodic returns, compliance reports, and disclosures required by SEBI, including the Annual Compliance Report (ACR) within prescribed timelines.</li>
                  <li className="font-normal">MIA has obtained / shall obtain Professional Indemnity (PI) Insurance as required under SEBI IA Regulations before commencing client advisory operations.</li>
                  <li className="font-normal">MIA has implemented an Internal Audit mechanism for periodic review of regulatory compliance, to be conducted at least semi-annually.</li>
                  <li className="font-normal">MIA&apos;s fee structure is in compliance with SEBI-prescribed limits and has been duly communicated to all clients in their Client Agreements.</li>
                  <li className="font-normal">MIA does not engage in dual registration as Investment Adviser and Mutual Fund Distributor for the same client, in compliance with SEBI Circular dated September 23, 2020.</li>
                  <li className="font-normal">MIA maintains a minimum net worth as prescribed under SEBI IA Regulations, evidenced by a certificate from a practising Chartered Accountant.</li>
                  <li className="font-normal">All client agreements, risk profiles, and advisory records are maintained in accordance with Regulation 19 of SEBI IA Regulations.</li>
                </ul>
              </section>

              {/* --- PART H: CLIENT COMPLAINTS DATA DISCLOSURE --- */}
              <section className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">PART H: CLIENT COMPLAINTS DATA DISCLOSURE</h2>
                <p className="text-slate-800 text-sm sm:text-base font-normal leading-relaxed">
                  As mandated by SEBI, the following client complaints summary is published on the MIA Platform and updated on a monthly basis:
                </p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal text-left w-1/3">Complaint Category</th>
                        <th scope="col" className="p-4 font-normal text-center">Received</th>
                        <th scope="col" className="p-4 font-normal text-center">Resolved</th>
                        <th scope="col" className="p-4 font-normal text-center">Pending</th>
                        <th scope="col" className="p-4 font-normal text-center">&gt;30 Days Pending</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">Advisory / Investment Advice</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">KYC / Account Opening</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">Fee / Billing Disputes</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">Platform / Technology Issues</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">Data Privacy / Personal Data</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-table-side-cell text-left">Other</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                        <td className="p-4 font-normal text-center">0</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal text-slate-950">
                        <td className="p-4 bg-slate-100 border-r text-left font-normal">TOTAL</td>
                        <td className="p-4 bg-slate-50 text-center font-normal">0</td>
                        <td className="p-4 bg-slate-50 text-center font-normal">0</td>
                        <td className="p-4 bg-slate-50 text-center font-normal">0</td>
                        <td className="p-4 bg-slate-50 text-center font-normal">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 italic mt-2 font-normal">
                  Data as of: June 01, 2026. Updated monthly by the 7th of the following month as per SEBI requirements.
                </p>
              </section>

              {/* --- CERTIFICATION & SIGNATORY BLOCK --- */}
              <footer className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl mb-8 text-xs sm:text-sm text-left font-normal">
                  <h3 className="text-base font-normal text-slate-950 mb-2">CERTIFICATION</h3>
                  <p className="text-slate-700 leading-relaxed font-normal">
                    We hereby certify that all disclosures, declarations, and information contained in this document are true, accurate, and complete to the best of our knowledge and belief, and have been made in accordance with SEBI (Investment Advisers) Regulations, 2013, applicable SEBI Circulars, and all other applicable laws and regulations of India.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-600 font-normal">Principal Officer <br /> <strong className="font-normal">Email:</strong> <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">admin@mahiradvisers.com</a></p>
                    <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                  </div>

                  <div className="flex flex-col items-center signature font-normal">
                    <hr className="w-[90%] border-b border-slate-200 mb-3" />
                    <p className="font-normal text-slate-800">Mahir Investment Advisers Private Limited</p>
                    <p className="font-normal text-slate-900 mt-1 font-sans">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-600 font-normal">Compliance Officer <br /> <strong className="font-normal">Email:</strong> <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></p>
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

export default SebiDisclosuresPage;
