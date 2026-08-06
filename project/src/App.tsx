import { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollAnimationAll } from '@/hooks/useScrollAnimation';

const Home = lazy(() => import('@/pages/Home'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const TrainingsPage = lazy(() => import('@/pages/TrainingsPage'));
const ShopPage = lazy(() => import('@/pages/ShopPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

function AppRoutes() {
  const location = useLocation();
  useScrollAnimationAll([location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
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
    document.title = 'Broadway Technologies — Transformation digitale & services numériques';
  }, []);

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
