'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { text } from '@/constants/text';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Badge */}
      <div className="mb-6 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
        <span className="text-xs font-medium text-indigo-400">
          {text.site.tagline}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-100 max-w-4xl leading-tight">
        {text.hero.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
        {text.hero.subtitle}
      </p>

      {/* CTA */}
      <div className="mt-10">
        <Button
          onClick={() => router.push('/create')}
          className="text-base px-8 py-4"
        >
          {text.hero.cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Subtle gradient accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
