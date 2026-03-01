'use client';

import { motion } from 'framer-motion';
import { Palette, Type, Image as ImageIcon, Search, Zap, Languages } from 'lucide-react';
import { MagicCard } from '@/components/magicui/magic-card';

const features = [
  {
    title: 'Color Palette generation',
    description: 'A curated 5-color palette that perfectly matches your brand vibe and emotional resonance.',
    icon: <Palette className="w-6 h-6 text-fuchsia-500" />,
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-fuchsia-50/50',
    borderClasses: 'border-fuchsia-100',
  },
  {
    title: 'Font Pairing',
    description: 'Beautiful typography from Google Fonts that works together seamlessly.',
    icon: <Type className="w-6 h-6 text-indigo-500" />,
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-indigo-50/50',
    borderClasses: 'border-indigo-100',
  },
  {
    title: 'Logo Prompts',
    description: 'Precise prompts ready for Midjourney or DALL-E to generate your logo.',
    icon: <ImageIcon className="w-6 h-6 text-sky-500" />,
    colSpan: 'md:col-span-1',
    bgClasses: 'bg-sky-50/50',
    borderClasses: 'border-sky-100',
  },
  {
    title: 'Copy & SEO',
    description: 'Website copy and SEO keywords structured for your landing page.',
    icon: <Search className="w-6 h-6 text-rose-500" />,
    colSpan: 'md:col-span-2',
    bgClasses: 'bg-rose-50/50',
    borderClasses: 'border-rose-100',
  }
];

export default function FeatureBento() {
  return (
    <section className="py-24 px-4 bg-[#FDFDFD] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Everything you need. <br className="hidden md:block"/>
            <span className="text-gray-400">Zero manual work.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We don't just give you a name. We assemble the entire visual and verbal identity of your product in one clean package.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className={`relative h-full ${feature.colSpan}`}
            >
              <MagicCard
                 gradientColor="#c7d2fe"
                 className={`h-full w-full p-8 border-none ${feature.bgClasses} ${feature.borderClasses} !bg-opacity-50 !backdrop-blur-sm group hover:-translate-y-1 transition-transform duration-300`}
              >
                  <div className="absolute inset-0 bg-white/40 mask-image-gradient pointer-events-none" />
                  <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm border border-black/5 ring-1 ring-black/5 relative z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-gray-600 relative z-10">{feature.description}</p>
                  
                  {/* Decorative background element */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/60 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
