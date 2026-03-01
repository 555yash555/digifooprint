'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NameCard from './NameCard';
import Button from '@/components/ui/Button';
import { text } from '@/constants/text';
import { BrandName } from '@/lib/types';

interface NamePickerProps {
  names: BrandName[];
  onRegenerate: () => void;
}

export default function NamePicker({ names, onRegenerate }: NamePickerProps) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedIndex === null) return;
    const chosen = names[selectedIndex];
    const availableDomain = chosen.domains.find((d) => d.available)?.domain
      || `${chosen.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

    sessionStorage.setItem(
      'digifootprint-name',
      JSON.stringify({ chosenName: chosen.name, chosenDomain: availableDomain, domains: chosen.domains })
    );
    router.push('/results');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{text.names.title}</h1>
        <p className="text-gray-500 mt-2">{text.names.subtitle}</p>
      </div>

      <div className="grid gap-4">
        {names.map((brandName, i) => (
          <NameCard
            key={brandName.name}
            brandName={brandName}
            selected={selectedIndex === i}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button
          variant="ghost"
          onClick={onRegenerate}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Generate more names
        </Button>
        <Button
          onClick={handleContinue}
          disabled={selectedIndex === null}
          className="text-base px-8 py-4"
        >
          {text.names.cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
