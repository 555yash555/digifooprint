'use client';

import Card from '@/components/ui/Card';
import { vibes } from '@/constants/vibes';
import { text } from '@/constants/text';
import { SparklesText } from '@/components/magicui/sparkles-text';

interface StepVibeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepVibe({ value, onChange }: StepVibeProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <SparklesText 
        text={text.form.step3Title} 
        className="text-3xl font-bold text-gray-900 mb-3"
        colors={{ first: '#10b981', second: '#6366f1' }}
      />
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
            <div className={`text-2xl mb-4 flex justify-center transition-colors ${value === vibe.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'}`}>
              <vibe.icon className="w-8 h-8" />
            </div>
            <div className={`font-semibold text-sm transition-colors ${value === vibe.id ? 'text-indigo-900' : 'text-gray-900'}`}>{vibe.label}</div>
            <div className={`text-xs mt-1 transition-colors ${value === vibe.id ? 'text-indigo-700' : 'text-gray-500'}`}>{vibe.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
