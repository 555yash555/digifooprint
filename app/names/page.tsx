'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/Loader';
import NamePicker from '@/components/names/NamePicker';
import { text } from '@/constants/text';
import { BrandName, FormData } from '@/lib/types';
import RetroGrid from '@/components/magicui/retro-grid';

export default function NamesPage() {
  const router = useRouter();
  const [names, setNames] = useState<BrandName[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNames = useCallback(async () => {
    const raw = sessionStorage.getItem('digifootprint-form');
    if (!raw) {
      router.push('/create');
      return;
    }

    setNames(null);
    setLoading(true);
    setError(null);

    try {
      const formData: FormData = JSON.parse(raw);
      const res = await fetch('/api/names', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to generate names');

      const data = await res.json();
      setNames(data.names);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-red-600 mb-4 font-medium">{error}</p>
          <button
            onClick={() => router.push('/create')}
            className="text-indigo-600 hover:text-indigo-500 font-medium text-sm"
          >
            Go back and try again
          </button>
        </div>
      </div>
    );
  }

  if (loading || !names) {
    return (
      <Loader
        message={text.names.loading}
        steps={[
          'Analyzing your business idea...',
          'Brainstorming brand names...',
          'Checking domain availability...',
          'Preparing results...',
        ]}
      />
    );
  }

  return (
    <div className="h-[100dvh] flex flex-col relative overflow-hidden bg-gray-50">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-sky-400/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <RetroGrid className="z-0 opacity-60" />
      <div className="relative z-10 flex-1 flex flex-col w-full min-h-0">
        <NamePicker names={names} onRegenerate={fetchNames} />
      </div>
    </div>
  );
}
