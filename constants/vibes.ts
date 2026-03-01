import { Square, Zap, Smile, Building2, Gem, Rocket } from 'lucide-react';

export interface Vibe {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const vibes: Vibe[] = [
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Clean lines, whitespace, understated elegance',
    icon: Square,
  },
  {
    id: 'bold',
    label: 'Bold',
    description: 'Strong colors, big type, high impact',
    icon: Zap,
  },
  {
    id: 'playful',
    label: 'Playful',
    description: 'Fun, colorful, approachable and friendly',
    icon: Smile,
  },
  {
    id: 'corporate',
    label: 'Corporate',
    description: 'Professional, trustworthy, established',
    icon: Building2,
  },
  {
    id: 'luxury',
    label: 'Luxury',
    description: 'Premium, sophisticated, exclusive feel',
    icon: Gem,
  },
  {
    id: 'techy',
    label: 'Techy',
    description: 'Modern, innovative, developer-friendly',
    icon: Rocket,
  },
];

export type VibeId = typeof vibes[number]['id'];
