import { Request, Response } from 'express';
import * as transactionService from '../services/transactionService';

export const getTransactions = (req: Request, res: Response) => {
  const userId = req.params.userId as string;
  const transactions = transactionService.getTransactionsByUserId(userId);
  res.json({ success: true, data: transactions });
};

export const createTransaction = (req: Request, res: Response) => {
  const { userId, amount, type, category } = req.body;
  if (!userId || amount === undefined || !type || !category) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide userId, amount, type, and category' 
    });
  }
  const newTx = transactionService.addTransaction(
    userId, 
    Number(amount), 
    type, 
    category
  );
  res.status(201).json({ success: true, data: newTx });
};