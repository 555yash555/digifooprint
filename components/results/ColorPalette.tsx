'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import CopyButton from '@/components/ui/CopyButton';
import { text } from '@/constants/text';
import { ColorPalette as ColorPaletteType } from '@/lib/types';

interface ColorPaletteProps {
  colors: ColorPaletteType;
}

const colorLabels: Record<string, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  accent: 'Accent',
  dark: 'Dark',
  light: 'Light',
};

export default function ColorPalette({ colors }: ColorPaletteProps) {
  const entries = Object.entries(colors) as [string, string][];

  return (
    <div>
      <SectionHeader
        title={text.results.colors.title}
        description={text.results.colors.description}
      />

      {/* Swatch strip */}
      <div className="flex rounded-[24px] overflow-hidden h-24 mb-8 shadow-xl border-4 border-white">
        {entries.map(([, hex]) => (
          <div
            key={hex}
            className="flex-1 transition-transform hover:scale-105"
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>

      {/* Color details */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {entries.map(([key, hex]) => (
          <div key={key} className="group">
            <div
              className="w-full aspect-square rounded-2xl mb-3 border border-gray-100 shadow-sm transition-all group-hover:shadow-md group-hover:scale-[1.02]"
              style={{ backgroundColor: hex }}
            />
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{colorLabels[key]}</div>
            <CopyButton text={hex} label={hex} className="text-sm font-bold text-gray-900" />
          </div>
        ))}
      </div>
    </div>
  );
}
