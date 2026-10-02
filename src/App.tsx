import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import ActivitiesSection from './components/ActivitiesSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import MapSection from './components/MapSection';
import UmkmSection from './components/UmkmSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Language } from './types';
import { translations } from './translations';
import { Ticket } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeSection, setActiveSection] = useState<string>('beranda');
  
  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string | undefined>(undefined);

  const t = translations[lang];

  // Smooth-scroll helper with offset for sticky header
  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
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
      const sections = [
        'beranda',
        'tentang',
        'kegiatan',
        'kisah',
        'galeri',
        'peta',
        'umkm',
        'pemesanan',
        'faq',
        'kontak'
      ];
      const scrollPosition = window.scrollY + 120;

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
  const handleOpenBooking = (packageId?: string) => {
    setPreselectedPackageId(packageId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-cream text-text-body flex flex-col font-body selection:bg-primary-warm selection:text-white smooth-scroll" id="app-root-container">
      
      {/* 1. Header (Navbar, Brand, Language Switcher, Action CTA) */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* 2. Main Content Flow */}
      <main className="flex-grow" id="main-content-flow">
        {/* Section 1: Hero */}
        <HeroSection
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 2: Tentang Kami (History) */}
        <HistorySection lang={lang} />

        {/* Section 3: Kegiatan Wisata (3 Tour Packages) */}
        <ActivitiesSection
          lang={lang}
          onOpenBooking={(packageId) => handleOpenBooking(packageId)}
        />

        {/* Section 4: Kisah Batik (Artisan Story & Quote) */}
        <StorySection lang={lang} />

        {/* Section 5: Galeri (Photo Showcase) */}
        <GallerySection lang={lang} />

        {/* Section 6: Peta Wisata (Interactive Map) */}
        <MapSection lang={lang} />

        {/* Section 7: UMKM (Local Businesses) */}
        <UmkmSection lang={lang} />

        {/* Section 8: Pemesanan (Inline Booking Form) */}
        <BookingSection
          lang={lang}
          onOpenBooking={(packageId) => handleOpenBooking(packageId)}
        />

        {/* Section 9: FAQ (Accordion Q&A) */}
        <FaqSection lang={lang} />

        {/* Section 10: Kontak */}
        <ContactSection lang={lang} />
      </main>

      {/* 3. Footer */}
      <Footer lang={lang} />

      {/* 4. Complete Booking & QRIS Payment Modal Flow */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        preselectedPackageId={preselectedPackageId}
      />

      {/* 5. Quick Floating "Pesan Tiket" Button */}
      <div className="fixed bottom-6 right-6 z-40" id="floating-quick-ticket">
        <button
          onClick={() => handleOpenBooking()}
          className="bg-primary-warm hover:bg-primary-warm-hover text-bg-cream p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          id="floating-ticket-btn"
        >
          <Ticket className="w-5 h-5 text-accent-gold group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-xs font-body font-bold tracking-wide">
            {t.bookTicketBtn}
          </span>
        </button>
      </div>

    </div>
  );
}
