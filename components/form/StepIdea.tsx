'use client';

import { Textarea } from '@/components/ui/Input';
import { text } from '@/constants/text';

interface StepIdeaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepIdea({ value, onChange }: StepIdeaProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">
        {text.form.step1Title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {text.form.step1Subtitle}
      </p>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={text.form.step1Placeholder}
        rows={5}
      />
    </div>
  );
}
