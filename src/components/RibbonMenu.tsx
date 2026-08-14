import React from 'react';
import { Home, History, Sparkles, Map, Handshake, Store, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface RibbonMenuProps {
  lang: Language;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export default function RibbonMenu({ lang, activeSection, onSelectSection }: RibbonMenuProps) {
  const m = translations[lang].menu;

  const menuItems = [
    { id: 'beranda', label: m.home, icon: Home },
    { id: 'sejarah', label: m.history, icon: History },
    { id: 'kegiatan', label: m.activities, icon: Sparkles },
    { id: 'peta', label: m.map, icon: Map },
    { id: 'mitra', label: m.partners, icon: Handshake },
    { id: 'umkm', label: m.umkm, icon: Store },
    { id: 'kontak', label: m.contact, icon: PhoneCall },
  ];

  return (
    <nav className="bg-heritage-terracotta sticky top-20 z-40 shadow-md border-y border-amber-900" id="ribbon-menu-nav">
      {/* Decorative Traditional Batik Dot Pattern top strip */}
      <div className="h-1 bg-[radial-gradient(circle_at_center,_#dfa837_1px,_transparent_1px)] bg-[size:10px_10px] opacity-75" />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <ul className="flex items-center justify-start lg:justify-center overflow-x-auto gap-1 sm:gap-2 py-2 scrollbar-none scroll-smooth" id="ribbon-menu-list">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id} className="shrink-0">
                <button
                  onClick={() => onSelectSection(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 select-none cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-heritage-cream text-heritage-terracotta shadow-xs scale-102 font-extrabold'
                      : 'text-amber-100 hover:text-white hover:bg-white/15'
                  }`}
                  id={`ribbon-item-${item.id}`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-heritage-terracotta' : 'text-amber-200'}`} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Decorative Traditional Batik Dot Pattern bottom strip */}
      <div className="h-1 bg-[radial-gradient(circle_at_center,_#dfa837_1px,_transparent_1px)] bg-[size:10px_10px] opacity-75" />
    </nav>
  );
}
