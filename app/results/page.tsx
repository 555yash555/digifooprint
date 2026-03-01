'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/Loader';
import ColorPalette from '@/components/results/ColorPalette';
import FontPairing from '@/components/results/FontPairing';
import LogoPrompt from '@/components/results/LogoPrompt';
import SeoKeywords from '@/components/results/SeoKeywords';
import Downloads from '@/components/results/Downloads';
import { text } from '@/constants/text';
import { BrandKit, FormData } from '@/lib/types';

export default function ResultsPage() {
  const router = useRouter();
  const [kit, setKit] = useState<BrandKit | null>(null);
  const [chosenName, setChosenName] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const formRaw = sessionStorage.getItem('digifootprint-form');
    const nameRaw = sessionStorage.getItem('digifootprint-name');

    if (!formRaw || !nameRaw) {
      router.push('/create');
      return;
    }

    const formData: FormData = JSON.parse(formRaw);
    const nameData = JSON.parse(nameRaw);
    setChosenName(nameData.chosenName);

    async function fetchBrandKit() {
      try {
        const res = await fetch('/api/brand', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            idea: formData.idea,
            industry: formData.industry,
            vibe: formData.vibe,
            chosenName: nameData.chosenName,
            chosenDomain: nameData.chosenDomain,
          }),
        });

        if (!res.ok) throw new Error('Failed to generate brand kit');

        const data = await res.json();
        setKit(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    }

    fetchBrandKit();
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => router.push('/create')}
            className="text-indigo-400 hover:text-indigo-300 text-sm"
          >
            Go back and try again
          </button>
        </div>
      </div>
    );
  }

  if (!kit) {
    return (
      <Loader
        message={text.results.loading}
        steps={text.loadingSteps as unknown as string[]}
      />
    );
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <span className="text-xs font-medium text-indigo-400">Brand Kit Ready</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-100">{chosenName}</h1>
        <p className="text-gray-500 mt-2">{text.results.subtitle}</p>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        <ColorPalette colors={kit.colors} />
        <FontPairing fonts={kit.fonts} brandName={chosenName} />
        <LogoPrompt prompt={kit.logoPrompt} />
        <SeoKeywords seo={kit.seo} />
        <Downloads brandingMd={kit.brandingMd} copywriteMd={kit.copywriteMd} />
      </div>

      {/* Start over */}
      <div className="mt-16 text-center">
        <button
          onClick={() => {
            sessionStorage.clear();
            router.push('/');
          }}
          className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          Start over with a new idea
        </button>
      </div>
    </div>
  );
}
