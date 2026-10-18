import { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'CircleCred Backend API is healthy',
    timestamp: new Date().toISOString()
  });
};