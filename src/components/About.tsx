import { Target, Eye, Heart, ShieldCheck } from 'lucide-react';

const VALUES = [
  { icon: Target, title: 'Mission', text: "Démocratiser l'accès aux technologies de pointe pour permettre à chaque organisation de se transformer et de grandire." },
  { icon: Eye, title: 'Vision', text: "Devenir le partenaire technologique de référence en Afrique et en Europe, pont entre innovation et impact réel." },
  { icon: Heart, title: 'Valeurs', text: "Intégrité, excellence, innovation et proximité. Nous plaçons l'humain au cœur de chaque collaboration." },
  { icon: ShieldCheck, title: 'Engagement', text: "Livrer des solutions durables, sécurisées et mesurables. Votre réussite est notre boussole." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="animate-on-scroll">
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange"></span>
                <span>À PROPOS</span>
                <span className="w-8 h-px bg-brand-orange"></span>
              </span>
            <h2 className="section-title mb-6">
              Broadway Technologies, <span className="gradient-text">architecte de votre transformation digitale</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Nous sommes une entreprise de services numériques qui conçoit, développe et opère des solutions technologiques sur mesure. Du cloud à la cybersécurité, de l'IA au génie logiciel, nous accompagnons les organisations dans chaque étape de leur maturité digitale.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Notre identité s'inscrit autour du cercle technologique : un écosystème connecté, intelligent et sécurisé, où chaque élément interagit pour créer de la valeur.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <v.icon size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-dark mb-1">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with circuit ring */}
          <div className="relative animate-on-scroll animate-on-scroll-delay-2">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Équipe Broadway Technologies au travail"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-brand-orange/20 circuit-ring-anim hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
