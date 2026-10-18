import { Transaction } from '../types';

const transactions: Transaction[] = [
  { id: '1', userId: '1', amount: 1500, type: 'INCOME', category: 'Salary', date: new Date() },
  { id: '2', userId: '1', amount: 200, type: 'EXPENSE', category: 'Food', date: new Date() }
];

export const getTransactionsByUserId = (userId: string): Transaction[] => {
  return transactions.filter(t => t.userId === userId);
};

export const addTransaction = (userId: string, amount: number, type: 'INCOME' | 'EXPENSE' | 'REPAYMENT', category: string): Transaction => {
  const newTx: Transaction = {
    id: (transactions.length + 1).toString(),
    userId,
    amount,
    type,
    category,
    date: new Date()
  };
  transactions.push(newTx);
  return newTx;
};