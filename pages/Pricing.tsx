import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Minus } from 'lucide-react';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-950 min-h-screen pb-24 text-slate-200">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden text-center">
         {/* Background elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-wide">
              INVEST IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">GROWTH</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Clear, transparent pricing. Choose a bundle for maximum impact or start with the core essentials.
            </p>
         </div>
      </section>

      {/* Main Bundles Section */}
      <section className="container mx-auto px-4 mb-24 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Core */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/20 transition-all h-full relative group">
              <h3 className="text-xl font-display font-bold mb-1 text-white">CERRANA CORE</h3>
              <div className="text-brand-400 text-xs font-bold tracking-wider mb-2">SALES & CRM OS</div>
              <p className="text-slate-500 text-sm mb-6 h-10">Organize your sales process and CRM to stop losing leads.</p>
              <div className="mb-2">
                <div className="text-4xl font-display font-bold text-slate-200">$147<span className="text-lg text-slate-500 font-sans font-normal">/mo</span></div>
              </div>
              <div className="text-sm text-slate-500 font-mono mb-6 border-l-2 border-slate-700 pl-3">
                + $497 Setup Fee
              </div>
              
              <div className="border-t border-white/10 my-6"></div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> <strong>Sales Pipeline Architecture</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> <strong>Full CRM Setup</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> <strong>2-Way SMS & Email</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> Calendar Integration</li>
              </ul>
              
              <button onClick={() => navigate('/contact')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide uppercase text-sm">
                Start with Core
              </button>
            </div>

            {/* Growth Bundle (Highlighted) */}
            <div className="bg-dark-900 rounded-2xl p-8 border-2 border-brand-500 shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col relative transform md:-translate-y-4 z-20 h-full">
              <div className="absolute top-0 right-0 bg-brand-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg text-white font-display tracking-wider shadow-[0_0_10px_rgba(124,58,237,0.5)]">GROWTH BUNDLE</div>
              <h3 className="text-xl font-display font-bold mb-1 text-white">CORE + CAPTURE</h3>
              <div className="text-brand-200 text-xs font-bold tracking-wider mb-2">MOST POPULAR</div>
              <p className="text-brand-100/70 text-sm mb-6 h-10">The complete sales OS plus a 24/7 AI Assistant to handle leads.</p>
              
              <div className="mb-2">
                <div className="text-4xl font-display font-bold text-white">$347<span className="text-lg text-brand-200/50 font-sans font-normal">/mo</span></div>
              </div>
               <div className="text-sm text-brand-200/60 font-mono mb-6 border-l-2 border-brand-500 pl-3 flex justify-between items-center">
                <span>+ $997 Setup Fee</span>
                <span className="text-xs bg-brand-500/20 px-2 py-0.5 rounded text-brand-300">SAVE $200</span>
              </div>

              <div className="border-t border-brand-500/30 my-6"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-white"><Check size={16} className="text-brand-400 shrink-0 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> <strong>Everything in Core</strong></li>
                <li className="flex gap-3 text-sm text-white"><Check size={16} className="text-brand-400 shrink-0 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> <strong>AI Assistant (24/7)</strong></li>
                <li className="flex gap-3 text-sm text-white"><Check size={16} className="text-brand-400 shrink-0 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> <strong>Auto-Booking & Qualification</strong></li>
                <li className="flex gap-3 text-sm text-white"><Check size={16} className="text-brand-400 shrink-0 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> Missed Call Text-Back</li>
                <li className="flex gap-3 text-sm text-white"><Check size={16} className="text-brand-400 shrink-0 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> Smart Reactivation Campaigns</li>
              </ul>
              
              <button onClick={() => navigate('/contact')} className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white transition-all font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] font-display tracking-wide uppercase text-sm">
                Get Growth Bundle
              </button>
            </div>

            {/* Full Funnel */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/20 transition-all h-full">
              <h3 className="text-xl font-display font-bold mb-1 text-white">FULL FUNNEL</h3>
              <div className="text-cyan-400 text-xs font-bold tracking-wider mb-2">CORE + CAPTURE + WEB</div>
              <p className="text-slate-500 text-sm mb-6 h-10">The ultimate engine. CRM, AI Assistant, and a high-converting website.</p>
              
              <div className="mb-2">
                <div className="text-4xl font-display font-bold text-slate-200">$397<span className="text-lg text-slate-500 font-sans font-normal">/mo</span></div>
              </div>
              <div className="text-sm text-slate-500 font-mono mb-6 border-l-2 border-cyan-500 pl-3 flex justify-between items-center">
                <span>+ $1,497 Setup Fee</span>
                 <span className="text-xs bg-cyan-900/30 px-2 py-0.5 rounded text-cyan-400">SAVE $700</span>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> <strong>Everything in Growth Bundle</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-cyan-400 shrink-0 mt-0.5" /> <strong>Smart Website / Funnel</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> <strong>SEO-Ready Structure</strong></li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> Conversion Rate Optimization</li>
                <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-brand-500 shrink-0 mt-0.5" /> Priority Support</li>
              </ul>
              
              <button onClick={() => navigate('/contact')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide uppercase text-sm">
                Get Full Funnel
              </button>
            </div>
        </div>
      </section>

      {/* A La Carte Section */}
      <section className="container mx-auto px-4 mb-24 max-w-5xl">
        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center tracking-wide flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-white/10"></span>
            A LA CARTE PRODUCTS
            <span className="w-12 h-px bg-white/10"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-900 p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-500/30 transition-all">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-bold text-white mb-1">Cerrana Capture</h3>
                    <p className="text-sm text-slate-400 mb-2">AI Assistant 24/7 (Stand-alone)</p>
                    <div className="text-xs text-brand-400 font-mono">Setup: $697</div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-white">$247<span className="text-sm font-normal text-slate-500">/mo</span></div>
                    <button onClick={() => navigate('/contact')} className="mt-2 text-sm text-brand-400 hover:text-white transition-colors underline decoration-brand-500/30 underline-offset-4">Get Capture Only</button>
                </div>
            </div>

            <div className="bg-dark-900 p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-500/30 transition-all">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-bold text-white mb-1">Cerrana Web</h3>
                    <p className="text-sm text-slate-400 mb-2">Smart Sites & Funnels (Stand-alone)</p>
                     <div className="text-xs text-brand-400 font-mono">Setup: $997</div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-white">$97<span className="text-sm font-normal text-slate-500">/mo</span></div>
                    <button onClick={() => navigate('/contact')} className="mt-2 text-sm text-brand-400 hover:text-white transition-colors underline decoration-brand-500/30 underline-offset-4">Get Web Only</button>
                </div>
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 mb-24 max-w-5xl">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center tracking-wide">FEATURE COMPARISON</h2>
        
        <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-dark-900 rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 bg-dark-950 p-6 border-b border-white/10 text-sm font-display font-bold tracking-wide text-white sticky top-0">
                    <div className="text-slate-400 font-sans font-normal pl-4">Features</div>
                    <div className="text-center">CORE</div>
                    <div className="text-center text-brand-400">GROWTH BUNDLE</div>
                    <div className="text-center">FULL FUNNEL</div>
                </div>

                {/* Sales & CRM */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">Sales & CRM</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">Sales Pipeline</div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">CRM Contact Management</div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* AI Assistant */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">AI Assistant (Capture)</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">24/7 AI Lead Response</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">Auto-Booking</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* Web & Funnels */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">Website (Web)</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">High-Converting Website</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* Pricing Summary */}
                 <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">Investment</div>
                
                <div className="grid grid-cols-4 p-6 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">One-time Setup</div>
                    <div className="text-center text-sm text-slate-400">$497</div>
                    <div className="text-center text-sm text-white font-medium">$997</div>
                    <div className="text-center text-sm text-slate-400">$1,497</div>
                </div>
                 <div className="grid grid-cols-4 p-6 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">Monthly</div>
                    <div className="text-center text-sm text-slate-400">$147/mo</div>
                    <div className="text-center text-sm text-white font-bold text-brand-400">$347/mo</div>
                    <div className="text-center text-sm text-slate-400">$397/mo</div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center tracking-wide">COMMON QUESTIONS</h2>
          <div className="space-y-4">
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">Why is there a setup fee?</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">The setup fee covers the custom build-out of your system. Unlike generic software, we tailor the pipelines, automations, and AI personality to YOUR business.</p>
             </div>
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">Can I buy just the AI Assistant?</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">Yes! You can purchase Cerrana Capture separately for $247/mo + $697 setup. However, the Growth Bundle offers the best value by including the Core CRM foundation.</p>
             </div>
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">Is the CRM cost included?</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">Yes. Your monthly subscription covers the technology licensing for the CRM and AI tools. No extra software bills.</p>
             </div>
          </div>
      </section>
    </div>
  )
}