import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, Users, QrCode, CheckCircle2, AlertCircle, Tag, ArrowRight, ArrowLeft, Download, Share2, Clock, Sparkles, Copy, Check, CalendarDays } from 'lucide-react';
import { Language, DigitalTicket } from '../types';
import { translations, tourSessions } from '../translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedActivityId?: string;
}

// Helper to get nearest upcoming Saturday or Sunday
function getNextWeekendDay(from = new Date()): string {
  const d = new Date(from);
  while (d.getDay() !== 0 && d.getDay() !== 6) {
    d.setDate(d.getDate() + 1);
  }
  return d.toISOString().split('T')[0];
}

export default function BookingModal({ isOpen, onClose, lang }: BookingModalProps) {
  const t = translations[lang].booking;

  // Step state: 1 = Sessions & Biodata, 2 = QRIS Payment (Rp 54.000), 3 = Digital E-Ticket & Coupons
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [selectedSessionId, setSelectedSessionId] = useState<'pagi' | 'siang' | 'sore'>('pagi');
  const [visitDate, setVisitDate] = useState<string>(() => getNextWeekendDay());
  const [dateError, setDateError] = useState<string | null>(null);
  
  const [fullName, setFullName] = useState('');
  const [isFromOutsideSidoarjo, setIsFromOutsideSidoarjo] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [visitorCount, setVisitorCount] = useState(1);

  // QRIS timer countdown (15 minutes = 900 seconds)
  const [timerSeconds, setTimerSeconds] = useState(900);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);

  // Generated Digital Ticket data
  const [generatedTicket, setGeneratedTicket] = useState<DigitalTicket | null>(null);
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  // Ticket unit price requested: Rp 54.000,-
  const UNIT_PRICE = 54000;
  const totalAmount = UNIT_PRICE * visitorCount;

  // Compute 6 upcoming weekend dates (Saturdays & Sundays)
  const upcomingWeekends = useMemo(() => {
    const list = [];
    const curr = new Date();
    curr.setHours(0, 0, 0, 0);

    for (let i = 0; i < 35; i++) {
      const d = new Date(curr);
      d.setDate(d.getDate() + i);
      const day = d.getDay();
      if (day === 0 || day === 6) {
        const dateStr = d.toISOString().split('T')[0];
        const dayNameId = day === 6 ? 'Sabtu' : 'Minggu';
        const dayNameEn = day === 6 ? 'Saturday' : 'Sunday';
        const formattedId = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
        const formattedEn = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

        list.push({
          dateStr,
          labelId: `${dayNameId}, ${formattedId}`,
          labelEn: `${dayNameEn}, ${formattedEn}`,
        });
        if (list.length >= 6) break;
      }
    }
    return list;
  }, []);

  // Validate date is strictly Saturday or Sunday
  const handleDateChange = (dateVal: string) => {
    setVisitDate(dateVal);
    if (!dateVal) return;
    
    // Parse UTC or local parts to prevent timezone offsets
    const [year, month, day] = dateVal.split('-').map(Number);
    const selected = new Date(year, month - 1, day);
    const dayOfWeek = selected.getDay(); // 0 = Sunday, 6 = Saturday

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      setDateError(
        lang === 'id'
          ? 'Perhatian: Kunjungan wisata hanya dibuka pada hari Sabtu dan Minggu (Weekend).'
          : 'Notice: Tour visits are exclusively available on Saturdays and Sundays (Weekends only).'
      );
    } else {
      setDateError(null);
    }
  };

  // Reset or initialize on open
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setTimerSeconds(900);
      setIsVerifyingPayment(false);
      setDateError(null);
      if (!visitDate) {
        setVisitDate(getNextWeekendDay());
      }
    }
  }, [isOpen]);

  // QRIS Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && currentStep === 2 && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, currentStep, timerSeconds]);

  if (!isOpen) return null;

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleProceedToQris = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate weekend
    const [year, month, day] = visitDate.split('-').map(Number);
    const selected = new Date(year, month - 1, day);
    const dayOfWeek = selected.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      setDateError(
        lang === 'id'
          ? 'Pemesanan hanya dapat dilakukan untuk kunjungan hari Sabtu atau Minggu.'
          : 'Bookings can only be scheduled for Saturday or Sunday visits.'
      );
      return;
    }

    if (!fullName || !phoneNumber || !email) return;

    setCurrentStep(2);
  };

  const handleSimulatePaymentSuccess = () => {
    setIsVerifyingPayment(true);

    setTimeout(() => {
      // Generate Unique Ticket Code & Coupons
      const dateString = visitDate.replace(/-/g, '');
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const ticketCode = `JJ-${dateString}-${randomDigits}`;

      const selectedSession = tourSessions.find(s => s.id === selectedSessionId)!;

      const newTicket: DigitalTicket = {
        ticketCode,
        bookingDate: new Date().toLocaleDateString('id-ID'),
        tourDate: visitDate,
        session: selectedSessionId,
        sessionTime: selectedSession.time,
        fullName,
        isFromOutsideSidoarjo,
        cityOrigin: isFromOutsideSidoarjo 
          ? (lang === 'id' ? 'Luar Sidoarjo' : 'Outside Sidoarjo') 
          : (lang === 'id' ? 'Warga Sidoarjo' : 'Sidoarjo Resident'),
        visitorCount,
        totalPaid: totalAmount,
        qrPayload: `JEJAKJETIS:${ticketCode}:${totalAmount}`,
        fashionCouponCode: `BATIKJETIS30K-${randomDigits}`,
        fnbCouponCode: `KULINERJETIS5K-${randomDigits}`,
        fashionCouponValue: 30000,
        fnbCouponValue: 5000,
      };

      setGeneratedTicket(newTicket);
      setIsVerifyingPayment(false);
      setCurrentStep(3);
    }, 1500);
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  const handleShareWhatsApp = () => {
    if (!generatedTicket) return;
    const originText = generatedTicket.isFromOutsideSidoarjo ? 'Luar Sidoarjo' : 'Warga Sidoarjo';
    const text = encodeURIComponent(
      `Halo! Saya telah memesan Tiket Wisata Batik Jetas Jetis Sidoarjo.\n\nKode Tiket: ${generatedTicket.ticketCode}\nNama: ${generatedTicket.fullName}\nStatus: ${originText}\nSesi: ${generatedTicket.sessionTime}\nTanggal: ${generatedTicket.tourDate} (Weekend)\nJumlah: ${generatedTicket.visitorCount} Wisatawan\nKupon Busana (Rp 30rb): ${generatedTicket.fashionCouponCode}\nKupon Kuliner (Rp 5rb): ${generatedTicket.fnbCouponCode}\n\nTerima kasih!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleDownloadTicket = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/70 backdrop-blur-xs" id="booking-modal-overlay">
      
      <div className="relative w-full max-w-2xl bg-heritage-cream rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col" id="booking-modal-card">
        
        {/* Top Header decoration band */}
        <div className="h-2 bg-gradient-to-r from-heritage-terracotta via-amber-400 to-heritage-wax shrink-0" />

        {/* Modal Header Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-200/80 flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] font-mono font-bold text-heritage-terracotta tracking-wider uppercase">
              {currentStep === 1 ? 'LANGKAH 1 DARI 3' : currentStep === 2 ? 'LANGKAH 2 DARI 3' : 'LANGKAH 3 DARI 3'}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-black text-stone-900 leading-tight">
              {currentStep === 1 ? t.step1Title : currentStep === 2 ? t.step2Title : t.step3Title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-grow">

          {/* ================= STEP 1: PEMILIHAN SESI & PENGISIAN BIODATA ================= */}
          {currentStep === 1 && (
            <form onSubmit={handleProceedToQris} className="space-y-6" id="session-biodata-form">
              
              {/* 1. Pemilihan Sesi Kunjungan */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold uppercase text-stone-700">
                  {t.selectSessionLabel} *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="sessions-grid">
                  {tourSessions.map((session) => {
                    const isSelected = selectedSessionId === session.id;

                    return (
                      <button
                        key={session.id}
                        type="button"
                        onClick={() => setSelectedSessionId(session.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-amber-50/80 border-heritage-terracotta ring-2 ring-heritage-terracotta/40 shadow-xs'
                            : 'bg-white border-stone-200 hover:bg-stone-50'
                        }`}
                        id={`session-btn-${session.id}`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-serif font-black text-sm text-stone-900">
                              {session.name[lang]}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          </div>
                          <div className="text-xs font-mono font-bold text-heritage-terracotta">
                            {session.time}
                          </div>
                        </div>

                        <p className="text-[11px] text-stone-500 mt-2 leading-tight">
                          {session.description[lang]}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Tanggal Kunjungan: Strictly Saturday & Sunday (Weekend Only) */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-700">
                    {t.dateLabel} (Hanya Sabtu & Minggu) *
                  </label>
                  <span className="text-[10px] font-mono text-heritage-terracotta font-bold bg-amber-100 px-2 py-0.5 rounded">
                    {lang === 'id' ? 'Khusus Weekend' : 'Weekends Only'}
                  </span>
                </div>

                {/* Quick Click Weekend Date Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="quick-weekend-selectors">
                  {upcomingWeekends.map((item) => {
                    const isSelected = visitDate === item.dateStr;
                    return (
                      <button
                        key={item.dateStr}
                        type="button"
                        onClick={() => handleDateChange(item.dateStr)}
                        className={`p-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-heritage-terracotta text-white border-heritage-terracotta shadow-xs'
                            : 'bg-white text-stone-700 border-stone-300 hover:bg-amber-50'
                        }`}
                      >
                        <CalendarDays className="w-3.5 h-3.5" />
                        <span>{lang === 'id' ? item.labelId : item.labelEn}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Date Input for other weekends */}
                <div className="pt-1">
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={visitDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none ${
                      dateError ? 'border-red-500 bg-red-50/30' : 'border-stone-300 focus:border-heritage-terracotta'
                    }`}
                    id="input-date"
                  />
                </div>

                {dateError && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{dateError}</span>
                  </div>
                )}
              </div>

              {/* 3. Mandatory Footnote Notice Alert */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300/80 flex items-start gap-2.5 text-amber-900" id="session-footnote-alert">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed font-medium">
                  <strong>{lang === 'id' ? 'Catatan Penting:' : 'Important Note:'}</strong> {t.footnoteNotice}
                </p>
              </div>

              {/* 4. Pengisian Biodata Wisatawan (Tanpa field kota asal, cukup toggle luar Sidoarjo) */}
              <div className="space-y-4 pt-2 border-t border-stone-200">
                <h4 className="font-serif font-bold text-base text-stone-900">
                  {t.formInfoTitle}
                </h4>

                {/* Nama Pemesan */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-600 mb-1">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Raden Ahmad Fauzi"
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-heritage-terracotta"
                    id="input-fullname"
                  />
                </div>

                {/* Radio: Cukup informasi apakah dari luar Sidoarjo atau tidak */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-600">
                    {t.outsideSidoarjoLabel} *
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      !isFromOutsideSidoarjo ? 'bg-amber-50/80 border-heritage-terracotta text-heritage-terracotta' : 'bg-white border-stone-200 text-stone-700'
                    }`}>
                      <input
                        type="radio"
                        name="originStatus"
                        checked={!isFromOutsideSidoarjo}
                        onChange={() => setIsFromOutsideSidoarjo(false)}
                        className="accent-heritage-terracotta"
                      />
                      <span>{t.noLocal}</span>
                    </label>

                    <label className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                      isFromOutsideSidoarjo ? 'bg-amber-50/80 border-heritage-terracotta text-heritage-terracotta' : 'bg-white border-stone-200 text-stone-700'
                    }`}>
                      <input
                        type="radio"
                        name="originStatus"
                        checked={isFromOutsideSidoarjo}
                        onChange={() => setIsFromOutsideSidoarjo(true)}
                        className="accent-heritage-terracotta"
                      />
                      <span>{t.yesOutside}</span>
                    </label>
                  </div>
                </div>

                {/* Nomor WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-stone-600 mb-1">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="08123456789"
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-heritage-terracotta"
                      id="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase text-stone-600 mb-1">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ahmad@example.com"
                      className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-heritage-terracotta"
                      id="input-email"
                    />
                  </div>
                </div>

                {/* Jumlah Wisatawan (max 10) */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-600 mb-1">
                    {t.visitorCountLabel} *
                  </label>
                  <select
                    value={visitorCount}
                    onChange={(e) => setVisitorCount(Number(e.target.value))}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 font-bold focus:outline-none focus:border-heritage-terracotta"
                    id="select-visitors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {lang === 'id' ? 'Wisatawan (Orang)' : 'Visitor(s)'}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Price Calculation Summary & Submit */}
              <div className="pt-4 border-t border-stone-200 bg-white p-4 rounded-2xl border border-stone-200/80 space-y-3">
                <div className="flex justify-between items-center text-xs text-stone-600">
                  <span>{t.pricePerPersonLabel}</span>
                  <span className="font-mono font-bold">Rp 54.000 x {visitorCount} orang</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-stone-900 border-t border-stone-100 pt-2">
                  <span>{t.totalPriceLabel}</span>
                  <span className="font-mono text-lg text-heritage-terracotta font-black">
                    Rp {totalAmount.toLocaleString('id-ID')}.-
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={Boolean(dateError)}
                  className="w-full bg-heritage-terracotta hover:bg-amber-900 text-white font-serif font-black text-sm sm:text-base py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  id="btn-proceed-qris"
                >
                  <QrCode className="w-5 h-5 text-amber-200" />
                  <span>{t.proceedToQrisBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* ================= STEP 2: LAMAN PEMBAYARAN QRIS (Rp 54.000,-) ================= */}
          {currentStep === 2 && (
            <div className="space-y-6 text-center" id="qris-payment-screen">
              
              {/* Timer Bar */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-red-700">
                <Clock className="w-4 h-4" />
                <span>{t.timeRemaining}: {formatTimer(timerSeconds)}</span>
              </div>

              {/* Official QRIS Card representation */}
              <div className="max-w-sm mx-auto bg-white p-6 rounded-3xl border-2 border-stone-300 shadow-lg space-y-4">
                
                {/* QRIS & GPN Header logos banner */}
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <div className="font-mono font-black text-red-600 tracking-tighter text-xl">
                    QRIS <span className="text-[10px] text-stone-500 font-normal">Nasional</span>
                  </div>
                  <div className="font-mono text-[10px] font-bold bg-stone-100 text-stone-700 px-2 py-0.5 rounded border border-stone-300">
                    GPN / BI
                  </div>
                </div>

                {/* Merchant Name & NMID */}
                <div className="text-center space-y-0.5">
                  <div className="font-serif font-black text-stone-900 text-sm">
                    {t.qrisMerchantName}
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">
                    NMID: {t.qrisNmid}
                  </div>
                </div>

                {/* SVG Visual QR Code with Center Seal */}
                <div className="bg-white p-3 rounded-2xl border-2 border-stone-900 inline-block shadow-inner relative">
                  <svg className="w-48 h-48 sm:w-56 sm:h-56 mx-auto" viewBox="0 0 100 100" fill="none">
                    {/* Outer corners */}
                    <rect x="5" y="5" width="25" height="25" fill="#1c1917" />
                    <rect x="9" y="9" width="17" height="17" fill="#ffffff" />
                    <rect x="13" y="13" width="9" height="9" fill="#1c1917" />

                    <rect x="70" y="5" width="25" height="25" fill="#1c1917" />
                    <rect x="74" y="9" width="17" height="17" fill="#ffffff" />
                    <rect x="78" y="13" width="9" height="9" fill="#1c1917" />

                    <rect x="5" y="70" width="25" height="25" fill="#1c1917" />
                    <rect x="9" y="74" width="17" height="17" fill="#ffffff" />
                    <rect x="13" y="78" width="9" height="9" fill="#1c1917" />

                    {/* QR Pixel data simulation */}
                    <rect x="35" y="8" width="5" height="5" fill="#1c1917" />
                    <rect x="45" y="8" width="5" height="5" fill="#1c1917" />
                    <rect x="55" y="8" width="5" height="5" fill="#1c1917" />
                    <rect x="35" y="18" width="5" height="5" fill="#1c1917" />
                    <rect x="55" y="18" width="5" height="5" fill="#1c1917" />

                    <rect x="8" y="35" width="5" height="5" fill="#1c1917" />
                    <rect x="18" y="35" width="5" height="5" fill="#1c1917" />
                    <rect x="28" y="35" width="5" height="5" fill="#1c1917" />
                    <rect x="8" y="45" width="5" height="5" fill="#1c1917" />
                    <rect x="28" y="45" width="5" height="5" fill="#1c1917" />
                    <rect x="8" y="55" width="5" height="5" fill="#1c1917" />
                    <rect x="18" y="55" width="5" height="5" fill="#1c1917" />

                    <rect x="70" y="35" width="5" height="5" fill="#1c1917" />
                    <rect x="85" y="35" width="5" height="5" fill="#1c1917" />
                    <rect x="75" y="45" width="5" height="5" fill="#1c1917" />
                    <rect x="90" y="45" width="5" height="5" fill="#1c1917" />
                    <rect x="70" y="55" width="5" height="5" fill="#1c1917" />
                    <rect x="85" y="55" width="5" height="5" fill="#1c1917" />

                    <rect x="35" y="70" width="5" height="5" fill="#1c1917" />
                    <rect x="50" y="70" width="5" height="5" fill="#1c1917" />
                    <rect x="40" y="80" width="5" height="5" fill="#1c1917" />
                    <rect x="55" y="80" width="5" height="5" fill="#1c1917" />
                    <rect x="35" y="90" width="5" height="5" fill="#1c1917" />
                    <rect x="45" y="90" width="5" height="5" fill="#1c1917" />
                    <rect x="70" y="75" width="5" height="5" fill="#1c1917" />
                    <rect x="85" y="85" width="5" height="5" fill="#1c1917" />
                    <rect x="75" y="90" width="5" height="5" fill="#1c1917" />

                    {/* Center Stamp */}
                    <circle cx="50" cy="50" r="11" fill="#8c2d19" />
                    <text x="50" y="53" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle">JETIS</text>
                  </svg>
                </div>

                {/* Total Price Display */}
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div className="text-[10px] font-mono uppercase text-stone-500">
                    {lang === 'id' ? 'TOTAL HARGA TIKET' : 'TOTAL TICKET AMOUNT'}
                  </div>
                  <div className="font-mono text-2xl font-black text-heritage-terracotta">
                    Rp {totalAmount.toLocaleString('id-ID')}.-
                  </div>
                </div>

              </div>

              <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                {t.scanInstruction}
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-stone-300 text-stone-700 font-bold text-xs hover:bg-stone-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.backBtn}</span>
                </button>

                <button
                  type="button"
                  disabled={isVerifyingPayment}
                  onClick={handleSimulatePaymentSuccess}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="btn-simulate-payment"
                >
                  {isVerifyingPayment ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{lang === 'id' ? 'Memverifikasi Pembayaran...' : 'Verifying Payment...'}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.simulatedPaymentBtn}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

          {/* ================= STEP 3: DIGITAL TIKET & KUPON DISKON UMKM ================= */}
          {currentStep === 3 && generatedTicket && (
            <div className="space-y-6" id="ticket-success-screen">
              
              {/* Success Badge */}
              <div className="text-center space-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-black text-stone-900">
                  {lang === 'id' ? 'Pembayaran Berhasil & Tiket Terbit!' : 'Payment Verified & Ticket Issued!'}
                </h4>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  {t.step3Subtitle}
                </p>
              </div>

              {/* 1. OFFICIAL DIGITAL E-TICKET CARD */}
              <div className="bg-white rounded-2xl border-2 border-dashed border-amber-600 p-5 sm:p-6 relative overflow-hidden shadow-md" id="digital-e-ticket-card">
                
                {/* Visual side notches */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-heritage-cream border-r border-dashed border-amber-600 transform -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-heritage-cream border-l border-dashed border-amber-600 transform -translate-y-1/2" />

                {/* Ticket Top */}
                <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-heritage-terracotta" />
                    <span className="font-serif font-black text-base text-heritage-dark">BATIK JETAS JETIS</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300 uppercase">
                    {t.statusPaid}
                  </span>
                </div>

                {/* Ticket Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{t.ticketCodeLabel}</span>
                    <p className="font-mono font-black text-stone-900 text-sm">{generatedTicket.ticketCode}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{lang === 'id' ? 'Nama Wisatawan' : 'Lead Traveler'}</span>
                    <p className="font-bold text-stone-900">{generatedTicket.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{lang === 'id' ? 'Tanggal & Sesi Kunjungan' : 'Date & Session'}</span>
                    <p className="font-bold text-heritage-terracotta">
                      {generatedTicket.tourDate} (Weekend) • {generatedTicket.sessionTime}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase">{lang === 'id' ? 'Jumlah & Asal Wisatawan' : 'Guests & Origin'}</span>
                    <p className="font-semibold text-stone-800">
                      {generatedTicket.visitorCount} {lang === 'id' ? 'Orang' : 'Person(s)'} ({generatedTicket.cityOrigin})
                    </p>
                  </div>
                </div>

                {/* Simulated Barcode */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="font-mono text-[9px] text-stone-400">
                    VALID GATE SCAN • SIDOARJO HERITAGE
                  </div>
                  <div className="font-mono text-xs font-bold text-stone-700">
                    Rp {generatedTicket.totalPaid.toLocaleString('id-ID')}.-
                  </div>
                </div>
              </div>

              {/* 2. ATTACHED UMKM DISCOUNT COUPONS */}
              <div className="bg-amber-500/10 border-2 border-amber-400/80 rounded-2xl p-5 space-y-4" id="attached-coupons-box">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-heritage-terracotta" />
                  <div>
                    <h5 className="font-serif font-black text-sm text-stone-900">
                      {t.couponsTitle}
                    </h5>
                    <p className="text-[11px] text-stone-600">
                      {t.couponsSubtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="coupons-grid">
                  
                  {/* Coupon 1: Rp 30.000,- Toko Busana / Kain */}
                  <div className="bg-white p-4 rounded-xl border border-amber-300 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded uppercase">
                        TOKO BUSANA
                      </span>
                      <span className="font-serif font-black text-heritage-terracotta text-sm">
                        Rp 30.000,-
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-600 leading-snug">
                      {t.fashionCouponDesc}
                    </p>

                    <div className="flex items-center justify-between bg-stone-50 p-2 rounded-lg border border-stone-200">
                      <span className="font-mono font-bold text-xs text-stone-900">
                        {generatedTicket.fashionCouponCode}
                      </span>
                      <button
                        onClick={() => handleCopyCoupon(generatedTicket.fashionCouponCode)}
                        className="text-xs text-heritage-terracotta hover:underline font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCoupon === generatedTicket.fashionCouponCode ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedCoupon === generatedTicket.fashionCouponCode ? 'Disalin' : 'Salin'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Coupon 2: Rp 5.000,- Toko FnB / Kuliner */}
                  <div className="bg-white p-4 rounded-xl border border-amber-300 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded uppercase">
                        KULINER & FNB
                      </span>
                      <span className="font-serif font-black text-emerald-700 text-sm">
                        Rp 5.000,-
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-600 leading-snug">
                      {t.fnbCouponDesc}
                    </p>

                    <div className="flex items-center justify-between bg-stone-50 p-2 rounded-lg border border-stone-200">
                      <span className="font-mono font-bold text-xs text-stone-900">
                        {generatedTicket.fnbCouponCode}
                      </span>
                      <button
                        onClick={() => handleCopyCoupon(generatedTicket.fnbCouponCode)}
                        className="text-xs text-emerald-700 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCoupon === generatedTicket.fnbCouponCode ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedCoupon === generatedTicket.fnbCouponCode ? 'Disalin' : 'Salin'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadTicket}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadTicketBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{t.shareWaBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  {t.finishBtn}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
