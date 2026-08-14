import React from 'react';
import { Handshake, ShieldCheck, Award, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations, partnersList } from '../translations';

interface PartnersSectionProps {
  lang: Language;
}

export default function PartnersSection({ lang }: PartnersSectionProps) {
  const t = translations[lang].partners;

  return (
    <section id="mitra" className="py-16 md:py-24 bg-heritage-sand/30 border-y border-stone-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-heritage-terracotta uppercase">
            <Handshake className="w-4 h-4 text-heritage-terracotta" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-heritage-dark tracking-tight" id="partners-title">
            {t.title}
          </h2>
          <p className="text-sm text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Partners Logo Badges Grid as requested ("tiap mitra akan ada logo -logonya") */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" id="partners-logo-grid">
          {partnersList.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-2xs hover:shadow-md hover:border-heritage-terracotta/40 transition-all flex flex-col items-center justify-between text-center group"
              id={`partner-card-${partner.id}`}
            >
              {/* Partner Logo Emblem Mockup Box */}
              <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-center mb-3 shadow-inner group-hover:scale-105 transition-transform">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-serif font-bold text-sm shadow-xs"
                  style={{ backgroundColor: partner.logoColor }}
                >
                  <Building2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Partner Name */}
              <div className="space-y-1">
                <h3 className="font-serif font-black text-xs sm:text-sm text-stone-900 leading-snug group-hover:text-heritage-terracotta transition-colors">
                  {partner.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium leading-tight">
                  {partner.role[lang]}
                </p>
              </div>

              {/* Official stamp tag */}
              <div className="mt-3 pt-2 border-t border-stone-100 w-full flex items-center justify-center gap-1 text-[9px] font-mono font-bold text-stone-400 uppercase">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{partner.logoPlaceholderText}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Partnership Footnote Note */}
        <div className="mt-10 text-center max-w-2xl mx-auto text-xs text-stone-500 font-serif italic">
          "{t.partnershipNote}"
        </div>

      </div>
    </section>
  );
}
