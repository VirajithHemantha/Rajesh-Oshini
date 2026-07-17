import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Quote } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-brand-plum uppercase tracking-[0.5em] text-[11px] font-semibold font-sinhala-sans drop-shadow-sm">මනාල යුවළ</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-sinhala-serif text-stone-800 tracking-tight drop-shadow-sm">
            රාජේෂ් <span className="text-brand-plum font-light mx-2">&</span> ඕෂිනි
          </h2>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-right relative"
        >
          <div className="absolute top-0 right-0 -mr-8 -mt-8 text-brand-lavender/30 opacity-50 hidden md:block">
            <Quote className="w-24 h-24" />
          </div>
          <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">මනාලයා</span>
          <h3 className="text-4xl sm:text-5xl font-sinhala-serif text-stone-800 mb-6 drop-shadow-sm">රාජේෂ්</h3>
          <p className="text-stone-500/90 font-sinhala-serif italic text-base sm:text-lg">දිලිප් සිං මහතා සහ චන්ද්‍රා සිං මහත්මියගේ ආදරණීය පුත්</p>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center md:text-left relative"
        >
          <div className="absolute top-0 left-0 -ml-8 -mt-8 text-brand-lavender/30 opacity-50 hidden md:block transform -scale-x-100">
            <Quote className="w-24 h-24" />
          </div>
          <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">මනාලිය</span>
          <h3 className="text-4xl sm:text-5xl font-sinhala-serif text-stone-800 mb-6 drop-shadow-sm">ඕෂිනි</h3>
          <p className="text-stone-500/90 font-sinhala-serif italic text-base sm:text-lg">සමන් උදයසිරි මහතා සහ අනුලා ජයමාන්න මහත්මියගේ ආදරණීය දියණිය</p>
        </motion.div>
      </div>
    </div>
  );
};
