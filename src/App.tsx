import { useEffect } from 'react';
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

import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import TrainingsPage from '@/pages/TrainingsPage';
import ShopPage from '@/pages/ShopPage';
import PortfolioPage from '@/pages/PortfolioPage';
import FAQPage from '@/pages/FAQPage';
import ContactPage from '@/pages/ContactPage';

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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

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