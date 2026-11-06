import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCalendarModal } from '@/context/CalendarModalContext';

const PROMO_IMAGE = 'https://media.base44.com/images/public/6a144d2f4ce88f2c894f2fa8/e15fb0318_IMG_0578.jpg';
const PROMO_END = new Date('2026-12-31T23:59:59');

const FEATURES = [
  'Built-In Customer Loyalty & Rewards',
  'Real-Time Analytics & Inventory Sync',
  'Multi-Branch & Cloud POS Management',
  'Offline Sales Mode & Hardware Support',
];

export default function POSPromoBanner() {
  const [visible, setVisible] = useState(false);
  const { openCalendar } = useCalendarModal();

  useEffect(() => {
    setVisible(new Date() <= PROMO_END);
  }, []);

  if (!visible) return null;

  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl overflow-hidden bg-slate-900 text-white p-8 lg:p-12 shadow-xl"
        >
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 text-white">
              All-In-One POS & Enterprise Management
            </h2>
            <p className="text-slate-100 font-inter text-sm sm:text-base mb-6 leading-relaxed font-normal">
              Engineered specifically for restaurants, cafés, retail chains, and growing businesses looking to automate daily operations.
            </p>

            {/* Features */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {FEATURES.map(f => (
                <li key={f} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008F83] shrink-0" />
                  <span className="text-white font-inter text-xs sm:text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openCalendar}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#008F83] text-white font-poppins font-semibold text-sm hover:bg-[#007A70] transition-all duration-300 shadow-md cursor-pointer"
              >
                Book a Free Software Demo &rarr;
              </button>
              <span className="text-xs text-slate-300 font-inter font-medium">Flexible deployment options available</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg aspect-[4/3] bg-slate-800">
            <img
              src={PROMO_IMAGE}
              alt="GrowthLab Custom POS Software Solution"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}