'use client';

import React, { useMemo, useState } from 'react';
import { calculateSwp } from '@/lib/calculators/formulas';
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

export const SwpCalculator: React.FC = () => {
  const config = getCalculatorConfig('swp-calculator')!;
  const [initialCorpus, setInitialCorpus] = useState(5000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(25000);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [years, setYears] = useState(20);

  const result = useMemo(
    () => calculateSwp(initialCorpus, monthlyWithdrawal, expectedReturn, years),
    [initialCorpus, monthlyWithdrawal, expectedReturn, years]
  );

  return (
    <CalculatorPageLayout config={config}>
      <CalculatorGrid>
        <CalculatorCard
          title="Withdrawal Details"
          subtitle="Set your initial corpus, monthly withdrawal amount, and expected returns."
          footer={
            <FormulaBox
              title="SWP Logic"
              formula="Balance = (Balance × (1 + r)) − Withdrawal each month"
            />
          }
        >
          <div className="space-y-4">
            <CalculatorInput
              label="INITIAL CORPUS (₹)"
              value={initialCorpus}
              onChange={setInitialCorpus}
              min={100000}
            />
            <CalculatorInput
              label="MONTHLY WITHDRAWAL (₹)"
              value={monthlyWithdrawal}
              onChange={setMonthlyWithdrawal}
              min={1000}
            />
            <CalculatorInput
              label="EXPECTED RETURN (% P.A.)"
              value={expectedReturn}
              onChange={setExpectedReturn}
              step={0.5}
              min={1}
              max={20}
            />
            <CalculatorInput
              label="WITHDRAWAL PERIOD (YEARS)"
              value={years}
              onChange={setYears}
              min={1}
              max={40}
            />
          </div>

          <CalculatorHighlight
            label="REMAINING BALANCE"
            value={`₹${formatCurrency(result.remainingBalance)}`}
            variant={result.exhausted ? 'warning' : 'success'}
          />
        </CalculatorCard>

        <CalculatorCard
          title="Withdrawal Summary"
          subtitle="Track how long your corpus sustains regular withdrawals."
          summaryRows={[
            { label: 'Initial Corpus', value: `₹${formatCurrency(initialCorpus)}` },
            { label: 'Total Withdrawn', value: `₹${formatCurrency(result.totalWithdrawn)}` },
            { label: 'Interest Earned', value: `₹${formatCurrency(result.interestEarned)}` },
            {
              label: 'Corpus Lasted',
              value: result.exhausted
                ? `${result.monthsLasted} months (exhausted early)`
                : `${result.months} months (full period)`,
            },
          ]}
        >
          <DonutChart
            centerLabel="TOTAL WITHDRAWN"
            centerValue={`₹${formatLakhs(result.totalWithdrawn)}`}
            segments={[
              {
                pct: result.withdrawnPct,
                color: '#f59e0b',
                label: 'Withdrawn',
                value: `₹${formatCurrency(result.totalWithdrawn)}`,
              },
              {
                pct: result.remainingPct,
                color: '#3b82f6',
                label: 'Remaining',
                value: `₹${formatCurrency(result.remainingBalance)}`,
              },
            ]}
          />

          <InsightBanner hint="Based on your SWP parameters">
            {result.exhausted ? (
              <>
                Your corpus will be{' '}
                <span className="text-amber-600 font-bold">exhausted in {result.monthsLasted} months</span>
                {' '}with ₹{formatCurrency(monthlyWithdrawal)}/month withdrawals
              </>
            ) : (
              <>
                After {years} years, you will have withdrawn{' '}
                <span className="text-emerald-600 font-bold">₹{formatLakhs(result.totalWithdrawn)}</span>
                {' '}and still retain{' '}
                <span className="text-[#3b82f6] font-bold">₹{formatLakhs(result.remainingBalance)}</span>
              </>
            )}
          </InsightBanner>
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorPageLayout>
  );
};

export default SwpCalculator;
