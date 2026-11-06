import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/growthlabcreativesolutions/30min?hide_gdpr_banner=1&primary_color=008f83";

export default function CalendlyModal({ open, onClose }) {
  const [loading, setLoading] = useState(true);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    if (open) {
      window.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
      setLoading(true);
    }

    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop overlay - click to close */}
          <div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
            aria-label="Close modal overlay"
          />

          {/* Modal Container: Just the calendar only */}
          <motion.div
            className="relative w-full max-w-4xl h-[720px] max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 z-10 flex flex-col"
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal floating close button */}
            <button
              onClick={onClose}
              aria-label="Close calendar"
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs shadow-xs"
            >
              <X size={18} />
            </button>

            {/* Loading placeholder spinner until iframe finishes loading */}
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20 pointer-events-none">
                <Loader2 className="w-8 h-8 text-[#008F83] animate-spin mb-3" />
                <p className="text-xs font-inter text-slate-500 font-medium">Loading calendar...</p>
              </div>
            )}

            {/* Calendar widget iframe */}
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="100%"
              className="w-full h-full border-0 rounded-2xl"
              title="Schedule a Call - GrowthLab Digital Solutions"
              onLoad={() => setLoading(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}