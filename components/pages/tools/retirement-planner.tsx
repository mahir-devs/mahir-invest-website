'use client';

import React, { useMemo, useState } from 'react';
import { calculateRetirement } from '@/lib/calculators/formulas';
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

export const RetirementPlanner: React.FC = () => {
  const config = getCalculatorConfig('retirement-planner')!;
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflation, setInflation] = useState(6);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);

  const result = useMemo(
    () =>
      calculateRetirement({
        currentAge,
        retirementAge,
        lifeExpectancy,
        currentSavings,
        monthlyInvestment,
        expectedReturnPct: expectedReturn,
        inflationPct: inflation,
        monthlyExpenseToday: monthlyExpense,
      }),
    [
      currentAge,
      retirementAge,
      lifeExpectancy,
      currentSavings,
      monthlyInvestment,
      expectedReturn,
      inflation,
      monthlyExpense,
    ]
  );

  return (
    <CalculatorPageLayout config={config}>
      <CalculatorGrid>
        <CalculatorCard
          title="Your Details"
          subtitle="Enter your age, savings, investments, and expected lifestyle expenses."
          footer={
            <FormulaBox
              title="Retirement Corpus"
              formula="Required = PMT × [1 − (1 + r)⁻ⁿ] / r (inflation-adjusted)"
            />
          }
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <CalculatorInput
                label="CURRENT AGE"
                value={currentAge}
                onChange={setCurrentAge}
                min={18}
                max={70}
              />
              <CalculatorInput
                label="RETIREMENT AGE"
                value={retirementAge}
                onChange={setRetirementAge}
                min={40}
                max={75}
              />
            </div>
            <CalculatorInput
              label="LIFE EXPECTANCY"
              value={lifeExpectancy}
              onChange={setLifeExpectancy}
              min={70}
              max={100}
            />
            <CalculatorInput
              label="CURRENT SAVINGS (₹)"
              value={currentSavings}
              onChange={setCurrentSavings}
              min={0}
            />
            <CalculatorInput
              label="MONTHLY INVESTMENT (₹)"
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
              min={0}
            />
            <CalculatorInput
              label="MONTHLY EXPENSE TODAY (₹)"
              value={monthlyExpense}
              onChange={setMonthlyExpense}
              min={10000}
            />
            <div className="grid grid-cols-2 gap-4">
              <CalculatorInput
                label="EXPECTED RETURN (% P.A.)"
                value={expectedReturn}
                onChange={setExpectedReturn}
                step={0.5}
                min={1}
                max={20}
              />
              <CalculatorInput
                label="INFLATION (% P.A.)"
                value={inflation}
                onChange={setInflation}
                step={0.5}
                min={1}
                max={15}
              />
            </div>
          </div>

          <CalculatorHighlight
            label="PROJECTED CORPUS AT RETIREMENT"
            value={`₹${formatCurrency(result.projectedCorpus)}`}
            variant={result.onTrack ? 'success' : 'warning'}
          />
        </CalculatorCard>

        <CalculatorCard
          title="Retirement Analysis"
          subtitle={`You have ${result.yearsToRetire} years to build your retirement corpus.`}
          summaryRows={[
            { label: 'Required Corpus', value: `₹${formatCurrency(result.requiredCorpus)}` },
            { label: 'Projected Corpus', value: `₹${formatCurrency(result.projectedCorpus)}` },
            {
              label: 'Monthly Expense at Retirement',
              value: `₹${formatCurrency(result.monthlyExpenseAtRetirement)}`,
            },
            {
              label: result.onTrack ? 'Surplus' : 'Shortfall',
              value: `₹${formatCurrency(Math.abs(result.surplusOrShortfall))}`,
            },
            ...(!result.onTrack
              ? [
                  {
                    label: 'Additional Monthly SIP Needed',
                    value: `₹${formatCurrency(result.additionalMonthlySip)}`,
                  },
                ]
              : []),
          ]}
        >
          <DonutChart
            centerLabel="REQUIRED CORPUS"
            centerValue={`₹${formatLakhs(result.requiredCorpus)}`}
            segments={[
              {
                pct: result.corpusPct,
                color: result.onTrack ? '#10b981' : '#f59e0b',
                label: 'Projected',
                value: `₹${formatCurrency(result.projectedCorpus)}`,
              },
              {
                pct: result.requiredPct,
                color: '#3b82f6',
                label: 'Required',
                value: `₹${formatCurrency(result.requiredCorpus)}`,
              },
            ]}
          />

          <InsightBanner hint={`Retirement planning for ${result.yearsInRetirement} years post-retirement`}>
            {result.onTrack ? (
              <>
                You are{' '}
                <span className="text-emerald-600 font-bold">on track!</span> Your projected corpus
                exceeds the required amount by{' '}
                <span className="text-emerald-600 font-bold">
                  ₹{formatLakhs(result.surplusOrShortfall)}
                </span>
              </>
            ) : (
              <>
                You have a shortfall of{' '}
                <span className="text-amber-600 font-bold">
                  ₹{formatLakhs(Math.abs(result.surplusOrShortfall))}
                </span>
                . Invest an additional{' '}
                <span className="text-amber-600 font-bold">
                  ₹{formatCurrency(result.additionalMonthlySip)}/month
                </span>{' '}
                to reach your goal
              </>
            )}
          </InsightBanner>
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorPageLayout>
  );
};

export default RetirementPlanner;
