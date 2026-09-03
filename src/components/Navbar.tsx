import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/data/content';
import logolight from '@/assets/logolight.png';
import logodark from '@/assets/logodark.png';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isActiveLink = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-wide flex items-center justify-between pt-1">
          {/* Logo */}
  <Link to="/" className="flex items-center -mt-9">
    <img
      src={scrolled || !isHome ? logodark : logolight}
      alt="Broadway Technologies"
      className={`w-auto transition-all duration-300 hover:scale-105 ${
        scrolled || !isHome ? 'h-24' : 'h-24 lg:h-40'
      }`}
    />
  </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex flex-wrap items-center justify-end gap-10 xl:gap-8 -mt-1">
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href);
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-link text-sm font-medium transition-colors pt-1 ${
                    active
                      ? 'text-brand-orange font-semibold'
                      : scrolled || !isHome
                        ? 'text-gray-700 hover:text-brand-blue'
                        : 'text-white hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
          Demander un devis
        </Link>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}
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
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <li key={link.href} className="border-b border-gray-50 last:border-0">
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`block py-3 font-medium ${
                      active ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-blue'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-4">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
