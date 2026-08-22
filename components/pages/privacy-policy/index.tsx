'use client';

import React from 'react';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

const CIN_NUMBER = 'U66190PN2025PTC244016';
const SEBI_NUMBER = 'INA000022668';

interface Subsection {
  subtitle: string;
  content?: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

interface Section {
  id: string;
  title?: string;
  content?: string;
  bullets?: string[];
  subsections?: Subsection[];
}

const DATA_FIDUCIARY: { label: string; value?: string }[] = [
  { label: 'Data Fiduciary', value: 'Mahir Investment Advisers Private Limited' },
  { label: 'CIN', value: CIN_NUMBER },
  { label: 'SEBI Reg. No.', value: SEBI_NUMBER },
  {
    label: 'Registered Office',
    value:
      'PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra',
  },
  { label: 'Data Protection Officer', value: 'Bharat Makkar' },
  { label: 'DPO Email', value: 'compliance@mahir.in' },
  { label: 'Grievance Officer', value: 'Bharat Makkar | compliance@mahir.in' },
  { label: 'Policy Version', value: 'Version 1.0 | Effective: June 01, 2026' },
];

const SECTIONS: Section[] = [
  {
    id: 'about',
    title: '1.  About This Privacy Policy',
    content:
      "Mahir Investment Advisers Private Limited ('Mahir Invest', 'we', 'us', 'our') is committed to protecting the privacy and personal data of its clients, prospective clients, and users of the Mahir Invest App and Website ('Platform').\n\nThis Privacy Policy is prepared in compliance with the following laws and regulations:\n\n• Digital Personal Data Protection Act, 2023 ('DPDP Act')\n• Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ('IT SPDI Rules')\n• Information Technology Act, 2000\n• SEBI (Investment Advisers) Regulations, 2013 and applicable SEBI Circulars\n• Prevention of Money Laundering Act, 2002 and AML/KYC guidelines\n• All other applicable laws and regulations of India\n\nThis Policy describes how Mahir Invest collects, uses, processes, stores, shares, and protects your personal data, and sets out the rights available to you as a Data Principal under applicable law. This Policy forms part of the overall agreement between you and Mahir Invest and should be read alongside the Terms and Conditions and Client Agreement.",
  },
  {
    id: 'data_collected',
    title: '2.  Personal Data We Collect',
    subsections: [
      {
        subtitle: '2.1  Categories of Personal Data',
        content: 'We collect the following categories of personal data from you directly and through your use of the Platform:',
        bullets: [
          'Identity Data: Full legal name, PAN card number, Aadhaar number (masked/tokenized as permitted), date of birth, photograph, and specimen signature.',
          'Contact Data: Residential and correspondence address, email address, mobile number, and emergency contact details.',
          'Financial Data: Gross annual income, net worth, bank account details (for fee payments), investment portfolio information, existing liabilities, tax status, and FATCA/CRS declarations.',
          'KYC & AML Data: Documentary evidence for KYC compliance, source of funds and wealth, politically exposed person (PEP) status, and sanctions screening data.',
          'Risk Profile Data: Risk tolerance questionnaire responses, investment objectives, investment horizon, prior investment experience, and financial goals.',
          'Platform Usage Data: IP address, device identifiers, browser type and version, operating system, pages visited, session duration, click-stream data, and referral URLs.',
          'Communication Data: Queries, complaints, call recordings (with consent), correspondence, and meeting notes.',
          'Technical Data: App crash reports, error logs, and performance diagnostic metrics.',
        ],
      },
      {
        subtitle: '2.2  Sensitive Personal Data or Information (SPDI)',
        content:
          'The following categories constitute SPDI under the IT SPDI Rules, 2011 and are collected only with your explicit prior consent:\n\nFinancial information: Bank account numbers, credit card/debit card details (solely for fee payment), income details, and net worth information.\n\nBiometric data: Where applicable and legally permitted (e.g., for eKYC purposes).\n\nAadhaar details: As permitted under the Aadhaar (Targeted Delivery) Act, 2016 and applicable guidelines.',
      },
      {
        subtitle: '2.3  Data We Do Not Collect',
        content:
          'Mahir Invest does not collect racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, health data (unless specifically relevant for insurance advisory, which Mahir Invest does not presently offer), genetic data, or sexual orientation data.',
      },
    ],
  },
  {
    id: 'purposes',
    title: '3.  Purposes and Legal Basis for Processing',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Purpose of Processing', 'Data Categories Used', 'Legal Basis'],
          rows: [
            ['Client onboarding & KYC completion', 'Identity, Contact, KYC, Financial', 'Legal obligation (SEBI IA Reg., PMLA)'],
            ['Providing personalized investment advice', 'Risk profile, Financial, Usage data', 'Contract performance'],
            ['AML/CFT compliance & suspicious transaction reporting', 'KYC, Identity, Transaction data', 'Legal obligation (PMLA, SEBI)'],
            ['Fee collection and billing', 'Contact, Financial, Bank data', 'Contract performance'],
            ['Platform improvement & analytics', 'Usage, Technical data', 'Legitimate interest / Consent'],
            ['Regulatory reporting to SEBI, AMFI, FIU-IND', 'Identity, KYC, Financial', 'Legal obligation'],
            ['Marketing communications (opt-in only)', 'Contact, Usage data', 'Consent'],
            ['Customer support & grievance redressal', 'Communication data', 'Contract performance / Consent'],
            ['Internal audit & compliance', 'All relevant categories', 'Legal obligation / Legitimate interest'],
          ],
        },
      },
    ],
  },
  {
    id: 'sharing',
    title: '4.  Data Sharing and Disclosure',
    content:
      'Mahir Invest does not sell, rent, or trade your personal data to any third party for commercial purposes. We may share your data strictly on a need-to-know basis with the following:',
    bullets: [
      'Regulatory Authorities: SEBI, AMFI, Stock Exchanges, Depositories (NSDL/CDSL), Registrar and Transfer Agents, and other financial market regulators as required by law.',
      'Financial Intelligence Unit — India (FIU-IND) for AML/CFT reporting obligations under PMLA.',
      'KYC Registration Agencies (KRAs) and Central KYC Registry (CKYCRR) for KYC verification and record maintenance.',
      "Technology Service Providers: Cloud hosting partners, IT vendors, and software service providers who process data strictly on Mahir Invest's behalf and are bound by written data processing agreements with equivalent security standards.",
      'Professional Advisers: Statutory auditors, legal counsel, and tax advisers, subject to appropriate confidentiality obligations.',
      'Courts, Tribunals, or Law Enforcement Authorities pursuant to a valid court order, summons, or statutory requirement.',
    ],
    subsections: [
      {
        subtitle: '',
        content:
          'All third-party data processors are contractually bound to maintain security standards not lower than those maintained by Mahir Invest. Cross-border data transfers, if any, shall comply with provisions of the DPDP Act, 2023, including adequate safeguards.',
      },
    ],
  },
  {
    id: 'retention',
    title: '5.  Data Retention Periods',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Data Category', 'Retention Period', 'Legal Basis'],
          rows: [
            ['KYC and Client Agreement records', 'Minimum 5 years post relationship cessation', 'SEBI IA Regulation 19, PMLA Rule 10'],
            ['Financial transaction records', 'Minimum 10 years', 'PMLA, 2002 — Section 12'],
            ['Correspondence and complaints records', 'Minimum 5 years', 'SEBI IA Regulations'],
            ['Platform usage logs', '12 months (rolling)', 'IT Act, 2000 / Legitimate interest'],
            ['Marketing data and consent records', 'Until withdrawal of consent', 'DPDP Act, 2023'],
            ['Call recordings (where applicable)', '90 days unless subject to a dispute', 'SEBI / Legitimate interest'],
          ],
        },
      },
      {
        subtitle: '',
        content:
          'Upon expiry of the applicable retention period, personal data shall be securely deleted or irreversibly anonymized in accordance with applicable law. Records subject to ongoing legal/regulatory proceedings shall be retained until resolution.',
      },
    ],
  },
  {
    id: 'security',
    title: '6.  Data Security Measures',
    content:
      'Mahir Invest implements comprehensive technical and organizational security measures in accordance with IT SPDI Rules, 2011 and DPDP Act, 2023 to protect your personal data:',
    bullets: [
      'Encryption: All data in transit is encrypted using TLS 1.2 or higher. Data at rest is encrypted using AES-256 encryption.',
      'Access Controls: Role-based access controls (RBAC) ensuring data access is strictly limited to authorized personnel on a need-to-know basis.',
      'Authentication: Multi-factor authentication (MFA) mandatory for all personnel accessing client data and for Platform login.',
      'Security Audits: Regular security audits, vulnerability assessments, and penetration testing by qualified third-party security professionals.',
      'Incident Response: Documented incident response procedures for data breach detection, containment, and notification.',
      'Data Breach Notification: In the event of a personal data breach, Mahir Invest will notify the Data Protection Board of India and affected clients within the timelines prescribed under the DPDP Act, 2023.',
      'Employee Training: Regular data protection and cybersecurity training for all employees and associates with access to personal data, bound by confidentiality agreements.',
      'Third-Party Audits: IT systems and security infrastructure undergo periodic independent audits.',
    ],
  },
  {
    id: 'cookies',
    title: '7.  Cookie Policy',
    content:
      'The Mahir Invest Platform uses cookies and similar tracking technologies (web beacons, pixels, local storage) to provide a seamless user experience. Categories:',
    bullets: [
      'Strictly Necessary Cookies: Essential for core Platform functionality including login sessions, security tokens, and fraud prevention. These cannot be disabled without impacting Platform functionality.',
      'Analytics Cookies: Used to understand Platform usage patterns, page performance, and user behaviour — collected only with your explicit consent.',
      'Preference Cookies: Used to remember your Platform settings and preferences — collected with consent.',
      'Marketing Cookies: Used to deliver relevant financial content and updates — collected only with opt-in consent.',
    ],
    subsections: [
      {
        subtitle: '',
        content:
          "You may manage cookie preferences at any time through your browser settings or the Platform's cookie consent manager. Disabling non-essential cookies will not affect your ability to receive core advisory services.",
      },
    ],
  },
  {
    id: 'rights',
    title: '8.  Your Rights as Data Principal',
    content:
      'Under the DPDP Act, 2023 and applicable law, you have the following rights with respect to your personal data:',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Right', 'Description', 'How to Exercise'],
          rows: [
            ['Right to Access', 'Obtain summary of personal data processed and processing activities undertaken', 'Written request to DPO'],
            ['Right to Correction', 'Request correction, completion, or updating of inaccurate/incomplete personal data', 'Written request to DPO'],
            ['Right to Erasure', 'Request deletion of personal data, subject to legal retention obligations and regulatory requirements', 'Written request to DPO'],
            ['Right to Grievance Redressal', 'Raise grievances about personal data processing with the Data Protection Officer', 'Email to compliance@mahir.in'],
            ['Right to Nominate', 'Nominate an individual to exercise data rights on your behalf in case of death or incapacity', 'Written nomination to DPO'],
            ['Right to Withdraw Consent', 'Withdraw consent for processing not based on legal obligation, without affecting prior lawful processing', 'Written request or Platform settings'],
          ],
        },
      },
      {
        subtitle: '',
        content:
          'Requests to exercise rights will be responded to within the timeframe prescribed under the DPDP Act, 2023 (currently 30 days). Mahir Invest may require identity verification before processing requests. Some rights may be subject to exceptions where processing is required by law.',
      },
    ],
  },
  {
    id: 'children',
    title: "9.  Children's Privacy",
    content:
      'The Mahir Invest Platform and Services are intended exclusively for persons 18 years of age and above. Mahir Invest does not knowingly collect, process, or store personal data from minors under 18 years of age. If Mahir Invest becomes aware that personal data of a minor has been inadvertently collected, it shall promptly delete such data in accordance with the DPDP Act, 2023 and notify the parent or guardian.',
  },
  {
    id: 'updates',
    title: '10.  Updates to This Privacy Policy',
    content:
      "Mahir Invest may update this Privacy Policy periodically to reflect changes in legal or regulatory requirements, business practices, data processing activities, or technological changes. Material updates will be communicated via the Platform's notification system and/or by email to registered clients at least 15 days prior to the update taking effect. The date of the latest revision is prominently displayed at the top of this Policy. Continued use of the Platform after notification of changes constitutes acceptance of the updated Policy.",
  },
  {
    id: 'contact',
    title: '11.  Contact, DPO, and Grievance Officer',
    content:
      'For privacy-related queries, concerns, or to exercise your data rights, please contact:',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Detail', 'Information'],
          rows: [
            ['Data Protection Officer', 'Bharat Makkar'],
            ['Email', 'compliance@mahir.in'],
            ['Grievance Resolution Timeline', 'Within 30 days from date of receipt of complaint'],
            ['Registered Address', 'PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra'],
            ['Jurisdiction', 'Courts at Pune, Maharashtra, India'],
          ],
        },
      },
      {
        subtitle: '',
        content:
          "If your complaint or concern is not satisfactorily resolved by Mahir Invest's DPO, you may approach the Data Protection Board of India (once constituted and operational under the DPDP Act, 2023) or SEBI SCORES (scores.gov.in) for SEBI-related grievances.",
      },
    ],
  },
];

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5 my-2 pl-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
        <span className="text-slate-400 text-base leading-none select-none mt-0.5">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SimpleTable: React.FC<{ headers: string[]; rows: string[][] }> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-3 border border-slate-200 rounded-xl shadow-sm bg-white">
    <table className="w-full text-xs sm:text-sm text-slate-700 font-normal border-collapse">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          {headers.map((h, i) => (
            <th key={i} className="p-3 text-left font-semibold text-slate-600 border-r last:border-r-0 border-slate-200">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {rows.map((row, ri) => (
          <tr key={ri} className="hover:bg-slate-50/50">
            {row.map((cell, ci) => (
              <td key={ci} className="p-3 text-slate-800 whitespace-pre-line border-r last:border-r-0 border-slate-100">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const PrivacyPolicyPage = () => {
  const renderSection = (section: Section, index: number) => (
    <div key={section.id} className="py-4">
      {section.title && (
        <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
          {section.title}
        </h2>
      )}

      {section.content && (
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed whitespace-pre-line mb-3">
          {section.content}
        </p>
      )}

      {section.bullets && <BulletList items={section.bullets} />}

      {section.subsections?.map((sub, si) => (
        <div key={si} className="mt-4">
          {sub.subtitle && (
            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
              {sub.subtitle}
            </h3>
          )}
          {sub.content && (
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed whitespace-pre-line mb-2">
              {sub.content}
            </p>
          )}
          {sub.bullets && <BulletList items={sub.bullets} />}
          {sub.table && <SimpleTable headers={sub.table.headers} rows={sub.table.rows} />}
        </div>
      ))}

      {index < SECTIONS.length - 1 && <hr className="my-4 border-slate-100" />}
    </div>
  );

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
            <GlassCard rounded="3xl" variant="frosted" className="max-w-5xl mx-auto bg-white p-6 sm:p-10 text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-6 select-text font-normal">
              {/* Version Badge Row */}
              <div className="flex items-center gap-3">
                <span className="bg-sky-50 text-[var(--blue-normal)] font-semibold text-xs px-3 py-1 rounded-full border border-sky-100">
                  Version 1.0
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  Compliant with DPDP Act 2023 &amp; IT (SPDI) Rules 2011
                </span>
              </div>

              {/* Data Fiduciary Card */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Data Fiduciary Details</h3>
                </div>
                <div className="p-4 space-y-2 text-xs sm:text-sm">
                  {DATA_FIDUCIARY.map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start border-b last:border-b-0 border-slate-100 pb-2 last:pb-0 gap-1 sm:gap-4">
                      <span className="font-semibold text-slate-600 sm:w-44 shrink-0">{row.label}</span>
                      <span className="text-slate-800 font-normal">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Sections */}
              <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
                {SECTIONS.map((section, index) => renderSection(section, index))}
              </div>

              {/* Acknowledgement Card */}
              <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 text-lg">✱</span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">Your Consent</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  By accessing and using the Mahir Invest Platform and/or availing Mahir Invest&apos;s advisory services, you acknowledge that you have read, understood, and consent to the collection, use, and processing of your personal data as described in this Privacy Policy.
                </p>

                {/* Signatories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-sky-200/80 rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b sm:border-b-0 sm:border-r border-sky-200/80 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-500 font-normal">Principal Officer</p>
                    <p className="text-xs font-normal text-[var(--blue-normal)]">principalofficer@mahir.in</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">BHARAT MAKKAR</p>
                    <p className="text-xs text-slate-500 font-normal">Compliance Officer / DPO</p>
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

export default PrivacyPolicyPage;
