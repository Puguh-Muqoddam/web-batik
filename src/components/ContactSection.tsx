import { Phone, Mail, MessageCircle } from 'lucide-react';
import { SectionProps } from '../types';
import { translations } from '../translations';

export default function ContactSection({ lang }: SectionProps) {
  const t = translations[lang];

  return (
    <section id="kontak" className="py-20 bg-bg-cream font-body">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="section-badge mb-4 inline-block">{t.contact.badge}</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading mb-4">
          {t.contact.heading}
        </h2>
        <p className="text-text-body text-lg mb-12">
          {t.contact.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center space-x-3 text-text-heading">
            <Phone className="w-6 h-6 text-primary-warm" />
            <span className="font-semibold">+62 812-3456-7890</span>
          </div>
          <div className="flex items-center space-x-3 text-text-heading">
            <Mail className="w-6 h-6 text-primary-warm" />
            <span className="font-semibold">info@kampungbatikjetis.com</span>
          </div>
          <div className="flex items-center space-x-3 text-text-heading">
            <MessageCircle className="w-6 h-6 text-primary-warm" />
            <span className="font-semibold">WhatsApp Kami</span>
          </div>
        </div>
      </div>
    </section>
  );
}
