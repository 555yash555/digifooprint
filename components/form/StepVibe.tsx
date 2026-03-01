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
      <h2 className="text-xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">
        {text.form.step3Title}
      </h2>
      <p className="text-[10px] sm:text-base font-medium text-gray-500 mb-2 sm:mb-6 leading-tight">
        {text.form.step3Subtitle}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {vibes.map((vibe) => (
          <Card
            key={vibe.id}
            selected={value === vibe.id}
            hoverable
            onClick={() => onChange(vibe.id)}
            className="text-center !p-3 sm:!p-5"
          >
            <div className={`text-xl sm:text-2xl mb-2 sm:mb-4 flex justify-center transition-colors ${value === vibe.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'}`}>
              <vibe.icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className={`font-black text-xs sm:text-base leading-tight transition-colors ${value === vibe.id ? 'text-indigo-900' : 'text-gray-900'}`}>{vibe.label}</div>
            <div className={`text-[10px] sm:text-xs mt-1 transition-colors leading-tight ${value === vibe.id ? 'text-indigo-700' : 'text-gray-500'}`}>{vibe.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
