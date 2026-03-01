'use client';

import Card from '@/components/ui/Card';
import { vibes } from '@/constants/vibes';
import { text } from '@/constants/text';

interface StepVibeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepVibe({ value, onChange }: StepVibeProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">
        {text.form.step3Title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {text.form.step3Subtitle}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {vibes.map((vibe) => (
          <Card
            key={vibe.id}
            selected={value === vibe.id}
            hoverable
            onClick={() => onChange(vibe.id)}
            className="text-center"
          >
            <div className="text-2xl mb-2">{vibe.icon}</div>
            <div className="font-semibold text-gray-200 text-sm">{vibe.label}</div>
            <div className="text-xs text-gray-500 mt-1">{vibe.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
