'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/Loader';
import NamePicker from '@/components/names/NamePicker';
import { text } from '@/constants/text';
import { BrandName, FormData } from '@/lib/types';

export default function NamesPage() {
  const router = useRouter();
  const [names, setNames] = useState<BrandName[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('digifootprint-form');
    if (!raw) {
      router.push('/create');
      return;
    }

    const formData: FormData = JSON.parse(raw);

    async function fetchNames() {
      try {
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
      }
    }

    fetchNames();
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

  if (!names) {
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
    <div className="min-h-screen px-6 py-16">
      <NamePicker names={names} />
    </div>
  );
}
