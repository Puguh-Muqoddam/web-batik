import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { BookingModalProps } from '../types';
import { translations } from '../translations';
import { formatRupiah, generateTicketCode, generateCouponCode } from '../lib/formatters';

const packagesData = [
  { id: 'paket-1', title: 'Membatik Tulis', price: 85000 },
  { id: 'paket-2', title: 'Wisata Kampung', price: 55000 },
  { id: 'paket-3', title: 'Privat Keluarga', price: 650000 },
];

export default function BookingModal({ isOpen, onClose, lang, preselectedPackageId }: BookingModalProps) {
  const t = translations[lang].payment;
  const tBooking = translations[lang].booking;
  
  const [step, setStep] = useState(1);
  const [session, setSession] = useState<'pagi' | 'siang' | 'sore'>('pagi');
  const [ticketCode, setTicketCode] = useState('');
  const [fashionCoupon, setFashionCoupon] = useState('');
  const [fnbCoupon, setFnbCoupon] = useState('');

  const pkg = packagesData.find(p => p.id === (preselectedPackageId || 'paket-1')) || packagesData[0];

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setTicketCode(generateTicketCode());
      setFashionCoupon(generateCouponCode('FSN'));
      setFnbCoupon(generateCouponCode('FNB'));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={step !== 2 ? onClose : undefined} 
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex justify-between items-center p-6 border-b border-border-light bg-bg-cream">
          <h3 className="font-heading text-2xl font-bold text-text-heading">
            {step === 1 ? t.step1Title : step === 2 ? t.step2Title : t.step3Title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={20} className="text-text-muted" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="bg-bg-sand p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-muted">{tBooking.packageLabel}</span>
                    <span className="font-bold text-text-heading">{pkg.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">{tBooking.pricePerPerson}</span>
                    <span className="font-bold text-primary-warm">{formatRupiah(pkg.price)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-heading mb-3">
                    {tBooking.sessionLabel}
                  </label>
                  <div className="space-y-3">
                    {['pagi', 'siang', 'sore'].map((s) => (
                      <label 
                        key={s} 
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${session === s ? 'border-primary-warm bg-primary-warm/5' : 'border-border-light hover:bg-bg-sand'}`}
                      >
                        <input
                          type="radio"
                          name="session"
                          value={s}
                          checked={session === s}
                          onChange={() => setSession(s as any)}
                          className="w-4 h-4 text-primary-warm focus:ring-primary-warm"
                        />
                        <span className="ml-3 text-text-body font-medium">
                          {s === 'pagi' ? tBooking.sessionPagi : s === 'siang' ? tBooking.sessionSiang : tBooking.sessionSore}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-center space-y-6"
              >
                <p className="text-text-body">{t.step2Subtitle}</p>
                
                <div className="bg-bg-sand aspect-square max-w-[240px] mx-auto rounded-xl flex items-center justify-center border-2 border-dashed border-border-light relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-heading text-xl font-bold text-text-muted">QRIS Code</span>
                  </div>
                </div>

                <p className="text-sm text-text-muted">{t.scanInstruction}</p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <p className="text-text-body mb-6">{t.step3Subtitle}</p>
                
                <div className="bg-primary-warm/10 p-6 rounded-xl border border-primary-warm/20">
                  <span className="block text-sm text-text-muted mb-2">{t.ticketCodeLabel}</span>
                  <span className="font-heading text-4xl font-bold text-primary-warm tracking-wider block mb-2">
                    {ticketCode}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    {t.statusPaid}
                  </span>
                </div>

                <div className="text-left bg-bg-sand p-4 rounded-lg">
                  <h4 className="font-bold text-text-heading mb-3">{t.couponsTitle}</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-border-light pb-2">
                      <span className="text-sm text-text-body">{t.fashionCoupon}</span>
                      <span className="font-mono font-bold text-accent-gold">{fashionCoupon}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-sm text-text-body">{t.fnbCoupon}</span>
                      <span className="font-mono font-bold text-accent-gold">{fnbCoupon}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 border-t border-border-light bg-white flex justify-between items-center">
          {step > 1 && step < 3 ? (
            <button 
              onClick={handleBack}
              className="px-6 py-2 rounded-lg font-medium text-text-body hover:bg-bg-sand transition-colors"
            >
              {t.backBtn}
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={handleNext}
              className="bg-primary-warm text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors ml-auto"
            >
              {tBooking.submitBtn}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="bg-primary-warm text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors w-full"
            >
              {t.finishBtn}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
