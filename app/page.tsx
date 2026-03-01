import Hero from '@/components/landing/Hero';
import FeatureBento from '@/components/landing/FeatureBento';
import HowItWorks from '@/components/landing/HowItWorks';
import Cta from '@/components/landing/Cta';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#FDFDFD] text-gray-900">
      <Hero />
      <HowItWorks />
      <FeatureBento />
      <Cta />
      
      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© {new Date().getFullYear()} DigiFootprint. Stop debating names, start building.</p>
      </footer>
    </main>
  );
}
