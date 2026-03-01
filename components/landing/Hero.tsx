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
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-16 md:pt-24 pb-20 md:pb-32 px-4 overflow-hidden">
      {/* Background decorations */}
      <RetroGrid />
      
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center">
        
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          From idea to <br className="block sm:hidden" /> brand <br className="hidden sm:block" />
          <span className="relative inline-block mt-1 sm:mt-2">
            <SparklesText 
               text="in 60 seconds." 
               className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl bg-gradient-to-b from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent pb-1 sm:pb-2" 
               colors={{ first: '#6366f1', second: '#d946ef' }} 
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-2xl text-gray-600 max-w-2xl mb-10 font-medium leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Get a complete brand kit — name, <span className="text-gray-900 border-b-2 border-green-200/60 font-black">available domains</span>, <span className="text-gray-900 border-b-2 border-indigo-200/60 font-black">trademark risk</span>, colors, fonts, and logo prompts. All in 60 seconds.
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
            className="group relative flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gray-900 hover:bg-black text-white rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl active:scale-95 w-full sm:w-auto justify-center"
          >
            {text.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Simplified Mobile Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 w-full max-w-4xl relative px-2"
        >
          <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-transparent to-[#FDFDFD]/50 z-10 pointer-events-none md:hidden" />
          <div className="rounded-[2.5rem] border border-gray-200/60 bg-white/40 backdrop-blur-xl p-2 shadow-2xl relative z-0 overflow-hidden group">
            <div className="rounded-[2rem] border border-gray-100 bg-white/80 shadow-inner h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden relative">
              
              <div className="text-center z-10 space-y-6 w-full px-6">
                 <div className="space-y-2">
                    <div className="h-2 w-24 bg-indigo-100 rounded-full mx-auto" />
                    <div className="h-6 w-48 bg-gray-900/10 rounded-xl mx-auto" />
                 </div>
                 
                 <div className="flex gap-3 justify-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/20" />
                    <div className="w-10 h-10 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/20" />
                    <div className="w-10 h-10 rounded-full bg-sky-500 shadow-lg shadow-sky-500/20" />
                 </div>

                 <div className="flex flex-col gap-2 max-w-[200px] mx-auto">
                   <div className="flex items-center justify-between px-4 py-2 bg-green-50 rounded-2xl border border-green-100">
                     <div className="h-2 w-16 bg-green-600/20 rounded-full" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                   </div>
                   <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100">
                     <div className="h-2 w-20 bg-gray-400/20 rounded-full" />
                     <div className="w-2 h-2 rounded-full bg-gray-300" />
                   </div>
                 </div>
              </div>
              
              {/* Decorative side elements only for tablet+ */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl hidden md:block" />
              <div className="absolute bottom-10 -right-10 w-48 h-48 bg-fuchsia-50/50 rounded-full blur-3xl hidden md:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
