import { motion } from 'framer-motion';
import { useCalendarModal } from '@/context/CalendarModalContext';

const SERVICES = [
  {
    number: '01',
    title: 'Custom Web App Development',
    desc: 'Reliable, user-friendly web applications, internal management systems, and admin portals built to streamline your business’s daily operations.',
    items: [
      'Internal Management Systems & Admin Portals',
      'Operations & Client Management Dashboards',
      'Secure Data Processing & Reporting Portals',
      'Custom Database & API Infrastructure',
    ],
    cta: 'Discuss Web App Project',
  },
  {
    number: '02',
    title: 'Mobile App Development',
    desc: 'Intuitive, high-performance mobile applications for iOS and Android tailored to your unique workflows and operational needs.',
    items: [
      'Cross-Platform iOS & Android Apps',
      'Mobile Workforce & Operational Tools',
      'Real-Time Sync & Push Notifications',
      'App Store & Play Store Deployment',
    ],
    cta: 'Discuss Mobile App Project',
  },
];

export default function ServicesSection() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="services" className="relative py-16 lg:py-20 bg-white border-t border-b border-slate-100 overflow-hidden">
      {/* Subtle ambient light orb in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#008F83]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Software Services Tailored to <span className="text-[#008F83]">Your Needs</span>
          </h2>
          <p className="text-slate-800 font-inter max-w-2xl mx-auto text-base leading-relaxed font-medium">
            We develop reliable, user-friendly software tailored to each business's unique workflows and operational needs—specializing in custom web app development and mobile app development.
          </p>
        </motion.div>

        {/* 2 Core Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICES.map((s, i) => {
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-slate-50/80 rounded-2xl p-8 sm:p-9 border border-slate-200/80 hover:border-[#008F83]/40 hover:shadow-xl hover:shadow-[#008F83]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#008F83] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl text-slate-900 mb-3 leading-snug group-hover:text-[#008F83] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-inter leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="border-t border-slate-200 pt-5 mb-8">
                    <ul className="space-y-3">
                      {s.items.map((item) => (
                        <li key={item} className="text-xs sm:text-sm text-slate-900 font-inter font-medium flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008F83] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openCalendar}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-900 font-poppins font-semibold text-xs sm:text-sm hover:bg-[#008F83] hover:text-white hover:border-[#008F83] transition-all duration-300 group/btn shadow-xs cursor-pointer"
                >
                  <span>{s.cta} &rarr;</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}