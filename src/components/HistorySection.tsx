import React from 'react';
import { History, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import historyImg1 from '../assets/images/2.png';
import historyImg2 from '../assets/images/4.png';

interface HistorySectionProps {
  lang: Language;
}

// Collection of authentic Batik Motif images to be scrolled seamlessly from right to left
const motifImages = [
  {
    id: 'merak',
    alt: 'Motif Batik Tulis Jetis Merak',
    src: '/src/assets/images/jetis_motif_merak_1786716289157.jpg',
    fallback: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'flora-soga',
    alt: 'Motif Kembang & Ornamen Soga Jetis',
    src: '/src/assets/images/jetis_motif_flora_1786716303715.jpg',
    fallback: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'maritim-bandeng',
    alt: 'Motif Maritim Bandeng & Udang Sidoarjo',
    src: '/src/assets/images/jetis_motif_maritim_1786716329628.jpg',
    fallback: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'kain-antik',
    alt: 'Kain Antik Batik Jetis Klasik',
    src: '/src/assets/images/jetis_batik_textiles_1784011646807.jpg',
    fallback: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'canting-detail',
    alt: 'Goresan Canting Halus Malam Panas',
    src: '/src/assets/images/jetis_artisan_detail_1784011633935.jpg',
    fallback: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&auto=format&fit=crop&q=80',
  },
];

export default function HistorySection({ lang }: HistorySectionProps) {
  const t = translations[lang].history;

  // Duplicate images for continuous seamless infinite marquee scroll
  const marqueeImages = [
    ...motifImages,
    ...motifImages,
    ...motifImages,
    ...motifImages,
  ];

  return (
    <section id="sejarah" className="py-20 md:py-28 bg-heritage-sand/40 border-y border-stone-200 scroll-mt-28 overflow-hidden">
      
      {/* 1. Historical Narrative & Photos Blend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-heritage-terracotta uppercase">
            <History className="w-4 h-4 text-heritage-terracotta" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-heritage-dark tracking-tight" id="history-title">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Narrative & Photo Blend Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Rich Historic Photo Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={historyImg1}
                alt="Pengrajin Batik Tulis Jetis Mencanting"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-300">
                  {lang === 'id' ? 'TRADISI CANTING 1675' : '1675 CANTING TRADITION'}
                </span>
                <p className="text-xs font-serif italic text-stone-200 mt-0.5">
                  {lang === 'id' ? 'Proses pembubuhan lilin malam panas oleh sesepuh perajin Jetis' : 'Application of heated natural wax by master Jetis artisans'}
                </p>
              </div>
            </div>

            {/* Secondary photo strip / vintage plaque */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border-2 border-white shadow-sm bg-stone-100">
                <img
                  src={historyImg2}
                  alt="Kain Batik Kuno Jetis"
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-cover"
                />
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 flex flex-col justify-center">
                <div className="font-serif font-black text-heritage-terracotta text-2xl">1675</div>
                <div className="text-[11px] font-bold text-stone-700">Mbah Minto Jetis</div>
                <div className="text-[9px] text-stone-500 font-mono">{lang === 'id' ? 'Pusaka Tulis Tertua' : 'Oldest Batik Origin'}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Historical Texts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-stone-700 text-sm md:text-base leading-relaxed">
              <p className="font-medium text-stone-800 border-l-4 border-heritage-terracotta pl-4 py-1">
                {t.storyParagraph1}
              </p>
              <p>
                {t.storyParagraph2}
              </p>
              <p>
                {t.storyParagraph3}
              </p>
            </div>

            {/* Elder Quotation Box */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/70 shadow-xs relative">
              <Quote className="w-8 h-8 text-amber-400/50 absolute top-4 right-4" />
              <p className="font-serif italic text-sm md:text-base text-stone-800 leading-relaxed pr-6">
                "{t.quote}"
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-heritage-terracotta" />
                <span className="text-xs font-mono font-bold text-heritage-terracotta uppercase">
                  {t.quoteAuthor}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 2. Image-only Batik Motif Strip (Lined up directly & scrolling from right to left, no text, no menu, no boxes) */}
      <div className="mt-20 pt-8 border-t border-stone-300/60 relative w-full overflow-hidden" id="motif-image-strip-container">
        <div className="relative w-full overflow-hidden py-2 group">
          {/* Continuous Right-to-Left Infinite Scrolling Image Strip */}
          <div className="flex items-center gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
            {marqueeImages.map((motif, index) => (
              <div
                key={`${motif.id}-${index}`}
                className="shrink-0 w-44 sm:w-56 md:w-64 h-32 sm:h-36 md:h-44 rounded-2xl overflow-hidden shadow-md border border-stone-200/60 bg-stone-100"
              >
                <img
                  src={motif.src}
                  alt={motif.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = motif.fallback;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
