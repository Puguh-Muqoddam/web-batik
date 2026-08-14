import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
}

export default function Header({ lang, setLang, onOpenBooking }: HeaderProps) {
  const logoUrl = "/src/assets/images/jetis_logo_icon_1784011619168.jpg";
  const t = translations[lang];

  return (
    <header className="bg-heritage-cream/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50 shadow-xs" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Zone: Logo + JEJAK JETIS + Subtitle (One cohesive brand identity) */}
        <div className="flex items-center gap-3.5" id="header-brand-container">
          <div className="relative shrink-0">
            <img
              src={logoUrl}
              alt="Logo Jejak Jetis"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full border-2 border-heritage-terracotta object-cover shadow-sm"
              id="header-logo-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/jetis_logo/100/100";
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-heritage-dark leading-none" id="header-title">
              JEJAK JETIS
            </div>
            <div className="text-[11px] sm:text-xs font-serif font-bold text-heritage-terracotta tracking-normal mt-0.5" id="header-subtitle">
              {t.subtitle}
            </div>
          </div>
        </div>

        {/* Action Zone: Language Selector & Quick Ticket CTA */}
        <div className="flex items-center gap-3 sm:gap-4" id="header-actions">
          
          {/* Bilingual Language Switcher */}
          <div className="relative flex items-center bg-stone-100/90 rounded-full p-1 border border-stone-300/80 shadow-2xs" id="lang-switcher">
            <button
              onClick={() => setLang('id')}
              className={`relative z-10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                lang === 'id' ? 'text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
              id="lang-btn-id"
              aria-label="Pilih Bahasa Indonesia"
            >
              <span>🇮🇩</span>
              <span className="hidden sm:inline">IND</span>
            </button>
            
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                lang === 'en' ? 'text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
              id="lang-btn-en"
              aria-label="Select English Language"
            >
              <span>🇬🇧</span>
              <span className="hidden sm:inline">ENG</span>
            </button>

            {/* Slider background pill */}
            <div
              className="absolute top-1 bottom-1 left-1 rounded-full bg-heritage-terracotta transition-all duration-300 shadow-sm"
              style={{
                width: 'calc(50% - 4px)',
                transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0)',
              }}
              id="lang-slider-pill"
            />
          </div>

          {/* Quick Header Action button */}
          <button
            onClick={onOpenBooking}
            className="hidden md:inline-flex bg-heritage-terracotta hover:bg-amber-900 text-white font-bold text-xs py-2 px-4 rounded-full transition-colors shadow-xs cursor-pointer items-center gap-1.5 shrink-0"
            id="header-buy-ticket-btn"
          >
            <span>{t.bookTicketBtn}</span>
          </button>

        </div>
      </div>
    </header>
  );
}
