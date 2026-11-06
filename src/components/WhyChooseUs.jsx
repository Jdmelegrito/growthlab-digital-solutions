import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

const FEATURES = [
  {
    title: 'Tailored to Your Workflows',
    desc: "Off-the-shelf software forces you to change how you work. We develop custom web and mobile applications engineered specifically around your unique business workflows and operational needs.",
  },
  {
    title: 'Streamline Daily Operations',
    desc: 'From internal management systems to workflow automation, our solutions help businesses improve efficiency, save time, reduce manual work, and operate more effectively.',
  },
  {
    title: 'Reliable & User-Friendly',
    desc: 'Software is only effective if people adopt it quickly. We build intuitive, stable applications designed for dependable daily use and effortless onboarding.',
  },
  {
    title: 'Software Built Around Your Business',
    desc: 'We don’t deliver cookie-cutter templates. Every system, dashboard, and integration is engineered to fit your specific operational structure as you grow.',
  },
];

export default function WhyChooseUs() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="why" className="relative py-24 lg:py-32 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Why Businesses Choose <span className="text-[#008F83]">GrowthLab</span>
          </h2>
          <p className="text-slate-800 font-inter text-base font-medium">
            We develop reliable, user-friendly software tailored to each business's unique workflows and operational needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-poppins font-bold text-xl text-slate-950 mb-3">{f.title}</h3>
              <p className="text-sm text-slate-700 font-inter leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-slate-800 font-inter font-medium mb-6 text-base">Ready to streamline your operations with software built around your business?</p>
          <button
            type="button"
            onClick={openCalendar}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#008F83] text-white font-poppins font-semibold text-sm hover:bg-[#00766C] shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            Schedule a Discovery Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}