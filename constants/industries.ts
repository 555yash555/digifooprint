export const industries = [
  { id: 'tech', label: 'Tech', icon: '💻' },
  { id: 'health', label: 'Health', icon: '🏥' },
  { id: 'travel', label: 'Travel', icon: '✈️' },
  { id: 'finance', label: 'Finance', icon: '💰' },
  { id: 'creative', label: 'Creative', icon: '🎨' },
  { id: 'food', label: 'Food', icon: '🍕' },
  { id: 'education', label: 'Education', icon: '📚' },
  { id: 'other', label: 'Other', icon: '🔮' },
] as const;

export type IndustryId = (typeof industries)[number]['id'];
