import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO } from '@/data/content';

const CATEGORIES = ['Tous', ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          
          <h2 className="section-title mb-5">
            Des projets qui <span className="gradient-text">parlent</span> pour nous
          </h2>
          <p className="section-subtitle mx-auto">
            Une sélection de réalisations représentatives de notre savoir-faire, modifiables et remplaçables à votre guise.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-on-scroll animate-on-scroll-delay-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue border border-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1 bg-white"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-brand-blue">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-gray-400 group-hover:text-brand-orange group-hover:rotate-45 transition-all duration-300 shrink-0" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
