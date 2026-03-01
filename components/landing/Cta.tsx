'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { text } from '@/constants/text';
import { Meteors } from '@/components/magicui/meteors';
import { SparklesText } from '@/components/magicui/sparkles-text';

export default function Cta() {
  const router = useRouter();

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-white">
      {/* Background glow and meteors */}
      <Meteors number={25} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Stop debating names. <br />
          <SparklesText 
             text="Start building." 
             className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent"
             colors={{ first: '#7dd3fc', second: '#f472b6' }}
          />
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Stop wasting time on "taken" names. Get the domain availability, trademark risk reports, and brand assets you need to launch today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => router.push('/create')}
            className="flex items-center gap-2 px-10 py-5 bg-gray-900 hover:bg-black text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-xl shadow-gray-900/10 active:scale-95 w-full sm:w-auto justify-center"
          >
            {text.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
