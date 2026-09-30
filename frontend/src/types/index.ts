export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  reliabilityScore: number;
}

export interface Circle {
  id: string;
  name: string;
  monthlyContribution: number;
  totalMembers: number;
  currentCycle: number;
  status: 'PENDING' | 'ACTIVE' | 'COMPLETED';
}
