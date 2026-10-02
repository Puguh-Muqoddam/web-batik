-- ============================================================
-- Website Jejak Jetis — Seed Initial Data
-- Run this in Supabase Dashboard SQL Editor to populate initial data
-- ============================================================

-- Seed packages
INSERT INTO packages (name_id, name_en, description_id, description_en, price, duration, capacity, sort_order)
VALUES
  (
    'Paket Membatik Tulis',
    'Hand-drawn Batik Workshop',
    'Belajar proses membatik tulis dari awal bersama pengrajin berpengalaman. Hasil karya dapat dibawa pulang.',
    'Learn the hand-drawn batik process from scratch with master artisans. Take home your finished artwork.',
    85000,
    '2–3 Jam · Min. 1 Orang',
    'Min. 1 Orang',
    1
  ),
  (
    'Paket Wisata Kampung',
    'Heritage Village Tour',
    'Eksplorasi sejarah kampung Jetis dan melihat langsung proses produksi di beberapa rumah pengrajin.',
    'Explore the history of Kampung Jetis and witness live batik production in traditional artisan workshops.',
    55000,
    '1,5 Jam · Min. 2 Orang',
    'Min. 2 Orang',
    2
  ),
  (
    'Paket Privat Keluarga',
    'Private Family Experience',
    'Tur privat eksklusif untuk keluarga. Termasuk sesi membatik lengkap, pemandu khusus, dan makan siang masakan Jawa.',
    'Exclusive private tour for families. Includes complete batik workshop, private guide, and traditional Javanese lunch.',
    650000,
    'Setengah Hari · Maks. 8 Orang',
    'Maks. 8 Orang',
    3
  )
ON CONFLICT DO NOTHING;

-- Seed FAQ
INSERT INTO faq (question_id, question_en, answer_id, answer_en, sort_order)
VALUES
  (
    'Apakah saya perlu pengalaman membatik sebelumnya?',
    'Do I need prior batik experience?',
    'Tidak perlu. Semua paket kami cocok untuk pemula. Pengrajin kami akan membimbing Anda langkah demi langkah dari awal hingga selesai.',
    'No prior experience needed. All our workshops are suitable for complete beginners, guided step by step by expert artisans.',
    1
  ),
  (
    'Berapa lama waktu yang dibutuhkan untuk satu sesi membatik?',
    'How long does a batik session take?',
    'Paket Membatik Tulis berlangsung sekitar 2–3 jam. Paket Wisata Kampung memakan waktu 1,5 jam. Paket Privat Keluarga dijalankan selama setengah hari penuh.',
    'The hand-drawn workshop takes 2–3 hours. The heritage tour is 1.5 hours. The private family package runs for half a day.',
    2
  ),
  (
    'Apakah batik yang saya buat bisa dibawa pulang?',
    'Can I take home the batik I create?',
    'Ya, tentu. Hasil batik yang Anda buat selama sesi akan menjadi milik Anda. Kami juga akan menyelesaikan proses pewarnaan dan pengeringan, sehingga kain siap dibawa pulang.',
    'Yes, absolutely. The piece you create is yours to keep. We complete the coloring and drying process so it is ready for you to take home.',
    3
  ),
  (
    'Bagaimana cara pembayaran dan konfirmasi pesanan?',
    'How do payment and order confirmation work?',
    'Setelah mengisi formulir pemesanan, tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam untuk konfirmasi jadwal dan panduan pembayaran. Pembayaran dapat dilakukan melalui transfer bank atau QRIS e-wallet.',
    'After submitting the booking form, our team will reach out via WhatsApp within 24 hours to confirm schedule and payment guidance via bank transfer or QRIS.',
    4
  )
ON CONFLICT DO NOTHING;

-- Seed Site Settings
INSERT INTO settings (key, value_id, value_en)
VALUES
  ('site_name', 'Kampung Batik Jetis', 'Kampung Batik Jetis'),
  ('site_address', 'Jl. Diponegoro / Pasir Jetis No. 12, Kel. Lemahputro, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61213', 'Jl. Diponegoro / Pasir Jetis No. 12, Sidoarjo, East Java 61213'),
  ('site_phone', '+62 812-3456-7890', '+62 812-3456-7890'),
  ('site_hours', 'Senin – Sabtu 08.00 – 16.00 WIB, Minggu: Tutup', 'Monday – Saturday 08:00 – 16:00 WIB, Sunday: Closed')
ON CONFLICT (key) DO NOTHING;
