import { SOLUTIONS } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Nos solutions <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Des solutions par <span className="gradient-text">secteur</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Chaque secteur a ses contraintes. Nous adaptons nos technologies à votre métier pour un impact maximal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((sol, i) => {
            const Icon = getIcon(sol.icon);
            return (
              <div
                key={sol.title}
                className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                    <Icon size={26} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark">{sol.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed">{sol.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
