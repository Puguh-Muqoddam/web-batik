-- ============================================================
-- Website Jejak Jetis — Supabase Schema
-- All tables accessed via Supabase auto-generated REST API
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- TABLE 1: packages (Paket Wisata)
-- ==========================================
CREATE TABLE IF NOT EXISTS packages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_id TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_id TEXT,
  description_en TEXT,
  price NUMERIC NOT NULL,
  duration TEXT,
  capacity TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 2: bookings
-- ==========================================
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  package_id UUID REFERENCES packages(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  visit_date DATE NOT NULL,
  session TEXT NOT NULL CHECK (session IN ('pagi', 'siang', 'sore')),
  visitor_count INTEGER NOT NULL CHECK (visitor_count >= 1 AND visitor_count <= 20),
  total_price NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'cancelled', 'expired')),
  ticket_code TEXT UNIQUE,
  coupon_fashion TEXT,
  coupon_fnb TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 3: payments
-- ==========================================
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id),
  midtrans_order_id TEXT UNIQUE,
  payment_type TEXT,
  gross_amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'settlement', 'expire', 'cancel')),
  qris_url TEXT,
  paid_at TIMESTAMPTZ,
  webhook_payload JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 4: events
-- ==========================================
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_id TEXT NOT NULL,
  title_en TEXT,
  description_id TEXT,
  description_en TEXT,
  event_date DATE,
  image_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 5: gallery
-- ==========================================
CREATE TABLE IF NOT EXISTS gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption_id TEXT,
  caption_en TEXT,
  category TEXT DEFAULT 'general' CHECK (category IN ('general', 'batik', 'artisan', 'event')),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 6: faq
-- ==========================================
CREATE TABLE IF NOT EXISTS faq (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id TEXT NOT NULL,
  question_en TEXT,
  answer_id TEXT NOT NULL,
  answer_en TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- TABLE 7: settings
-- ==========================================
CREATE TABLE IF NOT EXISTS settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value_id TEXT,
  value_en TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- ROW LEVEL SECURITY
-- ==========================================

ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE faq ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Public read for content tables
CREATE POLICY "packages_public_read" ON packages FOR SELECT USING (true);
CREATE POLICY "events_public_read" ON events FOR SELECT USING (true);
CREATE POLICY "gallery_public_read" ON gallery FOR SELECT USING (true);
CREATE POLICY "faq_public_read" ON faq FOR SELECT USING (true);
CREATE POLICY "settings_public_read" ON settings FOR SELECT USING (true);

-- Bookings: anyone can insert (anon visitors)
CREATE POLICY "bookings_anon_insert" ON bookings FOR INSERT WITH CHECK (true);

-- Payments: only service role (Edge Functions) can insert/update
-- (no anon policy needed — Edge Functions use service_role key)
