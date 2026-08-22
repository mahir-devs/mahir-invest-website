'use client';

import React from 'react';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/common/cards';

const CIN_NUMBER = 'U66190PN2025PTC244016';
const SEBI_NUMBER = 'INA000022668';
const TERMS_AND_CONDITIONS_VERSION = '1.0';

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
  lettered?: string[];
  subsections?: Subsection[];
}

const COMPANY_INFO: { label: string; value: string }[] = [
  { label: 'Company Name', value: 'Mahir Investment Advisers Private Limited' },
  { label: 'CIN', value: CIN_NUMBER },
  { label: 'SEBI Reg. No.', value: SEBI_NUMBER },
  { label: 'SEBI Reg. Type', value: 'Investment Adviser (Non-Individual)' },
  { label: 'Reg. Validity', value: 'June 01, 2026 — Perpetual' },
  {
    label: 'Registered Office',
    value:
      'PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra',
  },
  {
    label: 'Principal Officer',
    value: 'Yash Mahavir Bedmuttha',
  },
  {
    label: 'Compliance Officer',
    value: 'Bharat Makkar',
  },
  { label: 'Email', value: 'compliance@mahir.in' },
  { label: 'Website', value: 'www.mahirinvest.com' },
];

const SECTIONS: Section[] = [
  {
    id: 'intro',
    title: '1.  Introduction and Acceptance of Terms',
    content:
      "These Terms and Conditions ('Terms', 'Agreement') constitute a legally binding contract between you ('Client', 'User', 'you') and Mahir Investment Advisers Private Limited ('Mahir Invest', 'Company', 'we', 'us', 'our'), a company incorporated under the Companies Act, 2013 and registered as an Investment Adviser with the Securities and Exchange Board of India ('SEBI') under the SEBI (Investment Advisers) Regulations, 2013 ('IA Regulations').\n\nBy accessing, downloading, installing, or using the Mahir Invest mobile application ('App') or website ('Platform'), or availing any services offered thereon, you agree to be bound by these Terms in their entirety. If you do not agree with any part of these Terms, please immediately discontinue use of the Platform and Services.\n\nThese Terms shall be read in conjunction with the Privacy Policy, Disclaimers, SEBI Disclosures, and the Investor Charter, all of which are incorporated herein by reference and form an integral part of this Agreement.",
  },
  {
    id: 'definitions',
    title: '2.  Definitions',
    content:
      'In these Terms, the following expressions shall have the meanings assigned to them below:',
    bullets: [
      '"Services" means investment advisory services, portfolio guidance, financial planning content, risk profiling, educational resources, and any other offerings provided by Mahir Invest through the Platform.',
      '"Platform" collectively means the Mahir Invest mobile application and website (www.mahirinvest.com) and all associated digital interfaces.',
      '"Client Agreement" means the separate formal agreement executed between Mahir Invest and each Client as mandated under SEBI IA Regulations, 2013.',
      '"KYC" means Know Your Customer documentation and verification as required under applicable SEBI, PMLA, and RBI guidelines.',
      '"AUA" means Assets Under Advice — the aggregate value of the client\'s investment portfolio for which Mahir Invest provides advisory services.',
      '"Investment Advice" means advice relating to investing in, purchasing, selling, or otherwise dealing in securities or investment products, or advice on investment portfolio, as defined under SEBI IA Regulations.',
      '"Principal Officer" means Yash Mahavir Bedmuttha, the key management person designated and registered with SEBI for Mahir Invest.',
      '"Applicable Laws" means the SEBI Act, 1992; SEBI (IA) Regulations, 2013; SEBI Circulars; Prevention of Money Laundering Act, 2002; Information Technology Act, 2000; Digital Personal Data Protection Act, 2023; and all other applicable laws, rules, and regulations of India in force from time to time.',
      '"SEBI" means the Securities and Exchange Board of India constituted under the SEBI Act, 1992.',
      '"PMLA" means the Prevention of Money Laundering Act, 2002 and the rules framed thereunder.',
    ],
  },
  {
    id: 'eligibility',
    title: '3.  Eligibility Criteria',
    content:
      "To use the Platform and avail Mahir Invest's Services, you must satisfy all of the following conditions:",
    bullets: [
      'Be a natural person of at least 18 years of age possessing legal capacity to enter into binding contracts, or a body corporate, LLP, partnership firm, HUF, AOP, or trust duly authorized under its constitutional documents.',
      'Not be a person barred or prohibited from receiving investment advisory services under any court order, regulatory direction, or applicable law.',
      'Complete full KYC verification as mandated by SEBI and PMLA guidelines before availing investment advisory services.',
      'Provide accurate, complete, and up-to-date information including income details, net worth, investment horizon, risk tolerance, and financial goals.',
      'Reside and be domiciled in India. Non-resident clients are subject to additional regulatory requirements and must notify Mahir Invest of their NRI/OCI/PIO status at onboarding.',
      'Not be a Politically Exposed Person (PEP) or a close associate of a PEP unless Mahir Invest expressly agrees to onboard you after conducting Enhanced Due Diligence.',
    ],
    subsections: [
      {
        subtitle: '',
        content:
          'Mahir Invest reserves the right to decline or terminate services to any person at its sole discretion and without assigning reasons, subject to applicable regulatory guidelines.',
      },
    ],
  },
  {
    id: 'services',
    title: '4.  Nature and Scope of Services',
    subsections: [
      {
        subtitle: '4.1  Investment Advisory Services',
        content:
          'Mahir Invest provides personalized investment advisory services as a SEBI-registered Investment Adviser. All advice is based on your risk profile, financial situation, investment objectives, investment horizon, and other relevant parameters disclosed by you. Mahir Invest does not exercise discretionary management over client portfolios; all final investment decisions rest with the client.',
      },
      {
        subtitle: '4.2  Services Offered',
        bullets: [
          'Personal investment planning and goal-based financial advisory.',
          'Portfolio review, monitoring, and rebalancing recommendations.',
          'Asset allocation guidance across equity, debt, mutual funds, ETFs, and other SEBI-regulated securities.',
          'Research-based investment recommendations with written rationale.',
          'Comprehensive financial planning including retirement planning, wealth creation, and goal-based planning.',
          'Risk profiling and suitability assessment.',
          'Financial planning tools, portfolio trackers, and calculators on the Platform.',
          'Investor education content on financial markets, products, and regulatory matters.',
        ],
      },
      {
        subtitle: '4.3  Services NOT Offered',
        content:
          'Mahir Invest does NOT offer the following services, and nothing on the Platform shall be construed as:',
        bullets: [
          'Portfolio Management Services (PMS) requiring a separate SEBI registration.',
          'Stock broking, trading, or order execution services.',
          'Research Analyst services (unless separately registered with SEBI).',
          'Insurance advisory, distribution, or brokerage services.',
          'Commodity trading advisory or futures/options advisory.',
          'Guaranteed returns products or capital protection schemes.',
          'Any service outside the scope of SEBI (IA) Regulations, 2013.',
        ],
      },
    ],
  },
  {
    id: 'kyc',
    title: '5.  Client Onboarding and KYC Requirements',
    content:
      'In strict accordance with SEBI (IA) Regulations, 2013 and PMLA, 2002, the following onboarding procedure applies:',
    bullets: [
      'All clients must complete full KYC verification before receiving any investment advisory services from Mahir Invest.',
      'KYC documents required include: PAN card, Aadhaar card (for address/identity proof), recent passport-size photograph, active bank account details (cancelled cheque), income proof (latest ITR, Form 16, or salary slip), and net worth certificate where applicable.',
      'Mahir Invest shall conduct a comprehensive Risk Profiling of each client covering risk tolerance, investment horizon, financial goals, and existing investments prior to providing investment advice.',
      'Each client shall execute a formal Client Agreement as mandated by SEBI before commencement of any advisory services. The Client Agreement shall specify fee structure, scope of services, and rights and obligations of both parties.',
      "Any material change in the client's financial situation, employment, risk appetite, or investment objectives must be promptly communicated to Mahir Invest in writing or via the Platform.",
      'Mahir Invest shall conduct periodic re-KYC, risk profile reassessment, and portfolio reviews in accordance with SEBI guidelines and the Client Agreement.',
      'Clients who fail to complete KYC or provide requisite documents shall not be eligible to receive advisory services until compliance is achieved.',
    ],
  },
  {
    id: 'fees',
    title: '6.  Fee Structure and Payment Terms',
    subsections: [
      {
        subtitle: '6.1  Fee Structure',
        content:
          'Mahir Invest charges fees for investment advisory services in strict compliance with SEBI (IA) Regulations, 2013. Advisory fees shall not exceed the limits prescribed by SEBI from time to time:',
        table: {
          headers: ['Fee Mode', 'Description', 'SEBI Maximum Limit'],
          rows: [
            [
              'Fixed Fee',
              'Predetermined flat fee per annum per client/family',
              'INR 1,25,000/- per annum per family',
            ],
            [
              'AUA-Based Fee',
              'Percentage of Assets Under Advice per annum',
              '2.5% per annum of AUA',
            ],
          ],
        },
      },
      {
        subtitle: '6.2  Payment Terms',
        bullets: [
          "All fees are payable as per the schedule specified in the individual Client Agreement.",
          "All payments must be made by NEFT/RTGS/UPI/online transfer directly to Mahir Invest's registered and disclosed bank account. Cash payments are strictly not accepted.",
          'GST at the applicable rate and all other statutory taxes shall be charged over and above the advisory fee.',
          'Fee receipts and GST invoices shall be issued for all payments within 7 working days.',
          'Mahir Invest does not accept any commission, trail fee, referral fee, or any other remuneration from product manufacturers, fund houses, or any third party in connection with advice given to clients.',
        ],
      },
      {
        subtitle: '6.3  Refund Policy',
        content:
          'Advisory fees once paid are non-refundable, except in the following circumstances: (a) service failure directly and solely attributable to Mahir Invest and established after due inquiry; (b) as required under applicable law or SEBI directives. All fee disputes must be raised with the Compliance Officer within 30 calendar days of the relevant invoice date.',
      },
    ],
  },
  {
    id: 'obligations',
    title: '7.  Client Obligations and Representations',
    content:
      'As a Client of Mahir Invest, you represent, warrant, and unconditionally agree that:',
    bullets: [
      'All information provided during onboarding, KYC, risk profiling, and thereafter is truthful, accurate, complete, and not misleading.',
      'You will promptly notify Mahir Invest in writing of any material change in your financial circumstances, employment, risk appetite, or investment goals.',
      'You understand and accept that investment advice is based entirely on information provided by you, and inaccurate or incomplete information may result in unsuitable advice for which Mahir Invest bears no liability.',
      'You shall not use the Platform or Services for any unlawful purpose including money laundering, tax evasion, fraud, market manipulation, or circumvention of regulatory requirements.',
      'You shall not attempt to reverse engineer, decompile, disassemble, or compromise any software or security component of the Platform.',
      'Your login credentials, OTP, password, and account access are personal and non-transferable. You shall be solely responsible for all activities conducted through your account.',
      "You shall maintain the confidentiality of all investment advice, research, and communications received from Mahir Invest and shall not share, publish, or distribute such content without Mahir Invest's prior written consent.",
      'You acknowledge that investment in securities markets involves market risk and you are capable of bearing such risk based on your disclosed financial profile.',
    ],
  },
  {
    id: 'ip',
    title: '8.  Intellectual Property Rights',
    content:
      'All content on the Platform including but not limited to text, graphics, logos, icons, images, software code, research reports, financial models, algorithms, and educational content is the exclusive intellectual property of Mahir Invest or its licensors and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws.\n\nYou are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your personal investment advisory and financial planning purposes. You shall not reproduce, modify, distribute, publicly display, sublicense, or create derivative works from any content without the prior written consent of Mahir Invest.',
  },
  {
    id: 'disclaimer',
    title: '9.  Disclaimer of Liability',
    content:
      'To the fullest extent permitted by applicable law, Mahir Invest, its directors, officers, employees, and agents shall not be liable for:',
    lettered: [
      'Any investment losses arising from advice provided in good faith based on information furnished by the client.',
      'Market risks, systemic risks, geopolitical risks, regulatory changes, or force majeure events.',
      'Decisions made by the client contrary to, or independent of, advice given by Mahir Invest.',
      'Interruption, unavailability, errors, or data loss arising from Platform downtime or technical failures.',
      'Third-party services, websites, financial products, or platforms accessible through or linked from our Platform.',
      'Tax consequences of investment decisions.',
    ],
    subsections: [
      {
        subtitle: '',
        content:
          "Mahir Invest's total aggregate liability under or in connection with these Terms, if any, shall not exceed the advisory fees actually paid by you to Mahir Invest in the six months immediately preceding the event giving rise to the claim.",
      },
    ],
  },
  {
    id: 'grievance',
    title: '10.  Grievance Redressal Mechanism',
    content:
      'In accordance with SEBI IA Regulations and SEBI Circular on investor grievance redressal:',
    subsections: [
      {
        subtitle: '',
        table: {
          headers: ['Level', 'Authority', 'Contact', 'Resolution TAT'],
          rows: [
            [
              'Level 1',
              'Compliance Officer',
              'compliance@mahir.in',
              '30 days from complaint date',
            ],
            [
              'Level 2',
              'Principal Officer',
              'principalofficer@mahir.in',
              '15 days from escalation date',
            ],
            [
              'Level 3',
              'SEBI SCORES Portal',
              'scores.gov.in\nToll Free: 1800 266 7575',
              'As per SEBI guidelines',
            ],
            [
              'Level 4',
              'SEBI ODR Platform',
              'smartodr.in',
              'As per ODR timelines',
            ],
            [
              'Level 5',
              'SEBI Ombudsman / Court',
              'As per applicable law',
              'As per regulatory/judicial timeline',
            ],
          ],
        },
      },
    ],
  },
  {
    id: 'aml',
    title: '11.  Anti-Money Laundering Compliance',
    content:
      "Mahir Invest is committed to full compliance with PMLA, 2002 and SEBI's AML/CFT guidelines. Mahir Invest maintains robust Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) procedures for high-risk clients and transactions.\n\nMahir Invest may report suspicious transactions to the Financial Intelligence Unit — India (FIU-IND) and may be required by law to share client information with regulatory or law enforcement authorities without prior notice.",
  },
  {
    id: 'governing',
    title: '12.  Governing Law and Jurisdiction',
    content:
      'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of courts located in Pune, Maharashtra, subject to arbitration provisions contained in the individual Client Agreement. Disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996 as specified in the Client Agreement.',
  },
  {
    id: 'amendments',
    title: '13.  Amendments to Terms',
    content:
      'Mahir Invest reserves the right to amend, modify, or update these Terms at any time with or without prior notice. All amendments shall be published on the Platform. Continued use of the Platform after publication of amendments constitutes your irrevocable acceptance of the amended Terms. If you do not agree with amended Terms, you must terminate your engagement with Mahir Invest by providing 30 days written notice to compliance@mahir.in.',
  },
  {
    id: 'misc',
    title: '14.  Miscellaneous Provisions',
    bullets: [
      'Severability: If any provision of these Terms is found to be invalid, void, or unenforceable by a competent court, such provision shall be deemed severed and the remaining provisions shall continue in full force and effect.',
      'Entire Agreement: These Terms, together with the Privacy Policy, Disclaimers, Client Agreement, and SEBI Disclosures, constitute the entire agreement between you and Mahir Invest, superseding all prior agreements, representations, and understandings.',
      'Waiver: Failure by Mahir Invest to enforce any provision of these Terms on one occasion shall not constitute a waiver of that provision or any right on any subsequent occasion.',
      "Assignment: You may not assign, transfer, or sub-license your rights or obligations under these Terms without Mahir Invest's prior written consent. Mahir Invest may assign its rights to a successor entity following regulatory approvals.",
      'Force Majeure: Mahir Invest shall not be liable for failure or delay in performance due to circumstances beyond its reasonable control including acts of God, pandemic, war, regulatory action, or internet failure.',
    ],
  },
  {
    id: 'methodology',
    title: '15.  Methodology for Calculation of Potential Upside, Returns Achieved and Stop Loss',
    content:
      'For the purpose of performance reporting, illustration of potential returns, and risk assessment on the MAHIR INVEST platform, a standardized methodology is adopted to ensure consistency and transparency.',
    subsections: [
      {
        subtitle: '15.1  Calculation of Potential Upside',
        content:
          'The potential upside of a recommendation is calculated using:\n\n• Lower End of the Recommended Buy Range as the entry price; and\n• Higher End of the Recommended Sell/Target Range as the exit price.\n\nThis methodology represents the maximum potential gain available within the recommended trading range and is intended solely for illustrative and performance-tracking purposes.\n\nFormula:\nPotential Upside (%) = [(Higher End of Sell Range − Lower End of Buy Range) ÷ Lower End of Buy Range] × 100\n\nIllustrative Example:',
        table: {
          headers: ['Particulars', 'Amount (₹)'],
          rows: [
            ['Buy Range', '100 – 120'],
            ['Sell Range', '130 – 140'],
          ],
        },
        bullets: [
          'Potential Upside (%) = [(140 − 100) ÷ 100] × 100 = 40.00%',
          'Accordingly, the recommendation shall display a potential upside of 40.00%.',
        ],
      },
      {
        subtitle: '15.2  Calculation of Returns Achieved',
        content:
          'A recommendation shall be considered to have achieved the stated return once the security trades within or above the recommended Sell/Target Range.\n\nFor reporting purposes, the percentage return achieved shall be calculated using:\n\n• Lower End of the Recommended Buy Range; and\n• Higher End of the Recommended Sell/Target Range reached by the security.\n\nWhere multiple targets are prescribed, the return achieved shall be determined based on the highest target successfully attained by the security.',
      },
      {
        subtitle: '15.3  Calculation of Stop Loss',
        content:
          'The percentage stop loss (or downside risk) is calculated using:\n\n• Lower End of the Recommended Buy Range as the reference entry price; and\n• Recommended Stop Loss Price as the exit price.\n\nFormula:\nStop Loss (%) = [(Stop Loss Price − Lower End of Buy Range) ÷ Lower End of Buy Range] × 100\n\nIllustrative Example:',
        table: {
          headers: ['Particulars', 'Amount (₹)'],
          rows: [
            ['Buy Range', '100 – 120'],
            ['Stop Loss', '90'],
          ],
        },
        bullets: [
          'Stop Loss (%) = [(90 − 100) ÷ 100] × 100 = (−10.00%)',
          'Accordingly, the downside risk associated with the recommendation shall be displayed as 10.00%.',
        ],
      },
      {
        subtitle: '15.4  General Disclosure',
        content:
          'The methodology described above is adopted solely for the purpose of maintaining a uniform and objective framework for performance tracking and risk disclosure. Actual returns realized by investors may vary based on execution price, timing of transactions, liquidity, slippage, brokerage, taxes, statutory levies, and other market-related factors.\n\nThe displayed percentage returns, target achievements, and stop loss percentages are illustrative calculations based on predefined parameters and should not be construed as guaranteed returns or assurances of performance. Past performance is not indicative of future results, and investments in securities markets are subject to market risks.',
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

const LetteredList: React.FC<{ items: string[] }> = ({ items }) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  return (
    <ul className="space-y-1.5 my-2 pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          <span className="font-semibold text-slate-500 min-w-[20px] select-none">{letters[i]})</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

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

export const TermsAndConditionsPage = () => {
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

      {section.lettered && <LetteredList items={section.lettered} />}

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
            <GlassCard rounded="3xl" variant="frosted" className="max-w-5xl mx-auto bg-white p-6 sm:p-10 text-slate-900 shadow-2xl rounded-[32px] sm:rounded-[40px] border border-slate-200/90 text-left space-y-6 select-text font-normal">
              {/* Version Badge Row */}
              <div className="flex items-center gap-3">
                <span className="bg-sky-50 text-[var(--blue-normal)] font-semibold text-xs px-3 py-1 rounded-full border border-sky-100">
                  Version {TERMS_AND_CONDITIONS_VERSION}
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
                      <span className="font-semibold text-slate-600 sm:w-40 shrink-0">{row.label}</span>
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
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                    Acknowledgement by Client
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  By accessing and using the Mahir Invest Platform and/or availing Mahir Invest&apos;s advisory services, you acknowledge that you have read, understood, and unconditionally agree to be bound by these Terms and Conditions in their entirety, including the Privacy Policy, Disclaimers, SEBI Disclosures, and Investor Charter incorporated herein.
                </p>

                {/* Signatories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-sky-200/80 rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b sm:border-b-0 sm:border-r border-sky-200/80 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">YASH MAHAVIR BEDMUTTHA</p>
                    <p className="text-xs text-slate-500 font-normal">Principal Officer</p>
                    <p className="text-xs font-normal text-[var(--blue-normal)]">admin@mahir.in</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-900">BHARAT MAKKAR</p>
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

export default TermsAndConditionsPage;
