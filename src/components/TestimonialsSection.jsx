import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    company: 'COO, Multi-Location Retail Chain',
    avatar: 'SM',
    quote: "GrowthLab built our custom web and mobile inventory portal from scratch. It simplified our daily operations completely and saved our team hours of manual work every single week. Reliable software engineering at its finest.",
    rating: 5,
  },
  {
    name: 'James T.',
    company: 'Founder, Apex Logistics',
    avatar: 'JT',
    quote: "I was skeptical about building custom software instead of using off-the-shelf apps, but GrowthLab tailored everything to our exact business workflow. Page speed, mobile responsiveness, and API integrations were 10/10.",
    rating: 5,
  },
  {
    name: 'Priya K.',
    company: 'Product Lead, HealthTech Platform',
    avatar: 'PK',
    quote: "Finally — a development partner that delivers clean code on time. GrowthLab designed and developed our cross-platform mobile app seamlessly. Their communication and sprint delivery are top-notch.",
    rating: 5,
  },
  {
    name: 'Carlos R.',
    company: 'Founder, ServiceFlow SaaS',
    avatar: 'CR',
    quote: "GrowthLab helped us bring our SaaS concept to life. They handled both frontend UI and backend cloud architecture with incredible attention to detail. We launched 2 weeks ahead of our targeted schedule.",
    rating: 5,
  },
  {
    name: 'Dana L.',
    company: 'Operations Director, Enterprise Services',
    avatar: 'DL',
    quote: "Their team designed and built custom internal software that connected all our legacy systems into one clean web dashboard. Our operational efficiency jumped dramatically within the first month.",
    rating: 5,
  },
  {
    name: 'Michael O.',
    company: 'Co-Founder, Prestige Digital',
    avatar: 'MO',
    quote: "We partner with GrowthLab for all our complex web app and mobile app builds. Clear architecture, modern tech stack, zero delays. They are our go-to engineering team.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">
            What Business Owners & Founders Say
          </h2>
          <p className="text-slate-800 font-inter max-w-xl mx-auto text-base font-medium">
            Read how custom web and mobile software tailored around business needs helps our clients work smarter and scale faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#008F83]/30 transition-all duration-300"
            >
              <div>
                <Quote size={20} className="text-[#008F83] mb-3" />
                <p className="text-slate-800 font-inter text-sm leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#008F83]/10 text-[#008F83] font-poppins font-bold text-xs flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-slate-950 text-xs">{t.name}</div>
                    <div className="text-[11px] text-slate-700 font-inter font-medium">{t.company}</div>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}