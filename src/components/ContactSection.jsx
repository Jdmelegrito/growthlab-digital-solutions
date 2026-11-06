import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

export default function ContactSection() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="contact-form" className="py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">
            Tell Us About Your Project
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base leading-relaxed font-medium">
            Ready to streamline daily operations and build software tailored around your business? Speak directly with our engineering team to discuss your unique workflows and operational needs.
          </p>
        </motion.div>

        {/* Centered Schedule a Call CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center mb-12"
        >
          <button
            type="button"
            onClick={openCalendar}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#008F83] text-white font-poppins font-medium text-base hover:bg-[#007A70] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <Calendar size={18} />
            Schedule a Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="mt-4 text-xs font-inter text-slate-700 font-medium">
            Free 30-minute technical consultation &bull; No obligation
          </p>
        </motion.div>

        {/* Bottom Guarantees */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-inter font-semibold text-slate-900">
            <CheckCircle2 size={16} className="text-[#008F83]" />
            100% IP Ownership
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-inter font-semibold text-slate-900">
            <CheckCircle2 size={16} className="text-[#008F83]" />
            Transparent Scope & Pricing
          </div>
          <div className="flex items-center justify-center gap-2 text-xs font-inter font-semibold text-slate-900">
            <CheckCircle2 size={16} className="text-[#008F83]" />
            Post-Launch Support
          </div>
        </div>
      </div>
    </section>
  );
}