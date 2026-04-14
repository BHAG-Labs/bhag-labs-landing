export interface TaxResult {
  taxableIncome: number;
  baseTax: number;
  surcharge: number;
  cess: number;
  totalTax: number;
}

function calcNewRegimeTax(income: number): number {
  if (income <= 400000) return 0;
  let tax = 0;
  const slabs = [
    [400000, 800000, 0.05],
    [800000, 1200000, 0.10],
    [1200000, 1600000, 0.15],
    [1600000, 2000000, 0.20],
    [2000000, 2400000, 0.25],
    [2400000, Infinity, 0.30],
  ] as const;
  for (const [lower, upper, rate] of slabs) {
    if (income <= lower) break;
    tax += (Math.min(income, upper) - lower) * rate;
  }
  return tax;
}

function calcOldRegimeTax(income: number): number {
  if (income <= 250000) return 0;
  let tax = 0;
  const slabs = [
    [250000, 500000, 0.05],
    [500000, 1000000, 0.20],
    [1000000, Infinity, 0.30],
  ] as const;
  for (const [lower, upper, rate] of slabs) {
    if (income <= lower) break;
    tax += (Math.min(income, upper) - lower) * rate;
  }
  return tax;
}

function calcSurcharge(baseTax: number, income: number): number {
  if (income > 20000000) return baseTax * 0.25;
  if (income > 10000000) return baseTax * 0.15;
  if (income > 5000000) return baseTax * 0.10;
  return 0;
}

export function calculateIncomeTax(income: number, regime: 'new' | 'old'): TaxResult {
  const baseTax = regime === 'new' ? calcNewRegimeTax(income) : calcOldRegimeTax(income);
  const surcharge = calcSurcharge(baseTax, income);
  const cess = (baseTax + surcharge) * 0.04;
  return {
    taxableIncome: income,
    baseTax,
    surcharge,
    cess,
    totalTax: baseTax + surcharge + cess,
  };
}

export interface CapitalGainsInput {
  gain: number;
  isListed: boolean;
  holdingMonths: number;
  slabRate: number; // for STCG on unlisted
}

export function calculateCapitalGainsTax(input: CapitalGainsInput): number {
  const { gain, isListed, holdingMonths } = input;
  if (gain <= 0) return 0;

  if (isListed) {
    if (holdingMonths < 12) {
      return gain * 0.20; // STCG 20%
    }
    const taxableGain = Math.max(0, gain - 125000);
    return taxableGain * 0.125; // LTCG 12.5%
  }
  // Unlisted
  if (holdingMonths < 24) {
    return gain * input.slabRate; // STCG at slab
  }
  return gain * 0.125; // LTCG 12.5% without indexation
}
