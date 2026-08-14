-- Buat tabel activities
CREATE TABLE activities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Buat tabel umkm_stores
CREATE TABLE umkm_stores (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  discount_active BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Buat tabel bookings
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  activity_id UUID REFERENCES activities(id),
  guest_email TEXT NOT NULL,
  total_price NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'paid', 'failed'
  midtrans_order_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Setup Row Level Security (RLS)
-- Aktifkan RLS
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE umkm_stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy untuk activities (Semua orang bisa melihat, hanya admin bisa mengubah)
CREATE POLICY "Public profiles are viewable by everyone." ON activities
  FOR SELECT USING (true);

-- Policy untuk umkm_stores (Semua orang bisa melihat, hanya admin bisa mengubah)
CREATE POLICY "Public stores are viewable by everyone." ON umkm_stores
  FOR SELECT USING (true);

-- Policy untuk bookings (Guest bisa membuat booking baru, tapi hanya bisa melihat booking miliknya jika ada auth)
-- Karena tidak ada auth, kita izinkan insert anon untuk guests.
CREATE POLICY "Anyone can insert bookings" ON bookings
  FOR INSERT WITH CHECK (true);
