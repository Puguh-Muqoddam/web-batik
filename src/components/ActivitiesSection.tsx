import React from 'react';
import { motion } from 'motion/react';
import { ActivitiesProps } from '../types';
import { translations } from '../translations';
import { formatRupiah } from '../lib/formatters';

const packages = [
  {
    id: 'paket-1',
    title: 'Paket Membatik Tulis',
    price: 85000,
    duration: '2–3 Jam · Min. 1 Orang',
    description: 'Belajar proses membatik tulis dari awal bersama pengrajin berpengalaman. Hasil karya dapat dibawa pulang.',
  },
  {
    id: 'paket-2',
    title: 'Paket Wisata Kampung',
    price: 55000,
    duration: '1,5 Jam · Min. 2 Orang',
    description: 'Eksplorasi sejarah kampung Jetis dan melihat langsung proses produksi di beberapa rumah pengrajin.',
  },
  {
    id: 'paket-3',
    title: 'Paket Privat Keluarga',
    price: 650000,
    duration: 'Setengah Hari · Maks. 8 Orang',
    description: 'Tur privat eksklusif untuk keluarga. Termasuk sesi membatik lengkap, pemandu khusus, dan makan siang.',
  },
];

export default function ActivitiesSection({ lang, onOpenBooking }: ActivitiesProps) {
  const t = translations[lang].activities;

  return (
    <section id="kegiatan" className="py-20 bg-bg-sand">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-block">{t.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-border-light p-6 flex flex-col h-full"
            >
              <h3 className="font-heading text-2xl font-bold text-text-heading mb-2">
                {pkg.title}
              </h3>
              <p className="text-text-muted text-sm mb-4">{pkg.duration}</p>
              <p className="text-text-body flex-grow mb-6">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="font-heading text-3xl font-bold text-primary-warm">
                  {formatRupiah(pkg.price)}
                </span>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <button
                  className="text-primary-warm font-medium hover:underline text-sm"
                  onClick={() => onOpenBooking(pkg.id)}
                >
                  {t.viewDetail}
                </button>
                <button
                  onClick={() => onOpenBooking(pkg.id)}
                  className="bg-primary-warm text-white rounded-full px-6 py-2 font-medium hover:bg-opacity-90 transition-colors"
                >
                  {t.bookBtn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
