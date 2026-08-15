/** Monthly rate from annual percentage return */
export const monthlyRateFromAnnual = (annualRatePct: number) => annualRatePct / 12 / 100;

/** SIP future value — investments at the start of each month */
export const calculateSip = (
  monthlyInvestment: number,
  annualReturnPct: number,
  years: number
) => {
  const P = Math.max(0, monthlyInvestment);
  const months = Math.max(1, Math.round(years * 12));
  const i = monthlyRateFromAnnual(annualReturnPct);

  let futureValue = 0;
  if (i > 0) {
    futureValue = P * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
  } else {
    futureValue = P * months;
  }

  const totalInvested = P * months;
  const estimatedReturns = Math.max(0, futureValue - totalInvested);
  const investedPct = futureValue > 0 ? Math.round((totalInvested / futureValue) * 100) : 50;
  const returnsPct = 100 - investedPct;

  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    months,
    investedPct,
    returnsPct,
  };
};

/** One-time lumpsum investment with monthly compounding */
export const calculateLumpsum = (
  principal: number,
  annualReturnPct: number,
  years: number
) => {
  const P = Math.max(0, principal);
  const months = Math.max(1, Math.round(years * 12));
  const i = monthlyRateFromAnnual(annualReturnPct);

  const futureValue = i > 0 ? P * Math.pow(1 + i, months) : P;
  const estimatedReturns = Math.max(0, futureValue - P);
  const investedPct = futureValue > 0 ? Math.round((P / futureValue) * 100) : 50;
  const returnsPct = 100 - investedPct;

  return {
    futureValue: Math.round(futureValue),
    totalInvested: Math.round(P),
    estimatedReturns: Math.round(estimatedReturns),
    months,
    investedPct,
    returnsPct,
  };
};

/** Systematic Withdrawal Plan — month-by-month simulation */
export const calculateSwp = (
  initialCorpus: number,
  monthlyWithdrawal: number,
  annualReturnPct: number,
  years: number
) => {
  const corpus = Math.max(0, initialCorpus);
  const withdrawal = Math.max(0, monthlyWithdrawal);
  const months = Math.max(1, Math.round(years * 12));
  const i = monthlyRateFromAnnual(annualReturnPct);

  let balance = corpus;
  let totalWithdrawn = 0;
  let monthsLasted = months;
  let exhausted = false;

  for (let m = 0; m < months; m++) {
    balance = balance * (1 + i);
    if (withdrawal > balance) {
      totalWithdrawn += balance;
      balance = 0;
      monthsLasted = m + 1;
      exhausted = true;
      break;
    }
    balance -= withdrawal;
    totalWithdrawn += withdrawal;
  }

  const interestEarned = Math.max(0, totalWithdrawn + balance - corpus);
  const withdrawnPct =
    corpus + interestEarned > 0
      ? Math.round((totalWithdrawn / (totalWithdrawn + balance)) * 100)
      : 50;
  const remainingPct = 100 - withdrawnPct;

  return {
    remainingBalance: Math.round(balance),
    totalWithdrawn: Math.round(totalWithdrawn),
    interestEarned: Math.round(interestEarned),
    monthsLasted,
    exhausted,
    months,
    withdrawnPct,
    remainingPct,
  };
};

/** Retirement corpus planner */
export const calculateRetirement = (inputs: {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  currentSavings: number;
  monthlyInvestment: number;
  expectedReturnPct: number;
  inflationPct: number;
  monthlyExpenseToday: number;
}) => {
  const currentAge = Math.max(18, inputs.currentAge);
  const retirementAge = Math.max(currentAge + 1, inputs.retirementAge);
  const lifeExpectancy = Math.max(retirementAge + 1, inputs.lifeExpectancy);
  const yearsToRetire = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;
  const monthsToRetire = yearsToRetire * 12;
  const monthsInRetirement = yearsInRetirement * 12;

  const monthlyReturn = monthlyRateFromAnnual(inputs.expectedReturnPct);
  const monthlyInflation = inputs.inflationPct / 12 / 100;

  // Corpus from existing savings
  const fvSavings =
    inputs.currentSavings > 0 && monthlyReturn > 0
      ? inputs.currentSavings * Math.pow(1 + monthlyReturn, monthsToRetire)
      : inputs.currentSavings;

  // Corpus from ongoing SIP until retirement
  let fvSip = 0;
  if (inputs.monthlyInvestment > 0) {
    if (monthlyReturn > 0) {
      fvSip =
        inputs.monthlyInvestment *
        ((Math.pow(1 + monthlyReturn, monthsToRetire) - 1) / monthlyReturn) *
        (1 + monthlyReturn);
    } else {
      fvSip = inputs.monthlyInvestment * monthsToRetire;
    }
  }

  const projectedCorpus = fvSavings + fvSip;

  // Monthly expense at retirement (inflation-adjusted)
  const monthlyExpenseAtRetirement =
    inputs.monthlyExpenseToday * Math.pow(1 + monthlyInflation, monthsToRetire);

  // Required corpus — present value of inflation-adjusted annuity during retirement
  let requiredCorpus = 0;
  if (monthlyExpenseAtRetirement > 0 && monthsInRetirement > 0) {
    const realMonthlyReturn = (1 + monthlyReturn) / (1 + monthlyInflation) - 1;
    if (Math.abs(realMonthlyReturn) < 1e-10) {
      requiredCorpus = monthlyExpenseAtRetirement * monthsInRetirement;
    } else {
      requiredCorpus =
        monthlyExpenseAtRetirement *
        ((1 - Math.pow(1 + realMonthlyReturn, -monthsInRetirement)) / realMonthlyReturn);
    }
  }

  const surplusOrShortfall = projectedCorpus - requiredCorpus;
  const onTrack = surplusOrShortfall >= 0;

  // If shortfall, compute additional monthly SIP needed (PMT formula)
  let additionalMonthlySip = 0;
  if (!onTrack && monthsToRetire > 0) {
    const gap = Math.abs(surplusOrShortfall);
    if (monthlyReturn > 0) {
      additionalMonthlySip =
        gap /
        (((Math.pow(1 + monthlyReturn, monthsToRetire) - 1) / monthlyReturn) *
          (1 + monthlyReturn));
    } else {
      additionalMonthlySip = gap / monthsToRetire;
    }
  }

  const corpusPct =
    requiredCorpus + projectedCorpus > 0
      ? Math.round((projectedCorpus / (requiredCorpus + projectedCorpus)) * 100)
      : 50;
  const requiredPct = 100 - corpusPct;

  return {
    yearsToRetire,
    yearsInRetirement,
    projectedCorpus: Math.round(projectedCorpus),
    requiredCorpus: Math.round(requiredCorpus),
    monthlyExpenseAtRetirement: Math.round(monthlyExpenseAtRetirement),
    surplusOrShortfall: Math.round(surplusOrShortfall),
    additionalMonthlySip: Math.round(additionalMonthlySip),
    onTrack,
    totalInvestedTillRetirement: Math.round(
      inputs.currentSavings + inputs.monthlyInvestment * monthsToRetire
    ),
    corpusPct,
    requiredPct,
  };
};
