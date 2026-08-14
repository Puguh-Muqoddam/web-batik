import React, { useState, useEffect } from 'react';
import { Store, Tag, MapPin, Phone, Instagram, CheckCircle2, ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { translations, jetisUmkmList } from '../translations';
import { supabase } from '../supabase';

interface UmkmSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export default function UmkmSection({ lang, onOpenBooking }: UmkmSectionProps) {
  const t = translations[lang].umkm;
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fashion' | 'fabric' | 'fnb' | 'craft'>('all');
  const [umkmData, setUmkmData] = useState<any[]>([]);

  useEffect(() => {
    const fetchUmkm = async () => {
      const { data, error } = await supabase.from('umkm_stores').select('*').order('created_at', { ascending: false });
      if (data && data.length > 0) {
        setUmkmData(data);
      }
    };
    fetchUmkm();
  }, []);

  const displayUmkmList = umkmData.length > 0 ? umkmData : jetisUmkmList;

  const filteredUmkm = selectedFilter === 'all'
    ? displayUmkmList
    : displayUmkmList.filter(item => item.category === selectedFilter);


  return (
    <section id="umkm" className="py-20 md:py-28 bg-heritage-cream scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-heritage-terracotta uppercase">
            <Store className="w-4 h-4 text-heritage-terracotta" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-heritage-dark tracking-tight" id="umkm-title">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Voucher Info Notice Banner */}
        <div className="mb-10 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-300/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                {lang === 'id' ? 'Gunakan Kupon Diskon Wisata Anda di Seluruh Gerai Mitra' : 'Redeem Your Tour Discount Coupons at All Partner Stores'}
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                {lang === 'id' 
                  ? 'Setiap pembelian 1 tiket wisata (Rp 54.000) otomatis mendapatkan Kupon Rp 30.000 (Busana) & Kupon Rp 5.000 (Kuliner).' 
                  : 'Every tour ticket (Rp 54,000) automatically includes a Rp 30,000 Fashion Voucher & Rp 5,000 Culinary Coupon.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-heritage-terracotta hover:bg-amber-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            {lang === 'id' ? 'Beli Tiket & Dapatkan Kupon' : 'Get Tickets & Coupons'}
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10" id="umkm-filters">
          {[
            { id: 'all' as const, label: t.filterAll },
            { id: 'fashion' as const, label: t.filterFashion },
            { id: 'fabric' as const, label: t.filterFabric },
            { id: 'fnb' as const, label: t.filterFnb },
            { id: 'craft' as const, label: t.filterCraft },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* UMKM Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="umkm-grid">
          {filteredUmkm.map((store) => {
            const categoryLabel = store.categoryLabel ? store.categoryLabel[lang] : store.category;
            const featuredBadge = store.featuredBadge ? store.featuredBadge[lang] : (store.discount_active ? 'Diskon Tersedia' : null);
            const owner = store.owner || 'Warga Jetis';
            const description = store.description && typeof store.description === 'object' ? store.description[lang] : store.description;
            const couponAcceptance = store.couponAcceptance ? store.couponAcceptance[lang] : (store.discount_active ? 'Kupon Diterima' : 'Tidak Menerima Kupon');
            const address = store.address || 'Kampung Jetis';
            const phone = store.phone || '081234567890';
            const instagram = store.instagram || '@jetis';
            
            return (
            <div
              key={store.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between group"
              id={`umkm-card-${store.id}`}
            >
              <div className="space-y-3">
                {/* Store category tag & badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                    {categoryLabel}
                  </span>
                  {featuredBadge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                      {featuredBadge}
                    </span>
                  )}
                </div>

                {/* Store Name & Owner */}
                <div>
                  <h3 className="font-serif font-black text-xl text-stone-900 group-hover:text-heritage-terracotta transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {lang === 'id' ? `Pengelola: ${owner}` : `Proprietor: ${owner}`}
                  </p>
                </div>

                {/* Store Description */}
                <p className="text-xs text-stone-600 leading-relaxed">
                  {description}
                </p>

                {/* Coupon badge on card */}
                <div className="p-2.5 bg-emerald-50 border border-emerald-200/70 rounded-xl flex items-center gap-2 text-[11px] font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{couponAcceptance}</span>
                </div>
              </div>

              {/* Store Contacts & Details Footer */}
              <div className="mt-6 pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{address}</span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1 font-mono text-[11px]">
                  <a
                    href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-700 hover:text-heritage-terracotta flex items-center gap-1 font-bold"
                  >
                    <Phone className="w-3 h-3 text-emerald-600" />
                    <span>{phone}</span>
                  </a>
                  <span className="text-stone-400 flex items-center gap-1">
                    <Instagram className="w-3 h-3 text-pink-600" />
                    <span>{instagram}</span>
                  </span>
                </div>
              </div>

            </div>
          )})}

        </div>

      </div>
    </section>
  );
}
