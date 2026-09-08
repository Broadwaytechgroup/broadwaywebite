import { useState } from 'react';
import { ArrowRight, Briefcase, Building2, Cloud, GraduationCap, Rocket, ShieldCheck, Sparkles, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import { PORTFOLIO, SERVICES, SOLUTIONS, STATS, TECHNOLOGIES } from '@/data/content';
import { getIcon } from '@/lib/icons';

const strategicPillars = [
  {
    icon: Briefcase,
    title: 'Stratégie IT',
    text: 'Cadrage, architecture et feuille de route pour faire évoluer votre SI sans friction.',
  },
  {
    icon: Cloud,
    title: 'Cloud & infra',
    text: 'Migration, modernisation et optimisation continue de votre infrastructure numérique.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité',
    text: 'Protection des données, conformité et posture de sécurité alignée avec vos risques.',
  },
  {
    icon: Rocket,
    title: 'Accélération',
    text: 'Livraisons plus rapides, meilleure expérience client et meilleure efficacité opérationnelle.',
  },
];

export default function Home() {
  const [activePillar, setActivePillar] = useState(strategicPillars[0]);

  return (
    <main>
      <Hero />

      <section className="section-padding bg-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-label">
              <span className="w-8 h-px bg-brand-orange" /> Notre vision
            </span>
            <h2 className="section-title mt-4">LA TECHNOLOGIE QUI OUVRE LA VOIE</h2>
            <p className="section-subtitle mt-6 max-w-xl">
              Nous accompagnons les entreprises à transformer leurs défis en opportunités grâce à des solutions
              digitales robustes, intelligentes et conçues pour durer.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
              Chaque projet est pensé pour renforcer votre agilité, sécuriser vos opérations et accélérer votre croissance,
              avec une approche à la fois technique, humaine et orientée résultats.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                Découvrir nos services <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline-primary">
                À propos
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[4px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src="/images/IMG_3432.jpg"
              alt="Professionnels noirs en réunion tech"
              className="h-[480px] w-full rounded-[4px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <span className="section-label">
            <span className="w-8 h-px bg-brand-orange" />
            Ce que nous faisons
          </span>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div>
              <h2 className="section-title mt-4">
                Un accompagnement complet, de l’idée au résultat
              </h2>

              <div className="mt-8 space-y-0">
                {strategicPillars.map((pillar) => {
                  const isActive = activePillar.title === pillar.title;

                  return (
                    <button
                      key={pillar.title}
                      type="button"
                      onClick={() => setActivePillar(pillar)}
                      className={`flex w-full items-center justify-between gap-4 border-t border-slate-300/80 py-4 text-left transition-all duration-200 ${
                        isActive ? 'text-brand-orange' : 'text-brand-dark hover:text-brand-orange'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`h-2.5 w-2.5 rounded-full transition-colors ${isActive ? 'bg-brand-orange' : 'bg-slate-400'}`} />
                        <span className="font-black uppercase tracking-[-0.04em] text-[clamp(1.2rem,1.6vw,1.9rem)] leading-none">
                          {pillar.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-10 lg:pt-18">
              <div className="rounded-[4px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-7">
                <h3 className="font-display text-2xl font-bold leading-none tracking-[-0.04em] text-brand-dark md:text-3xl">
                  {activePillar.title}
                </h3>

                <div className="mt-5">
                  <p className="text-base leading-8 text-slate-600 md:text-lg">
                    {activePillar.text} Nous accompagnons chaque étape avec un cadre clair, des méthodes éprouvées et une exécution orientée résultats pour faire évoluer votre entreprise en toute sérénité.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {STATS.map((item) => (
              <div key={item.label} className="rounded-[4px] border border-slate-200 bg-white px-4 py-5 text-center">
                <div className="text-3xl font-black text-brand-blue">
                  {item.value}
                  {item.suffix}
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange" /> Nos services
              </span>
              <h2 className="section-title mt-4">Des expertises qui couvrent tout votre écosystème</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
              Voir tous nos services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.slice(0, 4).map((service, i) => {
              const Icon = getIcon(service.icon);
              return (
                <article key={service.title} className="group overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
                  <div className="relative h-52 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-brand-dark">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{service.description}</p>
                    <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
                      En savoir plus <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange" /> Solutions
              </span>
              <h2 className="section-title mt-4">Des réponses adaptées à chaque secteur</h2>
            </div>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
              Voir toutes les solutions <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SOLUTIONS.slice(0, 3).map((sol, i) => {
              const Icon = getIcon(sol.icon);
              return (
                <article key={sol.title} className="group overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
                  <div className="relative h-56 overflow-hidden">
                    <img src={sol.image} alt={sol.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-brand-dark">{sol.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{sol.description}</p>
                    <Link to="/solutions" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
                      Explorer <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    

      <section className="section-padding bg-slate-50">
  <div className="container-wide">
    <div className="max-w-5xl mb-12">
      <span className="section-label">
        <span className="w-8 h-px bg-brand-orange" />
        En plus de nos services
      </span>

      <h2 className="section-title mt-4 max-w-none">
        Encore plus de valeur pour votre organisation
      </h2>

      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        Au-delà de nos prestations principales, nous accompagnons les entreprises
        dans leur transformation numérique grâce à des solutions complémentaires,
        des conseils stratégiques et un suivi personnalisé pour maximiser leurs performances.
      </p>
    </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[4px] border border-slate-200 bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[4px] bg-brand-orange/10 text-brand-orange">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark">Formations & certifications</h3>
              <p className="mt-3 text-base leading-8 text-gray-600">
                Des programmes concrets pour renforcer les compétences de vos équipes et préparer votre organisation aux métiers du numérique.
              </p>
              <Link to="/trainings" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
                Découvrir les formations <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-[4px] border border-slate-200 bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[4px] bg-brand-blue/10 text-brand-blue">
                <Store size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark">Boutique & équipements</h3>
              <p className="mt-3 text-base leading-8 text-gray-600">
                Des matériels fiables, performants et prêts à être déployés pour les équipes, les serveurs et les infrastructures de production.
              </p>
              <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
                Explorer la boutique <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange" /> Réalisations
              </span>
              <h2 className="section-title mt-4">Quelques projets qui illustrent notre impact</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange">
              Voir tous les projets <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PORTFOLIO.slice(0, 3).map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
                <div className="relative h-60 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-brand-dark">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
