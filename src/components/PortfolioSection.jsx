import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Financial Services & Lending Platform',
    client: 'Sir Kevs Lending',
    category: 'Web Applications',
    tag: 'Fintech Portal',
    url: 'https://sirkevslending.com/',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    desc: 'Secure loan processing web application with automated credit verification, document upload, and repayment tracking.',
  },
  {
    title: 'Healthcare & Telehealth Mobile App',
    client: 'Hope Health Hub',
    category: 'Mobile Apps',
    tag: 'Telehealth App',
    url: 'https://hopehealthhub.com/',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    desc: 'Patient appointment booking mobile app, video consultation interface, and digital prescription tracker.',
  },
  {
    title: 'Enterprise ERP & Operations Portal',
    client: 'Elite Factory',
    category: 'Portals & SaaS',
    tag: 'Operations Portal',
    url: 'https://elite-factory.com/',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    desc: 'Custom web portal streamlining product catalog, inventory, order processing, and customer operations.',
  },
  {
    title: 'SaaS Analytics & Data Dashboard',
    client: 'Varsov AI',
    category: 'Portals & SaaS',
    tag: 'SaaS Platform',
    url: 'https://varsovait.site/',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    desc: 'Real-time performance metrics, AI models, and custom reporting web suite with cloud data synchronization.',
  },
  {
    title: 'Gateway Enterprise & Client Hub',
    client: 'Gateway Consultancy',
    category: 'Web Applications',
    tag: 'Web Portal',
    url: 'https://www.gatewayconsultancy.co/',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    desc: 'Centralized workflow management web application facilitating client communications, intake workflows, and case tracking.',
  },
  {
    title: 'On-Demand Service Booking App',
    client: 'Freshora Cleaning',
    category: 'Mobile Apps',
    tag: 'On-Demand App',
    url: 'https://freshoracleaning.co.uk/',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    desc: 'On-demand service booking application with real-time scheduling, dynamic quote engine, and customer dispatch.',
  },
  {
    title: 'Luxury Commerce & Inventory App',
    client: 'Simodi Emeralds',
    category: 'Web Applications',
    tag: 'Digital Commerce',
    url: 'https://simodiemeralds.com/',
    img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
    desc: 'Bespoke web application and fine gems commerce catalog engineered with high-security transactions.',
  },
  {
    title: 'Private Resort Booking Engine',
    client: "Rainier's Resort",
    category: 'Portals & SaaS',
    tag: 'Booking Engine',
    url: 'https://rainiersprivateresort.com/',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    desc: 'Custom reservations engine with live multi-calendar availability, instant checkout, and guest management.',
  },
  {
    title: 'Automotive Intake & Service Portal',
    client: 'West Lafayette Auto',
    category: 'Mobile Apps',
    tag: 'Service App',
    url: 'https://westlafayetteautodetailing.com/',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
    desc: 'Mobile-responsive automotive booking system featuring tiered packages, intake scheduling, and automated reminders.',
  },
];

const FILTERS = ['All', 'Web Applications', 'Mobile Apps', 'Portals & SaaS'];

export default function PortfolioSection() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="portfolio" className="relative py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">
            Recent Custom Projects
          </h2>
          <p className="text-slate-800 font-inter max-w-2xl mx-auto text-base leading-relaxed font-medium">
            Explore a selection of reliable web and mobile applications engineered to simplify operations and accelerate business growth.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-inter transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#008F83] text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950 border border-slate-300 font-medium'
                }`}
              >
                {f}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#008F83] hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col cursor-pointer block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-poppins font-bold text-slate-950 text-lg mb-2 group-hover:text-[#008F83] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-inter mb-4">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#008F83]">
                    <span className="font-poppins font-semibold group-hover:underline">Visit Live Project &rarr;</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-700 font-inter font-medium mt-10"
        >
          {filtered.length} of {PROJECTS.length} custom projects shown &bull; Click any card to launch the live application
        </motion.p>
      </div>
    </section>
  );
}