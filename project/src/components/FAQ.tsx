import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
          <span className="section-label justify-center">
            <span className="w-8 h-px bg-brand-orange" /> FAQ <span className="w-8 h-px bg-brand-orange" />
          </span>
          <h2 className="section-title mb-5">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Vous ne trouvez pas votre réponse ? Contactez-nous directement, nous serons ravis de vous aider.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 animate-on-scroll animate-on-scroll-delay-1">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-blue bg-white shadow-card' : 'border-gray-200 bg-white/60 hover:border-brand-blue/40'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className={`font-display font-semibold text-base md:text-lg ${isOpen ? 'text-brand-blue' : 'text-brand-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
