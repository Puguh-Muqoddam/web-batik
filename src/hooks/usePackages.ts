import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Package } from '../types';

const defaultPackages: Package[] = [
  {
    id: 'paket-1',
    name_id: 'Paket Membatik Tulis',
    name_en: 'Hand-drawn Batik Workshop',
    description_id: 'Belajar proses membatik tulis dari awal bersama pengrajin berpengalaman. Hasil karya dapat dibawa pulang.',
    description_en: 'Learn the hand-drawn batik process from scratch with master artisans. Take home your finished artwork.',
    price: 85000,
    duration: '2–3 Jam · Min. 1 Orang',
    capacity: 'Min. 1 Orang',
    image_url: null,
    is_active: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'paket-2',
    name_id: 'Paket Wisata Kampung',
    name_en: 'Heritage Village Tour',
    description_id: 'Eksplorasi sejarah kampung Jetis dan melihat langsung proses produksi di beberapa rumah pengrajin.',
    description_en: 'Explore the history of Kampung Jetis and witness live batik production in traditional artisan workshops.',
    price: 55000,
    duration: '1,5 Jam · Min. 2 Orang',
    capacity: 'Min. 2 Orang',
    image_url: null,
    is_active: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 'paket-3',
    name_id: 'Paket Privat Keluarga',
    name_en: 'Private Family Experience',
    description_id: 'Tur privat eksklusif untuk keluarga. Termasuk sesi membatik lengkap, pemandu khusus, dan makan siang masakan Jawa.',
    description_en: 'Exclusive private tour for families. Includes complete batik workshop, private guide, and traditional Javanese lunch.',
    price: 650000,
    duration: 'Setengah Hari · Maks. 8 Orang',
    capacity: 'Maks. 8 Orang',
    image_url: null,
    is_active: true,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
];

export function usePackages() {
  const [packages, setPackages] = useState<Package[]>(defaultPackages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const { data, error: err } = await supabase
          .from('packages')
          .select('*')
          .eq('is_active', true)
          .order('sort_order', { ascending: true });

        if (err) throw err;
        if (data && data.length > 0) {
          setPackages(data as Package[]);
        }
      } catch (err: unknown) {
        // Fallback to defaults if Supabase is offline or table is empty
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  return { packages, loading, error };
}
