'use client';

import Chip from '@/components/ui/Chip';
import { industries } from '@/constants/industries';
import { text } from '@/constants/text';

interface StepIndustryProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepIndustry({ value, onChange }: StepIndustryProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">
        {text.form.step2Title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
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
