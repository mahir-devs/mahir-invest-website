'use client';

import React, { useMemo, useState } from 'react';
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

export const EmiCalculator: React.FC = () => {
  const config = getCalculatorConfig('emi-calculator')!;
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  const {
    monthlyEmi,
    totalInterest,
    totalPayment,
    tenureMonths,
    interestPerRupee,
    principalPct,
    interestPct,
  } = useMemo(() => {
    const P = Math.max(0, loanAmount);
    const r = interestRate / 12 / 100;
    const n = Math.max(1, tenureYears * 12);

    let emi = 0;
    if (r > 0) {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      emi = P / n;
    }

    const emiRounded = Math.round(emi);
    const totalPay = emiRounded * n;
    const totalInt = Math.max(0, totalPay - P);
    const ratio = P > 0 ? (totalInt / P).toFixed(2) : '0';
    const principalPercent = totalPay > 0 ? Math.round((P / totalPay) * 100) : 50;
    const interestPercent = 100 - principalPercent;

    return {
      monthlyEmi: emiRounded,
      totalInterest: totalInt,
      totalPayment: totalPay,
      tenureMonths: n,
      interestPerRupee: ratio,
      principalPct: principalPercent,
      interestPct: interestPercent,
    };
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <CalculatorPageLayout config={config}>
      <CalculatorGrid>
        <CalculatorCard
          title="Loan Details"
          subtitle="Calculate your monthly Equated Installment and total interest payable across home, car, or personal loans."
          footer={
            <FormulaBox
              title="EMI Formula"
              formula="EMI = P × r × (1 + r)ⁿ ÷ {(1 + r)ⁿ - 1}"
            />
          }
        >
          <div className="space-y-4">
            <CalculatorInput
              label="LOAN AMOUNT (₹)"
              value={loanAmount}
              onChange={setLoanAmount}
              min={10000}
            />
            <CalculatorInput
              label="INTEREST RATE (% PER ANNUM)"
              value={interestRate}
              onChange={setInterestRate}
              step={0.1}
              min={1}
              max={30}
            />
            <CalculatorInput
              label="LOAN TENURE (YEARS)"
              value={tenureYears}
              onChange={setTenureYears}
              min={1}
              max={40}
            />
          </div>

          <CalculatorHighlight label="MONTHLY EMI" value={`₹${formatCurrency(monthlyEmi)}`} />
        </CalculatorCard>

        <CalculatorCard
          title="Payment Breakdown"
          subtitle="How your total payment splits."
          summaryRows={[
            { label: 'Principal Amount', value: `₹${formatCurrency(loanAmount)}` },
            { label: 'Total Interest', value: `₹${formatCurrency(totalInterest)}` },
            { label: 'Total Payment', value: `₹${formatCurrency(totalPayment)}` },
            { label: 'Tenure', value: `${tenureMonths} months` },
          ]}
        >
          <DonutChart
            centerLabel="TOTAL PAYMENT"
            centerValue={`₹${formatLakhs(totalPayment)}`}
            segments={[
              {
                pct: principalPct,
                color: '#3b82f6',
                label: 'Principal',
                value: `₹${formatCurrency(loanAmount)}`,
              },
              {
                pct: interestPct,
                color: '#f59e0b',
                label: 'Interest',
                value: `₹${formatCurrency(totalInterest)}`,
              },
            ]}
          />

          <InsightBanner hint="Based on your current loan parameters">
            You pay <span className="text-[#f59e0b] font-bold">₹{interestPerRupee}</span> in interest
            for every ₹1 of principal
          </InsightBanner>
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorPageLayout>
  );
};

export default EmiCalculator;
