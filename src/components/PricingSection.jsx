import { motion } from 'framer-motion';
import { useCalendarModal } from '@/context/CalendarModalContext';

const PLANS = [
  {
    name: 'Custom Web Application',
    price: 'Custom',
    period: ' Project',
    tagline: 'Ideal for businesses needing a dedicated web app or internal management system.',
    highlight: false,
    features: [
      'Tailored Web Application Architecture',
      'Internal Management & Admin Portals',
      'Workflow Automation & API Integration',
      'User-Friendly Responsive UI',
      '30 Days Post-Launch Support',
    ],
    cta: 'Discuss Web App Project',
  },
  {
    name: 'Full Web & Mobile Solution',
    price: 'Custom',
    period: ' Project',
    tagline: 'Complete custom software solution to streamline multi-platform operations.',
    highlight: true,
    features: [
      'Custom Web App & Mobile Apps (iOS/Android)',
      'Internal Management & Operational Dashboards',
      'End-to-End Workflow Automation',
      'Database Design & Third-Party API Sync',
      'Priority Delivery & Direct Engineering Contact',
      '60 Days Post-Launch Support',
    ],
    cta: 'Start Software Project',
  },
  {
    name: 'Dedicated Engineering Team',
    price: 'Retainer',
    period: ' Monthly',
    tagline: 'Dedicated engineering capacity for complex operational systems and continuous updates.',
    highlight: false,
    features: [
      'Dedicated Full-Stack Software Engineering',
      'Continuous Workflow Automation & Features',
      'Legacy System Modernization & Refactoring',
      'Enterprise SLA & Performance Monitoring',
      'Direct Team Slack & Weekly Sprint Reviews',
    ],
    cta: 'Discuss Retainer Partnership',
  },
];

export default function PricingSection() {
  const { openCalendar } = useCalendarModal();

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-slate-50 border-t border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Tailored Development <span className="text-[#008F83]">Engagement Models</span>
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base font-medium">
            Every business has unique operational needs. We offer transparent project-based and retainer development options tailored to your workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-white rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? 'border-2 border-[#008F83] shadow-lg relative'
                  : 'border border-slate-200 shadow-2xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="font-poppins font-bold text-2xl text-slate-950 mb-2">{plan.name}</div>
                <p className="text-xs text-slate-700 font-inter font-medium mb-6 leading-relaxed">{plan.tagline}</p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-200">
                  <span className="font-poppins font-extrabold text-3xl text-slate-950">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-700">{plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008F83] mt-2 shrink-0" />
                      <span className="text-sm text-slate-900 font-inter font-medium leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={openCalendar}
                className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-poppins font-semibold text-sm transition-all duration-200 group cursor-pointer ${
                  plan.highlight
                    ? 'bg-[#008F83] text-white hover:bg-[#00766C] shadow-sm'
                    : 'border border-slate-200 text-slate-800 bg-slate-50 hover:bg-[#008F83] hover:text-white hover:border-[#008F83]'
                }`}
              >
                {plan.cta} &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}