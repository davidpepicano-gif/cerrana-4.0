import React, { useState } from 'react';
import { Mail, Calendar, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-dark-950 min-h-screen pb-24 md:pb-0 text-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start relative z-10">
          
          {/* Left Column: Copy */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-6 border border-brand-500/20">
              STRATEGY AUDIT
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-wide">
              LET'S MAP YOUR <br/> <span className="text-brand-500">SALES SYSTEM</span>.
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              Fill out the form to book a free 30-minute Strategy Audit. We'll look at your current process and show you exactly where AI and automation can add revenue.
            </p>
            
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg mb-10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-brand-600"></div>
              <h3 className="font-display font-bold text-white mb-6 tracking-wide">WHAT HAPPENS NEXT?</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-300 text-sm">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-400 border border-brand-500/20"><Calendar size={18} /></div>
                  <div className="mt-1">You'll be redirected to our calendar to pick a time that works for you.</div>
                </li>
                <li className="flex items-start gap-4 text-slate-300 text-sm">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-400 border border-brand-500/20"><Mail size={18} /></div>
                  <div className="mt-1">We'll send you a brief questionnaire to prepare for the call so we don't waste time.</div>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-dark-950"></div>
                <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-dark-950"></div>
                <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-dark-950"></div>
              </div>
              <p>Trusted by 50+ businesses this year.</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-dark-900 p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600/5 to-transparent pointer-events-none rounded-3xl"></div>
             
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-wide">REQUEST RECEIVED!</h3>
                <p className="text-slate-400 mb-8">Redirecting you to our calendar...</p>
                <button className="text-brand-400 font-semibold underline hover:text-brand-300 transition-colors">Click here if not redirected</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">FULL NAME</label>
                  <input type="text" id="name" required className="w-full px-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">WORK EMAIL</label>
                  <input type="email" id="email" required className="w-full px-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="john@company.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-400 mb-2">BUSINESS TYPE</label>
                    <select id="type" className="w-full px-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all appearance-none">
                      <option>Agency</option>
                      <option>Law Firm</option>
                      <option>Service Business</option>
                      <option>Car Dealership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="lang" className="block text-sm font-medium text-slate-400 mb-2">LANGUAGE</label>
                    <select id="lang" className="w-full px-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all appearance-none">
                      <option>English</option>
                      <option>Español</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-slate-400 mb-2">MAIN CHALLENGE</label>
                  <textarea id="problem" rows={3} className="w-full px-4 py-3.5 rounded-xl bg-dark-950 border border-white/10 text-white placeholder-slate-600 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" placeholder="e.g. We get leads but forget to follow up..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 font-display tracking-wide"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> SENDING...
                    </>
                  ) : (
                    <>BOOK STRATEGY CALL <ArrowRight size={20} /></>
                  )}
                </button>
                <p className="text-xs text-center text-slate-600 mt-4">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};