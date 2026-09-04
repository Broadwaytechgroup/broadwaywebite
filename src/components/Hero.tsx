import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(5,17,31,0.72) 0%, rgba(11,29,49,0.7) 45%, rgba(9,27,49,0.76) 100%), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      <div className="container-wide relative z-10 flex min-h-screen items-center py-28">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl font-bold leading-[0.96] tracking-[-0.06em] md:text-5xl lg:text-7xl">
            Construisons votre
            <span className="mt-2 block text-white/95">avenir numérique</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
            Broadway Technologies accompagne les entreprises dans leur transformation digitale,
            de l’infrastructure cloud à l’intelligence artificielle, avec une approche fiable,
            sécurisée et orientée résultats.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="btn-orange">
              Découvrir nos services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Nous contacter <Mail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
