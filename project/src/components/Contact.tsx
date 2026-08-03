import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/data/content';
import { getIcon } from '@/lib/icons';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> Contact <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Une idée, un besoin, une question ? Notre équipe vous répond sous 24 heures ouvrées.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info + map */}
          <div className="lg:col-span-2 space-y-5 animate-on-scroll">
            {CONTACT_INFO.map((info) => {
              const Icon = getIcon(info.icon);
              return (
                <div key={info.label} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">{info.label}</div>
                    <div className="text-brand-dark font-medium">{info.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-56 relative bg-gradient-to-br from-brand-blue/10 to-brand-orange/5">
              <div className="absolute inset-0 circuit-bg opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-blue mx-auto mb-2" />
                  <p className="text-sm text-gray-500 font-medium">Ouagadougou, Burkina Faso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-1">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-card p-8 md:p-10 border border-gray-100 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Ali Traore"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="ali@entreprise.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Sujet</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Demande de devis, projet cloud..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet en quelques lignes..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 font-semibold px-7 py-4 rounded-xl transition-all duration-300 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-brand-blue text-white hover:bg-brand-blueDark hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={20} /> Message envoyé !
                  </>
                ) : (
                  <>
                    Envoyer le message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
