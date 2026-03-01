'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { text } from '@/constants/text';
import RetroGrid from '@/components/magicui/retro-grid';
import { SparklesText } from '@/components/magicui/sparkles-text';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden">
      {/* Background decorations */}
      <RetroGrid />
      
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center">
        
        {/* Magic Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-gray-200/50 shadow-sm backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            {text.site.tagline}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          From idea to brand <br />
          <span className="relative inline-block mt-2">
            <SparklesText 
               text="in 60 seconds." 
               className="text-6xl md:text-8xl bg-gradient-to-b from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent pb-2" 
               colors={{ first: '#6366f1', second: '#d946ef' }} 
            />
            <div className="absolute bottom-3 left-0 w-full h-4 bg-indigo-500/10 -rotate-2" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {text.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Animated glow behind button */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <button
            onClick={() => router.push('/create')}
            className="relative flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-black text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-xl shadow-gray-900/20 active:scale-95"
          >
            {text.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Product mock / Abstract UI visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 w-full max-w-4xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFD] via-transparent to-transparent z-10 h-[50%] bottom-0 top-auto" />
          <div className="rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-xl p-2 shadow-2xl relative z-0 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="rounded-xl border border-gray-100 bg-white shadow-sm h-[400px] flex items-center justify-center overflow-hidden relative">
              
              {/* Abstract decorative elements inside the mock */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm animate-pulse" />
              <div className="absolute bottom-10 right-10 w-48 h-24 bg-fuchsia-50 rounded-2xl border border-fuchsia-100 shadow-sm" />
              <div className="w-64 h-64 bg-gradient-to-tr from-indigo-100 to-fuchsia-100 rounded-full blur-3xl opacity-50" />
              
              <div className="text-center z-10 space-y-4">
                 <div className="h-4 w-32 bg-gray-200 rounded-full mx-auto" />
                 <div className="h-8 w-64 bg-gray-300 rounded-full mx-auto" />
                 <div className="flex gap-2 justify-center mt-6">
                    <div className="w-8 h-8 rounded-full bg-indigo-500" />
                    <div className="w-8 h-8 rounded-full bg-fuchsia-500" />
                    <div className="w-8 h-8 rounded-full bg-sky-500" />
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
