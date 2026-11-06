import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, ChevronDown } from 'lucide-react';

const CASE_STUDIES = [
  {
    tag: 'Web App & Automation',
    client: 'Logistics & Supply Chain Partner',
    title: 'Automated Operations Platform Saving 25+ Hours Weekly',
    challenge: 'A growing logistics company relied on fragmented spreadsheets and manual data entry across 4 regional warehouses, resulting in shipping delays, inventory sync errors, and employee burnout.',
    solution: 'GrowthLab engineered a centralized web operations platform with automated inventory reconciliation, real-time dispatch tracking, and custom REST API integrations connecting their ERP and courier services.',
    outcome: 'Eliminated manual spreadsheet entry, reduced order fulfillment time by 65%, and saved over 25 hours per week in administrative labor.',
    metrics: [{ label: 'Time Saved', value: '25+ hrs/wk' }, { label: 'Fulfillment Speed', value: '+65%' }, { label: 'Data Accuracy', value: '99.9%' }],
  },
  {
    tag: 'Mobile App Development',
    client: 'On-Demand Service Provider',
    title: 'Cross-Platform Mobile App Built for Scale',
    challenge: 'The client needed to launch a seamless mobile app on both iOS and Android for field service scheduling, customer live tracking, and digital payments on a tight 8-week launch timeline.',
    solution: 'We architected a unified React Native codebase with real-time WebSocket location updates, push notification automation, and offline-first data synchronization.',
    outcome: 'Successfully launched simultaneously on App Store & Play Store. Reached 15,000 active monthly users in the first quarter with a 4.9-star rating.',
    metrics: [{ label: 'App Rating', value: '4.9 ★' }, { label: 'Active Users', value: '15,000+' }, { label: 'Launch Time', value: '8 Weeks' }],
  },
  {
    tag: 'Web Engineering & Architecture',
    client: 'Fintech & Lending Firm',
    title: 'High-Security Customer Portal Doubling Loan Processing',
    challenge: 'Legacy web portal suffered from slow page loads, poor mobile responsiveness, and manual document verification that slowed down customer onboarding.',
    solution: 'We completely redesigned and rebuilt the client portal with a modern Next.js frontend, automated identity verification microservices, and an intuitive responsive UI.',
    outcome: 'Customer onboarding conversion rate doubled within 30 days of launch, while customer support tickets dropped by 40%.',
    metrics: [{ label: 'Onboarding Lift', value: '2.0x' }, { label: 'Support Tickets', value: '-40%' }, { label: 'Page Speed', value: '99/100' }],
  },
];

function CaseCard({ study, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#008F83]/40 shadow-xs hover:shadow-md transition-all duration-300"
    >
      <button
        className="w-full text-left p-6 sm:p-8 focus:outline-none cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-slate-900 leading-snug">{study.title}</h3>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
            <ChevronDown
              size={18}
              className={`text-[#008F83] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* Metrics always visible */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-poppins font-extrabold text-xl sm:text-2xl text-[#008F83]">{m.value}</div>
              <div className="text-xs text-slate-800 font-inter font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 grid sm:grid-cols-3 gap-4 border-t border-slate-100 pt-6 bg-slate-50/50">
              {[
                { icon: Target, label: 'The Challenge', text: study.challenge, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
                { icon: Lightbulb, label: 'Our Solution', text: study.solution, color: 'text-[#008F83]', bg: 'bg-[#008F83]/5 border-[#008F83]/20' },
                { icon: TrendingUp, label: 'The Outcome', text: study.outcome, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
              ].map(({ icon: Icon, label, text, color, bg }) => (
                <div key={label} className={`rounded-xl p-5 border ${bg} bg-white`}>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Icon size={16} className={color} />
                    <span className="text-xs font-poppins font-bold text-slate-900 uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="text-xs text-slate-800 font-inter leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">
            Case Studies
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base font-medium">
            Real software projects delivering measurable efficiency gains, operational clarity, and accelerated growth.
          </p>
        </motion.div>

        <div className="space-y-6">
          {CASE_STUDIES.map((study, i) => (
            <CaseCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}