const trainings = [
  {
    title: 'Cisco CCNA',
    duration: '6 semaines',
    level: 'Débutant à intermédiaire',
    description: 'Apprenez les fondamentaux du réseau, de l’adressage, de la sécurité réseau et de la connectivité d’entreprise.',
    modules: ['Réseaux informatiques', 'Adressage IP', 'Configuration de base'],
  },
  {
    title: 'Microsoft Azure (AZ-900 / AZ-104)',
    duration: '6 semaines',
    level: 'Intermédiaire',
    description: 'Maîtrisez les bases du cloud Azure et les services essentiels pour déployer des solutions modernes.',
    modules: ['Cloud Computing', 'Virtualisation', 'Administration Azure'],
  },
  {
    title: 'AWS Certified Solutions Architect',
    duration: '8 semaines',
    level: 'Avancé',
    description: 'Comprenez les concepts de l’architecture cloud AWS et apprenez à concevoir des solutions fiables et évolutives.',
    modules: ['Architecture AWS', 'Sécurité cloud', 'Scalabilité'],
  },
  {
    title: 'CompTIA Security+',
    duration: '4 semaines',
    level: 'Intermédiaire',
    description: 'Développez des compétences solides en cybersécurité, protection des systèmes et bonnes pratiques de sécurité.',
    modules: ['Cybersécurité', 'Protection des données', 'Sécurité des postes'],
  },
  {
    title: 'Développement Web Full Stack (React & Node.js)',
    duration: '8 semaines',
    level: 'Intermédiaire',
    description: 'Construisez des applications web modernes avec React, Node.js et des API performantes.',
    modules: ['React', 'Node.js', 'Développement d’applications'],
  },
  {
    title: 'Intelligence Artificielle & Machine Learning avec Python',
    duration: '8 semaines',
    level: 'Avancé',
    description: 'Découvrez les bases de l’IA, du machine learning et de la Data Science à travers des projets concrets.',
    modules: ['Python', 'Machine Learning', 'Analyse de données'],
  },
];

export default function Trainings() {
  return (
    <section id="trainings" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Formations <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Des <span className="gradient-text">formations concrètes</span> pour faire grandir vos équipes
          </h2>
          <p className="section-subtitle mx-auto">
            Des parcours pratiques, adaptés à vos besoins réels et orientés résultats pour une montée en compétences rapide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {trainings.map((training, index) => (
            <div key={training.title} className="card-glass p-7 animate-on-scroll" style={{ transitionDelay: `${index * 0.08}s` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-brand-blue">{training.level}</span>
                <span className="text-sm text-gray-500">{training.duration}</span>
              </div>

              <h3 className="font-display font-bold text-lg text-brand-dark mb-3">{training.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{training.description}</p>

              <ul className="space-y-2 text-sm text-gray-600">
                {training.modules.map((module) => (
                  <li key={module} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-orange" />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
