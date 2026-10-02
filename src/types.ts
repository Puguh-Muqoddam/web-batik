// ============================================================
// Type definitions for Website Jejak Jetis
// All table interfaces + component prop types
// ============================================================

export type Language = 'id' | 'en';

// ── Database Table Interfaces ──────────────────────────────

/** packages table — Tour packages from Supabase */
export interface Package {
  id: string;
  name_id: string;
  name_en: string;
  description_id: string;
  description_en: string;
  price: number;
  duration: string;
  capacity: string;
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

/** bookings table — Visitor booking records */
export interface Booking {
  id: string;
  package_id: string;
  full_name: string;
  email: string;
  whatsapp: string;
  visit_date: string;
  session: 'pagi' | 'siang' | 'sore';
  visitor_count: number;
  total_price: number;
  status: 'pending' | 'paid' | 'cancelled' | 'expired';
  ticket_code: string | null;
  coupon_fashion: string | null;
  coupon_fnb: string | null;
  created_at: string;
}

/** payments table — Payment tracking */
export interface Payment {
  id: string;
  booking_id: string;
  midtrans_order_id: string | null;
  payment_type: 'qris' | 'bank_transfer' | 'ewallet' | null;
  gross_amount: number;
  status: 'pending' | 'settlement' | 'expire' | 'cancel';
  qris_url: string | null;
  paid_at: string | null;
  created_at: string;
}

/** events table — Community events */
export interface Event {
  id: string;
  title_id: string;
  title_en: string | null;
  description_id: string | null;
  description_en: string | null;
  event_date: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
}

/** gallery table — Photo gallery items */
export interface GalleryItem {
  id: string;
  image_url: string;
  caption_id: string | null;
  caption_en: string | null;
  category: 'general' | 'batik' | 'artisan' | 'event';
  sort_order: number;
  created_at: string;
}

/** faq table — FAQ items */
export interface FaqItem {
  id: string;
  question_id: string;
  question_en: string | null;
  answer_id: string;
  answer_en: string | null;
  sort_order: number;
  created_at: string;
}

/** settings table — Site-wide key-value config */
export interface Setting {
  id: string;
  key: string;
  value_id: string | null;
  value_en: string | null;
  updated_at: string;
}

// ── Component Prop Interfaces ──────────────────────────────

export interface SectionProps {
  lang: Language;
}

export interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenBooking: () => void;
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export interface HeroProps extends SectionProps {
  onOpenBooking: () => void;
}

export interface ActivitiesProps extends SectionProps {
  onOpenBooking: (packageId?: string) => void;
}

export interface BookingSectionProps extends SectionProps {
  onOpenBooking: (packageId?: string) => void;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedPackageId?: string;
}

// ── Booking Form Data ──────────────────────────────────────

export interface BookingFormData {
  packageId: string;
  session: 'pagi' | 'siang' | 'sore';
  visitDate: string;
  fullName: string;
  email: string;
  whatsapp: string;
  visitorCount: number;
}

// ── Digital Ticket ─────────────────────────────────────────

export interface DigitalTicket {
  ticketCode: string;
  bookingDate: string;
  tourDate: string;
  session: 'pagi' | 'siang' | 'sore';
  fullName: string;
  visitorCount: number;
  totalPaid: number;
  fashionCouponCode: string;
  fnbCouponCode: string;
}

// ── Translation Dict ───────────────────────────────────────

export interface TranslationDict {
  siteName: string;
  siteTagline: string;
  bookTicketBtn: string;

  // Nav menu
  nav: {
    home: string;
    about: string;
    activities: string;
    map: string;
    umkm: string;
    contact: string;
    gallery: string;
    booking: string;
    faq: string;
  };

  // Hero
  hero: {
    badge: string;
    yearLabel: string;
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
  };

  // About / History
  about: {
    badge: string;
    heading: string;
    subheading: string;
    paragraph1: string;
    paragraph2: string;
  };

  // Activities
  activities: {
    badge: string;
    heading: string;
    viewDetail: string;
    bookBtn: string;
  };

  // Story
  story: {
    badge: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteAuthor: string;
  };

  // Gallery
  gallery: {
    badge: string;
    heading: string;
  };

  // Map
  map: {
    badge: string;
    heading: string;
    subtitle: string;
    toggleGoogle: string;
    toggleCustom: string;
  };

  // UMKM
  umkm: {
    badge: string;
    heading: string;
    subtitle: string;
  };

  // Booking
  booking: {
    badge: string;
    heading: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    packageLabel: string;
    dateLabel: string;
    visitorsLabel: string;
    pricePerPerson: string;
    totalLabel: string;
    submitBtn: string;
    sessionLabel: string;
    sessionPagi: string;
    sessionSiang: string;
    sessionSore: string;
  };

  // FAQ
  faq: {
    badge: string;
    heading: string;
  };

  // Footer
  footer: {
    tagline: string;
    address: string;
    whatsapp: string;
    navTitle: string;
    hoursTitle: string;
    hoursValue: string;
    copyright: string;
    madeWith: string;
  };

  // Contact
  contact: {
    badge: string;
    heading: string;
    subtitle: string;
  };

  // Payment modal
  payment: {
    step1Title: string;
    step2Title: string;
    step2Subtitle: string;
    step3Title: string;
    step3Subtitle: string;
    scanInstruction: string;
    ticketCodeLabel: string;
    statusPaid: string;
    couponsTitle: string;
    fashionCoupon: string;
    fnbCoupon: string;
    downloadBtn: string;
    finishBtn: string;
    backBtn: string;
  };
}
