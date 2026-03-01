'use client';

import { TextInput } from '@/components/ui/Input';
import { text } from '@/constants/text';
import { SparklesText } from '@/components/magicui/sparkles-text';

interface StepPrefsProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepPrefs({ value, onChange }: StepPrefsProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <SparklesText 
        text={text.form.step4Title} 
        className="text-3xl font-bold text-gray-900 mb-3"
        colors={{ first: '#a855f7', second: '#3b82f6' }}
      />
      <p className="text-base font-medium text-gray-500 mb-8 leading-relaxed">
        {text.form.step4Subtitle}
      </p>
      <TextInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={text.form.step4Placeholder}
      />
    </div>
  );
}
