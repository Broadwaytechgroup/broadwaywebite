import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          
          <h2 className="section-title mb-5">
            Une expertise <span className="gradient-text">360°</span> pour vos projets
          </h2>
          <p className="section-subtitle mx-auto">
            Du conseil au déploiement, nous couvrons l'ensemble du spectre technologique avec des équipes spécialisées et certifiées.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)] animate-on-scroll"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-52 overflow-hidden rounded-b-[1.5rem]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 shadow-md backdrop-blur-sm ring-1 ring-white/50">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-orange transition-colors"
                  >
                    En savoir plus <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
