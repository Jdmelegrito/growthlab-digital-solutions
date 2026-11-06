import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

const BULLETS = [
  'Discuss your current operational challenges & workflows',
  'Define your custom web or mobile app requirements',
  'Review architecture, timelines, and fixed-price investment',
  'Map out a clear software development roadmap',
];

export default function FinalCTA() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">
            Software Built Around Your Business.
          </h2>

          <p className="text-slate-800 font-inter max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed font-medium">
            GrowthLab Digital Solutions helps businesses work smarter, save time, and grow through custom web and mobile app development. We design and build reliable, user-friendly applications tailored to your unique business needs.
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto mb-10 border border-slate-200 text-left shadow-xs">
            <h3 className="font-poppins font-bold text-base sm:text-lg text-slate-950 mb-4 text-center">
              Schedule a Free 30-Minute Software Consultation
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {BULLETS.map(b => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#008F83] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-900 font-inter font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={openCalendar}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-[#008F83] text-white font-poppins font-bold text-base hover:bg-[#007A70] transition-all duration-300 shadow-lg cursor-pointer group"
          >
            Schedule a Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}