import React, { useState, useEffect } from 'react';
import { Ticket, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

// Simple custom SVG icons for Instagram and TikTok for sharp anti-slop rendering
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

interface HeroSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export default function HeroSection({ lang, onOpenBooking }: HeroSectionProps) {
  const t = translations[lang];

  // 3 Photos to cycle through as requested
  const heroImages = [
    {
      url: "/src/assets/images/jetis_hero_banner_1784011605181.jpg",
      caption: lang === 'id' ? 'Gapura Pusaka & Suasana Kampung Jetis' : 'Iconic Heritage Gate & Jetis Alley',
      fallback: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&auto=format&fit=crop&q=80"
    },
    {
      url: "/src/assets/images/jetis_artisan_detail_1784011633935.jpg",
      caption: lang === 'id' ? 'Maestro Pengrajin Mencanting Malam Panas' : 'Master Artisan Drawing Traditional Hot Wax',
      fallback: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1600&auto=format&fit=crop&q=80"
    },
    {
      url: "/src/assets/images/jetis_batik_textiles_1784011646807.jpg",
      caption: lang === 'id' ? 'Kain Batik Tulis Sidoarjo Warna Merah Sardo' : 'Fine Sidoarjo Batik Fabrics with Sardo Red Dyes',
      fallback: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&auto=format&fit=crop&q=80"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle through the 3 photos every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-stone-900 text-white min-h-[580px] lg:min-h-[660px] flex items-center scroll-mt-28">
      
      {/* 1. Background Layer with 3 Cycling Photos */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={img.url}
              alt={img.caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-right md:object-center transition-transform duration-7000 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = img.fallback;
              }}
            />
          </div>
        ))}

        {/* 2. Solid Color on Left with Gradient Transparent to Right */}
        {/* Solid #8c2d19 on left fading to transparent on the right, ensuring crisp legibility of texts */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8c2d19] via-[#8c2d19]/90 md:via-[#8c2d19]/75 to-transparent z-10" />
        
        {/* Subtle bottom gradient to blend softly */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30 z-10" />
      </div>

      {/* 3. Main Hero Content Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-amber-200">
              {t.hero.badge}
            </span>
          </div>

          {/* Big Bold Titles */}
          <div className="space-y-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-md leading-none" id="hero-main-title">
              JEJAK JETIS
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 drop-shadow-sm leading-snug" id="hero-main-subtitle">
              Heritage Site Kampung Batik Jetis Sidoarjo
            </p>
          </div>

          {/* Narrative description */}
          <p className="text-sm sm:text-base text-amber-50/90 max-w-xl leading-relaxed font-normal" id="hero-narrative">
            {t.hero.description}
          </p>

          {/* Primary CTA Button: Beli Tiket Wisata */}
          <div className="pt-2 flex flex-wrap items-center gap-4" id="hero-cta-group">
            <button
              onClick={onOpenBooking}
              className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-serif font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 cursor-pointer group active:scale-98"
              id="hero-buy-ticket-btn"
            >
              <Ticket className="w-5 h-5 text-heritage-terracotta group-hover:rotate-12 transition-transform" />
              <span>{t.hero.ctaButton}</span>
              <span className="bg-stone-950/10 text-xs font-mono font-bold px-2 py-0.5 rounded-md ml-1">
                Rp 54.000
              </span>
            </button>
          </div>

          {/* Social Media Information: TikTok & Instagram as requested */}
          <div className="pt-4 border-t border-amber-200/20 max-w-xl space-y-2.5" id="hero-social-links">
            <div className="text-[11px] font-mono font-bold tracking-wider text-amber-200/80 uppercase">
              {t.hero.socialConnect}
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Instagram handle */}
              <a
                href="https://instagram.com/jejakjetis_sidoarjo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-amber-300/60 px-3.5 py-2 rounded-lg text-xs font-bold text-white transition-all backdrop-blur-xs cursor-pointer group"
                id="hero-instagram-link"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono tracking-tight">{t.hero.instagramLabel}</span>
              </a>

              {/* TikTok handle */}
              <a
                href="https://tiktok.com/@jejakjetis.sidoarjo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-amber-300/60 px-3.5 py-2 rounded-lg text-xs font-bold text-white transition-all backdrop-blur-xs cursor-pointer group"
                id="hero-tiktok-link"
              >
                <TikTokIcon className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
                <span className="font-mono tracking-tight">{t.hero.tiktokLabel}</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Photo Switcher Controls (Bottom-Right Carousel Controls) */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-3 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10" id="hero-photo-controls">
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentImageIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="text-[10px] font-mono text-stone-300 pl-1 border-l border-white/15">
          {currentImageIndex + 1} / {heroImages.length}
        </div>
      </div>

    </section>
  );
}
