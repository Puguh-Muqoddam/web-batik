import { TranslationDict, MotifItem, ActivityRow, UmkmStore, PartnerOrg, TourSession } from './types';

export const translations: Record<'id' | 'en', TranslationDict> = {
  id: {
    siteName: "JEJAK JETIS",
    subtitle: "Kampung Wisata Batik Jetis Sidoarjo",
    bookTicketBtn: "Beli Tiket Wisata",

    menu: {
      home: "Home",
      history: "Sejarah",
      activities: "Kegiatan Wisata",
      map: "Peta Wisata",
      partners: "Mitra Kerjasama",
      umkm: "UMKM Jetis",
      contact: "Contact & Media Sosial"
    },

    hero: {
      badge: "Situs Warisan Cagar Budaya Sidoarjo",
      title: "JEJAK JETIS",
      subtitle: "Heritage Site Kampung Batik Jetis Sidoarjo",
      description: "Menelusuri jejak tradisi membatik tulis tertua di Sidoarjo yang lestari sejak abad ke-17. Nikmati kehangatan corak merah sardo, filosofi luhur, dan keramahan para maestro pengrajin lokal.",
      ctaButton: "Beli Tiket Wisata",
      socialConnect: "Ikuti Kabar & Dokumentasi:",
      tiktokLabel: "@jejakjetis.sidoarjo",
      instagramLabel: "@jejakjetis_sidoarjo"
    },

    history: {
      badge: "Kilas Balik Sejarah",
      title: "Sejarah Kampung Batik Jetis",
      subtitle: "Warisan adiluhung seni canting dan malam yang mengalir melintasi zaman sejak tahun 1675.",
      storyParagraph1: "Kampung Jetis yang terletak di jantung Kota Delta Sidoarjo telah dikenal sebagai sentra batik tulis legendaris sejak tahun 1675. Asal-usul seni membatik di Jetis bermula dari kedatangan bangsawan Keraton bernama Mbah Minto (Raden Bagus Jetis) yang menetap dan mengajarkan keterampilan membatik kepada para penduduk lokal sebagai bekal kemandirian ekonomi masyarakat.",
      storyParagraph2: "Keistimewaan Batik Jetis terletak pada teknik 'batik tulis halus' dengan warna-warna pekat yang berani dan kontras, seperti warna Merah Sardo (merah menyala), Soga Gelap, dan Biru Pekat. Karakter goresan cantingnya tegas, mengekspresikan keteguhan jiwa, keberanian, dan semangat bahari pesisir delta Sidoarjo yang dinamis.",
      storyParagraph3: "Memasuki era kolonial hingga kemerdekaan, Kampung Jetis menjadi pusat perdagangan sandang utama di Jawa Timur. Hingga kini, semangat pewarisan keterampilan canting terus dijaga secara turun-temurun oleh puluhan keluarga pengrajin, menjadikan Jetis sebagai destinasi pusaka budaya terkemuka yang memadukan sejarah, edukasi kriya, dan ekonomi kreatif.",
      quote: "Membatik di Jetis bukan sekadar menggoreskan lilin malam di atas mori putih, melainkan melukiskan doa, ketabahan leluhur, dan kehormatan tanah delta yang kami cintai.",
      quoteAuthor: "Sesepuh & Pengrajin Kampung Batik Jetis Sidoarjo",
      motifsRibbonTitle: "7 Motif Khas Batik Jetis",
      motifsRibbonSubtitle: "Goresan motif otentik sarat makna filosofis yang diwariskan dari generasi ke generasi"
    },

    activities: {
      badge: "1 Paket Terpadu (~1 Jam)",
      title: "Urutan Rangkaian Wisata Jetis",
      subtitle: "Seluruh kegiatan di bawah ini merupakan satu kesatuan urutan paket wisata terpadu berdurasi ~1 jam (Rp 54.000,- per orang).",
      bookThisSession: "Pesan Paket Wisata (~1 Jam)",
      durationLabel: "Total Durasi Paket",
      capacityLabel: "Kapasitas"
    },

    map: {
      badge: "Panduan Lokasi",
      title: "Peta Wisata Kampung Jetis",
      subtitle: "Navigasikan kunjungan Anda dengan mudah menggunakan peta Google Maps interaktif maupun peta rute skematik lokal.",
      toggleGoogle: "Peta Google Maps",
      toggleCustom: "Peta Wisata & Rute Custom",
      googleMapNotice: "Menampilkan titik koordinat geografis presisi Kampung Jetis di Jl. Pasir / Diponegoro Sidoarjo.",
      customMapNotice: "Menampilkan rute jalan kaki, posisi sentra batik, gapura ikonik, fasilitas parkir bus, dan stasiun terdekat.",
      legendTitle: "Legenda & Titik Kunci",
      legendRoute: "Rute Utama Jelajah Batik",
      legendKeyLocations: "Lokasi Kunci & Sanggar",
      legendNearby: "Akses & Fasilitas Sekitar",
      openInGmaps: "Buka di Google Maps Langsung"
    },

    umkm: {
      badge: "Ekonomi Kreatif",
      title: "UMKM & Galeri Batik Jetis",
      subtitle: "Dukung perekonomian lokal dengan berbelanja langsung di toko busana, sanggar kriya, dan gerai kuliner warga Jetis.",
      filterAll: "Semua UMKM",
      filterFashion: "Toko Busana & Butik",
      filterFabric: "Sentra Kain Tulis",
      filterFnb: "Kuliner & Cafe",
      filterCraft: "Suvenir & Kriya",
      couponBadgeText: "Kupon Wisata Berlaku di Sini"
    },

    partners: {
      badge: "Kolaborasi & Dukungan",
      title: "Mitra Kerjasama",
      subtitle: "Didukung oleh instansi pemerintah, lembaga pelestarian kebudayaan, akademisi, dan asosiasi pengrajin nasional.",
      partnershipNote: "Jejak Jetis terus bersinergi bersama berbagai pihak untuk pelestarian warisan budaya takbenda dan kemajuan ekonomi kreatif lokal."
    },

    contact: {
      badge: "Informasi & Reservasi",
      title: "Kontak & Media Sosial",
      subtitle: "Hubungi sekretariat pengelola untuk reservasi rombongan studi, pemesanan kustom batik, atau liputan media.",
      secretariatTitle: "Sekretariat Pengelola Kampung Jetis",
      addressLabel: "Alamat Lengkap",
      addressValue: "Jl. Diponegoro / Pasir Jetis No. 12, Kel. Lemahputro, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61213",
      phoneLabel: "No. Telepon / WhatsApp",
      phoneValue: "+62 812-3456-7890",
      emailLabel: "Gmail Resmi",
      emailValue: "jejakjetis.sidoarjo@gmail.com",
      hoursLabel: "Jam Operasional Wisata",
      hoursValue: "Setiap Hari: 08.00 - 17.30 WIB",
      formTitle: "Kirim Pesan / Pertanyaan",
      formSubtitle: "Isi formulir di bawah ini, tim koordinasi kami akan merespon melalui WhatsApp atau Email.",
      nameField: "Nama Lengkap",
      emailField: "Alamat Email",
      msgField: "Pesan / Pertanyaan Anda",
      sendBtn: "Kirim Pesan",
      socialTitle: "Saluran Media Sosial Resmi"
    },

    booking: {
      step1Title: "1. Pemilihan Sesi & Biodata",
      step1Subtitle: "Pilih waktu kunjungan yang sesuai dan lengkapi data wisatawan Anda.",
      selectSessionLabel: "Pilih Sesi Wisata",
      footnoteNotice: "Perhatian: Pembelian dan refund tiket tidak dapat dilakukan 1 (satu) jam sebelum sesi kunjungan dimulai.",
      formInfoTitle: "Data Wisatawan",
      nameLabel: "Nama Lengkap Pemesan",
      outsideSidoarjoLabel: "Apakah Anda berasal dari luar Kabupaten Sidoarjo?",
      yesOutside: "Ya, Luar Sidoarjo",
      noLocal: "Tidak, Asal Sidoarjo",
      cityOriginLabel: "Kota / Kabupaten Asal",
      phoneLabel: "Nomor WhatsApp (Aktif)",
      emailLabel: "Alamat Email",
      dateLabel: "Tanggal Kunjungan",
      visitorCountLabel: "Jumlah Wisatawan (Maksimal 10 Orang)",
      maxVisitorsNotice: "Maksimal 10 orang per satu kali pemesanan",
      pricePerPersonLabel: "Tarif Tiket Wisata",
      totalPriceLabel: "Total Pembayaran",
      proceedToQrisBtn: "Lanjut ke Pembayaran QRIS",

      step2Title: "2. Pembayaran QRIS",
      step2Subtitle: "Pindai kode QRIS di bawah menggunakan m-Banking atau Dompet Digital favorit Anda.",
      qrisMerchantName: "JEJAK JETIS HERITAGE SIDOARJO",
      qrisNmid: "ID1020268492019",
      scanInstruction: "Buka aplikasi pembayaran (BCA, Mandiri, BRI, GoPay, OVO, Dana, ShopeePay) lalu arahkan kamera ke QR code.",
      timeRemaining: "Batas Waktu Pembayaran",
      simulatedPaymentBtn: "Saya Sudah Membayar (Verifikasi Otomatis)",
      backBtn: "Kembali Ubah Data",

      step3Title: "3. Tiket Digital & Kupon Diskon",
      step3Subtitle: "Pembayaran Anda telah terverifikasi lunas! Simpan e-ticket dan nikmati kupon diskon UMKM Anda.",
      ticketDetailsTitle: "E-Ticket Resmi Jejak Jetis",
      ticketCodeLabel: "Kode Tiket",
      statusPaid: "LUNAS / VALID",
      couponsTitle: "Kupon Diskon UMKM Jetis Terlampir",
      couponsSubtitle: "Tunjukkan barcode/kode kupon ini saat berbelanja di toko mitra UMKM Kampung Jetis!",
      fashionCouponTitle: "Voucher Diskon Rp 30.000,- Toko Busana",
      fashionCouponDesc: "Berlaku untuk pembelian kain batik tulis atau busana jadi di seluruh toko busana mitra Jetis.",
      fnbCouponTitle: "Voucher Diskon Rp 5.000,- Toko FnB / Kuliner",
      fnbCouponDesc: "Berlaku untuk pembelian makanan/minuman khas di gerai kuliner dan cafe mitra Kampung Jetis.",
      downloadTicketBtn: "Unduh Tiket Digital",
      shareWaBtn: "Kirim ke WhatsApp",
      finishBtn: "Selesai & Tutup"
    }
  },

  en: {
    siteName: "JEJAK JETIS",
    subtitle: "Heritage Site Kampoeng Batik Jetis Sidoarjo",
    bookTicketBtn: "Buy Tour Ticket",

    menu: {
      home: "Home",
      history: "History",
      activities: "Tour Activities",
      map: "Tour Map",
      partners: "Partners",
      umkm: "Jetis UMKM",
      contact: "Contact & Social Media"
    },

    hero: {
      badge: "Sidoarjo Cultural Heritage Site",
      title: "JEJAK JETIS",
      subtitle: "Heritage Site Kampung Batik Jetis Sidoarjo",
      description: "Tracing the legacy of Sidoarjo's oldest hand-drawn batik craftsmanship thriving since the 17th century. Experience vivid sardo red dyes, noble cultural philosophies, and warm local artisans.",
      ctaButton: "Buy Tour Ticket",
      socialConnect: "Follow News & Stories:",
      tiktokLabel: "@jejakjetis.sidoarjo",
      instagramLabel: "@jejakjetis_sidoarjo"
    },

    history: {
      badge: "Historical Retrospective",
      title: "History of Kampung Batik Jetis",
      subtitle: "An enduring heritage of canting wax art that has flourished through eras since 1675.",
      storyParagraph1: "Kampung Jetis in the heart of Sidoarjo's Delta City has been celebrated as a legendary hand-drawn batik hub since 1675. The origin traces back to Mbah Minto (Raden Bagus Jetis), a royal nobleman who settled in the village and taught local residents traditional wax-resist dyeing techniques for community self-reliance.",
      storyParagraph2: "The hallmark of Jetis Batik lies in its fine hand-drawn execution with intense, contrasting colors—most famously 'Merah Sardo' (fiery crimson red), deep earthy soga, and dark indigo. The confident wax strokes mirror the courage, resilience, and dynamic maritime spirit of the Sidoarjo delta.",
      storyParagraph3: "Through colonial times into modern independence, Kampung Jetis remained a prominent textile trading epicenter in East Java. Today, generations of artisan families continue the canting tradition, establishing Jetis as a landmark cultural destination uniting history, craft education, and creative enterprise.",
      quote: "Drawing batik in Jetis is never just applying hot wax onto white mori fabric; it is painting our ancestors' prayers, endurance, and honor of our beloved delta land.",
      quoteAuthor: "Elders & Master Artisans of Kampung Batik Jetis Sidoarjo",
      motifsRibbonTitle: "7 Authentic Jetis Batik Motifs",
      motifsRibbonSubtitle: "Timeless patterns carrying profound cultural philosophies passed down through generations"
    },

    activities: {
      badge: "1 Unified Tour Package (~1 Hour)",
      title: "Jetis Tour Itinerary & Sequence",
      subtitle: "All experiences below form one complete ~1-hour sequential tour package (Rp 54,000 per person).",
      bookThisSession: "Book ~1-Hour Tour Package",
      durationLabel: "Total Duration",
      capacityLabel: "Capacity"
    },

    map: {
      badge: "Location Guide",
      title: "Jetis Tourism Map",
      subtitle: "Effortlessly navigate your visit using either the interactive Google Map or the custom schematic route map.",
      toggleGoogle: "Google Maps View",
      toggleCustom: "Custom Tour & Route Map",
      googleMapNotice: "Displays precise geographic coordinates of Kampung Jetis along Diponegoro / Pasir St, Sidoarjo.",
      customMapNotice: "Highlights walking corridors, batik workshops, iconic gate, bus parking zones, and nearest train station.",
      legendTitle: "Legend & Key Points",
      legendRoute: "Primary Walking Route",
      legendKeyLocations: "Key Landmarks & Workshops",
      legendNearby: "Access & Nearby Facilities",
      openInGmaps: "Open Directly in Google Maps"
    },

    umkm: {
      badge: "Creative Economy",
      title: "Jetis UMKM & Batik Galleries",
      subtitle: "Support the local economy by shopping directly at artisan fashion boutiques, fabric studios, and culinary stalls.",
      filterAll: "All UMKM",
      filterFashion: "Fashion & Boutiques",
      filterFabric: "Hand-Drawn Fabrics",
      filterFnb: "Culinary & Cafes",
      filterCraft: "Souvenirs & Crafts",
      couponBadgeText: "Tour Discount Coupon Accepted Here"
    },

    partners: {
      badge: "Collaborations",
      title: "Institutional Partners",
      subtitle: "Supported by government agencies, cultural conservation bodies, academic universities, and artisan associations.",
      partnershipNote: "Jejak Jetis actively collaborates with cross-sector partners to safeguard intangible heritage and empower local artisans."
    },

    contact: {
      badge: "Info & Reservations",
      title: "Contact & Social Media",
      subtitle: "Reach out to the management secretariat for group study visits, custom batik orders, or media inquiries.",
      secretariatTitle: "Kampung Jetis Management Secretariat",
      addressLabel: "Complete Address",
      addressValue: "12 Diponegoro / Pasir Jetis St, Lemahputro, Sidoarjo District, Sidoarjo Regency, East Java 61213",
      phoneLabel: "Phone / WhatsApp",
      phoneValue: "+62 812-3456-7890",
      emailLabel: "Official Gmail",
      emailValue: "jejakjetis.sidoarjo@gmail.com",
      hoursLabel: "Operating Hours",
      hoursValue: "Daily: 08:00 AM - 05:30 PM WIB",
      formTitle: "Send Inquiry / Message",
      formSubtitle: "Fill out the form below; our coordination team will reply promptly via WhatsApp or Email.",
      nameField: "Full Name",
      emailField: "Email Address",
      msgField: "Your Inquiry / Message",
      sendBtn: "Send Message",
      socialTitle: "Official Social Media Channels"
    },

    booking: {
      step1Title: "1. Session Selection & Visitor Info",
      step1Subtitle: "Choose your preferred visit time slot and enter your traveler details.",
      selectSessionLabel: "Select Tour Session",
      footnoteNotice: "Important: Ticket purchases and refunds cannot be processed 1 (one) hour before the scheduled session begins.",
      formInfoTitle: "Traveler Details",
      nameLabel: "Lead Traveler Full Name",
      outsideSidoarjoLabel: "Are you visiting from outside Sidoarjo Regency?",
      yesOutside: "Yes, Outside Sidoarjo",
      noLocal: "No, Sidoarjo Resident",
      cityOriginLabel: "City / Region of Origin",
      phoneLabel: "Active WhatsApp Number",
      emailLabel: "Email Address",
      dateLabel: "Visit Date",
      visitorCountLabel: "Number of Guests (Max 10 Persons)",
      maxVisitorsNotice: "Maximum 10 visitors allowed per single booking",
      pricePerPersonLabel: "Tour Ticket Fee",
      totalPriceLabel: "Total Payment",
      proceedToQrisBtn: "Proceed to QRIS Payment",

      step2Title: "2. QRIS Payment",
      step2Subtitle: "Scan the official QRIS barcode below using your favorite banking app or e-wallet.",
      qrisMerchantName: "JEJAK JETIS HERITAGE SIDOARJO",
      qrisNmid: "ID1020268492019",
      scanInstruction: "Open your payment app (BCA, Mandiri, BRI, GoPay, OVO, Dana, ShopeePay) and aim camera at the QR code.",
      timeRemaining: "Payment Time Limit",
      simulatedPaymentBtn: "I Have Paid (Simulate Auto-Verification)",
      backBtn: "Back to Edit Info",

      step3Title: "3. Digital E-Ticket & Discount Coupons",
      step3Subtitle: "Payment verified successfully! Save your e-ticket and enjoy your exclusive UMKM discount vouchers.",
      ticketDetailsTitle: "Official Jejak Jetis E-Ticket",
      ticketCodeLabel: "Ticket Code",
      statusPaid: "PAID / VALID",
      couponsTitle: "Attached Jetis UMKM Discount Coupons",
      couponsSubtitle: "Show this coupon code/barcode when shopping at partner stores in Kampung Jetis!",
      fashionCouponTitle: "Rp 30,000 Off Fashion Voucher",
      fashionCouponDesc: "Valid for purchases of hand-drawn batik fabrics or apparel at all partner fashion boutiques.",
      fnbCouponTitle: "Rp 5,000 Off Culinary/FnB Voucher",
      fnbCouponDesc: "Valid for meals, traditional snacks, or drinks at partner cafes and food stalls.",
      downloadTicketBtn: "Download Digital Ticket",
      shareWaBtn: "Share to WhatsApp",
      finishBtn: "Done & Close"
    }
  }
};

