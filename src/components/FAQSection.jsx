import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "How does GrowthLab build software around our specific business needs?",
    a: "We start with a discovery phase to analyze your current workflows, operational bottlenecks, and goals. We then architect and build a custom web or mobile application engineered specifically to streamline your daily operations.",
  },
  {
    q: "What technologies do you use for custom web and mobile app development?",
    a: "We use modern, battle-tested technologies including React, Next.js, Node.js, Express, TypeScript, Tailwind CSS, PostgreSQL, Firebase, and React Native / Flutter for cross-platform iOS and Android apps.",
  },
  {
    q: "How long does it take to design and develop a custom application?",
    a: "Timelines depend on scope. A focused Web App MVP or internal workflow tool typically takes 3 to 5 weeks. Full-scale web portals and iOS/Android mobile apps range from 6 to 10 weeks with milestone-driven sprints.",
  },
  {
    q: "Will we own 100% of the source code and intellectual property?",
    a: "Yes, absolutely. Upon completion and final handover, you retain 100% full ownership of all source code, design assets, database structures, and intellectual property.",
  },
  {
    q: "Can you integrate custom software with our existing tools and APIs?",
    a: "Yes. We specialize in building custom integrations and webhooks that connect your application with existing databases, ERPs, CRMs, payment gateways, and third-party services.",
  },
  {
    q: "How do we get started on a project with GrowthLab?",
    a: "Simply click 'Schedule a Call' to book a discovery session. We will discuss your goals, outline a clear scope, and provide a transparent project roadmap.",
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#008F83]/30 transition-all duration-200 shadow-2xs"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <span className="font-poppins font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#008F83] transition-colors">{q}</span>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#008F83]/10 transition-colors">
          {open ? <Minus size={15} className="text-[#008F83]" /> : <Plus size={15} className="text-[#008F83]" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-slate-800 font-inter leading-relaxed border-t border-slate-200 pt-4 bg-slate-50">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base font-medium">
            Everything you need to know about our custom web and mobile app development services.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}