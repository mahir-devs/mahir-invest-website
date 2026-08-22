'use client';

import React from 'react';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
}

interface Subsection {
  subtitle: string;
  content?: string;
  bullets?: string[];
  ticks?: string[];
  crosses?: string[];
  table?: {
    headers: string[];
    rows: TableRow[];
  };
}

interface Section {
  id: string;
  title?: string;
  content?: string;
  bullets?: string[];
  ticks?: string[];
  crosses?: string[];
  subsections?: Subsection[];
  table?: {
    headers: string[];
    rows: TableRow[];
  };
}

const COMPANY_INFO: { label: string; value: string }[] = [
  { label: 'Company Name', value: 'Mahir Investment Advisers Private Limited' },
  { label: 'SEBI Reg. No.', value: 'INA000022668' },
  { label: 'SEBI Circular', value: 'SEBI/HO/IMD/DF1/CIR/P/2022/35 dated March 18, 2022' },
  { label: 'Registered Office', value: 'PL G/A-9/1 SHOP 1, MIDC G NR MORIS SO, Chinchwad East, Pune – 411019, Maharashtra, India.' },
  { label: 'Principal Officer', value: 'Yash Mahavir Bedmuttha' },
  { label: 'Compliance Officer', value: 'Bharat Makkar' },
  { label: 'Version', value: '1.0 | Effective Date: June 01, 2026' },
];

const SERVICES_OFFERED: { service: string; description: string }[] = [
  { service: 'Personalized Investment Advisory', description: "Goal-based, risk-profiled financial planning tailored to each client's specific objectives, income, and investment horizon." },
  { service: 'Portfolio Review & Rebalancing', description: 'Periodic review of client portfolios with recommendations to realign with stated financial goals and risk profile.' },
  { service: 'Asset Allocation Advisory', description: 'Guidance on optimal allocation across equity, debt, mutual funds, ETFs, and other SEBI-regulated asset classes.' },
  { service: 'Comprehensive Financial Planning', description: "Holistic financial planning covering retirement, children's education, wealth creation, and emergency fund planning." },
  { service: 'Investment Research & Analysis', description: 'Research-backed investment recommendations on securities, mutual funds, and market trends with documented rationale.' },
  { service: 'Risk Profiling & Suitability Assessment', description: 'Detailed assessment of client risk tolerance, capacity, and investment objectives to ensure suitability of advice.' },
  { service: 'Investor Education Content', description: 'Financial literacy content, webinars, and resources to help investors make informed decisions.' },
  { service: 'Grievance Redressal Support', description: "End-to-end assistance in resolving investor complaints through Mahir Invest's internal mechanism and SEBI SCORES." },
];

