import { TECHNOLOGIES } from '@/data/content';

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Technologies <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Un socle <span className="gradient-text">technologique</span> moderne
          </h2>
          <p className="section-subtitle mx-auto">
            Nous maîtrisons les stacks les plus demandées du marché pour des solutions performantes, maintenables et évolutives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-on-scroll animate-on-scroll-delay-1">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech}
              className="group px-6 py-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-blue hover:bg-white hover:shadow-card transition-all duration-300 cursor-default"
            >
              <span className="font-display font-semibold text-gray-700 group-hover:text-brand-blue transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative circuit ring */}
        <div className="flex justify-center mt-16 animate-on-scroll animate-on-scroll-delay-2">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 rounded-full border-2 border-brand-blue/20 circuit-ring-anim" />
            <div className="absolute inset-6 rounded-full border border-brand-orange/20 circuit-ring-anim" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
