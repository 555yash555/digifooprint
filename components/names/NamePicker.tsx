'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NameCard from './NameCard';
import Button from '@/components/ui/Button';
import { text } from '@/constants/text';
import { BrandName } from '@/lib/types';

interface NamePickerProps {
  names: BrandName[];
  onRegenerate: () => void;
}

export default function NamePicker({ names: initialNames, onRegenerate }: NamePickerProps) {
  const router = useRouter();
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [localNames, setLocalNames] = useState<BrandName[]>(initialNames);

  // Sync initial names if they change from parent
  useEffect(() => {
    setLocalNames(initialNames);
  }, [initialNames]);

  const handleContinue = () => {
    if (selectedName === null) return;
    
    // Find the chosen brand name object, searching through similar ones too
    let chosen: BrandName | undefined;
    for (const ln of localNames) {
      if (ln.name === selectedName) {
        chosen = ln;
        break;
      }
      if (ln.similarNames) {
        const foundChild = ln.similarNames.find(sn => sn.name === selectedName);
        if (foundChild) {
          chosen = foundChild;
          break;
        }
      }
    }

    if (!chosen) return;

    const availableDomain = chosen.domains.find((d) => d.available)?.domain
      || `${chosen.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

    sessionStorage.setItem(
      'digifootprint-name',
      JSON.stringify({ 
        chosenName: chosen.name, 
        chosenDomain: availableDomain, 
        domains: chosen.domains,
        trademarkRisk: chosen.trademarkRisk 
      })
    );
    router.push('/results');
  };

  const handleFindSimilar = async (baseName: string) => {
    try {
      const raw = sessionStorage.getItem('digifootprint-form');
      if (!raw) return;
      const formData = JSON.parse(raw);

      const res = await fetch('/api/names/similar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: baseName,
          idea: formData.idea,
          industry: formData.industry,
          vibe: formData.vibe,
        }),
      });

      if (!res.ok) throw new Error('Failed to fetch similar names');
      const data = await res.json();

      setLocalNames(prev => prev.map(n => 
        n.name === baseName ? { ...n, similarNames: data.names } : n
      ));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col mx-auto relative">
      <div className="text-center pt-8 pb-4 sm:pb-8 shrink-0 z-20 max-w-xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{text.names.title}</h1>
        <p className="text-base md:text-lg font-medium text-gray-500 mt-2 leading-relaxed">{text.names.subtitle}</p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 scrollbar-hide">
        <div className="grid gap-4 max-w-3xl mx-auto py-2">
          {localNames.map((brandName) => (
            <NameCard
              key={brandName.name}
              brandName={brandName}
              selectedName={selectedName}
              onClick={(name) => setSelectedName(name)}
              onFindSimilar={handleFindSimilar}
            />
          ))}
        </div>
      </div>

      <div className="shrink-0 flex flex-col sm:flex-row items-center justify-center gap-3 px-6 pt-4 pb-8 sm:pb-12 bg-white/40 backdrop-blur-md border-t border-gray-100/50 z-30 relative w-full">
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
          disabled={selectedName === null}
          className="text-base px-8 py-4 shadow-xl shadow-indigo-500/20"
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
