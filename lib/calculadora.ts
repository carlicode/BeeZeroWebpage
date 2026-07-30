export interface InvestmentResult {
  initialAmount: number;
  monthlyReturn: number;
  totalReturn: number;
  profitMargin: number;
  investmentPeriodMonths: number;
}

/**
 * Modelo: cuota mensual = (monto / 60) * 1.5, durante 5 años (60 meses).
 * Ganancia sobre la inversión en 5 años = monto / 2 (50% de beneficio).
 */
export function calculateInvestment(amount: number): InvestmentResult | null {
  if (!Number.isFinite(amount) || amount <= 0) {
    return null;
  }

  const investmentPeriodMonths = 60;
  const monthlyReturn = (amount / investmentPeriodMonths) * 1.5;
  const profitMargin = amount / 2;
  const totalReturn = amount + profitMargin;

  return {
    initialAmount: amount,
    monthlyReturn,
    totalReturn,
    profitMargin,
    investmentPeriodMonths,
  };
}

export function formatUSD(value: number): string {
  return new Intl.NumberFormat("es-BO", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-BO", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function parseInvestmentInput(raw: string): number {
  const cleaned = raw.replace(/[^\d.]/g, "");
  const parsed = parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

export const MIN_INVESTMENT_AMOUNT = 5000;
