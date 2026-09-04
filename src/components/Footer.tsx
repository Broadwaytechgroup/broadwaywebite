import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Send, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '@/data/content';
import logolight from '@/assets/logolight.png';
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-brand-darker text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container-wide relative pt-20 pb-8">
        {/* Newsletter banner 
        <div className="bg-gradient-to-r from-brand-blue to-brand-blueDark rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 circuit-bg opacity-20" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Restez informé</h3>
              <p className="text-white/80">Recevez nos actualités, insights et offres directement dans votre boîte mail.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 whitespace-nowrap"
              >
                {subscribed ? 'Merci !' : "S'abonner"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
*/}
        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Link to="/" className="flex items-center">
                <img
                  src={logolight}
                  alt="Broadway Technologies"
                  className="h-30 md:h-36 lg:h-40 w-auto transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour la transformation digitale. Du cloud à l'IA, nous construisons l'avenir numérique de votre organisation.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-orange flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Réseau social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold mb-5 text-white">Liens rapides</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-5 text-white">Nos services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-white/60 hover:text-brand-orange transition-colors text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-5 text-white">Coordonnées</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Cité Azimo – Ouaga 2000<br />Ouagadougou, Burkina Faso</li>
              <li>
                <a href="tel:+22603388585" className="hover:text-brand-orange transition-colors">+226 03 38 85 85</a>
              </li>
              <li>
                <a href="mailto:info@broadwaytechgroup.com" className="hover:text-brand-orange transition-colors">info@broadwaytechgroup.com</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-orange transition-colors">WhatsApp : +226 55 75 52 52</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Broadway Technologies. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-brand-orange transition-colors">Mentions légales</a>
            <a href="#" className="text-white/50 hover:text-brand-orange transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/50 hover:text-brand-orange transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
