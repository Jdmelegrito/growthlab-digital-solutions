import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

const POINTS = [
  'Custom web and mobile apps engineered for your unique workflows',
  'Internal management systems that streamline daily operations',
  'Workflow automation to save time and reduce manual work',
  'Reliable, user-friendly software designed for effortless team adoption',
  'Dedicated ongoing support to ensure your business operates effectively',
];

export default function TrustSection() {
  const { openCalendar } = useCalendarModal();
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
              Software Engineered Around <span className="text-[#008F83]">Your Operations</span>
            </h2>
            <p className="text-slate-800 font-inter mb-8 leading-relaxed text-base font-medium">
              Off-the-shelf software often creates friction instead of efficiency. We develop reliable, user-friendly software tailored to your business's unique workflows and operational needs:
            </p>

            <div className="space-y-4 mb-8">
              {POINTS.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-[#008F83] mt-0.5 flex-shrink-0" />
                  <span className="text-slate-900 font-inter text-sm font-medium">{p}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-700 font-inter font-medium mb-8 leading-relaxed">
              From internal management systems to workflow automation, we help your business operate with confidence and efficiency.
            </p>

            <button
              type="button"
              onClick={openCalendar}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#008F83] text-white font-poppins font-semibold text-sm hover:bg-[#00766C] shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              Discuss Your Software Needs
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { step: 'Requirements & Scope', desc: 'Understanding your operational needs & goal metrics' },
              { step: 'UI/UX & System Design', desc: 'Crafting intuitive wireframes & database models' },
              { step: 'Full-Stack Development', desc: 'Building responsive web & mobile software' },
              { step: 'Launch & Support', desc: 'Deploying smoothly with long-term maintenance' }
            ].map((s, i) => (
              <div key={s.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-[#008F83]/40 transition-all duration-200 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#008F83]/10 flex items-center justify-center font-poppins font-bold text-[#008F83] text-sm group-hover:bg-[#008F83] group-hover:text-white transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-slate-950 text-base">{s.step}</div>
                    <div className="text-xs text-slate-700 font-inter font-medium">{s.desc}</div>
                  </div>
                  <div className="ml-auto w-16 h-1.5 rounded-full bg-slate-200 overflow-hidden hidden sm:block">
                    <div className="h-full rounded-full bg-[#008F83]" style={{ width: `${(i + 1) * 25}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}