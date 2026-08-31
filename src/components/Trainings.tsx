const levels = [
  {
    title: 'Initiation',
    subtitle: "Acquérir les bases essentielles",
    bullets: ['Notions fondamentales', 'Prise en main pratique', "Confiance et autonomie"],
  },
  {
    title: 'Développement',
    subtitle: "Approfondir et déployer",
    bullets: ['Projets pratiques', "Certifications préparatoires", 'Compétences métiers'],
  },
  {
    title: 'Expertise',
    subtitle: "Maîtriser et innover",
    bullets: ['Cas avancés', 'Bonnes pratiques professionnelles', "Préparation aux certifications pro"] ,
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

import isc2Logo from '../assets/certs/isc.webp';
import ecCouncilLogo from '../assets/certs/ec council.webp';
import ciscoLogo from '../assets/certs/cisco.webp';
import microsoftLogo from '../assets/certs/Microsoft.png';
import linuxLogo from '../assets/certs/linux.webp';
import awsLogo from '../assets/certs/aws.webp';

const certifications = [
  { name: '(ISC)²', logo: isc2Logo },
  { name: 'EC-Council', logo: ecCouncilLogo },
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Linux', logo: linuxLogo },
  { name: 'AWS', logo: awsLogo },
];

// URL modifiable pour le site externe de Broadway Academy
const academyUrl = 'https://example.com';

export default function Trainings() {
  return (
    <section id="trainings" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> BROADWAY ACADEMY <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-3">
            Apprendre aujourd'hui, <span className="gradient-text">réussir demain</span>
          </h2>
          <p className="section-subtitle mx-auto mb-6">
            Formations pratiques, certifications reconnues et accompagnement personnalisé pour développer vos compétences dans le numérique.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact" className="btn btn-primary">Inscrivez-vous dès maintenant</a>
            <a href="/contact" className="text-sm font-semibold text-brand-blue hover:text-brand-orange">Contactez-nous pour un programme sur-mesure</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {levels.map((lvl, i) => (
            <div key={lvl.title} className="card-glass p-6 animate-on-scroll" style={{ transitionDelay: `${i * 0.06}s` }}>
              <h4 className="font-display font-bold text-lg text-brand-dark mb-2">{lvl.title}</h4>
              <p className="text-sm text-gray-500 mb-3">{lvl.subtitle}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {lvl.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-orange" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 animate-on-scroll">
          <h3 className="font-display text-2xl font-semibold text-brand-dark mb-4">Nos domaines de formation</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d) => (
              <div key={d} className="p-4 rounded-lg border border-gray-100 bg-white flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-brand-blue/20" />
                <span className="text-sm font-semibold text-brand-dark">{d}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 animate-on-scroll">
          <h4 className="font-display text-lg font-semibold text-brand-dark mb-3">Certifications reconnues</h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
            {certifications.map((c) => (
              <div key={c.name} className="flex flex-col items-center p-3 bg-white rounded-md border border-gray-100">
                <img src={c.logo} alt={c.name} className="h-12 object-contain" />
                <div className="text-xs text-center text-gray-700 mt-2">{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 animate-on-scroll">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h5 className="font-display font-bold text-lg text-brand-dark">Prêt à commencer ?</h5>
              <p className="text-sm text-gray-500 mb-2">Pour plus d'informations, consultez le site de Broadway Academy :</p>
              <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-blue hover:text-brand-orange">Visiter le site de Broadway Academy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
