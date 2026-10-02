import { useState } from 'react';
import { SectionProps } from '../types';
import { translations } from '../translations';
import petaWisata from '../assets/images/Peta wisata.png';

export default function MapSection({ lang }: SectionProps) {
  const t = translations[lang];
  const [mapType, setMapType] = useState<'google' | 'custom'>('google');

  return (
    <section id="peta" className="py-20 bg-bg-cream font-body">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <span className="section-badge mb-4 inline-block">{t.map.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading mb-4">
            {t.map.heading}
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            {t.map.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-border-light overflow-hidden shadow-sm">
            <button
              onClick={() => setMapType('google')}
              className={`px-6 py-2.5 font-semibold transition-colors ${
                mapType === 'google' 
                  ? 'bg-primary-warm text-white' 
                  : 'bg-white text-text-body hover:bg-gray-50'
              }`}
            >
              {t.map.toggleGoogle}
            </button>
            <button
              onClick={() => setMapType('custom')}
              className={`px-6 py-2.5 font-semibold transition-colors border-l border-border-light ${
                mapType === 'custom' 
                  ? 'bg-primary-warm text-white' 
                  : 'bg-white text-text-body hover:bg-gray-50'
              }`}
            >
              {t.map.toggleCustom}
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md border border-border-light aspect-video bg-white relative">
          {mapType === 'google' ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d112.7167!3d-7.4519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKampung+Batik+Jetis!5e0!3m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Kampung Batik Jetis"
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
              <img 
                src={petaWisata} 
                alt="Peta Wisata Kampung Batik Jetis" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
