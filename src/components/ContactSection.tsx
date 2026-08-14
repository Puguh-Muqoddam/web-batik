import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = translations[lang].contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-stone-900 text-white scroll-mt-28 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" id="contact-title">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-stone-400 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Information & Social Media Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="contact-info-grid">
          
          {/* Left Column: Direct Contacts (Phone, Gmail, Instagram, TikTok, Address) - Column 6 */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between" id="contact-channels-column">
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
                {t.secretariatTitle}
              </h3>
              
              {/* 1. Phone / WhatsApp Info Card */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-400/60 transition-colors group cursor-pointer"
                id="contact-card-phone"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                    {t.phoneLabel}
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                    {t.phoneValue}
                  </div>
                </div>
              </a>

              {/* 2. Gmail Official Address Card */}
              <a
                href="mailto:jejakjetis.sidoarjo@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-400/60 transition-colors group cursor-pointer"
                id="contact-card-email"
              >
                <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-700 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                    {t.emailLabel}
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-white group-hover:text-amber-300 transition-colors break-all">
                    {t.emailValue}
                  </div>
                </div>
              </a>

              {/* 3. Social Media Accounts (Instagram & TikTok) Card */}
              <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3" id="contact-social-card">
                <div className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider">
                  {t.socialTitle}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Instagram Direct Link */}
                  <a
                    href="https://instagram.com/jejakjetis_sidoarjo"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-700 hover:border-pink-500 transition-colors group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-pink-950/80 text-pink-400 flex items-center justify-center shrink-0">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-stone-400 uppercase">Instagram</div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-pink-300 truncate">
                        @jejakjetis_sidoarjo
                      </div>
                    </div>
                  </a>

                  {/* TikTok Direct Link */}
                  <a
                    href="https://tiktok.com/@jejakjetis.sidoarjo"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-700 hover:border-teal-400 transition-colors group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-950/80 text-teal-300 flex items-center justify-center shrink-0">
                      <TikTokIcon className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-stone-400 uppercase">TikTok</div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-teal-300 truncate">
                        @jejakjetis.sidoarjo
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* 4. Physical Secretariat & Hours Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-700/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.addressLabel}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-normal">
                    {t.addressValue}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-700/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.hoursLabel}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-normal">
                    {t.hoursValue}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message / Inquiry Form - Column 6 */}
          <div className="lg:col-span-6 bg-stone-800 rounded-3xl p-6 sm:p-8 border border-stone-700 relative overflow-hidden flex flex-col justify-between" id="contact-form-column">
            
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-heritage-terracotta via-amber-400 to-heritage-wax" />

            {!isSubmitted ? (
              <form onSubmit={handleSendMessage} className="space-y-4" id="contact-inquiry-form">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    {t.formSubtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-400 mb-1.5">
                    {t.nameField} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Budi Santoso"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-400 mb-1.5">
                    {t.emailField} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="budi@example.com"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-400 mb-1.5">
                    {t.msgField} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={lang === 'id' ? 'Tuliskan pesan pertanyaan atau reservasi kunjungan kelompok Anda...' : 'Write your inquiry or group booking request...'}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendBtn}</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                  {lang === 'id'
                    ? `Terima kasih Bapak/Ibu ${formState.name}. Tim sekretariat Jejak Jetis akan membalas melalui WhatsApp / Email (${formState.email}) segera.`
                    : `Thank you ${formState.name}. The Jejak Jetis secretariat team will reply via WhatsApp / Email (${formState.email}) shortly.`}
                </p>
                <button
                  onClick={() => {
                    setFormState({ name: '', email: '', message: '' });
                    setIsSubmitted(false);
                  }}
                  className="text-xs font-mono text-amber-300 hover:text-amber-200 underline cursor-pointer pt-4 block mx-auto"
                >
                  {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Inquiry'}
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} JEJAK JETIS • {lang === 'id' ? 'Cagar Budaya Kampung Batik Jetis Sidoarjo' : 'Kampung Batik Jetis Sidoarjo Heritage'}
          </div>
          <div className="text-[11px] text-stone-400">
            {lang === 'id' ? 'Dilindungi Undang-Undang Cagar Budaya & Hak Cipta Tradisional' : 'Protected under Heritage Cultural Conservation'}
          </div>
        </div>

      </div>
    </section>
  );
}
