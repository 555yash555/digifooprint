'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import CopyButton from '@/components/ui/CopyButton';
import Card from '@/components/ui/Card';
import { text } from '@/constants/text';

interface LogoPromptProps {
  prompt: string;
}

export default function LogoPrompt({ prompt }: LogoPromptProps) {
  return (
    <div>
      <SectionHeader
        title={text.results.logo.title}
        description={text.results.logo.description}
      />

      <Card>
        <div className="flex justify-between items-start gap-4">
          <p className="text-sm text-gray-700 leading-relaxed flex-1 whitespace-pre-wrap">
            {prompt}
          </p>
          <CopyButton text={prompt} label="Copy" />
        </div>
      </Card>
    </div>
  );
}
