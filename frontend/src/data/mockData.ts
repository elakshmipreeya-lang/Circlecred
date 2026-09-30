import { Circle, User } from '../types';

export const mockUser: User = {
  id: 'usr-1',
  name: 'Raj Mohan',
  phoneNumber: '+91 9876543210',
  reliabilityScore: 780,
};

export const mockCircles: Circle[] = [
  {
    id: 'circ-1',
    name: 'Tech Founders Pool',
    monthlyContribution: 5000,
    totalMembers: 10,
    currentCycle: 3,
    status: 'ACTIVE',
  },
];
