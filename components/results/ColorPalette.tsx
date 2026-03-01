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
      <div className="flex rounded-xl overflow-hidden h-20 mb-4">
        {entries.map(([, hex]) => (
          <div
            key={hex}
            className="flex-1"
            style={{ backgroundColor: hex }}
          />
        ))}
      </div>

      {/* Color details */}
      <div className="grid grid-cols-5 gap-3">
        {entries.map(([key, hex]) => (
          <div key={key} className="text-center">
            <div
              className="w-full aspect-square rounded-xl mb-2 border border-[#2A2A2D]"
              style={{ backgroundColor: hex }}
            />
            <div className="text-xs text-gray-500 mb-1">{colorLabels[key]}</div>
            <CopyButton text={hex} label={hex} className="text-[10px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
