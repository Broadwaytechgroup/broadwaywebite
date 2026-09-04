import { SOLUTIONS } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          
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
              <article
                key={sol.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] animate-on-scroll"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-52 overflow-hidden rounded-b-[1.5rem]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/25 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 shadow-md backdrop-blur-sm ring-1 ring-white/50">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      Secteur
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{sol.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{sol.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
