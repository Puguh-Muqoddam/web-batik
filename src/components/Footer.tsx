import { SectionProps } from '../types';
import { translations } from '../translations';

export default function Footer({ lang }: SectionProps) {
  const t = translations[lang];

  return (
    <footer className="bg-bg-dark text-text-on-dark font-body pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-accent-gold">
              {t.siteName}
            </h3>
            <p className="italic text-text-on-dark opacity-80">
              {t.footer.tagline}
            </p>
            <p className="text-sm opacity-90 leading-relaxed">
              {t.footer.address}
            </p>
            <p className="text-sm font-semibold">
              {t.footer.whatsapp}
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold tracking-wider opacity-60">
              {t.footer.navTitle.toUpperCase()}
            </h4>
            <ul className="space-y-2">
              {['about', 'activities', 'gallery', 'umkm', 'booking'].map((key) => (
                <li key={key}>
                  <a 
                    href={`#${key}`} 
                    className="opacity-80 hover:opacity-100 hover:text-accent-gold transition-colors duration-200"
                  >
                    {t.nav[key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold tracking-wider opacity-60">
              {t.footer.hoursTitle.toUpperCase()}
            </h4>
            <p className="whitespace-pre-line opacity-90 leading-relaxed">
              {t.footer.hoursValue}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#332A20] text-center text-sm opacity-60 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <span>{t.footer.copyright}</span>
          <span className="hidden md:inline">•</span>
          <span>{t.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}
