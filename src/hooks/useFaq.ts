import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { FaqItem } from '../types';

const defaultFaqs: FaqItem[] = [
  {
    id: '1',
    question_id: 'Apakah saya perlu pengalaman membatik sebelumnya?',
    question_en: 'Do I need prior batik experience?',
    answer_id: 'Tidak perlu. Semua paket kami cocok untuk pemula. Pengrajin kami akan membimbing Anda langkah demi langkah dari awal hingga selesai.',
    answer_en: 'No prior experience needed. All our workshops are suitable for complete beginners, guided step by step by expert artisans.',
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    question_id: 'Berapa lama waktu yang dibutuhkan untuk satu sesi membatik?',
    question_en: 'How long does a batik session take?',
    answer_id: 'Paket Membatik Tulis berlangsung sekitar 2–3 jam. Paket Wisata Kampung memakan waktu 1,5 jam. Paket Privat Keluarga dijalankan selama setengah hari penuh.',
    answer_en: 'The hand-drawn workshop takes 2–3 hours. The heritage tour is 1.5 hours. The private family package runs for half a day.',
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    question_id: 'Apakah batik yang saya buat bisa dibawa pulang?',
    question_en: 'Can I take home the batik I create?',
    answer_id: 'Ya, tentu. Hasil batik yang Anda buat selama sesi akan menjadi milik Anda. Kami juga akan menyelesaikan proses pewarnaan dan pengeringan, sehingga kain siap dibawa pulang.',
    answer_en: 'Yes, absolutely. The piece you create is yours to keep. We complete the coloring and drying process so it is ready for you to take home.',
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    question_id: 'Bagaimana cara pembayaran dan konfirmasi pesanan?',
    question_en: 'How do payment and order confirmation work?',
    answer_id: 'Setelah mengisi formulir pemesanan, Anda dapat melakukan pembayaran via QRIS secara instan atau tim kami akan menghubungi Anda via WhatsApp dalam 1×24 jam.',
    answer_en: 'After completing the booking form, you can pay instantly via QRIS or our concierge team will reach out via WhatsApp within 24 hours.',
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
];

export function useFaq() {
  const [faqs, setFaqs] = useState<FaqItem[]>(defaultFaqs);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const { data, error: err } = await supabase
          .from('faq')
          .select('*')
          .order('sort_order', { ascending: true });

        if (err) throw err;
        if (data && data.length > 0) {
          setFaqs(data as FaqItem[]);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchFaqs();
  }, []);

  return { faqs, loading, error };
}
