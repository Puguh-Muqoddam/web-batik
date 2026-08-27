import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RibbonMenu from './components/RibbonMenu';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import ActivitiesSection from './components/ActivitiesSection';
import MapSection from './components/MapSection';
import PartnersSection from './components/PartnersSection';
import UmkmSection from './components/UmkmSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
import SignageSection from './components/SignageSection';
import { Language } from './types';
import { Ticket } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeSection, setActiveSection] = useState<string>('beranda');
  
  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedActivityId, setPreselectedActivityId] = useState<string | undefined>(undefined);

  // Smooth-scroll helper with offset for sticky header & ribbon
  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 135;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Tracking active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'sejarah', 'kegiatan', 'peta', 'mitra', 'umkm', 'kontak'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle open booking dialog
  const handleOpenBooking = (activityId?: string) => {
    setPreselectedActivityId(activityId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-heritage-cream text-stone-800 flex flex-col font-sans selection:bg-heritage-terracotta selection:text-white smooth-scroll" id="app-root-container">
      
      {/* 1. Header (Logo, JEJAK JETIS, Subtitle, Language Switcher) */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 2. Ribbon Menu (Home, Sejarah, Kegiatan, Peta, Mitra, UMKM, Kontak) */}
      <RibbonMenu
        lang={lang}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* 3. Main Content Flow (Top to Bottom as specified) */}
      <main className="flex-grow" id="main-content-flow">
        
        {/* Section 1: Hero Section (JEJAK JETIS Heritage Site, Solid color + Transparent gradient to right with 3 photo cycle, TikTok, Instagram, Beli Tiket) */}
        <HeroSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 2: Sejarah Kampung Jetis (Foto & teks blend + 7 Motifs ribbon scrolling right-to-left with slanted dividers) */}
        <HistorySection lang={lang} />

        {/* Section 3: Kegiatan Wisata (Tour Kampung Jetis, Demo Membatik, Wisata Situs Bersejarah, Berbelanja UMKM row-by-row) */}
        <ActivitiesSection
          lang={lang}
          onOpenBooking={(actId) => handleOpenBooking(actId)}
        />

        {/* Section 4: Peta Wisata Jetis (Google Maps & Custom Route/Marker Map switchable via Slider toggle) */}
        <MapSection lang={lang} />

        {/* Section 5: Mitra Kerjasama (Logo Grid) */}
        <PartnersSection lang={lang} />

        {/* Section 6: UMKM Jetis (Store showcase & coupon discounts info) */}
        <UmkmSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 6.5: Signage Gallery */}
        <SignageSection lang={lang} />

        {/* Section 7: Contact & Social Media (Phone, Gmail, Instagram, TikTok, Address, hours, message box) */}
        <ContactSection lang={lang} />

      </main>

      {/* 4. Complete Booking & QRIS Payment Modal Flow */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        preselectedActivityId={preselectedActivityId}
      />

      {/* 5. Quick Floating "Beli Tiket" Button */}
      <div className="fixed bottom-6 right-6 z-40" id="floating-quick-ticket">
        <button
          onClick={() => handleOpenBooking()}
          className="bg-heritage-terracotta hover:bg-amber-900 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          id="floating-ticket-btn"
        >
          <Ticket className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-xs font-serif font-bold tracking-wide">
            {lang === 'id' ? 'Beli Tiket (Rp 54rb)' : 'Buy Ticket (Rp 54k)'}
          </span>
        </button>
      </div>

    </div>
  );
}
