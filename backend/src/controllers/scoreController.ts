import { Request, Response } from 'express';
import { calculateCreditScore } from '../services/scoreService';

export const getScore = (req: Request, res: Response) => {
  const { userId, income, expenses, onTimeRepayments } = req.body;

  if (!userId || income === undefined || expenses === undefined) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide userId, income, and expenses' 
    });
  }

  const result = calculateCreditScore(
    userId, 
    Number(income), 
    Number(expenses), 
    Number(onTimeRepayments || 0)
  );

  res.json({ success: true, data: result });
};