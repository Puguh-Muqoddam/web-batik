import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { translations } from '../translations';

export default function StorySection({ lang }: SectionProps) {
  const t = translations[lang].story;

  return (
    <section id="kisah" className="bg-bg-dark py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="section-badge-light inline-block">{t.badge}</span>
          <div className="space-y-6 text-text-on-dark-muted text-lg md:text-xl text-left md:text-center">
            <p className="text-text-on-dark">{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-l-4 border-accent-gold pl-6 md:pl-8 text-left max-w-3xl mx-auto"
        >
          <blockquote className="font-heading italic text-2xl md:text-3xl text-accent-gold mb-4">
            {t.quote}
          </blockquote>
          <p className="text-text-on-dark-muted font-medium">
            {t.quoteAuthor}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
