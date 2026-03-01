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
import Badge from '@/components/ui/Badge';
import { BrandKit, DomainResult, FormData } from '@/lib/types';
import RetroGrid from '@/components/magicui/retro-grid';

export default function ResultsPage() {
  const router = useRouter();
  const [kit, setKit] = useState<BrandKit | null>(null);
  const [chosenName, setChosenName] = useState('');
  const [chosenDomain, setChosenDomain] = useState('');
  const [domains, setDomains] = useState<DomainResult[]>([]);
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
    setChosenDomain(nameData.chosenDomain);
    setDomains(nameData.domains || []);

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
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
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
    <div className="min-h-screen relative bg-[#FDFDFD] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <RetroGrid className="z-0 opacity-40" />
      
      <div className="relative z-10 px-6 py-16 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 shadow-sm mb-4">
            <span className="text-xs font-medium text-indigo-700">Brand Kit Ready</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{chosenName}</h1>
          {domains.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {domains.map((d) => (
                <Badge key={d.domain} domain={d.domain} available={d.available} registerUrl={d.registerUrl} />
              ))}
            </div>
          )}
          <p className="text-gray-500 mt-3">{text.results.subtitle}</p>
        </div>

        {/* Sections */}
        <div className="space-y-12 backdrop-blur-sm bg-white/30 p-8 rounded-[40px] border border-white/50 shadow-xl">
          <ColorPalette colors={kit.colors} />
          <FontPairing fonts={kit.fonts} brandName={chosenName} />
          <LogoPrompt prompt={kit.logoPrompt} />
          <SeoKeywords seo={kit.seo} />
          <Downloads brandingMd={kit.brandingMd} copywriteMd={kit.copywriteMd} kit={kit} brandName={chosenName} />
        </div>

        {/* Start over */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              sessionStorage.clear();
              router.push('/');
            }}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            Start over with a new idea
          </button>
        </div>
      </div>
    </div>
  );
}
