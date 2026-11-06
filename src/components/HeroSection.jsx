import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

export default function HeroSection() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="home" className="relative pt-28 pb-14 lg:pt-36 lg:pb-18 bg-white overflow-hidden">
      {/* Background soft ambient glowing gradient orbs with subtle floating animation */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#008F83] blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] mb-6">
            Software Built Around <br className="hidden sm:inline" />
            <span className="text-[#008F83]">Your Business.</span>
          </h1>

          {/* Core Copy */}
          <p className="text-lg sm:text-xl text-slate-900 font-inter leading-relaxed mb-4 font-medium max-w-3xl mx-auto">
            GrowthLab Digital Solutions is a software development company specializing in custom web and mobile applications that help businesses streamline their daily operations.
          </p>
          
          <p className="text-base text-slate-700 font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
            We develop reliable, user-friendly software tailored to each business's unique workflows and operational needs. From internal management systems to custom web and mobile applications, our solutions help businesses improve efficiency and operate more effectively.
          </p>

          {/* Rounded Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#008F83] text-white font-poppins font-medium text-sm hover:bg-[#007A70] transition-all duration-200 group shadow-xs cursor-pointer"
            >
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-slate-900 bg-white font-poppins font-semibold text-sm hover:bg-slate-50 transition-all duration-200"
            >
              Explore Services
            </motion.a>
          </div>

          {/* Key Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 max-w-3xl mx-auto">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <div className="font-poppins font-bold text-slate-950 text-base">Custom Web App Development</div>
              <div className="text-xs text-slate-700 font-inter font-medium mt-1">Internal Portals & Admin Systems</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <div className="font-poppins font-bold text-slate-950 text-base">Mobile App Development</div>
              <div className="text-xs text-slate-700 font-inter font-medium mt-1">iOS & Android Operational Apps</div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <div className="font-poppins font-bold text-slate-950 text-base">Reliable & Scalable</div>
              <div className="text-xs text-slate-700 font-inter font-medium mt-1">Built for Your Unique Workflows</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}