'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NameCard from './NameCard';
import Button from '@/components/ui/Button';
import { text } from '@/constants/text';
import { BrandName } from '@/lib/types';

interface NamePickerProps {
  names: BrandName[];
}

export default function NamePicker({ names }: NamePickerProps) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedIndex === null) return;
    const chosen = names[selectedIndex];
    // Find first available domain or default to .com
    const availableDomain = chosen.domains.find((d) => d.available)?.domain
      || `${chosen.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

    sessionStorage.setItem(
      'digifootprint-name',
      JSON.stringify({ chosenName: chosen.name, chosenDomain: availableDomain })
    );
    router.push('/results');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">{text.names.title}</h1>
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

      <div className="mt-8 flex justify-center">
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
