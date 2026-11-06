import { Link } from 'react-router-dom';
import { Mail, Calendar } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

const LOGO_URL = "/assets/aistudio/logo-transparent.png";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589710687113";
const LINKEDIN_URL = "https://www.linkedin.com/company/growthlab-digital-solutions";
const EMAIL = "growthlabds@gmail.com";

const LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact-form' },
  { label: 'Blog', href: '/blog' },
];

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

export default function Footer() {
  const { openCalendar } = useCalendarModal();

  return (
    <footer className="relative pt-14 pb-10 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white px-3.5 py-1.5 rounded-xl inline-flex items-center shadow-xs mb-4">
              <img src={LOGO_URL} alt="GrowthLab Digital Solutions" className="h-8 object-contain" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-inter leading-relaxed max-w-xs mb-5 font-normal">
              GrowthLab Digital Solutions is a software development company specializing in custom web and mobile applications that help businesses streamline their daily operations.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow GrowthLab Digital Solutions on Facebook"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-[#1877F2] shadow-xs"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with GrowthLab Digital Solutions on LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#0A66C2] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-[#0A66C2] shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <div className="space-y-2.5">
              {LINKS.map(l => (
                l.href.includes('#') ? (
                  <a key={l.href} href={l.href} className="block text-xs sm:text-sm text-slate-300 hover:text-white transition-colors font-inter font-medium">
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} to={l.href} className="block text-xs sm:text-sm text-slate-300 hover:text-white transition-colors font-inter font-medium">
                    {l.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wider mb-4">Core Services</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-inter leading-relaxed font-medium">
              <p>Custom Web Applications</p>
              <p>Mobile App Development</p>
              <p>Internal Management Systems</p>
              <p>Workflow Automation</p>
            </div>
          </div>

          {/* Col 4: Call to action & Contact */}
          <div>
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-xs text-slate-300 font-inter leading-relaxed mb-3">
              Ready to start your project? Reach out or book a call directly with our engineering team.
            </p>
            
            {/* Email Contact */}
            <div className="mb-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 hover:text-white transition-colors font-inter group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-[#008F83] group-hover:bg-[#008F83]/10 transition-colors flex-shrink-0">
                  <Mail size={14} className="text-[#008F83]" />
                </div>
                <span className="font-medium underline-offset-4 group-hover:underline">{EMAIL}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={openCalendar}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008F83] text-white text-xs font-poppins font-semibold hover:bg-[#007A70] transition-all duration-200 shadow-xs cursor-pointer"
            >
              <Calendar size={14} />
              Schedule a Call
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-300 font-inter">
            © {new Date().getFullYear()} GrowthLab Digital Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-xs text-slate-300 hover:text-white transition-colors font-inter flex items-center gap-1.5"
            >
              <Mail size={13} className="text-[#008F83]" />
              {EMAIL}
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-[#1877F2] transition-colors font-inter font-medium"
            >
              Facebook
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-[#38bdf8] transition-colors font-inter font-medium"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <p className="text-xs text-slate-300 font-inter font-medium">
              Software Built Around Your Business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}