'use client';

import { motion } from 'framer-motion';
import { Meteors } from '@/components/magicui/meteors';
import { MagicCard } from '@/components/magicui/magic-card';

const steps = [
  {
    number: '01',
    title: 'Describe your idea',
    description: 'Tell us your industry and vibe. AI starts by brainstorming unique, catchy names tailormade for you.',
  },
  {
    number: '02',
    title: 'Domain & Trademark Check',
    description: 'We run real-time domain lookups and calculate a 0-99% Trademark Risk Score to ensure your brand is safe to build.',
  },
  {
    number: '03',
    title: 'Download Brand Assets',
    description: 'Get a clean bundle of colors, fonts, SEO copy, and your safety reports. Ready to launch.',
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-gray-50/50 border-y border-gray-100 overflow-hidden relative">
      <Meteors number={15} />
      <div className="absolute inset-0 bg-grid bg-grid-mask opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
            >
              How it works
            </motion.h2>

            <div className="space-y-8 relative">
              {/* Connecting line */}
              <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/50 via-gray-200 to-transparent" />
              
              {steps.map((step, i) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-500 shadow-sm relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            {/* Visual Abstract representation of the process */}
            <MagicCard gradientColor="#fbcfe8" gradientSize={300} className="aspect-square w-full max-w-md mx-auto !bg-transparent border-none">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-fuchsia-50 rounded-[40px] shadow-inner border border-white flex items-center justify-center overflow-hidden">
                 
                 {/* Floating elements */}
                 <motion.div 
                   animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-12 left-12 w-24 h-24 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center"
                 >
                   <div className="w-12 h-4 bg-indigo-100 rounded-full" />
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-16 right-12 w-32 h-20 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4 space-y-2 flex flex-col justify-center"
                 >
                   <div className="w-full h-3 bg-fuchsia-100 rounded-full" />
                   <div className="w-2/3 h-3 bg-gray-100 rounded-full" />
                 </motion.div>

                 <motion.div 
                   animate={{ scale: [0.95, 1.05, 0.95] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="w-40 h-40 rounded-full border border-indigo-200/50 bg-white/50 backdrop-blur-xl shadow-2xl flex items-center justify-center z-10"
                 >
                   <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 blur-xl opacity-60" />
                   <div className="absolute flex gap-1">
                     <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                     <span className="w-2 h-2 bg-fuchsia-500 rounded-full" />
                     <span className="w-2 h-2 bg-sky-500 rounded-full" />
                   </div>
                 </motion.div>

               </div>
            </MagicCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
