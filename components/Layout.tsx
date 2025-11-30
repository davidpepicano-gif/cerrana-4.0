import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Custom Logo Component - 3 Dots Design
  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      {/* Top Dot */}
      <circle cx="14" cy="12" r="5" fill="#8b5cf6" />
      {/* Middle Dot (Offset Right) */}
      <circle cx="26" cy="20" r="5" fill="#8b5cf6" />
      {/* Bottom Dot */}
      <circle cx="14" cy="28" r="5" fill="#8b5cf6" />
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-brand-900/50 to-dark-900 p-1 rounded-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all border border-brand-500/20">
              <Logo />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-white">
              CERRANA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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
            <button 
              onClick={() => navigate('/contact')}
              className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] flex items-center gap-2 border border-brand-500/50"
            >
              Book Strategy Call <ArrowRight size={16} />
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
            <button 
              onClick={() => navigate('/contact')}
              className="mt-4 w-full bg-brand-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.4)]"
            >
              Book Strategy Call
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
                Building the digital nervous systems for modern businesses. 
                Fundamentals over hype. Systems over noise.
              </p>
              <div className="text-sm text-brand-400/80">
                Serving clients in the U.S. and Latin America.
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-display font-semibold mb-4 tracking-wide">COMPANY</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-brand-400 transition-colors hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]">About Us</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-display font-semibold mb-4 tracking-wide">CONNECT</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone size={14} className="text-brand-500" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-2 text-slate-300">hello@cerrana.ai</li>
                <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Cerrana AI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-xl border-t border-brand-500/30 p-4 z-50">
        <button 
          onClick={() => navigate('/contact')}
          className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 font-display tracking-wide"
        >
          BOOK STRATEGY CALL <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};