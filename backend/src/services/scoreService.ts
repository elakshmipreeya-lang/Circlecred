import { CreditScoreResult } from '../types';

export const calculateCreditScore = (userId: string, income: number, expenses: number, onTimeRepayments: number): CreditScoreResult => {
  const ratio = income > 0 ? (income - expenses) / income : 0;
  let baseScore = 300;

  if (ratio > 0.5) baseScore += 300;
  else if (ratio > 0.2) baseScore += 200;
  else if (ratio > 0) baseScore += 100;

  const repaymentScore = Math.min(onTimeRepayments * 30, 300);
  const finalScore = Math.min(baseScore + repaymentScore, 850);

  let grade: CreditScoreResult['grade'] = 'POOR';
  if (finalScore >= 750) grade = 'EXCELLENT';
  else if (finalScore >= 680) grade = 'GOOD';
  else if (finalScore >= 580) grade = 'FAIR';

  return {
    userId,
    score: finalScore,
    grade,
    factors: {
      incomeToExpenseRatio: Number(ratio.toFixed(2)),
      repaymentHistoryScore: repaymentScore
    },
    calculatedAt: new Date()
  };
};