// 7 Authentic Jetis Batik Motifs
export const jetisMotifs: MotifItem[] = [
  {
    id: "motif-merak",
    name: { id: "Motif Burung Merak", en: "Peacock Motif (Burung Merak)" },
    meaning: {
      id: "Simbol keanggunan, martabat, dan kemuliaan budi pekerti dalam tradisi bangsawan Jetis.",
      en: "Symbolizes elegance, social dignity, and noble character in Jetis heritage tradition."
    },
    category: { id: "Fauna Klasik", en: "Classic Fauna" },
    accentColor: "#8c2d19",
    badgeBg: "bg-red-950/10 text-red-900 border-red-200",
    iconName: "Feather",
    patternType: "merak"
  },
  {
    id: "motif-beras-wutah",
    name: { id: "Motif Beras Wutah", en: "Beras Wutah (Spilled Rice)" },
    meaning: {
      id: "Melambangkan limpahan rezeki, kesuburan tanah delta, serta rasa syukur atas kemakmuran pangan.",
      en: "Represents abundance of fortune, soil fertility of the delta, and gratitude for prosperous harvest."
    },
    category: { id: "Kemakmuran", en: "Prosperity" },
    accentColor: "#b45309",
    badgeBg: "bg-amber-950/10 text-amber-900 border-amber-200",
    iconName: "Sparkles",
    patternType: "beras"
  },
  {
    id: "motif-kembang-bayem",
    name: { id: "Motif Kembang Bayem", en: "Spinach Flower (Kembang Bayem)" },
    meaning: {
      id: "Menggambarkan kesederhanaan, kerukunan hidup bertetangga, dan keteduhan hati warga kampung.",
      en: "Depicts simplicity, neighborly harmony, and serene calmness of village life."
    },
    category: { id: "Flora Khas", en: "Signature Flora" },
    accentColor: "#15803d",
    badgeBg: "bg-emerald-950/10 text-emerald-900 border-emerald-200",
    iconName: "Leaf",
    patternType: "bayem"
  },
  {
    id: "motif-kipas-sekar-jagad",
    name: { id: "Motif Kipas Sekar Jagad", en: "Sekar Jagad Fan Motif" },
    meaning: {
      id: "Harmoni keberagaman budaya nusantara yang terpadu indah dalam selembar kain batik tulis.",
      en: "Harmonious unity of diverse Nusantara cultures composed gracefully on hand-drawn fabric."
    },
    category: { id: "Geometris Klasik", en: "Classic Geometric" },
    accentColor: "#7c2d12",
    badgeBg: "bg-orange-950/10 text-orange-900 border-orange-200",
    iconName: "Compass",
    patternType: "kipas"
  },
  {
    id: "motif-kembang-turi",
    name: { id: "Motif Kembang Turi", en: "Turi Blossom (Kembang Turi)" },
    meaning: {
      id: "Kearifan lokal flora delta Sidoarjo yang melambangkan kelembutan batin dan pengobatan alami.",
      en: "Local delta botanical wisdom embodying inner tenderness and traditional wellness."
    },
    category: { id: "Flora Delta", en: "Delta Flora" },
    accentColor: "#9a3412",
    badgeBg: "bg-rose-950/10 text-rose-900 border-rose-200",
    iconName: "Flower2",
    patternType: "turi"
  },
  {
    id: "motif-bandeng-udang",
    name: { id: "Motif Ikan Bandeng & Udang", en: "Bandeng Fish & Shrimp" },
    meaning: {
      id: "Ikon kebanggaan maritim dan tambak Sidoarjo, menyimbolkan kerja keras dan ketangguhan pesisir.",
      en: "The proud maritime emblem of Sidoarjo, symbolizing industry and coastal perseverance."
    },
    category: { id: "Ikon Sidoarjo", en: "Sidoarjo Icon" },
    accentColor: "#0284c7",
    badgeBg: "bg-sky-950/10 text-sky-900 border-sky-200",
    iconName: "Fish",
    patternType: "bandeng"
  },
  {
    id: "motif-abrik-gringsing",
    name: { id: "Motif Abrik Gringsing Jetis", en: "Abrik Gringsing Jetis" },
    meaning: {
      id: "Motif sisik kuno sebagai penolak bala dan doa keselamatan bagi pemakainya sejak era leluhur.",
      en: "Ancient protective scale pattern warding off misfortune and wishing safety since ancestral times."
    },
    category: { id: "Pusaka Sakral", en: "Sacred Heritage" },
    accentColor: "#431407",
    badgeBg: "bg-stone-900/10 text-stone-900 border-stone-300",
    iconName: "Shield",
    patternType: "gringsing"
  }
];

