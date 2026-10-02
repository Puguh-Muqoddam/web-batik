import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { translations } from '../translations';

// Importing static images with exact filenames
import batik1 from '../assets/images/Batik1.jpeg';
import batik2 from '../assets/images/batik2.jpeg';
import artisanDetail from '../assets/images/jetis_artisan_detail_1784011633935.jpg';
import batikTextiles from '../assets/images/jetis_batik_textiles_1784011646807.jpg';
import motifFlora from '../assets/images/jetis_motif_flora_1786716303715.jpg';
import motifMaritim from '../assets/images/jetis_motif_maritim_1786716329628.jpg';
import motifMerak from '../assets/images/jetis_motif_merak_1786716289157.jpg';

const images = [
  { src: batik1, alt: 'Karya Batik Tulis Jetis 1' },
  { src: batik2, alt: 'Karya Batik Tulis Jetis 2' },
  { src: artisanDetail, alt: 'Detail Pengrajin Canting' },
  { src: batikTextiles, alt: 'Tekstil Kain Batik Jetis' },
  { src: motifFlora, alt: 'Motif Tradisional Flora' },
  { src: motifMaritim, alt: 'Motif Tradisional Maritim' },
  { src: motifMerak, alt: 'Motif Tradisional Merak' },
];

export default function GallerySection({ lang }: SectionProps) {
  const t = translations[lang].gallery;

  return (
    <section id="galeri" className="bg-bg-sand py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-badge mb-4 inline-block">{t.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden group shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
