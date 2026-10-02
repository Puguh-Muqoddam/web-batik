import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { GalleryItem } from '../types';

export function useGallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const { data, error: err } = await supabase
          .from('gallery')
          .select('*')
          .order('sort_order', { ascending: true });

        if (err) throw err;
        if (data) {
          setGallery(data as GalleryItem[]);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  return { gallery, loading, error };
}
