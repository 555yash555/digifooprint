'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="text-xs text-gray-500 mb-2">Heading Font</div>
          <div className="text-sm text-indigo-400 mb-3">{fonts.heading}</div>
          <div
            className="text-3xl font-bold text-gray-100"
            style={{ fontFamily: `'${fonts.heading}', sans-serif` }}
          >
            {brandName}
          </div>
        </Card>

        <Card>
          <div className="text-xs text-gray-500 mb-2">Body Font</div>
          <div className="text-sm text-indigo-400 mb-3">{fonts.body}</div>
          <div
            className="text-base text-gray-300 leading-relaxed"
            style={{ fontFamily: `'${fonts.body}', sans-serif` }}
          >
            The quick brown fox jumps over the lazy dog. Your brand deserves typography that speaks volumes.
          </div>
        </Card>
      </div>
    </div>
  );
}
