import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section-padding bg-white">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-label">
              <span className="w-8 h-px bg-brand-orange" /> Notre vision
            </span>
            <h2 className="section-title mt-4">LA TECHNOLOGIE QUI OUVRE LA VOIE</h2>
            <p className="section-subtitle mt-6 max-w-xl">
              Nous accompagnons les entreprises à transformer leurs défis en opportunités grâce à des solutions
              digitales robustes, intelligentes et conçues pour durer.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
              Chaque projet est pensé pour renforcer votre agilité, sécuriser vos opérations et accélérer votre croissance,
              avec une approche à la fois technique, humaine et orientée résultats.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1300&q=80"
              alt="Professionnels noirs en réunion tech"
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
