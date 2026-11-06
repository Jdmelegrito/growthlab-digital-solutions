import { motion } from 'framer-motion';

const CLIENTS = [
  { name: 'Elite Factory', url: 'https://elite-factory.com/', initial: 'EF', color: 'from-amber-500/20 to-yellow-500/10', text: 'text-amber-400' },
  { name: 'Hope Health Hub', url: 'https://hopehealthhub.com/', initial: 'HH', color: 'from-teal-500/20 to-green-500/10', text: 'text-teal-400' },
  { name: 'Simodi Emeralds', url: 'https://simodiemeralds.com/', initial: 'SE', color: 'from-emerald-500/20 to-green-500/10', text: 'text-emerald-400' },
  { name: 'Gateway Consultancy', url: 'https://www.gatewayconsultancy.co/', initial: 'GC', color: 'from-blue-500/20 to-indigo-500/10', text: 'text-blue-400' },
  { name: 'N1 Entertainment', url: 'https://staging.n1-ent.com/', initial: 'N1', color: 'from-lime-500/20 to-green-500/10', text: 'text-lime-400' },
  { name: "Rainier's Resort", url: 'https://rainiersprivateresort.com/', initial: 'RR', color: 'from-teal-500/20 to-sky-500/10', text: 'text-teal-400' },
  { name: 'West Lafayette Auto', url: 'https://westlafayetteautodetailing.com/', initial: 'WL', color: 'from-slate-500/20 to-blue-500/10', text: 'text-slate-300' },
  { name: 'Makkah Nutra Noble', url: 'https://www.makkahnutranoble.com/', initial: 'MN', color: 'from-green-500/20 to-emerald-500/10', text: 'text-green-400' },
  { name: 'Varsov AI', url: 'https://varsovait.site/', initial: 'VA', color: 'from-indigo-500/20 to-purple-500/10', text: 'text-indigo-400' },
  { name: 'Giang Vo Agency', url: 'https://giangvoagency.com/', initial: 'GV', color: 'from-lime-500/20 to-green-500/10', text: 'text-lime-400' },
  { name: 'Richard Evans Foundation', url: 'https://richardevansfoundation.org/', initial: 'RE', color: 'from-blue-500/20 to-teal-500/10', text: 'text-blue-400' },
  { name: 'Freshora Cleaning', url: 'https://freshoracleaning.co.uk/', initial: 'FC', color: 'from-teal-500/20 to-sky-500/10', text: 'text-teal-400' },
  { name: 'Sir Kevs Lending', url: 'https://sirkevslending.com/', initial: 'SK', color: 'from-teal-500/20 to-emerald-500/10', text: 'text-teal-400' },
  { name: 'Affinity Services', url: 'https://affinityservicesagency.com/', initial: 'AS', color: 'from-violet-500/20 to-purple-500/10', text: 'text-violet-400' },
  { name: 'The Rich Money Models', url: 'https://therichmoneymodels.com/', initial: 'RM', color: 'from-purple-500/20 to-pink-500/10', text: 'text-purple-400' },
  { name: 'MS CATE', url: 'https://mscate.com/', initial: 'MC', color: 'from-amber-500/20 to-orange-500/10', text: 'text-amber-400' },
];

export default function TrustedBySection() {
  return (
    <section className="relative py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            Trusted By <span className="text-[#008F83]">Growing Businesses</span>
          </h2>
          <p className="text-slate-800 font-inter max-w-lg mx-auto text-sm font-medium">
            From startups to established brands — businesses trust GrowthLab to engineer software solutions that work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {CLIENTS.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="group bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-slate-200 shadow-2xs hover:border-[#008F83]/40 hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#008F83]/10 transition-colors">
                <span className="font-poppins font-bold text-xs text-slate-800 group-hover:text-[#008F83] transition-colors">{client.initial}</span>
              </div>
              <span className="text-[11px] font-inter text-slate-800 group-hover:text-slate-950 font-medium transition-colors text-center leading-tight line-clamp-2">
                {client.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-10 border-t border-slate-200 pt-8"
        >
          {[
            { val: '100%', label: 'Tailored Software' },
            { val: '5★', label: 'Client Satisfaction' },
            { val: '100+', label: 'Projects Delivered' },
            { val: '8+', label: 'Countries Served' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-poppins font-bold text-2xl sm:text-3xl text-slate-950">{stat.val}</div>
              <div className="text-xs text-slate-700 font-inter font-semibold mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}