'use client';

import Chip from '@/components/ui/Chip';
import { industries } from '@/constants/industries';
import { text } from '@/constants/text';
import { SparklesText } from '@/components/magicui/sparkles-text';

interface StepIndustryProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepIndustry({ value, onChange }: StepIndustryProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <SparklesText 
        text={text.form.step2Title} 
        className="text-3xl font-bold text-gray-900 mb-3"
        colors={{ first: '#ec4899', second: '#8b5cf6' }}
      />
      <p className="text-base font-medium text-gray-500 mb-8 leading-relaxed">
        {text.form.step2Subtitle}
      </p>
      <div className="flex flex-wrap gap-3">
        {industries.map((ind) => (
          <Chip
            key={ind.id}
            label={ind.label}
            icon={ind.icon}
            selected={value === ind.id}
            onClick={() => onChange(ind.id)}
          />
        ))}
      </div>
    </div>
  );
}
