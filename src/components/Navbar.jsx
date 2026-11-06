import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useCalendarModal } from '@/context/CalendarModalContext';

const LOGO_URL = "/assets/aistudio/logo-transparent.png";

const HOME_SECTIONS = [
  { label: 'Overview', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Recent Projects', href: '/#portfolio' },
  { label: 'Frequently Asked Questions', href: '/#faq' },
  { label: 'Contact Us', href: '/#contact-form' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const { openCalendar } = useCalendarModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs' : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" className="flex items-center shrink-0 group py-0.5">
          <img
            src={LOGO_URL}
            alt="GrowthLab Digital Solutions"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Zone 2: Navigation Links (ONLY Home with dropdown & Blog) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              href="/#home"
              className="inline-flex items-center gap-1.5 text-sm font-inter text-slate-800 hover:text-[#008F83] transition-colors font-semibold py-2"
            >
              Home
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#008F83]' : 'text-slate-500'}`}
              />
            </a>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 my-1 z-50">
                <div className="px-4 py-1.5 text-[11px] font-poppins font-bold text-slate-400 uppercase tracking-wider">
                  Homepage Sections
                </div>
                {HOME_SECTIONS.map((sec) => (
                  <a
                    key={sec.href}
                    href={sec.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-xs sm:text-sm font-inter font-medium text-slate-700 hover:bg-slate-50 hover:text-[#008F83] transition-colors"
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Blog Link */}
          <Link
            to="/blog"
            className="text-sm font-inter text-slate-800 hover:text-[#008F83] transition-colors font-semibold whitespace-nowrap shrink-0"
          >
            Blog
          </Link>
        </div>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            type="button"
            onClick={openCalendar}
            className="px-5 py-2.5 rounded-full bg-[#008F83] text-white font-poppins font-medium text-sm hover:bg-[#007A70] transition-all duration-200 whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            Schedule a Call
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <div>
            <button
              onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
              className="flex items-center justify-between w-full text-slate-900 hover:text-[#008F83] font-inter font-semibold transition-colors text-base py-1"
            >
              <span>Home</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileHomeOpen ? 'rotate-180 text-[#008F83]' : ''}`}
              />
            </button>
            {mobileHomeOpen && (
              <div className="pl-4 pt-2 space-y-2 border-l-2 border-slate-100 my-1">
                {HOME_SECTIONS.map((sec) => (
                  <a
                    key={sec.href}
                    href={sec.href}
                    onClick={() => {
                      setOpen(false);
                      setMobileHomeOpen(false);
                    }}
                    className="block text-sm font-inter font-medium text-slate-600 hover:text-[#008F83]"
                  >
                    {sec.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block text-slate-900 hover:text-[#008F83] font-inter font-semibold transition-colors text-base py-1"
          >
            Blog
          </Link>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openCalendar();
              }}
              className="w-full text-center px-5 py-3 rounded-full bg-[#008F83] text-white font-poppins font-medium text-sm hover:bg-[#007A70] transition-colors cursor-pointer"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}