const SECTIONS: Section[] = [
  {
    id: 'vision_mission',
    title: 'Vision & Mission',
    subsections: [
      {
        subtitle: 'Vision',
        content:
          'To empower every Indian investor with transparent, independent, and personalized investment advisory services, enabling them to achieve their financial goals with confidence, clarity, and complete regulatory protection.',
      },
      {
        subtitle: 'Mission',
        content:
          "To provide suitability-based, conflict-free investment advice aligned to each client's unique risk profile, financial objectives, and investment horizon, with unwavering compliance with SEBI regulations.",
      },
    ],
  },
  {
    id: 'investor_rights',
    title: 'Section 2:  Investor Rights — What Investors Can Expect From Mahir Invest',
    content:
      'As a SEBI-registered Investment Adviser, Mahir Invest commits to providing every client the following rights and assurances:',
    ticks: [
      'Receive personalized, suitability-based investment advice founded exclusively on your individual risk profile, financial goals, investment horizon, and financial profile.',
      'Receive and execute a written Client Agreement before commencement of any advisory services, clearly detailing scope, fees, rights, and obligations.',
      'Receive a copy of the Risk Profiling Report prepared for you and all investment advice in writing with stated investment rationale.',
      'Full and transparent disclosure of advisory fee structure, total fee payable, and payment schedule before signing the Client Agreement.',
      'Transparent written disclosure of all potential or actual conflicts of interest, if any, before receiving advice.',
      'Access to SEBI SCORES Portal (scores.gov.in) for registration and tracking of unresolved complaints at any stage.',
      'Treatment with dignity, respect, professional courtesy, and absolute confidentiality of your personal and financial information.',
      "Assurance that Mahir Invest shall never receive commissions, referral fees, or any other payment from product manufacturers — advisory fees paid by you are Mahir Invest's only revenue source.",
      'Right to receive a copy of all records maintained by Mahir Invest relating to your advisory engagement upon written request.',
      'Right to terminate the advisory relationship at any time subject to the terms of the Client Agreement.',
      'Right to approach SEBI SCORES, SEBI ODR (smartodr.in), or SEBI Ombudsman for grievances not resolved by Mahir Invest.',
    ],
  },
  {
    id: 'mia_expects',
    title: 'Section 3:  What Mahir Invest Expects from Investors',
    content:
      'To enable Mahir Invest to provide effective, suitable, and compliant advisory services, Mahir Invest expects investors to:',
    ticks: [
      'Provide true, complete, accurate, and up-to-date information during KYC, risk profiling, and throughout the advisory engagement.',
      "Read and carefully understand the Client Agreement, Disclaimers, Risk Profile, Terms & Conditions, and all advisory communications before acting.",
      'Notify Mahir Invest promptly and in writing of any material change in your financial situation, employment status, risk tolerance, investment objectives, or family circumstances.',
      'Pay advisory fees as per the schedule agreed in the Client Agreement.',
      "Contact Mahir Invest's advisory team for clarification or additional information before taking any investment decision based on advice received.",
      'Maintain the confidentiality of your login credentials, OTP, password, and Platform account.',
      "Not share Mahir Invest's research, advice documents, or client portal access with unauthorized third parties.",
    ],
  },
  {
    id: 'dos_donts',
    title: "Section 4:  Do's and Don'ts for Investors",
    subsections: [
      {
        subtitle: "4.1  DO'S — Best Practices for Investors",
        ticks: [
          'DO verify SEBI registration of any investment adviser including Mahir Invest at www.sebi.gov.in before engaging services.',
          "DO read the Client Agreement, Risk Disclosure Documents, Investor Charter, Disclaimers, and all Terms carefully before signing or clicking 'I Agree'.",
          'DO understand your risk profile and ensure you invest only in financial products suitable for your risk tolerance and investment horizon.',
          'DO always insist on written investment advice with a clear rationale; never act on verbal advice alone.',
          'DO review your portfolio, risk profile, and advisory services at least annually or when there is a material change in your circumstances.',
          'DO keep copies of all investment advice, fee receipts, Client Agreement, and communications received from Mahir Invest.',
          'DO register your complaint at SEBI SCORES (scores.gov.in) if your grievance is not resolved by Mahir Invest within prescribed timelines.',
          'DO check and understand all charges, taxes, and fees before investing.',
        ],
      },
      {
        subtitle: "4.2  DON'TS — Investor Cautions",
        crosses: [
          "DON'T make investment decisions based solely on verbal advice, social media tips, or unwritten recommendations.",
          "DON'T pay fees in cash, by bearer cheque, to personal accounts of Mahir Invest representatives, or to any account other than Mahir Invest's officially disclosed and registered bank account.",
          "DON'T fall for promises of guaranteed, assured, or unrealistically high returns — all securities investments involve market risk.",
          "DON'T share your login credentials, OTP, password, or account access with anyone, including Mahir Invest's own staff — Mahir Invest will never ask for your OTP.",
          "DON'T invest without completing mandatory KYC formalities — KYC protects you as an investor.",
          "DON'T ignore communications from SEBI, Mahir Invest, depositories, Registrar and Transfer Agents, or other regulatory bodies.",
          "DON'T deal with unregistered investment advisers, market tipsters, stock market 'gurus', or social media influencers offering investment advice without a valid SEBI registration.",
          "DON'T make investment decisions under pressure or urgency — take adequate time to review advice, rationale, and your own risk profile.",
          "DON'T invest borrowed money or funds earmarked for essential expenses in securities markets.",
        ],
      },
    ],
  },
  {
    id: 'grievance',
    title: 'Section 5:  Investor Grievance Redressal Process',
    subsections: [
      {
        subtitle: '5.1  Step-by-Step Complaint Filing Process',
        bullets: [
          'Step 1 — Contact Mahir Invest Compliance Officer: Submit your complaint in writing with all supporting documents to compliance@mahir.in. Mahir Invest shall acknowledge within 5 working days and aim to resolve within 30 days.',
          'Step 2 — Escalate to Principal Officer: If not satisfactorily resolved within 30 days, escalate to principalofficer@mahir.in. Resolution expected within 15 days of escalation.',
          "Step 3 — SEBI SCORES Portal: If still unresolved, register your complaint on SEBI SCORES at scores.gov.in. Provide Mahir Invest's SEBI Registration No. INA000022668 and all complaint details with documentary evidence.",
          "Step 4 — SEBI ODR Platform: Access Online Dispute Resolution through SEBI's ODR Portal at smartodr.in for structured mediation and arbitration.",
          'Step 5 — SEBI Ombudsman / Legal Recourse: Approach the SEBI Ombudsman or appropriate court/consumer forum/tribunal as per applicable law.',
        ],
      },
      {
        subtitle: '5.2  Important Regulatory Contact Details',
        table: {
          headers: ['Authority', 'Contact Details', 'Purpose'],
          rows: [
            { col1: 'SEBI SCORES Portal', col2: 'scores.gov.in | 1800 266 7575 (Toll Free)', col3: 'Online complaint registration and tracking' },
            { col1: 'SEBI ODR Platform', col2: 'smartodr.in', col3: 'Online Dispute Resolution — mediation & arbitration' },
            { col1: 'SEBI Investor Helpline', col2: "1800 266 7575 | SMS 'SEBI' to 9999", col3: 'Investor queries, complaints, and education' },
            { col1: 'SEBI Website', col2: 'www.sebi.gov.in', col3: 'Regulations, circulars, registered intermediary verification' },
            { col1: 'Mahir Invest Compliance Officer', col2: 'compliance@mahir.in', col3: 'Level 1 — Primary complaint contact' },
            { col1: 'Mahir Invest Principal Officer', col2: 'principalofficer@mahir.in', col3: 'Level 2 — Escalation contact' },
          ],
        },
      },
    ],
  },
  {
    id: 'compliance_checklist',
    title: 'Section 6:  Annual Compliance Checklist',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Compliance Activity', 'Frequency', 'Responsible Person', 'Deadline'],
          rows: [
            { col1: 'Annual Compliance Report (ACR) filing with SEBI', col2: 'Annual', col3: 'Compliance Officer', col4: 'April 30 each year' },
            { col1: 'Client Risk Profile Review', col2: 'Annual / on material change', col3: 'Principal Officer', col4: 'Rolling' },
            { col1: 'NISM Certification Renewal for advisory staff', col2: 'As per NISM validity', col3: 'All advisory staff', col4: 'Before expiry' },
            { col1: 'Professional Indemnity Insurance Renewal', col2: 'Annual', col3: 'Compliance Officer', col4: 'Before expiry' },
            { col1: 'Net Worth Certificate submission to SEBI', col2: 'Annual', col3: 'CFO / Management', col4: 'As required' },
            { col1: 'AML/CFT Policy Review and Board Approval', col2: 'Annual', col3: 'Board / Compliance Officer', col4: 'April 30 each year' },
            { col1: 'Client Complaints Disclosure update on Platform', col2: 'Monthly', col3: 'Compliance Officer', col4: 'By 7th of next month' },
            { col1: 'Internal Compliance Audit', col2: 'Semi-annual', col3: 'Internal Auditor', col4: 'April and October' },
            { col1: 'Client Agreement Review and Update', col2: 'Annual or on regulatory change', col3: 'Compliance Officer', col4: 'Rolling' },
            { col1: 'Investor Charter Review and Update', col2: 'On regulatory change', col3: 'Compliance Officer', col4: 'As required' },
            { col1: 'FATCA/CRS Reporting (if applicable)', col2: 'Annual', col3: 'Compliance Officer', col4: 'As per CBDT/RBI' },
            { col1: 'SEBI IA Registration Renewal (if applicable)', col2: 'As required', col3: 'Compliance Officer', col4: 'Before expiry' },
            { col1: 'Conflict of Interest Register Update', col2: 'Quarterly', col3: 'Compliance Officer', col4: 'Rolling' },
            { col1: 'Employee KYC and Background Verification', col2: 'At onboarding & annually', col3: 'HR / Compliance Officer', col4: 'Rolling' },
          ],
        },
      },
    ],
  },
  {
    id: 'regulatory_framework',
    title: 'Section 7:  Regulatory Framework',
    content: 'Mahir Invest operates in strict compliance with the following regulatory framework:',
    bullets: [
      'SEBI Act, 1992',
      'SEBI (Investment Advisers) Regulations, 2013 and all amendments',
      'SEBI Circular on Investment Advisers (September 23, 2020 — SEBI/HO/IMD/DF1/CIR/P/2020/182)',
      'SEBI Circular on Investor Charter (March 18, 2022 — SEBI/HO/IMD/DF1/CIR/P/2022/35)',
      'Prevention of Money Laundering Act, 2002 (PMLA) and PMLA Rules, 2005',
      'SEBI AML/CFT Guidelines for Market Intermediaries',
      'Digital Personal Data Protection Act, 2023 (DPDP Act)',
      'Information Technology (Reasonable Security Practices) Rules, 2011',
      'Information Technology Act, 2000',
      'Companies Act, 2013',
      'Income Tax Act, 1961',
      'FATCA/CRS Inter-Governmental Agreements (where applicable)',
      'All applicable SEBI Circulars, Notifications, and Guidance Notes issued from time to time',
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

const TickList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5 my-2 pl-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-800 font-normal leading-relaxed">
        <span className="text-emerald-600 text-sm font-semibold select-none mt-0.5">✔</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CrossList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5 my-2 pl-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-rose-800 font-normal leading-relaxed">
        <span className="text-rose-600 text-sm font-semibold select-none mt-0.5">✖</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

interface DataTableProps {
  headers: string[];
  rows: TableRow[];
}

const SimpleTable: React.FC<DataTableProps> = ({ headers, rows }) => (
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
        {rows.map((row, ri) => {
          const cells = [row.col1, row.col2, row.col3, row.col4].filter((c) => c !== undefined);
          return (
            <tr key={ri} className="hover:bg-slate-50/50">
              {cells.map((cell, ci) => (
                <td key={ci} className="p-3 text-slate-800 whitespace-pre-line border-r last:border-r-0 border-slate-100">
                  {cell}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export const InvestorCharterPage = () => {
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
      {section.ticks && <TickList items={section.ticks} />}
      {section.crosses && <CrossList items={section.crosses} />}
      {section.table && <SimpleTable headers={section.table.headers} rows={section.table.rows} />}

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
          {sub.ticks && <TickList items={sub.ticks} />}
          {sub.crosses && <CrossList items={sub.crosses} />}
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
            <GlassCard rounded="3xl" variant="frosted" className="max-w-5xl mx-auto bg-white p-6 sm:p-10 text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-6 select-text font-normal">
              {/* Badge Row */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-200">
                  SEBI Compliant
                </span>
                <span className="text-xs text-slate-400 font-normal">
                  Pursuant to SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2022/35
                </span>
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

              {/* Services Offered Card */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Section 1: Services Offered by Mahir Invest
                  </h3>
                </div>
                <div className="p-4 space-y-3 text-xs sm:text-sm">
                  {SERVICES_OFFERED.map((item, i) => (
                    <div key={i} className="border-b last:border-b-0 border-slate-100 pb-2.5 last:pb-0 space-y-1">
                      <p className="font-semibold text-slate-900">{item.service}</p>
                      <p className="text-slate-600 font-normal leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Sections (Vision & Mission, Rights, Expectations, Do's & Don'ts, Grievance, Checklist, Framework) */}
              <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
                {SECTIONS.map((section, index) => renderSection(section, index))}
              </div>

              {/* Acknowledgement Card */}
              <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 text-lg">✱</span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">Investor Commitment</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  This Investor Charter is published in accordance with SEBI Circular No. SEBI/HO/IMD/DF1/CIR/P/2022/35 dated March 18, 2022. Mahir Investment Advisers Private Limited is unconditionally committed to upholding the rights of investors and maintaining the highest standards of transparency, integrity, and regulatory compliance in all its operations.
                </p>

                <p className="text-xs text-slate-400 font-normal">
                  Version: 1.0 | Effective: June 01, 2026 | Next Review: April 30, 2027
                </p>

                {/* Signatories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-sky-200/80 rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b sm:border-b-0 sm:border-r border-sky-200/80 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">Yash Mahavir Bedmuttha</p>
                    <p className="text-xs text-slate-500 font-normal">Principal Officer</p>
                    <p className="text-xs font-normal text-slate-400">SEBI IA Reg. No. INA000022668</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">Bharat Makkar</p>
                    <p className="text-xs text-slate-500 font-normal">Compliance Officer</p>
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

export default InvestorCharterPage;