// 4 Sequential Stages of the 1-Hour Tour Package
export const tourActivitiesList: ActivityRow[] = [
  {
    id: "act-tour-kampung",
    title: {
      id: "1. Tour Kampung Jetis (Tahap 1)",
      en: "1. Jetis Village Walking Tour (Stage 1)"
    },
    subtitle: {
      id: "Menyusuri gang bersejarah, arsitektur kuno, dan sentra galeri batik keluarga",
      en: "Explore historic alleys, heritage architecture, and multi-generational batik family galleries"
    },
    description: {
      id: "Tahap awal rangkaian tur: Jelajahi setiap sudut gang eksotis Kampung Jetis bersama pemandu budaya lokal. Nikmati pemandangan rumah kuno berarsitektur Indis-Jawa, relief gapura legendaris, dan sapa langsung kehangatan keluarga perajin batik.",
      en: "First stage of the tour: Stroll through the exotic pathways of Kampung Jetis accompanied by a certified local cultural guide. Discover antique Indis-Javanese residences, ornate heritage gates, and meet resident artisan families."
    },
    duration: "Tahap 1: ~15 Menit",
    capacity: "Maks. 10 Wisatawan / Kelompok",
    highlights: {
      id: ["Pemandu Budaya Lokal Berlisensi", "Jelajah 5 Gang Bersejarah Jetis", "Welcome Drink Teh Hangat Tradisional", "Dokumentasi Spot Foto Gapura Ikonik"],
      en: ["Licensed Local Cultural Guide", "5 Historic Alleys Walking Trail", "Traditional Herbal Welcome Tea", "Photo Spot at Iconic Gate"]
    },
    iconName: "Footprints",
    imageUrl: "/src/assets/images/jetis_hero_banner_1784011605181.jpg",
    pricePerPerson: 54000
  },
  {
    id: "act-demo-membatik",
    title: {
      id: "2. Demo Membatik (Tahap 2)",
      en: "2. Hands-on Batik Workshop & Demo (Stage 2)"
    },
    subtitle: {
      id: "Praktik langsung mencanting dengan malam panas bersama maestro perajin",
      en: "Hands-on experience with copper canting, heated wax, and master artisan guidance"
    },
    description: {
      id: "Tahap kedua: Masuk ke sanggar canting tradisional untuk praktik langsung. Pelajari teknik menyendok malam panas dengan canting tembaga, menjaga nyala wajan tanah liat, hingga proses pewarnaan merah sardo. Hasil cantingan kain mori dibawa pulang sebagai suvenir.",
      en: "Second stage: Enter traditional workshops for live practice. Master the craft of holding copper canting, balancing heated wax on clay stoves, and applying vibrant natural dyes. Take home your own hand-drawn fabric piece."
    },
    duration: "Tahap 2: ~20 Menit",
    capacity: "Disediakan Mori & Canting Lengkap",
    highlights: {
      id: ["Alat Canting & Wajan Malam Disediakan", "Kain Mori Batik Hasil Sendiri Dibawa Pulang", "Bimbingan Langsung Maestro Jetis", "Edukasi Pewarnaan Alami Merah Sardo"],
      en: ["All Wax & Canting Tools Provided", "Handmade Fabric Take-Home Souvenir", "Direct Mentorship by Master Artisans", "Natural Sardo Dye Education"]
    },
    iconName: "Sparkles",
    imageUrl: "/src/assets/images/jetis_artisan_detail_1784011633935.jpg",
    pricePerPerson: 54000
  },
  {
    id: "act-wisata-situs",
    title: {
      id: "3. Wisata Situs Bersejarah (Tahap 3)",
      en: "3. Historic Site & Heritage Pilgrimage (Stage 3)"
    },
    subtitle: {
      id: "Kunjungan ke Masjid Jami' Al Abror dan Makam Mbah Mulyadi serta Sumur Pusaka",
      en: "Visit to Masjid Jami' Al Abror, Tomb of Mbah Mulyadi, and Sacred Wells"
    },
    description: {
      id: "Tahap ketiga: Ziarah napak tilas sejarah menuju Masjid Jami' Al Abror (masjid tertua bersejarah di Sidoarjo) dan Makam Mbah Mulyadi (tokoh sesepuh pejuang dan penyebar tradisi batik Jetis). Anda juga akan melihat sumur tua bersejarah yang digunakan untuk perendaman kain batik sejak ratusan tahun silam.",
      en: "Third stage: A historical pilgrimage to Masjid Jami' Al Abror (the oldest historic mosque in Sidoarjo) and the Tomb of Mbah Mulyadi (founding elder and batik pioneer of Jetis). You will also visit the ancient heritage wells historically used for soaking batik mori fabrics."
    },
    duration: "Tahap 3: ~15 Menit",
    capacity: "Cagar Budaya & Wisata Religi",
    highlights: {
      id: ["Kunjungan ke Masjid Jami' Al Abror (Masjid Tertua Sidoarjo)", "Ziarah Makam Mbah Mulyadi & Mbah Minto", "Sumur Tua Pusaka Perendaman Kain Mori", "Penuturan Sejarah oleh Sesepuh Kampung"],
      en: ["Visit to Masjid Jami' Al Abror (Oldest Mosque in Sidoarjo)", "Pilgrimage to Tomb of Mbah Mulyadi & Mbah Minto", "Ancient Sacred Dye-Soaking Heritage Well", "Oral History Narration by Village Elders"]
    },
    iconName: "Landmark",
    imageUrl: "/src/assets/images/jetis_batik_textiles_1784011646807.jpg",
    pricePerPerson: 54000
  },
  {
    id: "act-belanja-umkm",
    title: {
      id: "4. Berbelanja di UMKM Jetis (Tahap 4)",
      en: "4. Shopping Experience at Jetis UMKM (Stage 4)"
    },
    subtitle: {
      id: "Belanja batik tulis autentik, busana modern, souvenir kriya, dan kuliner khas",
      en: "Shop authentic hand-drawn textiles, modern apparel, handcrafted souvenirs, and local delicacies"
    },
    description: {
      id: "Tahap penutup: Menjelajahi galeri UMKM Kampung Jetis dan menukarkan kupon diskon wisata (Voucher Rp 30.000 untuk toko busana/kain dan Voucher Rp 5.000 untuk kuliner) yang otomatis terlampir pada tiket wisata Anda.",
      en: "Final stage: Explore local artisan UMKM boutiques and redeem your tour discount vouchers (Rp 30,000 fashion voucher and Rp 5,000 culinary coupon) included with your tour pass."
    },
    duration: "Tahap 4: ~15 Menit / Fleksibel",
    capacity: "Lebih dari 20 Gerai Mitra UMKM",
    highlights: {
      id: ["Voucher Diskon Busana Rp 30.000,- Terlampir", "Voucher Diskon Kuliner Rp 5.000,- Terlampir", "Belanja Langsung ke Perajin Asli", "Pembayaran Mudah dengan QRIS"],
      en: ["Rp 30,000 Fashion Voucher Included", "Rp 5,000 Culinary Coupon Included", "Direct Purchase from Local Artisans", "Seamless QRIS Payment"]
    },
    iconName: "ShoppingBag",
    imageUrl: "/src/assets/images/jetis_batik_textiles_1784011646807.jpg",
    pricePerPerson: 54000
  }
];

