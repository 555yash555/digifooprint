'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesText } from '@/components/magicui/sparkles-text';
import RetroGrid from '@/components/magicui/retro-grid';
import { CheckCircle2, Circle } from 'lucide-react';

interface LoaderProps {
  steps: string[];
  message?: string;
}

export default function Loader({ steps, message }: LoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSteps = steps.length;
    const stepDuration = 2000;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (totalSteps * (stepDuration / 100)));
        return next > 100 ? 100 : next;
      });
    }, 100);

    const stepTimer = setInterval(() => {
      setCurrentStep((s) => (s < totalSteps - 1 ? s + 1 : s));
    }, stepDuration);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [steps.length]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 overflow-hidden z-[100]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none" />
      <RetroGrid className="opacity-40" />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">
        {/* Spinner/Progress Circle */}
        <div className="relative w-32 h-32 mb-12">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-gray-200/50"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="60"
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="377"
              initial={{ strokeDashoffset: 377 }}
              animate={{ strokeDashoffset: 377 - (377 * progress) / 100 }}
              className="text-indigo-600"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-gray-900">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Message */}
        {message && (
          <SparklesText
            text={message}
            className="text-3xl font-black text-gray-900 mb-8 text-center"
            colors={{ first: '#6366f1', second: '#d946ef' }}
          />
        )}

        {/* Steps Card */}
        <div className="w-full bg-white/40 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-2xl p-8 space-y-4">
          <AnimatePresence mode="wait">
            {steps.map((step, i) => {
              const isActive = i === currentStep;
              const isCompleted = i < currentStep;

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: isActive || isCompleted ? 1 : 0.4, 
                    x: 0,
                    scale: isActive ? 1.02 : 1
                  }}
                  className={`flex items-center gap-4 transition-all duration-500`}
                >
                  <div className="flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    ) : isActive ? (
                      <div className="relative">
                        <Circle className="w-6 h-6 text-indigo-500 animate-pulse" />
                        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-20 animate-pulse" />
                      </div>
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300" />
                    )}
                  </div>
                  <span className={`text-base font-bold tracking-tight ${isActive ? 'text-gray-900' : isCompleted ? 'text-emerald-700/80' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        <p className="mt-12 text-sm font-bold text-gray-400 uppercase tracking-widest animate-pulse">
          Crafting your brand identity...
        </p>
      </div>
    </div>
  );
}
