import { Laptop, Activity, Plane, Wallet, Paintbrush, Pizza, BookOpen, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

export interface Industry {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const industries: Industry[] = [
  { id: 'tech', label: 'Tech', icon: Laptop },
  { id: 'health', label: 'Health', icon: Activity },
  { id: 'travel', label: 'Travel', icon: Plane },
  { id: 'finance', label: 'Finance', icon: Wallet },
  { id: 'creative', label: 'Creative', icon: Paintbrush },
  { id: 'food', label: 'Food', icon: Pizza },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'other', label: 'Other', icon: Sparkles },
];

export type IndustryId = typeof industries[number]['id'];