// 3 Tour Sessions
export const tourSessions: TourSession[] = [
  {
    id: "pagi",
    name: { id: "Sesi Pagi", en: "Morning Session" },
    time: "08.30 - 11.00 WIB",
    slotsRemaining: 8,
    description: {
      id: "Udara pagi sejuk, cocok untuk walking tour gang bersejarah dan demo mencanting segar.",
      en: "Crisp morning air, perfect for outdoor historic walking and fresh canting demonstrations."
    }
  },
  {
    id: "siang",
    name: { id: "Sesi Siang", en: "Afternoon Session" },
    time: "12.30 - 15.00 WIB",
    slotsRemaining: 6,
    description: {
      id: "Waktu ideal berbelanja batik di galeri ber-AC dan menikmati santap siang kuliner khas Jetis.",
      en: "Ideal time for boutique shopping and enjoying local Sidoarjo lunch delicacies."
    }
  },
  {
    id: "sore",
    name: { id: "Sesi Sore", en: "Evening Session" },
    time: "15.30 - 17.30 WIB",
    slotsRemaining: 9,
    description: {
      id: "Nuansa golden hour di gapura ikonik Jetis, dilanjutkan dengan wisata situs pusaka leluhur.",
      en: "Golden hour ambiance at the iconic gate followed by heritage ancestral site visits."
    }
  }
];

