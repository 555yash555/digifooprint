'use client';

import { Textarea } from '@/components/ui/Input';
import { text } from '@/constants/text';
import { SparklesText } from '@/components/magicui/sparkles-text';

interface StepIdeaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepIdea({ value, onChange }: StepIdeaProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <SparklesText 
        text={text.form.step1Title} 
        className="text-3xl font-bold text-gray-900 mb-3"
        colors={{ first: '#a855f7', second: '#3b82f6' }}
      />
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
