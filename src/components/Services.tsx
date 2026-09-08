import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="section-title mb-5">
            Une expertise <span className="gradient-text">360°</span> pour vos projets
          </h2>
          <p className="section-subtitle mx-auto">
            Du conseil au déploiement, nous couvrons l'ensemble du spectre technologique avec des équipes spécialisées et certifiées.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            const isOpen = openService === service.title;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)] animate-on-scroll"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-52 overflow-hidden rounded-b-[4px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-[4px] bg-white/90 text-brand-blue shadow-md">
                      <Icon size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>

                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className={`text-sm text-gray-500 leading-relaxed transition-all duration-300 ${isOpen ? 'mt-0 mb-5 opacity-100' : 'mt-0 mb-0 opacity-0'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? null : service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-orange transition-colors"
                  >
                    {isOpen ? 'Voir moins' : 'En savoir plus'}
                    <ArrowRight size={15} className={`transition-transform ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
