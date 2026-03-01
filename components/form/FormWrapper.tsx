'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ui/ProgressBar';
import Button from '@/components/ui/Button';
import StepIdea from './StepIdea';
import StepIndustry from './StepIndustry';
import StepVibe from './StepVibe';
import StepPrefs from './StepPrefs';
import { text } from '@/constants/text';
import RetroGrid from '@/components/magicui/retro-grid';
import { MagicCard } from '@/components/magicui/magic-card';

const TOTAL_STEPS = 4;

export default function FormWrapper() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [idea, setIdea] = useState('');
  const [industry, setIndustry] = useState('');
  const [vibe, setVibe] = useState('');
  const [namePrefs, setNamePrefs] = useState('');

  const canProceed = () => {
    switch (step) {
      case 0: return idea.trim().length > 10;
      case 1: return industry !== '';
      case 2: return vibe !== '';
      case 3: return true; // optional
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      // Save form data to sessionStorage and navigate to names page
      const formData = { idea, industry, vibe, namePrefs };
      sessionStorage.setItem('digifootprint-form', JSON.stringify(formData));
      router.push('/names');
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="h-[100dvh] flex flex-col relative overflow-hidden bg-gray-50">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-sky-400/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <RetroGrid className="z-0 opacity-60" />
      
      <div className="flex flex-col max-w-2xl mx-auto w-full flex-1 relative z-10 overflow-hidden">
        {/* Fixed Header */}
        <div className="px-6 pt-4 sm:pt-12 pb-2 shrink-0">
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 scrollbar-hide flex flex-col justify-center">
          <div className="py-2 sm:py-6">
            <MagicCard gradientColor="#c7d2fe" gradientOpacity={0.25} className="w-full transition-all duration-300 !bg-white/60 shadow-2xl border-white/80 !backdrop-blur-2xl rounded-[30px] sm:rounded-[40px] px-4 py-4 sm:px-8 sm:py-8">
              {step === 0 && <StepIdea value={idea} onChange={setIdea} />}
              {step === 1 && <StepIndustry value={industry} onChange={setIndustry} />}
              {step === 2 && <StepVibe value={vibe} onChange={setVibe} />}
              {step === 3 && <StepPrefs value={namePrefs} onChange={setNamePrefs} />}
            </MagicCard>
          </div>
        </div>

        {/* Fixed Footer - Absolutely Pinned */}
        <div className="shrink-0 flex justify-between gap-4 px-6 pt-4 pb-6 sm:pb-12 bg-white/40 backdrop-blur-md border-t border-gray-100/50 z-30">
          <Button
            variant="ghost"
            onClick={handleBack}
            className={step === 0 ? 'invisible' : ''}
          >
            {text.form.back}
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="shadow-xl shadow-indigo-500/20"
          >
            {step === TOTAL_STEPS - 1 ? text.form.generate : text.form.next}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
