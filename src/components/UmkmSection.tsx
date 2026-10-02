import { SectionProps } from '../types';
import { translations } from '../translations';

export default function UmkmSection({ lang }: SectionProps) {
  const t = translations[lang];

  const umkmList = [
    {
      name: "Batik Tulis Jetis",
      category: "fashion",
      address: "Jl. Jetis No. 1",
      phone: "+62 812-XXXX-XXXX"
    },
    {
      name: "Kriya Malam Jetis",
      category: "craft",
      address: "Jl. Jetis No. 5",
      phone: "+62 813-XXXX-XXXX"
    },
    {
      name: "Warung Rawon Jetis",
      category: "fnb",
      address: "Jl. Jetis No. 8",
      phone: "+62 814-XXXX-XXXX"
    },
    {
      name: "Kain Batik Madura",
      category: "fabric",
      address: "Jl. Jetis No. 12",
      phone: "+62 815-XXXX-XXXX"
    }
  ];

  const getBadgeColors = (category: string) => {
    switch (category) {
      case 'fashion':
        return 'bg-primary-warm/10 text-primary-warm';
      case 'craft':
        return 'bg-accent-gold/10 text-accent-gold';
      case 'fnb':
        return 'bg-green-100 text-green-700';
      case 'fabric':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      fashion: "Fashion & Busana",
      craft: "Kriya & Kerajinan",
      fnb: "Kuliner Lokal",
      fabric: "Kain Tradisional"
    };
    return labels[category] || category;
  };

  return (
    <section id="umkm" className="py-20 bg-bg-sand font-body">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="section-badge mb-4 inline-block">{t.umkm.badge}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-heading mb-4">
            {t.umkm.heading}
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            {t.umkm.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {umkmList.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-border-light p-5 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-bold text-text-heading">
                    {item.name}
                  </h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeColors(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                <p className="text-text-body text-sm mb-1">{item.address}</p>
                <p className="text-text-muted text-sm">{item.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
