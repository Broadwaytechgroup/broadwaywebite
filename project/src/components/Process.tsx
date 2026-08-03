import { PROCESS } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Notre processus <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Une méthode <span className="gradient-text">éprouvée</span>, du concept au support
          </h2>
          <p className="section-subtitle mx-auto">
            Six étapes structurées pour transformer votre vision en réalité, avec une visibilité totale à chaque jalon.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {PROCESS.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Node */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-brand-blue/20 flex items-center justify-center shadow-card group hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300 mb-5">
                    <Icon size={32} className="text-brand-blue" />
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[180px]">{step.description}</p>

                  {/* Arrow for mobile (between items) */}
                  {i < PROCESS.length - 1 && (
                    <div className="lg:hidden mt-4 text-brand-orange text-2xl">↓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
