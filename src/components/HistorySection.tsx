import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { translations } from '../translations';
import sejarahImg from '../assets/images/Sejarah kampung batik.png';

export default function HistorySection({ lang }: SectionProps) {
  const t = translations[lang].about;

  return (
    <section id="tentang" className="bg-bg-cream py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">{t.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading">
            {t.heading}
          </h2>
          <div className="space-y-4 text-text-body text-lg">
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={sejarahImg} 
            alt="Sejarah Kampung Batik" 
            className="w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
