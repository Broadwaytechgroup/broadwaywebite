import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Nos services <span className="w-8 h-px bg-brand-orange" />
          </span>
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
              <div
                key={service.title}
                className={`card-glass p-7 group animate-on-scroll`}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 flex items-center justify-center mb-5 group-hover:from-brand-blue group-hover:to-brand-blueDark transition-all duration-300">
                  <Icon size={26} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-orange transition-colors"
                >
                  En savoir plus <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
