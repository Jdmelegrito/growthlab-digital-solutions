import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    label: 'Web Software Engineering',
    tools: [
      { name: 'React & Next.js', icon: '⚛️', desc: 'Modern frontend web applications' },
      { name: 'TypeScript', icon: '📘', desc: 'Type-safe scalable codebases' },
      { name: 'Node.js & Express', icon: '🟢', desc: 'High-speed backend microservices' },
      { name: 'Tailwind CSS', icon: '💨', desc: 'Minimalist responsive styling' },
      { name: 'PostgreSQL & Cloud SQL', icon: '🐘', desc: 'Relational data persistence' },
      { name: 'REST & GraphQL APIs', icon: '⚡', desc: 'Robust data integrations' },
    ],
  },
  {
    label: 'Mobile Development',
    tools: [
      { name: 'React Native', icon: '📱', desc: 'Cross-platform iOS & Android' },
      { name: 'Flutter', icon: '💙', desc: 'High-performance mobile UIs' },
      { name: 'Swift / iOS', icon: '🍎', desc: 'Native Apple experience' },
      { name: 'Kotlin / Android', icon: '🤖', desc: 'Native Android apps' },
      { name: 'Expo', icon: '🚀', desc: 'Rapid mobile deployment' },
      { name: 'Push Notifications', icon: '🔔', desc: 'User engagement flows' },
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    tools: [
      { name: 'Google Cloud Platform', icon: '☁️', desc: 'Scalable cloud infrastructure' },
      { name: 'Firebase & Auth', icon: '🔥', desc: 'Realtime database & security' },
      { name: 'AWS & Vercel', icon: '▲', desc: 'Edge deployment & hosting' },
      { name: 'Docker & CI/CD', icon: '🐳', desc: 'Automated deployment pipelines' },
      { name: 'Stripe & Payments', icon: '💳', desc: 'Secure payment gateways' },
      { name: 'Sentry & Analytics', icon: '📊', desc: 'Error monitoring & logs' },
    ],
  },
  {
    label: 'UI/UX & Architecture',
    tools: [
      { name: 'Figma System', icon: '🎨', desc: 'Interactive prototypes & design systems' },
      { name: 'User Flow Mapping', icon: '🗺️', desc: 'UX architecture & wireframes' },
      { name: 'Agile & Jira/GitHub', icon: '🔄', desc: 'Transparent sprint planning' },
      { name: 'Postman & Swagger', icon: '📑', desc: 'API testing & documentation' },
      { name: 'Storybook', icon: '📖', desc: 'Reusable component library' },
      { name: 'Lighthouse / Performance', icon: '⚡', desc: 'Speed & SEO optimization' },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Built with Modern, Battle-Tested Technologies
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base font-medium">
            We leverage modern frameworks, cloud infrastructure, and robust API tools to build fast, secure, and maintainable software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
            >
              <h3 className="text-xs font-poppins font-bold text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-slate-200/80 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#008F83]" />
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white border border-slate-200/80 rounded-xl p-3 transition-all duration-200 hover:border-[#008F83]/40 hover:shadow-xs"
                  >
                    <div className="text-lg mb-1">{tool.icon}</div>
                    <div className="font-poppins font-bold text-slate-900 text-xs mb-0.5 leading-tight">{tool.name}</div>
                    <div className="text-[11px] text-slate-700 font-inter leading-snug font-medium">{tool.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}