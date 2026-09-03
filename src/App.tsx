import { Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollAnimationAll } from '@/hooks/useScrollAnimation';

import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'));
const TrainingsPage = lazy(() => import('@/pages/TrainingsPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function AppRoutes() {
  const location = useLocation();

  useScrollAnimationAll([
    location.pathname,
    location.hash,
  ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-white text-brand-blue font-semibold">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title =
      'Broadway Technologies — Transformation digitale & services numériques';
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;