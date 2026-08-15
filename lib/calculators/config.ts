export interface CalculatorConfig {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  cardDescription: string;
  disclaimer: string;
}

export interface ToolListItem {
  id: string;
  title: string;
  description: string;
  href: string;
  available: boolean;
}

export const CALCULATOR_CONFIG: Record<string, CalculatorConfig> = {
  'sip-calculator': {
    id: 'sip-calculator',
    title: 'SIP Calculator',
    eyebrow: 'SYSTEMATIC INVESTMENT',
    cardDescription: 'Calculate returns on your Systematic Investment Plan.',
    description:
      'A Systematic Investment Plan (SIP) lets you invest a fixed amount in mutual funds at regular intervals. This calculator estimates the future value of your monthly SIP based on expected annual returns, helping you plan long-term wealth creation with the power of compounding.',
    disclaimer:
      'SIP returns are subject to market risks. Actual returns may vary based on fund performance, market conditions, and expense ratios.',
  },
  'lumpsum-calculator': {
    id: 'lumpsum-calculator',
    title: 'Lumpsum Calculator',
    eyebrow: 'ONE-TIME INVESTMENT',
    cardDescription: 'Calculate returns on your one-time wealth investments.',
    description:
      'A lumpsum investment is a one-time deposit into mutual funds or other instruments. This calculator projects how your initial investment grows over time with compound returns, so you can compare lumpsum vs SIP strategies for your financial goals.',
    disclaimer:
      'Projected returns are illustrative. Market-linked investments carry risk and past performance does not guarantee future results.',
  },
  'swp-calculator': {
    id: 'swp-calculator',
    title: 'SWP Calculator',
    eyebrow: 'SYSTEMATIC WITHDRAWAL',
    cardDescription: 'Plan systematic withdrawals for regular cash flow.',
    description:
      'A Systematic Withdrawal Plan (SWP) lets you withdraw a fixed amount regularly from your mutual fund corpus while the remaining balance continues to earn returns. Plan your post-retirement income or regular cash flow without depleting your investments too quickly.',
    disclaimer:
      'Withdrawal sustainability depends on market returns and withdrawal rate. Review your plan periodically as conditions change.',
  },
  'retirement-planner': {
    id: 'retirement-planner',
    title: 'Retirement Planner',
    eyebrow: 'RETIREMENT PLANNING',
    cardDescription: 'Estimate your retirement corpus and monthly savings needed.',
    description:
      'Plan your retirement corpus by estimating how much you need to maintain your lifestyle after you stop working. Factor in inflation, current savings, monthly investments, and expected returns to see if you are on track — or how much more you should save each month.',
    disclaimer:
      'Retirement projections are estimates. Consult a financial advisor for personalized planning based on your goals and risk profile.',
  },
  'emi-calculator': {
    id: 'emi-calculator',
    title: 'EMI Calculator',
    eyebrow: 'LOAN REPAYMENT',
    cardDescription: 'Calculate loan EMIs, interest payable, and repayment schedule.',
    description:
      'An EMI (Equated Monthly Installment) is the fixed amount you pay your lender each month until a loan is fully repaid, covering both principal and interest. This calculator works out your monthly EMI, the total interest paid, and the overall cost of a loan.',
    disclaimer:
      'EMI calculations are indicative. Actual loan terms may include processing fees, prepayment charges, and varying interest rates.',
  },
};

export const getCalculatorConfig = (id: string): CalculatorConfig | null =>
  CALCULATOR_CONFIG[id] ?? null;

export const NAV_CALCULATOR_IDS = [
  'sip-calculator',
  'lumpsum-calculator',
  'swp-calculator',
  'retirement-planner',
] as const;

const toToolItem = (id: string, available: boolean): ToolListItem => {
  const config = CALCULATOR_CONFIG[id];
  return {
    id,
    title: config.title,
    description: config.cardDescription,
    href: `/tools/${id}`,
    available,
  };
};

export const getFeaturedTools = (): ToolListItem[] =>
  NAV_CALCULATOR_IDS.map((id) => toToolItem(id, true));
