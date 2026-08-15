'use client';

import React, { useMemo, useState } from 'react';
import { calculateSip } from '@/lib/calculators/formulas';
import { formatCurrency, formatLakhs } from '@/lib/calculators/format';
import { getCalculatorConfig } from '@/lib/calculators/config';
import { CalculatorPageLayout } from './calculator-layout';
import {
  CalculatorCard,
  CalculatorGrid,
  CalculatorHighlight,
  CalculatorInput,
  DonutChart,
  FormulaBox,
  InsightBanner,
} from './calculator-ui';

export const SipCalculator: React.FC = () => {
  const config = getCalculatorConfig('sip-calculator')!;
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateSip(monthlyInvestment, expectedReturn, years),
    [monthlyInvestment, expectedReturn, years]
  );

  const growthMultiple =
    result.totalInvested > 0
      ? (result.futureValue / result.totalInvested).toFixed(2)
      : '0';

  return (
    <CalculatorPageLayout config={config}>
      <CalculatorGrid>
        <CalculatorCard
          title="Investment Details"
          subtitle="Enter your monthly SIP amount, expected annual return, and investment duration."
          footer={
            <FormulaBox
              title="SIP Formula"
              formula="FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)"
            />
          }
        >
          <div className="space-y-4">
            <CalculatorInput
              label="MONTHLY INVESTMENT (₹)"
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
              min={500}
            />
            <CalculatorInput
              label="EXPECTED RETURN (% P.A.)"
              value={expectedReturn}
              onChange={setExpectedReturn}
              step={0.5}
              min={1}
              max={30}
            />
            <CalculatorInput
              label="INVESTMENT PERIOD (YEARS)"
              value={years}
              onChange={setYears}
              min={1}
              max={40}
            />
          </div>

          <CalculatorHighlight
            label="ESTIMATED MATURITY VALUE"
            value={`₹${formatCurrency(result.futureValue)}`}
          />
        </CalculatorCard>

        <CalculatorCard
          title="Returns Breakdown"
          subtitle="How your SIP investment grows over time."
          summaryRows={[
            { label: 'Total Invested', value: `₹${formatCurrency(result.totalInvested)}` },
            { label: 'Estimated Returns', value: `₹${formatCurrency(result.estimatedReturns)}` },
            { label: 'Maturity Value', value: `₹${formatCurrency(result.futureValue)}` },
            { label: 'Investment Period', value: `${result.months} months` },
          ]}
        >
          <DonutChart
            centerLabel="MATURITY VALUE"
            centerValue={`₹${formatLakhs(result.futureValue)}`}
            segments={[
              {
                pct: result.investedPct,
                color: '#3b82f6',
                label: 'Invested',
                value: `₹${formatCurrency(result.totalInvested)}`,
              },
              {
                pct: result.returnsPct,
                color: '#10b981',
                label: 'Returns',
                value: `₹${formatCurrency(result.estimatedReturns)}`,
              },
            ]}
          />

          <InsightBanner hint="Based on your current SIP parameters">
            Your money grows{' '}
            <span className="text-emerald-600 font-bold">{growthMultiple}x</span> over{' '}
            {years} years with {expectedReturn}% annual returns
          </InsightBanner>
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorPageLayout>
  );
};

export default SipCalculator;