// Verified Jetis UMKM Stores
export const jetisUmkmList: UmkmStore[] = [
  {
    id: "umkm-1",
    name: "Batik Tulis Jetis Cempaka",
    owner: "Ibu Hj. Nurul Hidayati",
    category: "fashion",
    categoryLabel: { id: "Toko Busana & Kain", en: "Fashion & Fabric" },
    address: "Jl. Pasir No. 18, Jetis, Sidoarjo",
    phone: "+62 813-3012-4455",
    instagram: "@batikjetis_cempaka",
    description: {
      id: "Menyediakan aneka kain batik tulis sutra & katun prima dengan motif Merak dan Beras Wutah, kemeja pria, dan dress modern.",
      en: "Specializing in premium hand-drawn silk & cotton fabrics featuring Peacock and Spilled Rice motifs, shirts, and modern dresses."
    },
    couponAcceptance: { id: "Menerima Kupon Busana Rp 30.000,-", en: "Accepts Rp 30,000 Fashion Voucher" },
    featuredBadge: { id: "Galeri Legendaris 3 Generasi", en: "3-Generation Heritage Gallery" }
  },
  {
    id: "umkm-2",
    name: "Galeri Batik Sekar Arum",
    owner: "Bpk. M. Syaifuddin",
    category: "fabric",
    categoryLabel: { id: "Sentra Kain Tulis", en: "Hand-Drawn Fabrics" },
    address: "Gang Batik Utama No. 04, Jetis, Sidoarjo",
    phone: "+62 821-4155-8899",
    instagram: "@sekararum_jetis",
    description: {
      id: "Koleksi khusus batik tulis merah sardo pekat bersertifikat keaslian dan melayani pemesanan seragam batik instansi eksklusif.",
      en: "Curated collection of authentic certified sardo red batik fabrics and custom institutional orders."
    },
    couponAcceptance: { id: "Menerima Kupon Busana Rp 30.000,-", en: "Accepts Rp 30,000 Fashion Voucher" },
    featuredBadge: { id: "Spesialis Merah Sardo", en: "Sardo Red Specialist" }
  },
  {
    id: "umkm-3",
    name: "Oemah Kriya & Souvenir Jetis",
    owner: "Ibu Sri Wahyuni",
    category: "craft",
    categoryLabel: { id: "Suvenir & Kriya", en: "Crafts & Gifts" },
    address: "Jl. Diponegoro Gang 2 No. 07, Sidoarjo",
    phone: "+62 857-9033-1122",
    instagram: "@oemahkriya_jetis",
    description: {
      id: "Pusat suvenir kriya canting mini, gantungan kunci batik, tas tote bag kain perca motif Jetis, kipas kayu lukis, dan selendang.",
      en: "Souvenir center offering miniature canting, batik keychains, patchwork tote bags, painted wooden fans, and stoles."
    },
    couponAcceptance: { id: "Menerima Kupon Busana / Kriya", en: "Accepts Fashion/Craft Voucher" }
  },
  {
    id: "umkm-4",
    name: "Warung Wedang & Kuliner Ny. Endang",
    owner: "Ibu Endang Sulistyo",
    category: "fnb",
    categoryLabel: { id: "Kuliner Tradisional", en: "Traditional Culinary" },
    address: "Area Pujasera Pintu Masuk Jetis",
    phone: "+62 812-7788-9900",
    instagram: "@wedangjetis_nyendang",
    description: {
      id: "Menyajikan Wedang Uwuh khas Jetis, Sinom herbal segar, Lontong Kupang Sidoarjo, Tahu Tek, dan jajanan pasar tradisional.",
      en: "Serving Jetis herbal herbal infusions, fresh Sinom, Sidoarjo Lontong Kupang, Tahu Tek, and local sweet snacks."
    },
    couponAcceptance: { id: "Menerima Kupon Kuliner Rp 5.000,-", en: "Accepts Rp 5,000 Culinary Coupon" },
    featuredBadge: { id: "Wedang Khas Perajin", en: "Artisan Herbal Tea" }
  },
  {
    id: "umkm-5",
    name: "Batik Tulis Ny. Goenawan",
    owner: "Ibu Goenawan",
    category: "fashion",
    categoryLabel: { id: "Boutique & Kain Antik", en: "Boutique & Antiques" },
    address: "Jl. Pasir No. 32, Jetis, Sidoarjo",
    phone: "+62 813-8822-1144",
    instagram: "@batiknygoenawan",
    description: {
      id: "Butik batik klasik dengan koleksi motif Abrik Gringsing, Bandeng Udang, serta busana kebaya kontemporer.",
      en: "Classic boutique featuring Abrik Gringsing, Bandeng Shrimp motifs, and contemporary kebaya attire."
    },
    couponAcceptance: { id: "Menerima Kupon Busana Rp 30.000,-", en: "Accepts Rp 30,000 Fashion Voucher" }
  },
  {
    id: "umkm-6",
    name: "Cafe Omah Lawas & Kopi Canting",
    owner: "Mas Dimas & Rekan",
    category: "fnb",
    categoryLabel: { id: "Cafe & Roastery", en: "Cafe & Roastery" },
    address: "Jl. Diponegoro Dalam No. 15, Jetis",
    phone: "+62 878-5544-2211",
    instagram: "@omahlawas_kopicanting",
    description: {
      id: "Cafe berarsitektur rumah kuno 1920-an menyajikan es kopi gula aren, teh serai madu, serta pisang goreng wijen renyah.",
      en: "Heritage 1920s architecture cafe serving iced palm sugar coffee, honey lemongrass tea, and crispy sesame fried bananas."
    },
    couponAcceptance: { id: "Menerima Kupon Kuliner Rp 5.000,-", en: "Accepts Rp 5,000 Culinary Coupon" }
  }
];

