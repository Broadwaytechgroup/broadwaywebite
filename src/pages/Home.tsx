import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';

const pageCards = [
  { title: 'Formations', description: 'Parcours pratiques et certifications reconnues.', href: '/trainings' },
  { title: 'Boutique', description: 'Équipements modernes pour vos projets IT.', href: '/shop' },
  { title: 'Réalisations', description: 'Découvrir nos projets et cas clients.', href: '/portfolio' },
  { title: 'Contact', description: 'Nous contacter pour un accompagnement personnalisé.', href: '/contact' },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="section-label justify-center">
              <span className="w-8 h-px bg-brand-orange" /> Découvrez nos pages <span className="w-8 h-px bg-brand-orange" />
            </span>
            <h2 className="section-title mt-4">Choisissez la page qui correspond à votre besoin</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Pour améliorer la vitesse, chaque page se charge indépendamment et ne télécharge pas tous les contenus en même temps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pageCards.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="card-glass p-6 transition hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-lg text-brand-dark mb-3">{page.title}</h3>
                <p className="text-sm text-gray-600">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  );
}
