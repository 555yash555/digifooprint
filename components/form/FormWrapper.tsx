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
    <div className="min-h-screen flex flex-col px-6 py-12 max-w-2xl mx-auto">
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="w-full transition-all duration-300">
          {step === 0 && <StepIdea value={idea} onChange={setIdea} />}
          {step === 1 && <StepIndustry value={industry} onChange={setIndustry} />}
          {step === 2 && <StepVibe value={vibe} onChange={setVibe} />}
          {step === 3 && <StepPrefs value={namePrefs} onChange={setNamePrefs} />}
        </div>
      </div>

      <div className="flex justify-between gap-4">
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
        >
          {step === TOTAL_STEPS - 1 ? text.form.generate : text.form.next}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
