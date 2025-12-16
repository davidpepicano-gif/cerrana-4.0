import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Globe } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems: NavItem[] = [
    { label: t.nav.platform, path: '/platform' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.pricing, path: '/pricing' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' },
  ];

  // Custom Logo Component - Tech Circuit Design
  const Logo = () => (
    <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Line & Dot */}
      <path d="M10 25 H 55 C 65 25 70 25 70 25" stroke="white" strokeWidth="12" strokeLinecap="round" />
      <circle cx="70" cy="25" r="14" fill="#8b5cf6" />
      
      {/* Middle Line & Dot */}
      <path d="M10 50 H 35 C 45 50 50 50 50 50" stroke="white" strokeWidth="12" strokeLinecap="round" />
      <circle cx="50" cy="50" r="14" fill="#8b5cf6" />
      
      {/* Bottom Line & Dot */}
      <path d="M10 75 H 55 C 65 75 70 75 70 75" stroke="white" strokeWidth="12" strokeLinecap="round" />
      <circle cx="70" cy="75" r="14" fill="#8b5cf6" />
      
      {/* Connecting Curve (The 'C' shape backing) - Optional, keeping it clean lines for now based on abstract description */}
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-dark-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-dark-900/90 backdrop-blur-md border-brand-900/50 py-3 shadow-[0_4px_20px_-5px_rgba(139,92,246,0.3)]' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-transparent p-1 rounded-lg group-hover:scale-105 transition-all">
              <Logo />
            </div>
            <span className="text-xl md:text-3xl font-display font-bold tracking-wider text-white">
              CERRANA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-400 ${
                  location.pathname === item.path ? 'text-brand-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'text-slate-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center bg-white/5 rounded-full px-1 py-1 border border-white/10 ml-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === 'en' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === 'es' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            <button 
              onClick={() => navigate('/contact')}
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] flex items-center gap-2 border border-brand-500/50 ml-4"
            >
              {t.nav.bookCall} <ArrowRight size={16} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-brand-900 shadow-2xl flex flex-col p-4 animate-in slide-in-from-top-5">
            <Link 
                to="/" 
                className={`py-4 text-lg font-medium border-b border-white/10 ${
                  location.pathname === '/' ? 'text-brand-400' : 'text-slate-300'
                }`}
            >
                Home
            </Link>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`py-4 text-lg font-medium border-b border-white/10 last:border-0 ${
                  location.pathname === item.path ? 'text-brand-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex justify-center gap-4 py-4 border-b border-white/10">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                  language === 'en' ? 'bg-brand-600 text-white border-brand-500' : 'text-slate-400 border-white/10'
                }`}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                  language === 'es' ? 'bg-brand-600 text-white border-brand-500' : 'text-slate-400 border-white/10'
                }`}
              >
                Español
              </button>
            </div>

            <button 
              onClick={() => navigate('/contact')}
              className="mt-4 w-full bg-brand-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.4)]"
            >
              {t.nav.bookCall}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark-950 text-slate-400 py-12 border-t border-brand-900/30 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-50 blur-sm"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="scale-75 origin-left">
                  <Logo />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-wide">
                  CERRANA
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6 font-light">
                {t.footer.tagline}
              </p>
              <div className="text-sm text-brand-400/80">
                {t.footer.serving}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-display font-semibold mb-4 tracking-wide">{t.footer.company}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-brand-400 transition-colors hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]">{t.nav.about}</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 transition-colors">{t.nav.services}</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">{t.nav.pricing}</Link></li>
                <li><Link to="/contact" className="hover:text-brand-400 transition-colors">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold mb-4 tracking-wide">{t.footer.connect}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} className="text-brand-500" /> +1 (919) 918-0505</li>
                <li className="flex items-center gap-2 text-slate-300">support@cerrana.com</li>
                <li><Link to="/privacy-policy" className="hover:text-brand-400 transition-colors">{t.footer.privacy}</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-brand-400 transition-colors">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Cerrana AI. {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-xl border-t border-brand-500/30 p-4 z-50">
        <button 
          onClick={() => navigate('/contact')}
          className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 font-display tracking-wide uppercase"
        >
          {t.nav.bookCall} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};