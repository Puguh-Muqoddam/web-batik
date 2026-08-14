import React, { useEffect, useState } from 'react';
import { Footprints, Sparkles, Landmark, ShoppingBag, Clock, Users, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations, tourActivitiesList } from '../translations';
import { supabase } from '../supabase';

interface ActivitiesSectionProps {
  lang: Language;
  onOpenBooking: (activityId?: string) => void;
}

function getActivityIcon(iconName: string) {
  switch (iconName) {
    case 'Footprints':
      return Footprints;
    case 'Sparkles':
      return Sparkles;
    case 'Landmark':
      return Landmark;
    case 'ShoppingBag':
      return ShoppingBag;
    default:
      return Sparkles;
  }
}

export default function ActivitiesSection({ lang, onOpenBooking }: ActivitiesSectionProps) {
  const t = translations[lang].activities;
  const [activitiesData, setActivitiesData] = useState<any[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase.from('activities').select('*').order('created_at', { ascending: true });
      if (data && data.length > 0) {
        setActivitiesData(data);
      }
    };
    fetchActivities();
  }, []);

  // Jika ada data dari Supabase, gunakan itu. Jika tidak, gunakan data statis bawaan.
  const displayActivities = activitiesData.length > 0 ? activitiesData : tourActivitiesList;


  return (
    <section id="kegiatan" className="py-20 md:py-28 bg-heritage-cream scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Clear 1-Hour Total Duration Context */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-heritage-terracotta uppercase bg-red-50 border border-red-200/80 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-heritage-terracotta" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-heritage-dark tracking-tight" id="activities-title">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Visual Summary Progress Banner (Rangkaian 4 Tahap Berurutan) */}
        <div className="mb-12 bg-amber-500/10 border border-amber-300/80 rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-mono font-bold uppercase text-heritage-terracotta">
                {lang === 'id' ? 'Itinerari 1 Jam Perjalanan Wisata' : '1-Hour Unified Tour Itinerary'}
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                {lang === 'id' 
                  ? 'Jelajah Gang ➔ Praktik Canting ➔ Ziarah Masjid & Makam ➔ Belanja UMKM' 
                  : 'Village Walk ➔ Canting Demo ➔ Heritage Site ➔ UMKM Boutiques'}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-stone-500 font-mono">{lang === 'id' ? 'Tarif Terpadu' : 'Package Fee'}</div>
                <div className="text-base font-serif font-black text-heritage-terracotta">Rp 54.000 / Org</div>
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="bg-heritage-terracotta hover:bg-amber-900 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Ticket className="w-4 h-4 text-amber-200" />
                <span>{lang === 'id' ? 'Pesan Paket Tur (~1 Jam)' : 'Book ~1-Hour Tour'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Activities Rendered as Sequential Steps of the 1-Hour Tour */}
        <div className="space-y-8 relative" id="activities-row-container">
          {displayActivities.map((activity, index) => {
            const iconName = activity.iconName || 'Sparkles';
            const Icon = getActivityIcon(iconName);
            const isReversed = index % 2 === 1;

            const title = activity.title ? activity.title[lang] : activity.name;
            const subtitle = activity.subtitle ? activity.subtitle[lang] : `Rp ${activity.price || '54.000'}`;
            const description = activity.description && typeof activity.description === 'object' ? activity.description[lang] : activity.description;
            const highlights = activity.highlights ? activity.highlights[lang] : [];
            const duration = activity.duration || 'Flexible';
            const capacity = activity.capacity || 'Group';
            const imageUrl = activity.imageUrl || activity.image_url;

            return (
              <div
                key={activity.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group p-6 sm:p-8 relative"
                id={`activity-row-${activity.id}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Photo & Icon column */}
                  <div className={`lg:col-span-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden shadow-xs border border-stone-200 bg-stone-100 group-hover:border-heritage-terracotta/40 transition-colors aspect-16/10 sm:aspect-16/9 lg:aspect-4/3">
                      <img
                        src={imageUrl}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80";
                        }}
                      />
                      {/* Floating step icon badge */}
                      <div className="absolute top-3 left-3 bg-heritage-terracotta text-white p-2.5 rounded-xl shadow-md flex items-center justify-center">
                        <Icon className="w-5 h-5 text-amber-200" />
                      </div>

                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-md">
                        {duration}
                      </div>
                    </div>
                  </div>

                  {/* Text, description, highlights, & sequence info */}
                  <div className={`lg:col-span-8 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-mono font-bold text-white bg-heritage-terracotta px-3 py-1 rounded-md uppercase tracking-wider">
                          {lang === 'id' ? `Urutan ${index + 1}` : `Stage ${index + 1}`}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium font-mono">
                          <Clock className="w-3.5 h-3.5 text-heritage-terracotta" />
                          <span>{duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                          <Users className="w-3.5 h-3.5 text-heritage-terracotta" />
                          <span>{capacity}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-stone-900 leading-tight group-hover:text-heritage-terracotta transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-heritage-terracotta font-medium mt-1">
                        {subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {description}
                    </p>

                    {/* Highlights bullet checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {highlights && highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stage Footer */}
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100">
                      <div className="text-xs text-stone-500">
                        <span className="font-bold text-stone-800">{lang === 'id' ? 'Bagian dari 1 Paket:' : 'Included in 1 Package:'}</span>{' '}
                        {lang === 'id' ? 'Termasuk dalam tiket Rp 54.000,-' : 'Included in Rp 54,000 tour pass'}
                      </div>

                      <button
                        onClick={() => onOpenBooking(activity.id)}
                        className="bg-stone-900 hover:bg-heritage-terracotta text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer group/btn"
                        id={`btn-book-act-${activity.id}`}
                      >
                        <Ticket className="w-4 h-4 text-amber-300" />
                        <span>{t.bookThisSession}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
