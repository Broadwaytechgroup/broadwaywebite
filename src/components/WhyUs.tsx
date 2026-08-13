import { WHY_US } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-label justify-center text-brand-orange">
            <span className="w-8 h-px bg-brand-orange" /> Pourquoi Broadway <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Huit raisons de nous <span className="orange-gradient-text">faire confiance</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Nous ne livrons pas seulement des projets. Nous bâtissons des partenariats durables fondés sur la transparence et les résultats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="group p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                  <Icon size={24} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
