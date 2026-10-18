import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json({ success: true, data: users });
};

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.id as string;
  const user = userService.getUserById(userId);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  res.json({ success: true, data: user });
};

export const createNewUser = (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and Email are required' });
  }
  const user = userService.createUser(name, email, phone);
  res.status(201).json({ success: true, data: user });
};