'use client';

import { TextInput } from '@/components/ui/Input';
import { text } from '@/constants/text';

interface StepPrefsProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StepPrefs({ value, onChange }: StepPrefsProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">
        {text.form.step4Title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
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