// Institutional & Official Partners
export const partnersList: PartnerOrg[] = [
  {
    id: "partner-disporapar",
    name: "Disporapar Kab. Sidoarjo",
    role: { id: "Pembina Destinasi Wisata Daerah", en: "Regional Tourism Development Agency" },
    category: "government",
    logoPlaceholderText: "DISPORAPAR SIDOARJO",
    logoColor: "#8c2d19"
  },
  {
    id: "partner-kemendikbud",
    name: "Kemendikbudristek RI",
    role: { id: "Pelindung Warisan Budaya Takbenda", en: "Intangible Cultural Heritage Directorate" },
    category: "government",
    logoPlaceholderText: "WARISAN BUDAYA RI",
    logoColor: "#1e3a8a"
  },
  {
    id: "partner-paguyuban",
    name: "Paguyuban Batik Jetis Sidoarjo",
    role: { id: "Asosiasi Pengrajin & Maestro Lokal", en: "Local Artisans & Guild Guild" },
    category: "community",
    logoPlaceholderText: "PAGUYUBAN BATIK JETIS",
    logoColor: "#b45309"
  },
  {
    id: "partner-bi-qris",
    name: "Bank Indonesia & QRIS",
    role: { id: "Digitalisasi Pembayaran UMKM", en: "National QRIS Payment Digitalization" },
    category: "finance",
    logoPlaceholderText: "QRIS & BANK INDONESIA",
    logoColor: "#dc2626"
  },
  {
    id: "partner-pesona",
    name: "Wonderful Indonesia",
    role: { id: "Promosi Pariwisata Budaya Nasional", en: "National Cultural Tourism Promotion" },
    category: "government",
    logoPlaceholderText: "WONDERFUL INDONESIA",
    logoColor: "#0284c7"
  },
  {
    id: "partner-unair-its",
    name: "Pusat Pengabdian Unair & ITS",
    role: { id: "Pendampingan Inovasi Digital & Desain", en: "Digital Innovation & Community Service" },
    category: "academic",
    logoPlaceholderText: "KOLABORASI UNIVERSITAS",
    logoColor: "#475569"
  },
  {
    id: "partner-pemkab",
    name: "Pemerintah Kabupaten Sidoarjo",
    role: { id: "Pemerintah Daerah Pengampu Wilayah", en: "Regency Government of Sidoarjo" },
    category: "government",
    logoPlaceholderText: "PEMKAB SIDOARJO",
    logoColor: "#15803d"
  }
];
