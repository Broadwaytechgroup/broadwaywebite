import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, MapPin, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/content';
import { getIcon } from '@/lib/icons';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const apiUrl = "http://localhost:3001/api/contact";

    console.log("📤 URL appelée :", apiUrl);
    console.log("📦 Données :", form);

    const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

    console.log("📥 Status :", response.status);
    console.log("📥 URL finale :", response.url);

    const text = await response.text();

    console.log("📥 Réponse brute :", text);

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(
        `Le serveur a retourné une réponse invalide (${response.status}).`
      );
    }

    if (!response.ok || !data.success) {
      throw new Error(
        data.message || `Erreur serveur (${response.status})`
      );
    }

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  } catch (error) {
    console.error("❌ Erreur complète :", error);

    alert(
      error instanceof Error
        ? error.message
        : "Impossible d'envoyer le message."
    );
  }
};
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Contact
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-dark">
            Parlons de votre projet
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Une idée, un besoin, une question ? Notre équipe vous répond
            sous 24 heures ouvrées.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left: contact info + map */}
          <div className="lg:col-span-2 space-y-5 animate-on-scroll">

            {CONTACT_INFO.map((info) => {
              const Icon = getIcon(info.icon);

              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-brand-blue"
                    />
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {info.label}
                    </div>

                    <div className="text-brand-dark font-medium">
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-56 relative bg-gradient-to-br from-brand-blue/10 to-brand-orange/5">
              <div className="absolute inset-0 circuit-bg opacity-50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-brand-blue mx-auto mb-2"
                  />

                  <p className="text-sm text-gray-500 font-medium">
                    Ouagadougou, Burkina Faso
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-1">

            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-card p-8 md:p-10 border border-gray-100 space-y-6"
            >

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Ali Traore"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="ali@entreprise.com"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Sujet
                </label>

                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      subject: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Demande de devis, projet cloud..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet en quelques lignes..."
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700">
                  <AlertCircle
                    size={20}
                    className="shrink-0 mt-0.5"
                  />

                  <p className="text-sm">
                    {error}
                  </p>
                </div>
              )}

              {/* Success */}
              {sent && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5"
                  />

                  <div>
                    <p className="font-semibold">
                      Message envoyé !
                    </p>

                    <p className="text-sm mt-1">
                      Merci pour votre message. Notre équipe vous répondra
                      dans les plus brefs délais.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || sent}
                className={`w-full flex items-center justify-center gap-2 font-semibold px-7 py-4 rounded-xl transition-all duration-300 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : sending
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-brand-blue text-white hover:bg-brand-blueDark hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message envoyé !
                  </>
                ) : sending ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={18} />
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

