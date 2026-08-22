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
  subtitle?: string;
  content?: string;
  bullets?: string[];
  table?: { headers: string[]; rows: TableRow[] };
}

interface Disclaimer {
  id: string;
  number: string;
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: Subsection[];
  table?: { headers: string[]; rows: TableRow[] };
  warning?: string;
}

const DISCLAIMERS: Disclaimer[] = [
  {
    id: 'disc_1',
    number: '1',
    title: 'SEBI Registration Status and Regulatory Disclosure',
    table: {
      headers: ['Field', 'Details'],
      rows: [
        { col1: 'SEBI Registration No.', col2: 'INA000022668' },
        { col1: 'Registration Type', col2: 'Investment Adviser (Non-Individual) under SEBI (IA) Regulations, 2013' },
        { col1: 'Registration Date', col2: 'June 01, 2026' },
        { col1: 'Validity', col2: 'Perpetual (subject to compliance with SEBI Regulations)' },
        { col1: 'Principal Officer', col2: 'Yash Mahavir Bedmuttha | principalofficer@mahir.in' },
        { col1: 'Compliance Officer', col2: 'Bharat Makkar | compliance@mahir.in' },
        { col1: 'Registered Office', col2: 'PL G/A-9/1 Shop 1, MIDC G Nr Moris So, Chinchwad East, Pune 411019, Maharashtra' },
        { col1: 'SEBI Regional Office', col2: "SEBI Bhavan II, Plot No. C-7, 'G' Block, Bandra Kurla Complex, Bandra (East), Mumbai — 400051" },
        { col1: 'SEBI SCORES Portal', col2: 'https://scores.gov.in | Toll Free: 1800 266 7575' },
      ],
    },
    subsections: [
      {
        content:
          "SEBI registration does not in any manner guarantee the quality of advice, services, or the profitability of investments. Clients are advised to verify Mahir Invest's registration at www.sebi.gov.in before engaging services.",
      },
    ],
  },
  {
    id: 'disc_2',
    number: '2',
    title: 'Investment Risk Disclaimer',
    warning:
      'MUTUAL FUNDS AND SECURITIES INVESTMENTS ARE SUBJECT TO MARKET RISKS. PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RETURNS. PLEASE READ ALL SCHEME-RELATED DOCUMENTS CAREFULLY BEFORE INVESTING.',
    content:
      'Investment in securities markets is subject to inherent market risk. The value of investments and income derived therefrom can go up as well as down, and investors may not recover the full principal amount invested. The specific risk types include:',
    table: {
      headers: ['Risk Type', 'Description'],
      rows: [
        { col1: 'Market Risk', col2: "Prices of securities fluctuate due to macroeconomic conditions, market sentiment, and factors beyond Mahir Invest's control." },
        { col1: 'Liquidity Risk', col2: 'Some investments may not be easily liquidated at fair market value, particularly in volatile or thin markets.' },
        { col1: 'Concentration Risk', col2: 'Concentrated investment in any single sector, geography, or security carries amplified downside risk.' },
        { col1: 'Interest Rate Risk', col2: 'Bond and fixed income security prices generally fall when interest rates rise.' },
        { col1: 'Currency / Exchange Risk', col2: 'Investments in foreign securities, international funds, or dollar-linked instruments are affected by currency movements.' },
        { col1: 'Regulatory / Policy Risk', col2: 'Changes in government policies, tax laws, import/export rules, or SEBI regulations may adversely affect investment values.' },
        { col1: 'Inflation Risk', col2: 'Investment returns may not keep pace with inflation, reducing real purchasing power over time.' },
        { col1: 'Credit / Default Risk', col2: 'Issuers of debt instruments may default on interest payments or principal repayment.' },
        { col1: 'Geopolitical Risk', col2: 'International events, wars, sanctions, or political instability may impact securities markets.' },
      ],
    },
  },
  {
    id: 'disc_3',
    number: '3',
    title: 'No Guarantee of Returns',
    content:
      'Mahir Invest does not guarantee, promise, assure, or project any specific return on investment under any circumstances. Any projections, illustrations, scenarios, or examples used in investment advice or published on the Platform are strictly for illustrative and educational purposes only. They shall not be construed as promises, forecasts, or assurances of actual future returns.\n\nHistorical performance data, if referenced, is provided for informational context only and is expressly not indicative of future performance. Projected returns may vary materially from actual returns due to market conditions, economic factors, taxation changes, fund management decisions, and other variables entirely beyond Mahir Invest\'s control.\n\nClients are strongly cautioned against selecting investments based solely on historical return data or projected return illustrations.',
  },
  {
    id: 'disc_4',
    number: '4',
    title: 'Independence and Conflict-Free Advice',
    content:
      "Mahir Invest provides independent investment advice based solely on the client's risk profile, financial objectives, and investment horizon. Mahir Invest strictly does not receive and is prohibited by SEBI from receiving any commission, brokerage, referral fee, trail fee, or any other form of remuneration from product manufacturers, fund houses, brokers, or third-party product issuers in connection with advice given to clients.\n\nMahir Invest's sole and exclusive source of compensation is advisory fees charged directly to clients in accordance with SEBI IA Regulations. This structure eliminates product-linked conflicts of interest.\n\nHowever, Mahir Invest, its directors, employees, or associates may hold personal investments in securities that may be recommended to clients. Such personal holdings, if material, are disclosed to the relevant client in writing before providing advice. Mahir Invest maintains a Conflict of Interest Register that is available for client inspection upon written request.",
  },
  {
    id: 'disc_5',
    number: '5',
    title: 'Research, Content, and Educational Material Disclaimer',
    content:
      'Any research reports, articles, market updates, newsletters, social media posts, blog content, webinars, or educational material published or shared by Mahir Invest through the Platform or other channels are provided strictly for general informational and educational purposes only.\n\nSuch content does not constitute personalized investment advice unless it has been specifically addressed to an individual client as part of their advisory engagement with Mahir Invest. Readers/viewers of such content are advised to:',
    bullets: [
      'Conduct their own independent due diligence before making any investment decision.',
      "Consult their personal investment adviser (Mahir Invest's advisory team) for advice tailored to their specific financial profile.",
      'Not solely rely on general research or market commentary for investment decisions.',
    ],
    subsections: [
      {
        content:
          'Mahir Invest makes no representation or warranty regarding the accuracy, completeness, timeliness, or fitness for purpose of any such content, which is prepared based on publicly available information.',
      },
    ],
  },
  {
    id: 'disc_6',
    number: '6',
    title: 'Technology, Platform, and Cybersecurity Disclaimer',
    content: "While Mahir Invest endeavours to maintain the Platform's continuous availability, accuracy, and security, Mahir Invest cannot and does not warrant that:",
    bullets: [
      'The Platform will be error-free, uninterrupted, virus-free, or completely secure at all times.',
      'Market data, NAV feeds, or financial information displayed on the Platform is real-time or completely accurate.',
      "The Platform's functionality will be compatible with all devices, operating systems, browsers, or internet connections.",
      'The Platform or its servers are free from malicious code, cyber-attacks, or unauthorized intrusion attempts.',
    ],
    subsections: [
      {
        content:
          "Mahir Invest shall not be liable for losses arising from: system downtime, data transmission delays, cyber-attacks on third-party systems, technical failures, or internet connectivity issues beyond Mahir Invest's direct control. Clients are advised to verify all critical investment information through official SEBI, exchange, or AMC sources before acting.",
      },
    ],
  },
  {
    id: 'disc_7',
    number: '7',
    title: 'Limitation of Liability',
    content:
      "To the maximum extent permitted by applicable law in India, Mahir Invest's total cumulative liability for any and all claims, losses, damages, costs, and expenses arising from or related to advisory services, use of the Platform, or any breach of these Terms whether in contract, tort, negligence, strict liability, or otherwise shall be strictly limited to the aggregate advisory fees actually paid by the client to Mahir Invest in the six (6) calendar months immediately preceding the event giving rise to the claim.\n\nIn no event shall Mahir Invest, its directors, officers, employees, or agents be liable for any indirect, consequential, incidental, special, exemplary, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or reputational harm, even if Mahir Invest has been advised of the possibility of such damages.",
  },
  {
    id: 'disc_8',
    number: '8',
    title: 'Third-Party Links, Services, and Platforms',
    content:
      'The Mahir Invest Platform may contain hyperlinks to third-party websites, financial aggregators, stock exchange portals, AMC websites, financial calculators, or other external services. Such links are provided for convenience and reference only. Mahir Invest does not endorse, control, verify, or take responsibility for:',
    bullets: [
      'The accuracy, reliability, or completeness of content on third-party websites.',
      'The privacy practices or data security measures of third-party services.',
      'Products, services, or investments offered through third-party platforms.',
    ],
    subsections: [
      {
        content:
          "Accessing third-party links is entirely at the user's own risk. Mahir Invest strongly advises clients to review the terms and privacy policies of any third-party platform before engaging with it.",
      },
    ],
  },
  {
    id: 'disc_9',
    number: '9',
    title: 'Tax Disclaimer',
    content:
      'Investment advice provided by Mahir Invest does not constitute tax advice, tax planning guidance, or legal advice. Tax implications of investments including capital gains tax (short-term and long-term), dividend distribution tax, STT, and other applicable levies vary significantly based on individual client circumstances, holding periods, investment quantum, and applicable tax laws which are subject to change.\n\nClients are strongly advised to consult a qualified tax professional, Chartered Accountant, or tax adviser for all tax planning, computation, and compliance requirements. Mahir Invest shall not be responsible for any tax liability, interest, penalties, or legal consequences arising from client investment decisions.',
  },
  {
    id: 'disc_10',
    number: '10',
    title: 'Conflict of Interest Policy Summary',
    content:
      'Mahir Invest maintains a Board-approved written Conflict of Interest Policy in accordance with SEBI IA Regulations, 2013. Key provisions:',
    bullets: [
      'Mahir Invest and its employees may hold personal investments in securities that may be recommended to clients. Such interests are disclosed to the relevant client in writing before advice is given.',
      'Mahir Invest does not accept any pecuniary benefit, gift, entertainment, or non-cash consideration from product manufacturers, brokers, or distributors.',
      'All material conflicts of interest known or reasonably foreseeable are disclosed to clients before providing advice.',
      'Mahir Invest maintains a Conflict-of-Interest Register, updated periodically, which is available for client inspection upon written request.',
      'Employees are required to pre-clear personal securities transactions above prescribed thresholds with the Compliance Officer.',
    ],
  },
  {
    id: 'disc_11',
    number: '11',
    title: 'Suitability and Appropriateness of Advice',
    content:
      "All investment advice provided by Mahir Invest is personalized based on the client's risk profile, financial objectives, investment horizon, and information provided during onboarding. Mahir Invest shall not be held responsible for the unsuitability or inappropriateness of advice where such unsuitability arises from:",
    bullets: [
      'Incorrect, incomplete, or misleading information provided by the client during KYC, risk profiling, or thereafter.',
      "Material changes in the client's financial circumstances, employment, income, or risk tolerance that were not communicated to Mahir Invest.",
      "Investment decisions taken by the client contrary to, or independent of, Mahir Invest's written advice.",
      "Client's failure to read, understand, or acknowledge the written advice, risk disclosures, or suitability rationale provided by Mahir Invest.",
    ],
    subsections: [
      {
        content:
          'Clients are strongly urged to provide complete and accurate information at all times and to immediately notify Mahir Invest of any material change in their financial profile.',
      },
    ],
  },
  {
    id: 'disc_12',
    number: '12',
    title: 'Regulatory Disclaimers',
    bullets: [
      'Investments in securities are NOT deposits with any bank and are NOT insured or guaranteed by DICGC, RBI, SEBI, or any government authority.',
      "SEBI registration of Mahir Invest as an Investment Adviser does not constitute an endorsement of Mahir Invest's advisory approach, investment views, or guarantee of investment performance.",
      "Clients should independently verify Mahir Invest's current SEBI registration status at: www.sebi.gov.in (Registered Intermediaries / Investment Advisers section).",
      'SEBI does not approve, recommend, or endorse any particular investment adviser, financial product, or investment strategy.',
      'For unresolved complaints, clients may approach SEBI SCORES at scores.gov.in or SEBI ODR at smartodr.in.',
      "Past performance of Mahir Invest's advisory recommendations, if disclosed, does not guarantee or predict future results.",
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
        {rows.map((row, ri) => (
          <tr key={ri} className="hover:bg-slate-50/50">
            <td className="p-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">
              {row.col1}
            </td>
            <td className="p-3 text-slate-800 whitespace-pre-line border-r last:border-r-0 border-slate-100">
              {row.col2}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const DisclaimerPage = () => {
  const renderDisclaimer = (item: Disclaimer, index: number) => (
    <div key={item.id} className="py-4">
      {/* Title row with number badge */}
      <div className="flex items-start gap-3 mb-3">
        <span className="w-6 h-6 rounded-full bg-sky-100 text-[var(--blue-normal)] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
          {item.number}
        </span>
        <h2 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
          {item.title}
        </h2>
      </div>

      {/* Warning line */}
      {item.warning && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 mb-3 text-amber-900 text-xs sm:text-sm font-semibold leading-relaxed">
          {item.warning}
        </div>
      )}

      {/* Body content */}
      {item.content && (
        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed whitespace-pre-line mb-3">
          {item.content}
        </p>
      )}

      {item.bullets && <BulletList items={item.bullets} />}

      {item.table && <SimpleTable headers={item.table.headers} rows={item.table.rows} />}

      {item.subsections?.map((sub, si) => (
        <div key={si} className="mt-3">
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

      {index < DISCLAIMERS.length - 1 && <hr className="my-4 border-slate-100" />}
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
                Disclaimers
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
                  Pursuant to SEBI (IA) Regulations, 2013 &amp; all SEBI Circulars thereunder.
                </span>
              </div>

              {/* Warning Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-amber-900 text-xs sm:text-sm leading-relaxed">
                <span className="text-amber-600 text-base shrink-0 mt-0.5">⚠</span>
                <div>
                  <strong className="font-semibold block mb-0.5">IMPORTANT NOTICE — Please read all disclaimers carefully.</strong>
                  These Disclaimers form an integral part of your agreement with Mahir Investment Advisers Private Limited. By accessing the Mahir Invest Platform or availing advisory services, you unconditionally accept all disclaimers set out herein.
                </div>
              </div>

              {/* All 12 Disclaimer Sections */}
              <div className="border border-slate-200 rounded-2xl p-4 sm:p-6 bg-white shadow-sm">
                {DISCLAIMERS.map((item, index) => renderDisclaimer(item, index))}
              </div>

              {/* Certification Card */}
              <div className="bg-sky-50/70 p-6 sm:p-8 rounded-3xl border border-sky-100 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 text-lg">✱</span>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">Certification</h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify">
                  We hereby certify that all disclaimers contained herein are true and accurate to the best of our knowledge and belief, made in accordance with SEBI (Investment Advisers) Regulations, 2013 and applicable SEBI Circulars.
                </p>

                <div className="text-xs text-slate-400 font-normal space-y-1">
                  <p>Effective Date: June 01, 2026 | Version: 1.0</p>
                  <p>Governing Law: Laws of India | Jurisdiction: Pune, Maharashtra</p>
                </div>

                {/* Signatories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-sky-200/80 rounded-2xl overflow-hidden bg-white">
                  <div className="p-4 border-b sm:border-b-0 sm:border-r border-sky-200/80 space-y-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Principal Officer</p>
                    <p className="text-xs font-semibold text-slate-900">Yash Mahavir Bedmuttha</p>
                    <p className="text-xs font-normal text-[var(--blue-normal)]">principalofficer@mahir.in</p>
                  </div>

                  <div className="p-4 space-y-1">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Compliance Officer</p>
                    <p className="text-xs font-semibold text-slate-900">Bharat Makkar</p>
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

export default DisclaimerPage;
