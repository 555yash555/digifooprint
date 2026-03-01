export const vibes = [
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Clean lines, whitespace, understated elegance',
    icon: '◻️',
  },
  {
    id: 'bold',
    label: 'Bold',
    description: 'Strong colors, big type, high impact',
    icon: '⚡',
  },
  {
    id: 'playful',
    label: 'Playful',
    description: 'Fun, colorful, approachable and friendly',
    icon: '🎈',
  },
  {
    id: 'corporate',
    label: 'Corporate',
    description: 'Professional, trustworthy, established',
    icon: '🏢',
  },
  {
    id: 'luxury',
    label: 'Luxury',
    description: 'Premium, sophisticated, exclusive feel',
    icon: '✨',
  },
  {
    id: 'techy',
    label: 'Techy',
    description: 'Modern, innovative, developer-friendly',
    icon: '🚀',
  },
] as const;

export type VibeId = (typeof vibes)[number]['id'];
