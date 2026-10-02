import React from 'react';
import { motion } from 'framer-motion';
import { HeroProps } from '../types';
import { translations } from '../translations';
import heroBg from '../assets/images/jetis_hero_banner_1784011605181.jpg';

export default function HeroSection({ lang, onOpenBooking }: HeroProps) {
  const t = translations[lang];

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Kampung Batik Jetis" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/70 to-bg-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col items-center text-center mt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <span className="section-badge-light uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full bg-white/10 text-text-on-dark border border-white/20 backdrop-blur-sm">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-6"
        >
          {/* Decorative Year */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-heading font-black text-accent-gold/20 select-none pointer-events-none leading-none">
            1516
          </div>
          <h1 className="relative font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-on-dark leading-tight whitespace-pre-line drop-shadow-lg">
            {t.hero.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h2 className="font-heading text-2xl md:text-3xl text-accent-gold font-medium">
            {t.hero.subtitle}
          </h2>
          <p className="font-body text-lg md:text-xl text-text-on-dark/90 leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10"
        >
          <button
            onClick={onOpenBooking}
            className="bg-primary-warm hover:bg-[#70360f] text-white font-body font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            {t.hero.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
