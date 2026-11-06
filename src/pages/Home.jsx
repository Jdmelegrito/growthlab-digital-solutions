import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-white selection:bg-[#008F83]/20 selection:text-[#008F83]">
      {/* Top Reading/Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#008F83] origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}