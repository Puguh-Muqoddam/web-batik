import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HeaderProps } from '../types';
import { translations } from '../translations';
import logoImg from '../assets/images/logo_asli.jpg';

export default function Header({
  lang,
  setLang,
  onOpenBooking,
  activeSection,
  onSelectSection,
}: HeaderProps) {
  const t = translations[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: t.nav.home },
    { id: 'tentang', label: t.nav.about },
    { id: 'kegiatan', label: t.nav.activities },
    { id: 'peta', label: t.nav.map },
    { id: 'umkm', label: t.nav.umkm },
    { id: 'kontak', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-bg-cream/95 backdrop-blur sticky top-0 z-50 border-b border-border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('beranda')}>
          <div className="relative shrink-0">
            <img
              src={logoImg}
              alt="Logo Batik Jetis"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary-warm object-cover shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/jetis_logo/100/100";
              }}
            />
          </div>
          <div className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-text-heading leading-none">
            {t.siteName}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-body text-sm font-medium transition-colors hover:text-primary-warm ${
                activeSection === item.id ? 'text-primary-warm' : 'text-text-body'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Zone: Language Selector & Quick Ticket CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Bilingual Language Switcher */}
          <div className="relative flex items-center bg-bg-sand rounded-full p-1 border border-border-light shadow-sm">
            <button
              onClick={() => setLang('id')}
              className={`relative z-10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                lang === 'id' ? 'text-white' : 'text-text-muted hover:text-text-heading'
              }`}
              aria-label="Pilih Bahasa Indonesia"
            >
              <span>🇮🇩</span>
              <span className="hidden sm:inline">IND</span>
            </button>
            
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                lang === 'en' ? 'text-white' : 'text-text-muted hover:text-text-heading'
              }`}
              aria-label="Select English Language"
            >
              <span>🇬🇧</span>
              <span className="hidden sm:inline">ENG</span>
            </button>

            {/* Slider background pill */}
            <div
              className="absolute top-1 bottom-1 left-1 rounded-full bg-primary-warm transition-all duration-300 shadow-sm"
              style={{
                width: 'calc(50% - 4px)',
                transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0)',
              }}
            />
          </div>

          {/* Quick Header Action button */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex bg-primary-warm hover:bg-[#70360f] text-bg-cream font-bold text-xs py-2 px-4 rounded-full transition-colors cursor-pointer items-center gap-1.5 shrink-0"
          >
            <span>{t.bookTicketBtn}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="xl:hidden p-2 text-text-heading cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-bg-cream border-t border-border-light px-4 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2 font-body text-sm font-medium rounded-md transition-colors ${
                activeSection === item.id 
                  ? 'bg-bg-sand text-primary-warm' 
                  : 'text-text-body hover:bg-bg-sand/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 px-4 sm:hidden">
             <button
              onClick={() => {
                onOpenBooking();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary-warm text-bg-cream font-bold text-sm py-2 px-4 rounded-full transition-colors text-center cursor-pointer"
            >
              {t.bookTicketBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
