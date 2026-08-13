import macbookPro from '../assets/shop/mac.jpg';
import dellXps from '../assets/shop/dell.png';
import poweredgeR760 from '../assets/shop/serverdell.avif';
import synologyDs224 from '../assets/shop/synology.jpg';
import cisco9300 from '../assets/shop/cisco.avif';
import unifiU6Pro from '../assets/shop/Unifi.webp';
import hpOfficejet from '../assets/shop/hpoffice.webp';
import dellUltrasharp from '../assets/shop/dellecran.webp';
import apcUps from '../assets/shop/apc.webp';
import hikvisionCamera from '../assets/shop/hikvision.webp';

const sections = [
  {
    title: 'Ordinateurs & portables',
    description: 'Des machines professionnelles haut de gamme, pensées pour la performance, la mobilité et la productivité.',
    products: [
      {
        name: 'MacBook Pro M3 Max',
        price: '3 850 000 FCFA',
        badge: 'Premium',
        image: macbookPro,
        imageStyle: { objectPosition: 'center 45%' },
        features: ['Chip M3 Max', '36 Go RAM', 'SSD 1 To', 'Écran Liquid Retina XDR'],
      },
      {
        name: 'Dell XPS 15',
        price: '2 950 000 FCFA',
        badge: 'Nouveau',
        image: dellXps,
        imageStyle: { objectPosition: 'center 45%' },
        features: ['Intel Core Ultra', '32 Go RAM', 'SSD 1 To', 'Écran 3,5K OLED'],
      },
    ],
  },
  {
    title: 'Serveurs & stockage',
    description: 'Infrastructure robuste pour les centres de données, la virtualisation et les sauvegardes critiques.',
    products: [
      {
        name: 'Dell PowerEdge R760',
        price: '12 500 000 FCFA',
        badge: 'Entreprise',
        image: poweredgeR760,
        imageStyle: { objectPosition: 'center 35%' },
        features: ['Xeon Scalable', '128 Go RAM', 'SSD NVMe', 'Gestion à distance'],
      },
      {
        name: 'Synology DS224+',
        price: '2 300 000 FCFA',
        badge: 'Stockage',
        image: synologyDs224,
        imageStyle: { objectPosition: 'center 50%' },
        features: ['2 baies', '4 To SSD/NAS', 'Sauvegarde hybride', 'Synology DSM'],
      },
    ],
  },
  {
    title: 'Réseaux & connectivité',
    description: 'Équipements réseau performants pour les bureaux, les sites distants et les infrastructures modernes.',
    products: [
      {
        name: 'Cisco Catalyst 9300',
        price: '3 100 000 FCFA',
        badge: 'Sécurisé',
        image: cisco9300,
        imageStyle: { objectPosition: 'center 35%' },
        features: ['Switch enterprise', 'Segmentation avancée', 'Gestion centralisée', 'Très haute fiabilité'],
      },
      {
        name: 'Ubiquiti UniFi Wi-Fi 6 Pro',
        price: '1 150 000 FCFA',
        badge: 'Nouveau',
        image: unifiU6Pro,
        imageStyle: { objectPosition: 'center 50%' },
        features: ['Wi-Fi 6', 'Très grande couverture', 'Gestion cloud', 'Installation simple'],
      },
    ],
  },
  {
    title: 'Imprimantes & périphériques',
    description: 'Périphériques bureautiques efficaces pour les équipes de travail modernes et exigeantes.',
    products: [
      {
        name: 'HP OfficeJet Pro 9730',
        price: '1 650 000 FCFA',
        badge: 'Productivité',
        image: hpOfficejet,
        imageStyle: { objectPosition: 'center 40%' },
        features: ['Impression couleur rapide', 'Scanner ADF', 'Wi-Fi direct', 'Gestion cloud'],
      },
      {
        name: 'Dell UltraSharp U2723QE',
        price: '980 000 FCFA',
        badge: 'Nouveau',
        image: dellUltrasharp,
        imageStyle: { objectPosition: 'center 50%' },
        features: ['Écran 4K IPS', 'USB-C', 'Très bon rendu', 'Design premium'],
      },
    ],
  },
  {
    title: 'Accessoires & sécurité',
    description: 'Solutions complémentaires pour sécuriser vos postes, vos réseaux et vos espaces de travail.',
    products: [
      {
        name: 'APC Smart-UPS 1500VA',
        price: '850 000 FCFA',
        badge: 'Protection',
        image: apcUps,
        imageStyle: { objectPosition: 'center 50%' },
        features: ['Alimentation fiable', 'Protection réseau', 'Batterie durable', 'Garantie premium'],
      },
      {
        name: 'Hikvision DS-2CD2347G2-L',
        price: '620 000 FCFA',
        badge: 'Sécurité',
        image: hikvisionCamera,
        imageStyle: { objectPosition: 'center 50%' },
        features: ['Vision nocturne', 'Détection intelligente', 'Wi-Fi 6', 'Installation facile'],
      },
    ],
  },
];

export default function Shop() {
  return (
    <section id="shop" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Boutique <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Des <span className="gradient-text">équipements modernes</span> à portée de main
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez des matériels fiables, performants et prêts à être déployés dans vos environnements professionnels.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, sectionIndex) => (
            <div key={section.title} className="animate-on-scroll">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold text-brand-dark">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{section.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {section.products.map((product, index) => (
                  <div key={product.name} className="card-glass p-7" style={{ transitionDelay: `${(sectionIndex + index) * 0.05}s` }}>
                    <div className="flex items-center justify-start mb-4">
                      <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                        {product.badge}
                      </span>
                    </div>

                    <div className="h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue/15 via-brand-blue/5 to-brand-orange/10 mb-5 border border-gray-100">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full"
                          style={{ objectFit: 'cover', transform: 'scale(1.05)', ...(product.imageStyle || {}) }}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-2xl font-semibold text-brand-dark">
                          {index + 1}
                        </div>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-lg text-brand-dark mb-3">{product.name}</h4>

                    <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-brand-orange" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors">
                      Demander un devis
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
