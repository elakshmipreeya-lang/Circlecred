export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'INCOME' | 'EXPENSE' | 'REPAYMENT';
  category: string;
  date: Date;
}

export interface CreditScoreResult {
  userId: string;
  score: number;
  grade: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR';
  factors: {
    incomeToExpenseRatio: number;
    repaymentHistoryScore: number;
  };
  calculatedAt: Date;
}