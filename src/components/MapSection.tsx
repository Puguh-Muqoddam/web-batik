import React, { useState } from 'react';
import { Map, MapPin, Navigation, Compass, ExternalLink, Car, Train, Landmark, Sparkles, Footprints, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import mapImg from '../assets/images/6.png';

interface MapSectionProps {
  lang: Language;
}

interface CustomMarker {
  id: string;
  name: { id: string; en: string };
  category: 'key' | 'route' | 'nearby';
  categoryLabel: { id: string; en: string };
  x: number; // percentage on map
  y: number; // percentage on map
  icon: any;
  color: string;
  description: { id: string; en: string };
  distance: { id: string; en: string };
}

export default function MapSection({ lang }: MapSectionProps) {
  const t = translations[lang].map;
  
  // Slider state: 'custom' | 'google'
  const [activeMapType, setActiveMapType] = useState<'custom' | 'google'>('custom');
  const [selectedMarkerId, setSelectedMarkerId] = useState<string>('m-gate');

  const customMarkers: CustomMarker[] = [
    {
      id: 'm-gate',
      name: { id: 'Gapura Masuk Ikonik Jetis', en: 'Iconic Jetis Welcome Gate' },
      category: 'key',
      categoryLabel: { id: 'Lokasi Kunci', en: 'Key Location' },
      x: 20,
      y: 78,
      icon: Landmark,
      color: '#8c2d19',
      description: {
        id: 'Pintu gerbang utama berhiaskan relief motif batik merak. Titik kumpul awal dan pusat verifikasi e-ticket wisatawan.',
        en: 'Main entrance archway decorated with peacock batik reliefs. Initial meeting point and visitor e-ticket verification.'
      },
      distance: { id: 'Titik Start Kunjungan', en: 'Tour Starting Point' }
    },
    {
      id: 'm-masjid-abror',
      name: { id: "Masjid Jami' Al Abror (Masjid Tertua)", en: "Masjid Jami' Al Abror (Oldest Mosque)" },
      category: 'key',
      categoryLabel: { id: 'Cagar Budaya', en: 'Heritage Site' },
      x: 32,
      y: 35,
      icon: Landmark,
      color: '#047857',
      description: {
        id: "Masjid tertua di Sidoarjo yang menjadi pusat peradaban dan syiar Islam awal di kawasan Jetis, sarat nilai arsitektur pusaka.",
        en: 'The oldest historic mosque in Sidoarjo, central to early civilization and Islamic heritage in Jetis.'
      },
      distance: { id: '200 meter dari Gapura', en: '200m from Main Gate' }
    },
    {
      id: 'm-makam-mulyadi',
      name: { id: 'Makam Mbah Mulyadi & Mbah Minto', en: 'Tomb of Mbah Mulyadi & Mbah Minto' },
      category: 'key',
      categoryLabel: { id: 'Situs Pusaka', en: 'Ancestral Site' },
      x: 75,
      y: 32,
      icon: Landmark,
      color: '#b45309',
      description: {
        id: 'Situs makam sesepuh pejuang dan penyebar tradisi batik Jetis (1675) beserta sumur kuno perendaman kain mori.',
        en: 'Sacred tomb of pioneer elders who preserved Jetis batik tradition (1675) and historic dye-soaking wells.'
      },
      distance: { id: '350 meter dari Gapura', en: '350m from Main Gate' }
    },
    {
      id: 'm-workshop',
      name: { id: 'Sanggar Canting & Demo Membatik', en: 'Canting Workshop & Live Demo' },
      category: 'key',
      categoryLabel: { id: 'Lokasi Edukasi', en: 'Workshop Site' },
      x: 48,
      y: 56,
      icon: Sparkles,
      color: '#dc2626',
      description: {
        id: 'Studio belajar mencanting bersama maestro, pengenalan wajan malam panas tanah liat, dan pewarnaan merah sardo.',
        en: 'Hands-on canting studio with master artisans, hot wax stoves, clay pans, and natural sardo dyeing vats.'
      },
      distance: { id: '150 meter dari Gapura', en: '150m from Main Gate' }
    },
    {
      id: 'm-umkm-center',
      name: { id: 'Sentra Butik & Galeri UMKM Jetis', en: 'UMKM Boutiques & Fabric Center' },
      category: 'key',
      categoryLabel: { id: 'Sentra Belanja', en: 'Shopping Area' },
      x: 54,
      y: 72,
      icon: Footprints,
      color: '#d97706',
      description: {
        id: 'Kawasan deretan toko busana batik tulis, kriya suvenir, serta tempat penukaran kupon diskon tiket wisata.',
        en: 'Row of verified batik fashion boutiques, craft souvenirs, and coupon redemption counters.'
      },
      distance: { id: '180 meter dari Gapura', en: '180m from Main Gate' }
    },
    {
      id: 'm-station',
      name: { id: 'Stasiun Kereta Api Sidoarjo', en: 'Sidoarjo Railway Station' },
      category: 'nearby',
      categoryLabel: { id: 'Akses Transportasi', en: 'Nearby Transit' },
      x: 14,
      y: 18,
      icon: Train,
      color: '#0284c7',
      description: {
        id: 'Stasiun kereta api utama Sidoarjo (melayani KRL Commuter Line Supas & Kereta Antarkota). Hanya 3-5 menit ke Jetis.',
        en: 'Main train station in Sidoarjo (serving Commuter Line & Intercity trains). 3-5 minutes to Jetis.'
      },
      distance: { id: '800 meter ke Jetis', en: '800m to Jetis Village' }
    },
    {
      id: 'm-parking',
      name: { id: 'Area Parkir Bus & Mobil Wisata', en: 'Bus & Car Parking Area' },
      category: 'nearby',
      categoryLabel: { id: 'Fasilitas Parkir', en: 'Nearby Facility' },
      x: 22,
      y: 92,
      icon: Car,
      color: '#475569',
      description: {
        id: 'Lahan parkir luas terpadu untuk bus pariwisata besar, elf rombongan sekolah, dan kendaraan pribadi.',
        en: 'Spacious integrated parking area for tour buses, student vans, and private visitor cars.'
      },
      distance: { id: '50 meter dari Gapura', en: '50m to Entrance Gate' }
    }
  ];

  const activeMarker = customMarkers.find(m => m.id === selectedMarkerId) || customMarkers[0];

  return (
    <section id="peta" className="py-20 md:py-28 bg-heritage-sand/30 border-y border-stone-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-heritage-terracotta uppercase">
            <Map className="w-4 h-4 text-heritage-terracotta" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-heritage-dark tracking-tight" id="map-title">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* SLIDER / TOGGLE SWITCH BUTTON: Google Maps vs Custom Map */}
        <div className="flex justify-center mb-8">
          <div className="bg-stone-200/80 p-1.5 rounded-2xl flex items-center shadow-inner border border-stone-300 relative max-w-md w-full" id="map-slider-toggle">
            
            <button
              onClick={() => setActiveMapType('custom')}
              className={`relative z-10 w-1/2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMapType === 'custom'
                  ? 'text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              id="toggle-custom-map-btn"
            >
              <Compass className="w-4 h-4" />
              <span className="truncate">{t.toggleCustom}</span>
            </button>

            <button
              onClick={() => setActiveMapType('google')}
              className={`relative z-10 w-1/2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeMapType === 'google'
                  ? 'text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              id="toggle-google-map-btn"
            >
              <MapPin className="w-4 h-4" />
              <span className="truncate">{t.toggleGoogle}</span>
            </button>

            {/* Slider pill indicator */}
            <div
              className="absolute top-1.5 bottom-1.5 left-1.5 rounded-xl bg-heritage-terracotta transition-all duration-300 shadow-sm"
              style={{
                width: 'calc(50% - 6px)',
                transform: activeMapType === 'google' ? 'translateX(100%)' : 'translateX(0)',
              }}
            />
          </div>
        </div>

        {/* Side-by-Side Map & Legend Layout (No Legend Below Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Map View Port - Left/Center Column (8 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden min-h-[480px] lg:min-h-[560px] relative flex flex-col justify-between" id="map-viewport">
            
            {activeMapType === 'google' ? (
              /* Google Maps View */
              <div className="w-full h-full relative flex-grow min-h-[480px] lg:min-h-[560px]">
                <iframe
                  src="https://maps.google.com/maps?q=-7.4565982352030895,112.71444482410993&z=16&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Kampoeng Batik Jetis Sidoarjo"
                />
                
                <div className="absolute top-4 right-4 z-20">
                  <a
                    href="https://maps.google.com/?q=-7.4565982352030895,112.71444482410993"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/95 hover:bg-white text-stone-900 text-xs font-bold px-3.5 py-2 rounded-xl shadow-md border border-stone-200 flex items-center gap-1.5 backdrop-blur-xs transition-all cursor-pointer"
                  >
                    <span>{t.openInGmaps}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-heritage-terracotta" />
                  </a>
                </div>
              </div>
            ) : (
              /* Custom Static Image Map */
              <div className="w-full h-full relative bg-[#f7f3ec] overflow-hidden select-none min-h-[480px] lg:min-h-[560px] flex items-center justify-center">
                <img 
                  src={mapImg} 
                  alt="Peta Wisata Jetis" 
                  className="w-full h-full object-cover sm:object-contain"
                />
              </div>
            )}

          </div>

          {/* Side Panel: Information & Legends Placed Completely Beside the Map */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-4" id="map-side-legend-panel">
            
            {/* Active Selected Landmark Info Card */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-stone-200/90 shadow-sm space-y-3.5">
              <div>
                <span className="text-[10px] font-mono font-bold text-heritage-terracotta uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  {activeMarker.categoryLabel[lang]}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-black text-stone-900 leading-snug mt-2" id="active-marker-name">
                  {activeMarker.name[lang]}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed" id="active-marker-desc">
                {activeMarker.description[lang]}
              </p>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-center gap-2.5 text-xs text-amber-900 font-medium">
                <Navigation className="w-4 h-4 text-heritage-terracotta shrink-0" />
                <span>{activeMarker.distance[lang]}</span>
              </div>
            </div>

            {/* Complete Legend & Marker List in Side Panel */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                <h4 className="font-serif font-black text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
                  <Info className="w-4 h-4 text-heritage-terracotta" />
                  <span>{t.legendTitle}</span>
                </h4>
                <span className="text-[10px] font-mono text-stone-400">
                  {customMarkers.length} Titik Lokasi
                </span>
              </div>

              {/* Route Guide Mini Indicator */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200/70">
                <span className="w-3 h-0.5 bg-heritage-terracotta border-b border-dashed border-heritage-terracotta shrink-0" />
                <span className="truncate">{t.legendRoute} (Jalur Jalan Kaki ~1 Jam)</span>
              </div>

              {/* List of Markers to Click and Highlight */}
              <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1" id="map-legend-items">
                {customMarkers.map((marker) => {
                  const isSelected = selectedMarkerId === marker.id;
                  const Icon = marker.icon;

                  return (
                    <button
                      key={marker.id}
                      onClick={() => {
                        setSelectedMarkerId(marker.id);
                        if (activeMapType === 'google') setActiveMapType('custom');
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 text-xs cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/90 border-heritage-terracotta font-bold text-heritage-terracotta shadow-xs'
                          : 'bg-stone-50/50 hover:bg-stone-100 border-stone-200/80 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white shadow-2xs"
                          style={{ backgroundColor: marker.color }}
                        >
                          <Icon className="w-3 h-3" />
                        </div>
                        <span className="truncate">{marker.name[lang]}</span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 shrink-0">
                        {marker.category === 'nearby' ? 'Akses' : 'Situs'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
