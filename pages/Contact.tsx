import React, { useEffect } from 'react';
import { Mail, Video } from 'lucide-react';

export const Contact: React.FC = () => {
  
  useEffect(() => {
    // Load GHL Form Resizer Script dynamically
    const script = document.createElement('script');
    script.src = "https://api.orbitpenguintech.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, []);

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
              Select a time on the calendar to book your free 30-minute Strategy Audit. We'll look at your current process and show you exactly where AI and automation can add revenue.
            </p>
            
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg mb-10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-brand-600"></div>
              <h3 className="font-display font-bold text-white mb-6 tracking-wide">WHAT HAPPENS NEXT?</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-300 text-sm">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-400 border border-brand-500/20"><Video size={18} /></div>
                  <div className="mt-1">You'll receive a confirmation email with a Zoom link for our meeting.</div>
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

          {/* Right Column: GHL Calendar Embed */}
          <div className="bg-dark-900 p-2 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 relative min-h-[850px] flex flex-col">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600/5 to-transparent pointer-events-none rounded-3xl"></div>
             
             <div className="relative z-10 w-full h-full flex-grow rounded-2xl overflow-hidden bg-white/5">
                <iframe 
                    src="https://api.orbitpenguintech.com/widget/booking/0ZaKHOykovC72prEcDfn" 
                    style={{ width: '100%', border: 'none', overflow: 'hidden', height: '100%', minHeight: '800px' }} 
                    scrolling="no" 
                    id="0ZaKHOykovC72prEcDfn_calendar"
                    title="Strategy Call Booking"
                ></iframe>
             </div>
             <p className="text-xs text-center text-slate-600 mt-4 pb-4">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};