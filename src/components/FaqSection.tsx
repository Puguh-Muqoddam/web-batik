import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SectionProps } from '../types';
import { translations } from '../translations';

export default function FaqSection({ lang }: SectionProps) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Apakah saya perlu pengalaman membatik sebelumnya?",
      a: "Tidak perlu. Semua paket kami cocok untuk pemula. Pengrajin kami akan membimbing Anda langkah demi langkah dari awal hingga selesai."
    },
    {
      q: "Berapa lama waktu yang dibutuhkan untuk satu sesi membatik?",
      a: "Paket Membatik Tulis berlangsung sekitar 2–3 jam. Paket Wisata Kampung memakan waktu 1,5 jam. Paket Privat Keluarga dijalankan selama setengah hari penuh."
    },
    {
      q: "Apakah batik yang saya buat bisa dibawa pulang?",
      a: "Ya, tentu. Hasil batik yang Anda buat selama sesi akan menjadi milik Anda. Kami juga akan menyelesaikan proses pewarnaan dan pengeringan, sehingga kain siap dibawa pulang."
    },
    {
      q: "Bagaimana cara pembayaran dan konfirmasi pesanan?",
      a: "Setelah mengisi formulir pemesanan, tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam untuk konfirmasi jadwal dan panduan pembayaran. Pembayaran dapat dilakukan melalui transfer bank atau e-wallet."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-bg-sand font-body">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="section-badge">{t.faq.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading mt-4">
            {t.faq.heading}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-border-light overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-heading text-lg font-semibold text-text-heading">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary-warm transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 text-text-body">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
