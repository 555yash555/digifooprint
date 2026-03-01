'use client';

import { useEffect, useState } from 'react';

interface LoaderProps {
  steps: string[];
  message?: string;
}

export default function Loader({ steps, message }: LoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length - 1) return;
    const timer = setTimeout(() => setCurrentStep((s) => s + 1), 2000);
    return () => clearTimeout(timer);
  }, [currentStep, steps.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 animate-spin" />
      </div>

      {/* Message */}
      {message && (
        <p className="text-xl font-semibold text-gray-900">{message}</p>
      )}

      {/* Steps */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        {steps.map((step, i) => (
          <div
            key={step}
            className={`
              flex items-center gap-3 text-sm transition-all duration-500
              ${i < currentStep ? 'text-emerald-600' : i === currentStep ? 'text-gray-900' : 'text-gray-400'}
            `}
          >
            {i < currentStep ? (
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : i === currentStep ? (
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              </div>
            ) : (
              <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              </div>
            )}
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
