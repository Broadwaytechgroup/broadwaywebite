import { Link } from 'react-router-dom';
import isc2Logo from '../assets/certs/isc.webp';
import ecCouncilLogo from '../assets/certs/ec council.webp';
import ciscoLogo from '../assets/certs/cisco.webp';
import microsoftLogo from '../assets/certs/Microsoft.png';
import linuxLogo from '../assets/certs/linux.webp';
import awsLogo from '../assets/certs/aws.webp';

const levels = [
  {
    title: 'Initiation',
    subtitle: 'Acquérir les bases essentielles',
    bullets: ['Notions fondamentales', 'Prise en main pratique', 'Confiance et autonomie'],
  },
  {
    title: 'Développement',
    subtitle: 'Approfondir et déployer',
    bullets: ['Projets pratiques', 'Certifications préparatoires', 'Compétences métiers'],
  },
  {
    title: 'Expertise',
    subtitle: 'Maîtriser et innover',
    bullets: ['Cas avancés', 'Bonnes pratiques professionnelles', 'Préparation aux certifications pro'],
  },
];

const domains = [
  'Réseaux & Systèmes',
  'Cybersécurité',
  'Cloud & Infrastructure',
  'Développement & Programmation',
  'Data & Intelligence Artificielle',
  'Bureautique professionnelle',
];

const certifications = [
  { name: '(ISC)²', logo: isc2Logo },
  { name: 'EC-Council', logo: ecCouncilLogo },
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Linux', logo: linuxLogo },
  { name: 'AWS', logo: awsLogo },
];

const academyUrl = 'https://example.com';
const trainingHeroImage =
  'https://ghd-p-001.sitecorecontenthub.cloud/api/public/content/91b7ab70780141ad9dac5b6036dfa17c?v=39e792b8&t=';

export default function Trainings() {
  return (
    <section id="trainings" className="section-padding bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef4ff_35%,#f8fafc_100%)]">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] mb-12 animate-on-scroll">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/85 via-brand-blue/70 to-brand-blue/30" />
          <img
            src={trainingHeroImage}
            alt="Formations Broadway"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="relative grid gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:py-14">
            <div className="max-w-3xl">
              <span className="section-label  bg-brand-orange border-white/20 bg-white/10 backdrop-blur-sm">
                <span  /> Broadway Academy
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
                Apprendre aujourd'hui, <span className="gradient-text text-white/90">réussir demain</span>
              </h2>

              <p className="mt-5 max-w-xl text-base text-blue-50 md:text-lg">
                Formations pratiques, certifications reconnues et accompagnement personnalisé pour développer vos compétences dans le numérique.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link to="/contact" className="btn btn-primary bg-brand-orange hover:bg-orange-500 text-white">
                  Inscrivez-vous dès maintenant
                </Link>
                <Link to="/contact" className="text-sm font-semibold text-white hover:text-brand-orange transition-colors">
                  Demander un programme sur-mesure
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-2xl">
              <div className="rounded-[1.25rem] overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={trainingHeroImage}
                  alt="Atelier de formation"
                  className="h-72 w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3 text-white">
                  <p className="text-2xl font-black text-brand-orange">+150</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100">Apprenants</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-white">
                  <p className="text-2xl font-black text-brand-orange">12</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100">Domaines</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-white">
                  <p className="text-2xl font-black text-brand-orange">98%</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-blue-100">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {levels.map((lvl, i) => (
            <div
              key={lvl.title}
              className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover animate-on-scroll"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                <span className="text-lg font-black">0{i + 1}</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-brand-dark mb-2">{lvl.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{lvl.subtitle}</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {lvl.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12 animate-on-scroll">
          <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
            <h3 className="font-display text-3xl font-semibold text-brand-dark">Nos domaines de formation</h3>
            <span className="text-sm text-gray-500">Des compétences adaptées à votre rythme</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d) => (
              <div
                key={d}
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-brand-orange/40 hover:bg-brand-orange/5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <span className="h-3 w-3 rounded-full bg-brand-orange" />
                </span>
                <span className="text-sm font-semibold text-brand-dark">{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 animate-on-scroll rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
          <h4 className="font-display text-2xl font-semibold text-brand-dark mb-4">Certifications reconnues</h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:border-brand-orange/30 hover:bg-white"
              >
                <img src={c.logo} alt={c.name} className="h-12 object-contain" />
                <div className="mt-3 text-xs font-medium text-center text-gray-700">{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 animate-on-scroll">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h5 className="font-display font-bold text-2xl text-brand-dark">Prêt à commencer ?</h5>
              <p className="mt-2 text-sm text-gray-500">
                Pour plus d'informations, consultez le site de Broadway Academy :
              </p>
              <a
                href={academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors"
              >
                Visiter le site de Broadway Academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
