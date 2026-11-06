import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'Consultation to identify the best solution including core technical functionalities tailored to business needs.',
  },
  {
    number: '02',
    title: 'Workflow Development and Proposal',
    desc: 'Detailed mapping of operational flows, user interfaces, system requirements, and clear project timeline proposals.',
  },
  {
    number: '03',
    title: 'Development and Testing',
    desc: 'Agile full-stack engineering, user-centric interface construction, and comprehensive automated & manual testing.',
  },
  {
    number: '04',
    title: 'Deployment and Maintenance',
    desc: 'Smooth cloud server deployment, database setup, live production launch, and dedicated ongoing maintenance.',
  },
  {
    number: '05',
    title: 'Scaling',
    desc: 'Continuous performance optimization, new feature rollouts, and architecture scaling as your business expands.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-20 bg-slate-50/70 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Our <span className="text-[#008F83]">Process</span>
          </h2>
          <p className="text-slate-700 font-inter max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-medium">
            How we partner with your business from initial technical consultation to long-term deployment and scaling.
          </p>
        </motion.div>

        {/* 5-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#008F83]/40 transition-all duration-300 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                {/* Step Number */}
                <div className="font-poppins font-extrabold text-2xl text-[#008F83] mb-3">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-poppins font-bold text-slate-900 text-lg mb-2 leading-snug group-hover:text-[#008F83] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-inter leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}