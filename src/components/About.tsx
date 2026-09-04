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
                src="https://wigmoretrading.com/wp-content/uploads/2023/05/iStock-1087487042.jpg"
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

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-card-hover animate-on-scroll">
            <img
              src="https://media.istockphoto.com/id/1622648941/ko/%EC%82%AC%EC%A7%84/%ED%95%A8%EA%BB%98-%EC%9D%BC%ED%95%98%EA%B8%B0-%ED%95%98%EC%96%80-%ED%98%84%EB%8C%80-%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%97%90%EC%84%9C-%EB%8F%99%EB%A3%8C%EC%99%80-%EC%83%88%EB%A1%9C%EC%9A%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EB%8C%80%ED%95%B4-%EB%85%BC%EC%9D%98.jpg?s=170667a&w=0&k=20&c=Yja1Rz5qPR_fuuy6UWhuf4D9OyeYkV-_n8SyNpr9Dbw="
              alt="Équipe et collaboration Broadway Technologies"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/75 via-brand-dark/40 to-transparent" />
            
          </div>

          <div className="space-y-6 animate-on-scroll animate-on-scroll-delay-1">
            <div>
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange"></span>
                <span>NOTRE APPROCHE</span>
                <span className="w-8 h-px bg-brand-orange"></span>
              </span>
            </div>
            <h3 className="section-title text-3xl md:text-4xl">
              Une entreprise pensée pour <span className="gradient-text">transformer durablement</span>
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              Broadway Technologies ne se limite pas à livrer des outils. Nous accompagnons nos clients dans la création d’une véritable capacité d’innovation, avec des solutions robustes, évolutives et alignées sur leurs enjeux réels.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Chaque mission commence par une compréhension profonde du contexte, des contraintes de l’entreprise et des objectifs de croissance. De là, nous concevons des systèmes intelligents, sécurisés et faciles à faire évoluer.
            </p>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] bg-gray-50 border border-gray-100 p-8 md:p-10 animate-on-scroll">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div>
              <span className="section-label">
                <span className="w-8 h-px bg-brand-orange"></span>
                <span>CE QUE NOUS CRÉONS</span>
                <span className="w-8 h-px bg-brand-orange"></span>
              </span>
              <h3 className="section-title text-3xl md:text-4xl mt-4">
                Des systèmes qui <span className="gradient-text">font avancer les organisations</span>
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-card border border-gray-100">
                <div className="text-3xl font-black text-brand-blue mb-2">+50</div>
                <p className="text-sm text-gray-600 leading-relaxed">projets livrés ou accompagnés dans divers secteurs d’activité.</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-card border border-gray-100">
                <div className="text-3xl font-black text-brand-blue mb-2">24/7</div>
                <p className="text-sm text-gray-600 leading-relaxed">support technique et veille pour sécuriser les infrastructures critiques.</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-card border border-gray-100">
                <div className="text-3xl font-black text-brand-blue mb-2">100%</div>
                <p className="text-sm text-gray-600 leading-relaxed">orientation valeur, sécurité et satisfaction client dans chaque livraison.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
