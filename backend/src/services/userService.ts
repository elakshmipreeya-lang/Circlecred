import { User } from '../types';

const users: User[] = [
  { id: '1', name: 'Iniya Kannan', email: 'iniya@example.com', createdAt: new Date() }
];

export const getAllUsers = (): User[] => users;

export const getUserById = (id: string): User | undefined => {
  return users.find(u => u.id === id);
};

export const createUser = (name: string, email: string, phone?: string): User => {
  const newUser: User = {
    id: (users.length + 1).toString(),
    name,
    email,
    phone,
    createdAt: new Date()
  };
  users.push(newUser);
  return newUser;
};