import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ABOUT_NAV_LINKS, NAV_LINKS } from '@/data/content';
import logolight from '@/assets/logolight.png';
import logodark from '@/assets/logodark.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
<a href="#hero" className="flex items-center">
  <img
    src={scrolled ? logodark : logolight}
    alt="Broadway Technologies"
    className={`w-auto transition-all duration-300 hover:scale-105 ${
    scrolled ? "h-24" : "h-24 lg:h-40"
  }`}
  />
</a>

        {/* Desktop nav */}
        <ul className="hidden md:flex flex-wrap items-center justify-end gap-10 xl:gap-8">
          <li className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen((prev) => !prev)}
              className={`nav-link text-sm font-medium transition-colors flex items-center gap-1 ${
                scrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
              }`}
            >
              Accueil
              <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-gray-100 bg-white p-3 shadow-xl">
                {ABOUT_NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setAboutOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-brand-blue/5 hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
          Demander un devis
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-brand-dark p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white absolute top-full inset-x-0 shadow-lg border-t border-gray-100">
          <ul className="flex flex-col py-4 px-6">
            <li className="border-b border-gray-50">
              <button
                type="button"
                onClick={() => setAboutOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-3 text-left text-gray-700 hover:text-brand-blue font-medium"
              >
                <span>À propos</span>
                <ChevronDown size={16} />
              </button>
              {aboutOpen && (
                <div className="pb-3 pl-4">
                  {ABOUT_NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setAboutOpen(false);
                        setOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-brand-blue"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-gray-50 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-gray-700 hover:text-brand-blue font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Demander un devis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
