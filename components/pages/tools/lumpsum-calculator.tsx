'use client';

import React, { useMemo, useState } from 'react';
import { calculateLumpsum } from '@/lib/calculators/formulas';
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

export const LumpsumCalculator: React.FC = () => {
  const config = getCalculatorConfig('lumpsum-calculator')!;
  const [amount, setAmount] = useState(500000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => calculateLumpsum(amount, expectedReturn, years),
    [amount, expectedReturn, years]
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
          subtitle="Enter your one-time investment amount, expected return, and holding period."
          footer={
            <FormulaBox
              title="Lumpsum Formula"
              formula="FV = P × (1 + r)ⁿ"
            />
          }
        >
          <div className="space-y-4">
            <CalculatorInput
              label="INVESTMENT AMOUNT (₹)"
              value={amount}
              onChange={setAmount}
              min={1000}
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
            label="ESTIMATED FUTURE VALUE"
            value={`₹${formatCurrency(result.futureValue)}`}
          />
        </CalculatorCard>

        <CalculatorCard
          title="Growth Breakdown"
          subtitle="See how compounding grows your one-time investment."
          summaryRows={[
            { label: 'Principal Invested', value: `₹${formatCurrency(result.totalInvested)}` },
            { label: 'Estimated Returns', value: `₹${formatCurrency(result.estimatedReturns)}` },
            { label: 'Future Value', value: `₹${formatCurrency(result.futureValue)}` },
            { label: 'Investment Period', value: `${result.months} months` },
          ]}
        >
          <DonutChart
            centerLabel="FUTURE VALUE"
            centerValue={`₹${formatLakhs(result.futureValue)}`}
            segments={[
              {
                pct: result.investedPct,
                color: '#3b82f6',
                label: 'Principal',
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

          <InsightBanner hint="Based on your current investment parameters">
            ₹{formatLakhs(amount)} grows to{' '}
            <span className="text-emerald-600 font-bold">₹{formatLakhs(result.futureValue)}</span>{' '}
            — a <span className="text-emerald-600 font-bold">{growthMultiple}x</span> return over{' '}
            {years} years
          </InsightBanner>
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorPageLayout>
  );
};

export default LumpsumCalculator;
