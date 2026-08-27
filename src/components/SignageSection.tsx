import React from 'react';
import { Language } from '../types';
import { Camera } from 'lucide-react';

import signage1 from '../assets/images/1.png';
import signage2 from '../assets/images/2.png';
import signage3 from '../assets/images/3.png';

interface SignageSectionProps {
  lang: Language;
}

export default function SignageSection({ lang }: SignageSectionProps) {
  const images = [
    { src: signage1, alt: "Signage Jetis 1" },
    { src: signage2, alt: "Signage Jetis 2" },
    { src: signage3, alt: "Signage Jetis 3" },
  ];

  return (
    <section id="signage" className="py-20 bg-stone-900 scroll-mt-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-heritage-terracotta/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-amber-500 uppercase">
            <Camera className="w-4 h-4 text-amber-500" />
            <span>{lang === 'id' ? 'Fasilitas & Penunjuk Arah' : 'Facilities & Signage'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {lang === 'id' ? 'Signage Kampung Jetis' : 'Jetis Village Signage'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-stone-800 border border-stone-700/50 shadow-2xl aspect-[3/4] flex items-center justify-center"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
