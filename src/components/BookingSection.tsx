import React, { useState } from 'react';
import { BookingSectionProps } from '../types';
import { translations } from '../translations';
import { formatRupiah } from '../lib/formatters';

const packagesData = [
  { id: 'paket-1', title: 'Membatik Tulis', price: 85000 },
  { id: 'paket-2', title: 'Wisata Kampung', price: 55000 },
  { id: 'paket-3', title: 'Privat Keluarga', price: 650000 },
];

export default function BookingSection({ lang, onOpenBooking }: BookingSectionProps) {
  const t = translations[lang].booking;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    packageId: 'paket-1',
    visitDate: '',
    visitorCount: 1,
  });

  const selectedPackage = packagesData.find((p) => p.id === formData.packageId) || packagesData[0];
  const totalPrice = selectedPackage.price * formData.visitorCount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'visitorCount' ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(formData.packageId);
  };

  return (
    <section id="pemesanan" className="py-20 bg-bg-cream">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="section-badge mb-4 inline-block">{t.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading mb-4">
            {t.heading}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-border-light shadow-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.nameLabel}</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.whatsappLabel}</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.packageLabel}</label>
                <select
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleChange}
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                >
                  {packagesData.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.dateLabel}</label>
                <input
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-heading">{t.visitorsLabel}</label>
                <input
                  type="number"
                  name="visitorCount"
                  min="1"
                  max="8"
                  value={formData.visitorCount}
                  onChange={handleChange}
                  required
                  className="border border-border-light rounded-lg px-4 py-3 bg-white focus:border-primary-warm focus:ring-1 focus:ring-primary-warm outline-none"
                />
              </div>
              
              <div className="md:col-span-2 mt-4">
                 <button
                    type="submit"
                    className="bg-primary-warm text-white w-full py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors hidden md:block"
                  >
                    {t.submitBtn}
                  </button>
              </div>
            </form>
          </div>

          <div className="bg-bg-dark rounded-xl p-8 text-text-on-dark flex flex-col h-full">
            <h3 className="font-heading text-2xl font-bold mb-6 border-b border-gray-700 pb-4">
              Ringkasan
            </h3>
            
            <div className="flex justify-between mb-4">
              <span className="text-text-muted">Paket</span>
              <span className="font-medium text-right">{selectedPackage.title}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-text-muted">{t.pricePerPerson}</span>
              <span className="font-medium">{formatRupiah(selectedPackage.price)}</span>
            </div>

            <div className="flex justify-between mb-8">
              <span className="text-text-muted">{t.visitorsLabel}</span>
              <span className="font-medium">{formData.visitorCount} Orang</span>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">{t.totalLabel}</span>
                <span className="font-heading text-3xl font-bold text-accent-gold">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
              
              <button
                onClick={handleSubmit}
                className="bg-primary-warm text-white w-full py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors md:hidden"
              >
                {t.submitBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
