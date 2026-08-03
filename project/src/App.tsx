import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Trainings from '@/components/Trainings';
import Shop from '@/components/Shop';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollAnimationAll } from '@/hooks/useScrollAnimation';

function App() {
  useScrollAnimationAll();

  useEffect(() => {
    document.title = 'Broadway Technologies — Transformation digitale & services numériques';
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Solutions />
        <Process />
        <Trainings />
        <Shop />
        <Technologies />
        <Portfolio />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
