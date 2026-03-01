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

      <Card className="relative overflow-hidden group">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">AI Visual Prompt</div>
        <div className="flex items-start gap-4">
          <p className="text-lg font-medium text-gray-700 leading-relaxed italic">
            "{prompt}"
          </p>
          <div className="flex-shrink-0 pt-1">
            <CopyButton text={prompt} />
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
      </Card>
    </div>
  );
}
