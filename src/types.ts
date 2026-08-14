export type Language = 'id' | 'en';

export interface MotifItem {
  id: string;
  name: { id: string; en: string };
  meaning: { id: string; en: string };
  category: { id: string; en: string };
  accentColor: string;
  badgeBg: string;
  iconName: string;
  patternType: string;
}

export interface ActivityRow {
  id: string;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  description: { id: string; en: string };
  duration: string;
  capacity: string;
  highlights: { id: string[]; en: string[] };
  iconName: string;
  imageUrl: string;
  pricePerPerson: number;
}

export interface UmkmStore {
  id: string;
  name: string;
  owner: string;
  category: 'fashion' | 'craft' | 'fnb' | 'fabric';
  categoryLabel: { id: string; en: string };
  address: string;
  phone: string;
  instagram: string;
  description: { id: string; en: string };
  couponAcceptance: { id: string; en: string };
  featuredBadge?: { id: string; en: string };
}

export interface PartnerOrg {
  id: string;
  name: string;
  role: { id: string; en: string };
  category: 'government' | 'academic' | 'finance' | 'community';
  logoPlaceholderText: string;
  logoColor: string;
}

export interface TourSession {
  id: 'pagi' | 'siang' | 'sore';
  name: { id: string; en: string };
  time: string;
  slotsRemaining: number;
  description: { id: string; en: string };
}

export interface BookingFormData {
  session: 'pagi' | 'siang' | 'sore';
  date: string;
  fullName: string;
  isFromOutsideSidoarjo: boolean;
  cityOrigin: string;
  phoneNumber: string;
  email: string;
  visitorCount: number;
  unitPrice: number;
}

export interface DigitalTicket {
  ticketCode: string;
  bookingDate: string;
  tourDate: string;
  session: 'pagi' | 'siang' | 'sore';
  sessionTime: string;
  fullName: string;
  isFromOutsideSidoarjo: boolean;
  cityOrigin: string;
  visitorCount: number;
  totalPaid: number;
  qrPayload: string;
  fashionCouponCode: string;
  fnbCouponCode: string;
  fashionCouponValue: number;
  fnbCouponValue: number;
}

export interface TranslationDict {
  siteName: string;
  subtitle: string;
  bookTicketBtn: string;
  
  // Ribbon Menu
  menu: {
    home: string;
    history: string;
    activities: string;
    map: string;
    partners: string;
    umkm: string;
    contact: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    socialConnect: string;
    tiktokLabel: string;
    instagramLabel: string;
  };

  // History Section
  history: {
    badge: string;
    title: string;
    subtitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    quote: string;
    quoteAuthor: string;
    motifsRibbonTitle: string;
    motifsRibbonSubtitle: string;
  };

  // Activities Section
  activities: {
    badge: string;
    title: string;
    subtitle: string;
    bookThisSession: string;
    durationLabel: string;
    capacityLabel: string;
  };

  // Map Section
  map: {
    badge: string;
    title: string;
    subtitle: string;
    toggleGoogle: string;
    toggleCustom: string;
    googleMapNotice: string;
    customMapNotice: string;
    legendTitle: string;
    legendRoute: string;
    legendKeyLocations: string;
    legendNearby: string;
    openInGmaps: string;
  };

  // UMKM Section
  umkm: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterFashion: string;
    filterFabric: string;
    filterFnb: string;
    filterCraft: string;
    couponBadgeText: string;
  };

  // Partners Section
  partners: {
    badge: string;
    title: string;
    subtitle: string;
    partnershipNote: string;
  };

  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    secretariatTitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    hoursLabel: string;
    hoursValue: string;
    formTitle: string;
    formSubtitle: string;
    nameField: string;
    emailField: string;
    msgField: string;
    sendBtn: string;
    socialTitle: string;
  };

  // Payment & Booking Flow
  booking: {
    step1Title: string;
    step1Subtitle: string;
    selectSessionLabel: string;
    footnoteNotice: string;
    formInfoTitle: string;
    nameLabel: string;
    outsideSidoarjoLabel: string;
    yesOutside: string;
    noLocal: string;
    cityOriginLabel: string;
    phoneLabel: string;
    emailLabel: string;
    dateLabel: string;
    visitorCountLabel: string;
    maxVisitorsNotice: string;
    pricePerPersonLabel: string;
    totalPriceLabel: string;
    proceedToQrisBtn: string;

    step2Title: string;
    step2Subtitle: string;
    qrisMerchantName: string;
    qrisNmid: string;
    scanInstruction: string;
    timeRemaining: string;
    simulatedPaymentBtn: string;
    backBtn: string;

    step3Title: string;
    step3Subtitle: string;
    ticketDetailsTitle: string;
    ticketCodeLabel: string;
    statusPaid: string;
    couponsTitle: string;
    couponsSubtitle: string;
    fashionCouponTitle: string;
    fashionCouponDesc: string;
    fnbCouponTitle: string;
    fnbCouponDesc: string;
    downloadTicketBtn: string;
    shareWaBtn: string;
    finishBtn: string;
  };
}
