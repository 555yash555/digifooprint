'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import CopyButton from '@/components/ui/CopyButton';
import { text } from '@/constants/text';
import { FontPairing as FontPairingType } from '@/lib/types';

interface FontPairingProps {
  fonts: FontPairingType;
  brandName: string;
}

export default function FontPairing({ fonts, brandName }: FontPairingProps) {
  return (
    <div>
      <SectionHeader
        title={text.results.fonts.title}
        description={text.results.fonts.description}
      />

      {/* Load fonts dynamically */}
      <link
        href={`https://fonts.googleapis.com/css2?family=${encodeURIComponent(fonts.heading)}:wght@700&family=${encodeURIComponent(fonts.body)}:wght@400&display=swap`}
        rel="stylesheet"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Heading Font</div>
            <CopyButton text={fonts.heading} label="Copy Name" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: fonts.heading }}>
              {fonts.heading}
            </span>
            <p className="text-xl text-gray-600 leading-tight" style={{ fontFamily: fonts.heading }}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Body Font</div>
            <CopyButton text={fonts.body} label="Copy Name" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-gray-900" style={{ fontFamily: fonts.body }}>
              {fonts.body}
            </span>
            <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: fonts.body }}>
              The quick brown fox jumps over the lazy dog. Designers use this font to create a professional and clean look for their brand.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
