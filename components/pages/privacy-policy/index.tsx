'use client';

import React from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

export const PrivacyPolicyPage = () => {
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
                Privacy Policy
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
              <div className="legal-header pb-8 border-b border-slate-200 font-normal">
                <div className="text-center mb-3">
                  <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                    MAHIR INVESTMENT ADVISERS PRIVATE LIMITED
                  </h2>
                  <p className="text-base sm:text-lg font-normal legal-text-primary mt-1">
                    SEBI Registered Investment Adviser | Registration No. INA000022668
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-normal mt-4 border-b pb-2 text-slate-800">
                  PRIVACY POLICY
                </h3>

                <div className="metadata text-xs sm:text-sm p-4 bg-slate-50 rounded-2xl mt-4 flex justify-between items-center flex-wrap gap-4 border border-slate-200 font-normal text-slate-700">
                  <p><strong className="font-normal text-slate-800">Compliant with:</strong> DPDP Act, 2023 &amp; IT (SPDI) Rules, 2011</p>
                  <p>Version <span className="font-normal legal-text-primary">1.0</span> | Effective Date: <span className="font-normal">June 01, 2026</span></p>
                </div>

                {/* Detailed Fiduciary Info */}
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs sm:text-sm grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 font-normal text-slate-700">
                  <div>
                    <p><strong className="font-normal text-slate-800">Data Fiduciary:</strong> Mahir Investment Advisers Private Limited</p>
                    <p className="text-xs text-slate-500 font-normal">CIN: U66190PN2025PTC244016</p>
                  </div>
                  <div>
                    <p><strong className="font-normal text-slate-800">SEBI Reg. No.:</strong> INA000022668</p>
                    <p className="text-xs text-slate-500 font-normal">Registered Office: PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
                  </div>
                  <div>
                    <p><strong className="font-normal text-slate-800">Data Protection Officer (DPO):</strong></p>
                    <p className="font-normal text-slate-800">Bharat Makkar</p>
                    <p className="flex items-center gap-1"><strong className="font-normal text-slate-800">Email:</strong><a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></p>
                    <p><strong className="font-normal text-slate-800">Phone No:</strong> <a className="hover:underline text-blue-600 font-normal" href="tel:+919084945151">+91 9084945151</a></p>
                  </div>
                  <div className="col-span-full flex justify-around pt-3 border-t mt-2 flex-wrap gap-2 text-xs text-slate-600 font-normal">
                    <div><strong className="font-normal text-slate-800">Grievance Officer:</strong> Bharat Makkar | <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">compliance@mahiradvisers.com</a></div>
                  </div>
                </div>
              </div>

              {/* --- SECTION 1. ABOUT THIS PRIVACY POLICY --- */}
              <section id="about" className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">1. ABOUT THIS PRIVACY POLICY</h2>
                <p className="text-slate-750 leading-relaxed text-sm sm:text-base font-normal">Mahir Investment Advisers Private Limited (&apos;MIA&apos;, &apos;we&apos;, &apos;us&apos;, &apos;our&apos;) is committed to protecting the privacy and personal data of its clients, prospective clients, and users of the MIA App and Website (&apos;Platform&apos;).</p>

                <div className="legal-alert-primary p-4 sm:p-5 rounded-2xl text-sm border border-blue-100 font-normal">
                  <h3 className="text-base font-normal mb-2 legal-text-primary">Legal Compliance Framework:</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-750 font-normal">
                    <li>Digital Personal Data Protection Act, 2023 (&apos;DPDP Act&apos;)</li>
                    <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&apos;IT SPDI Rules&apos;)</li>
                    <li>Information Technology Act, 2000;</li>
                    <li>SEBI (Investment Advisers) Regulations, 2013 and applicable SEBI Circulars;</li>
                    <li>Prevention of Money Laundering Act, 2002 and AML/KYC guidelines;</li>
                    <li>All other applicable laws and regulations of India.</li>
                  </ul>
                </div>
                <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed font-normal">This Policy describes how MIA collects, uses, processes, stores, shares, and protects your personal data, and sets out the rights available to you as a Data Principal under applicable law. This Policy forms part of the overall agreement between you and MIA and should be read alongside the Terms and Conditions and Client Agreement.</p>
              </section>

              {/* --- SECTION 2. PERSONAL DATA WE COLLECT --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">2. PERSONAL DATA WE COLLECT</h2>

                <h3 className="text-lg font-normal mt-4 mb-2 border-l-4 pl-3 legal-border-primary text-slate-800">2.1 Categories of Personal Data</h3>
                <p className="text-slate-750 text-sm sm:text-base font-normal">We collect the following categories of personal data from you directly and through your use of the Platform:</p>
                <ul className="space-y-2 list-disc pl-6 text-slate-750 text-xs sm:text-sm font-normal">
                  <li><strong className="font-normal text-slate-900">Identity Data:</strong> Full legal name, PAN card number, Aadhaar number (masked/tokenized as permitted), date of birth, photograph, and specimen signature.</li>
                  <li><strong className="font-normal text-slate-900">Contact Data:</strong> Residential and correspondence address, email address, mobile number, and emergency contact details.</li>
                  <li><strong className="font-normal text-slate-900">Financial Data:</strong> Gross annual income, net worth, bank account details (for fee payments), investment portfolio information, existing liabilities, tax status, and FATCA/CRS declarations.</li>
                  <li><strong className="font-normal text-slate-900">KYC &amp; AML Data:</strong> Documentary evidence for KYC compliance, source of funds and wealth, politically exposed person (PEP) status, and sanctions screening data.</li>
                  <li><strong className="font-normal text-slate-900">Risk Profile Data:</strong> Risk tolerance questionnaire responses, investment objectives, investment horizon, prior investment experience, and financial goals.</li>
                  <li><strong className="font-normal text-slate-900">Platform Usage Data:</strong> IP address, device identifiers, browser type and version, operating system, pages visited, session duration, click-stream data, and referral URLs.</li>
                  <li><strong className="font-normal text-slate-900">Communication Data:</strong> Queries, complaints, call recordings (with consent), correspondence, and meeting notes.</li>
                  <li><strong className="font-normal text-slate-900">Technical Data:</strong> App crash reports, error logs, and performance diagnostic metrics.</li>
                </ul>

                <h3 className="text-lg font-normal mt-6 mb-2 border-l-4 pl-3 legal-border-primary text-slate-800">2.2 Sensitive Personal Data or Information (SPDI)</h3>
                <p className="text-slate-750 text-sm sm:text-base font-normal">The following categories constitute SPDI under the IT SPDI Rules, 2011 and are collected only with your explicit prior consent:</p>
                <ul className="space-y-2 list-disc pl-6 text-slate-750 text-xs sm:text-sm font-normal">
                  <li><strong className="font-normal text-slate-900">Financial information:</strong> Bank account numbers, credit card/debit card details (solely for fee payment), income details, and net worth information.</li>
                  <li><strong className="font-normal text-slate-900">Biometric data:</strong> Where applicable and legally permitted (e.g., for eKYC purposes).</li>
                  <li><strong className="font-normal text-slate-900">Aadhaar details:</strong> As permitted under the Aadhaar (Targeted Delivery) Act, 2016 and applicable guidelines.</li>
                </ul>

                <h3 className="text-lg font-normal mt-6 mb-2 border-l-4 pl-3 legal-border-primary text-slate-800">2.3 Data We Do Not Collect</h3>
                <p className="text-slate-750 text-xs sm:text-sm font-normal">MIA does not collect racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, health data (unless specifically relevant for insurance advisory, which MIA does not presently offer), genetic data, or sexual orientation data.</p>
              </div>

              {/* --- SECTION 3. PURPOSES AND LEGAL BASIS FOR PROCESSING --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">3. PURPOSES AND LEGAL BASIS FOR PROCESSING</h2>
                <p className="text-xs sm:text-sm italic text-slate-500 font-normal">This section details how your data is used and the legal justification for each use.</p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Purpose of Processing</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Data Categories Used</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Client onboarding &amp; KYC completion</td>
                        <td className="p-4 font-normal">Identity, Contact, KYC, Financial</td>
                        <td className="p-4 font-normal text-emerald-800">Legal obligation (SEBI IA Reg., PMLA)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Providing personalized investment advice</td>
                        <td className="p-4 font-normal">Risk profile, Financial, Usage data</td>
                        <td className="p-4 font-normal text-sky-900">Contract performance</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">AML/CFT compliance &amp; suspicious transaction reporting</td>
                        <td className="p-4 font-normal">KYC, Identity, Transaction data</td>
                        <td className="p-4 font-normal text-emerald-800">Legal obligation (PMLA, SEBI)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Fee collection and billing</td>
                        <td className="p-4 font-normal">Contact, Financial, Bank data</td>
                        <td className="p-4 font-normal text-sky-900">Contract performance</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Platform improvement &amp; analytics</td>
                        <td className="p-4 font-normal">Usage, Technical data</td>
                        <td className="p-4 font-normal text-amber-800">Legitimate interest / Consent</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Regulatory reporting to SEBI, AMFI, FIU-IND</td>
                        <td className="p-4 font-normal">Identity, KYC, Financial</td>
                        <td className="p-4 font-normal text-emerald-800">Legal obligation</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Marketing communications (opt-in only)</td>
                        <td className="p-4 font-normal">Contact, Usage data</td>
                        <td className="p-4 font-normal text-amber-800">Consent</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Customer support &amp; grievance redressal</td>
                        <td className="p-4 font-normal">Communication data</td>
                        <td className="p-4 font-normal text-sky-900">Contract performance / Consent</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal text-slate-900">Internal audit &amp; compliance</td>
                        <td className="p-4 font-normal">All relevant categories</td>
                        <td className="p-4 font-normal text-emerald-800">Legal obligation / Legitimate interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* --- SECTION 4. DATA SHARING AND DISCLOSURE --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">4. DATA SHARING AND DISCLOSURE</h2>
                <p className="text-slate-750 text-sm sm:text-base font-normal">MIA does not sell, rent, or trade your personal data to any third party for commercial purposes. We may share your data strictly on a need-to-know basis with the following:</p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-normal"><strong className="font-normal legal-text-primary">Regulatory Authorities:</strong> SEBI, AMFI, Stock Exchanges, Depositories (NSDL/CDSL), Registrar and Transfer Agents, and other financial market regulators as required by law.</li>
                  <li className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-normal"><strong className="font-normal legal-text-primary">Financial Intelligence Unit — India (FIU-IND):</strong> for AML/CFT reporting obligations under PMLA.</li>
                  <li className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-normal"><strong className="font-normal legal-text-primary">KYC Registration Agencies (KRAs) and Central KYC Registry (CKYCRR):</strong> for KYC verification and record maintenance.</li>
                  <li className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-normal"><strong className="font-normal legal-text-primary">Technology Service Providers:</strong> Cloud hosting partners, IT vendors, and software service providers who process data strictly on MIA&apos;s behalf and are bound by written data processing agreements with equivalent security standards.</li>
                  <li className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 font-normal"><strong className="font-normal legal-text-primary">Professional Advisers:</strong> Statutory auditors, legal counsel, and tax advisers, subject to appropriate confidentiality obligations.</li>
                  <li className="p-3.5 bg-rose-50 border-l-4 border-rose-500 text-rose-900 rounded-2xl font-normal"><strong className="font-normal text-rose-900">Legal Mandates:</strong> Courts, Tribunals, or Law Enforcement Authorities pursuant to a valid court order, summons, or statutory requirement.</li>
                </ul>

                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200 font-normal">All third-party data processors are contractually bound to maintain security standards not lower than those maintained by MIA. Cross-border data transfers, if any, shall comply with provisions of the DPDP Act, 2023, including adequate safeguards.</p>
              </div>

              {/* --- SECTION 5. DATA RETENTION PERIODS --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">5. DATA RETENTION PERIODS</h2>
                <p className="text-xs sm:text-sm italic text-slate-500 font-normal">Data retention is governed by the longest period required by law or regulation.</p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Data Category</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Retention Period</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">KYC and Client Agreement records</td>
                        <td className="p-4 font-normal text-slate-900">Minimum 5 years post relationship cessation</td>
                        <td className="p-4 font-normal">SEBI IA Regulation 19, PMLA Rule 10</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">Financial transaction records</td>
                        <td className="p-4 font-normal text-slate-900">Minimum 10 years</td>
                        <td className="p-4 font-normal">PMLA, 2002 — Section 12</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">Correspondence and complaints records</td>
                        <td className="p-4 font-normal text-slate-900">Minimum 5 years</td>
                        <td className="p-4 font-normal">SEBI IA Regulations</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">Platform usage logs</td>
                        <td className="p-4 font-normal text-slate-900">12 months (rolling)</td>
                        <td className="p-4 font-normal">IT Act, 2000 / Legitimate interest</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">Marketing data and consent records</td>
                        <td className="p-4 font-normal text-slate-900">Until withdrawal of consent</td>
                        <td className="p-4 font-normal">DPDP Act, 2023</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal">Call recordings (where applicable)</td>
                        <td className="p-4 font-normal text-slate-900">90 days unless subject to a dispute</td>
                        <td className="p-4 font-normal">SEBI / Legitimate interest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="p-4 legal-alert-secondary rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200">Upon expiry of the applicable retention period, personal data shall be securely deleted or irreversibly anonymized in accordance with applicable law. Records subject to ongoing legal/regulatory proceedings shall be retained until resolution.</p>
              </div>

              {/* --- SECTION 6. DATA SECURITY MEASURES --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">6. DATA SECURITY MEASURES</h2>
                <p className="text-slate-750 text-sm sm:text-base font-normal">MIA implements comprehensive technical and organizational security measures in accordance with IT SPDI Rules, 2011 and DPDP Act, 2023 to protect your personal data:</p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="border-l-4 legal-border-primary pl-4 py-1 font-normal">
                    <strong className="font-normal text-slate-900">Encryption:</strong> All data in transit is encrypted using TLS 1.2 or higher. Data at rest is encrypted using AES-256 encryption.
                  </li>
                  <li className="border-l-4 legal-border-primary pl-4 py-1 font-normal">
                    <strong className="font-normal text-slate-900">Access Controls:</strong> Role-based access controls (RBAC) ensuring data access is strictly limited to authorized personnel on a need-to-know basis.
                  </li>
                  <li className="border-l-4 legal-border-primary pl-4 py-1 font-normal">
                    <strong className="font-normal text-slate-900">Authentication:</strong> Multi-factor authentication (MFA) mandatory for all personnel accessing client data and for Platform login.
                  </li>
                  <li className="border-l-4 legal-border-primary pl-4 py-1 font-normal">
                    <strong className="font-normal text-slate-900">Security Audits:</strong> Regular security audits, vulnerability assessments, and penetration testing by qualified third-party security professionals.
                  </li>
                  <li className="border-l-4 legal-border-primary pl-4 py-1 font-normal">
                    <strong className="font-normal text-slate-900">Incident Response:</strong> Documented incident response procedures for data breach detection, containment, and notification.
                  </li>
                  <li className="border-l-4 border-rose-500 pl-4 py-1 text-rose-900 font-normal">
                    <strong className="font-normal text-rose-900">Data Breach Notification:</strong> In the event of a personal data breach, MIA will notify the Data Protection Board of India and affected clients within the timelines prescribed under the DPDP Act, 2023.
                  </li>
                </ul>
              </div>

              {/* --- SECTION 7. COOKIE POLICY --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">7. COOKIE POLICY</h2>
                <p className="text-slate-750 text-sm sm:text-base font-normal">The MIA Platform uses cookies and similar tracking technologies (web beacons, pixels, local storage) to provide a seamless user experience. Categories:</p>

                <ul className="space-y-2 list-disc pl-6 text-xs sm:text-sm text-slate-700 font-normal">
                  <li><strong className="font-normal text-slate-900">Strictly Necessary Cookies:</strong> Essential for core Platform functionality including login sessions, security tokens, and fraud prevention. These cannot be disabled without impacting Platform functionality.</li>
                  <li><strong className="font-normal text-slate-900">Analytics Cookies:</strong> Used to understand Platform usage patterns, page performance, and user behaviour collected only with your explicit consent.</li>
                  <li><strong className="font-normal text-slate-900">Preference Cookies:</strong> Used to remember your Platform settings and preferences collected with consent.</li>
                  <li><strong className="font-normal text-slate-900">Marketing Cookies:</strong> Used to deliver relevant financial content and updates collected only with opt-in consent.</li>
                </ul>
                <p className="text-xs sm:text-sm italic text-slate-500 font-normal">You may manage cookie preferences at any time through your browser settings or the Platform&apos;s cookie consent manager. Disabling non-essential cookies will not affect your ability to receive core advisory services.</p>
              </div>

              {/* --- SECTION 8. YOUR RIGHTS AS DATA PRINCIPAL --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">8. YOUR RIGHTS AS DATA PRINCIPAL</h2>
                <p className="text-slate-750 text-sm sm:text-base font-normal">Under the DPDP Act, 2023 and applicable law, you have the following rights with respect to your personal data:</p>

                <div className="overflow-x-auto shadow-md rounded-2xl border border-slate-200">
                  <table className="min-w-full bg-white text-xs sm:text-sm font-normal">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-700 border-b legal-border-primary font-normal">
                        <th scope="col" className="p-4 font-normal w-1/3">Right</th>
                        <th scope="col" className="p-4 font-normal w-1/3">Description</th>
                        <th scope="col" className="p-4 font-normal w-1/3">How to Exercise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-normal">
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Access</td>
                        <td className="p-4 font-normal">Obtain summary of personal data processed and processing activities undertaken</td>
                        <td className="p-4 text-xs font-normal">Written request to DPO</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Correction</td>
                        <td className="p-4 font-normal">Request correction, completion, or updating of inaccurate/incomplete personal data</td>
                        <td className="p-4 text-xs font-normal">Written request to DPO</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Erasure</td>
                        <td className="p-4 font-normal">Request deletion of personal data, subject to legal retention obligations and regulatory requirements</td>
                        <td className="p-4 text-xs font-normal">Written request to DPO</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Grievance Redressal</td>
                        <td className="p-4 font-normal">Raise grievances about personal data processing with the Data Protection Officer</td>
                        <td className="p-4 text-xs font-mono font-normal">Email to compliance@mahiradvisers.com</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Nominate</td>
                        <td className="p-4 font-normal">Nominate an individual to exercise data rights on your behalf in case of death or incapacity</td>
                        <td className="p-4 text-xs font-normal">Written request to DPO</td>
                      </tr>
                      <tr className="hover:bg-slate-50 font-normal">
                        <td className="p-4 font-normal legal-text-primary">Right to Withdraw Consent</td>
                        <td className="p-4 font-normal">Withdraw consent for processing not based on legal obligation, without affecting prior lawful processing</td>
                        <td className="p-4 text-xs font-normal">Written request or Platform settings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 legal-alert-secondary rounded-2xl text-xs sm:text-sm text-slate-700 font-normal border border-amber-200">
                  <strong className="font-normal text-slate-900">Processing Timeline:</strong> Requests to exercise rights will be responded to within the timeframe prescribed under the DPDP Act, 2023 (currently 30 days). MIA may require identity verification before processing requests. Some rights may be subject to exceptions where processing is required by law.
                </div>
              </div>

              {/* --- SECTION 9, 10, 11 --- */}
              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">9. CHILDREN&apos;S PRIVACY</h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">The MIA Platform and Services are intended exclusively for persons 18 years of age and above. MIA does not knowingly collect, process, or store personal data from minors under 18 years of age. If MIA becomes aware that personal data of a minor has been inadvertently collected, it shall promptly delete such data in accordance with the DPDP Act, 2023 and notify the parent or guardian.</p>
              </div>

              <div className="space-y-4 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">10. UPDATES TO THIS PRIVACY POLICY</h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">MIA may update this Privacy Policy periodically to reflect changes in legal or regulatory requirements, business practices, data processing activities, or technological changes. Material updates will be communicated via the Platform&apos;s notification system and/or by email to registered clients at least 15 days prior to the update taking effect. The date of the latest revision is prominently displayed at the top of this Policy. Continued use of the Platform after notification of changes constitutes acceptance of the updated Policy.</p>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-6 font-normal">
                <h2 className="text-xl sm:text-2xl font-normal legal-text-primary border-b pb-2">11. CONTACT, DPO, AND GRIEVANCE OFFICER</h2>
                <p className="text-xs sm:text-sm text-slate-700 font-normal">For privacy-related queries, concerns, or to exercise your data rights, please contact:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm p-5 bg-slate-50 rounded-2xl border border-slate-200 font-normal">
                  <div>
                    <h3 className="text-base font-normal legal-text-primary mb-2">Data Protection Officer</h3>
                    <p><strong className="font-normal text-slate-900">Bharat Makkar</strong></p>
                    <p>Email: <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-mono font-normal">compliance@mahiradvisers.com</a></p>
                    <p>Phone: <span>+91 9084945151</span></p>
                  </div>

                  <div>
                    <h3 className="text-base font-normal legal-text-primary mb-2">Grievance Details</h3>
                    <p><strong className="font-normal text-slate-900">Registered Address:</strong> PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra</p>
                    <p className="mt-2"><strong className="font-normal text-slate-900">Resolution Timeline:</strong> Within 30 days from date of receipt of complaint</p>
                  </div>
                </div>

                <div className="text-center p-4 legal-alert-primary rounded-2xl text-xs sm:text-sm font-normal">
                  <strong className="font-normal legal-text-primary">Jurisdiction:</strong> Courts at Pune, Maharashtra, India. If your complaint or concern is not satisfactorily resolved by MIA&apos;s DPO, you may approach the Data Protection Board of India (once constituted and operational under the DPDP Act, 2023) or SEBI SCORES (scores.gov.in) for SEBI-related grievances.
                </div>
              </div>

              {/* --- SIGNATORY BLOCK (FOOTER) --- */}
              <div className="signature-block pt-8 border-t border-slate-200 mt-8 text-center text-xs sm:text-sm font-normal">
                <div className="flex flex-col items-center signature font-normal">
                  <div className="text-lg sm:text-xl font-normal legal-text-primary mb-6">
                    Mahir Investment Advisers Private Limited
                  </div>
                  <hr className="w-full border-b border-slate-200 mb-4" />
                  <p className="font-normal text-slate-900">YASH MAHAVIR BEDMUTTHA</p>
                  <p className="text-xs text-slate-600 font-normal">Principal Officer <br /> Email: <a href="mailto:admin@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">admin@mahiradvisers.com</a></p>
                  <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                </div>

                <div className="flex flex-col items-center signature mt-8 font-normal">
                  <hr className="w-full border-b border-slate-200 mb-4" />
                  <p className="font-normal legal-text-primary">BHARAT MAKKAR</p>
                  <p className="text-xs text-slate-600 font-normal">Compliance Officer <br /> Email: <a href="mailto:compliance@mahiradvisers.com" className="text-blue-600 hover:underline font-normal">compliance@mahiradvisers.com</a></p>
                  <p className="text-xs mt-1 text-slate-500 font-mono font-normal">Date: June 01, 2026</p>
                </div>
              </div>
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

export default PrivacyPolicyPage;
