import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Shield, Zap, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 text-slate-200">
      <section className="bg-dark-950 py-20 md:py-32 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-white/10 backdrop-blur-sm">
            <Cpu size={32} className="text-brand-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight tracking-wide">
            WE BUILT CERRANA BECAUSE WE WERE TIRED OF <span className="text-brand-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">OVERCOMPLICATED TOOLS</span>.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Technology should amplify human effort, not replace it with confusion. 
            We are a team of system architects and designers who believe that 
            <span className="font-semibold text-white"> simplicity scales</span>.
          </p>
        </div>
      </section>

      <section className="bg-dark-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg hover:border-brand-500/20 transition-all">
              <div className="w-12 h-12 bg-cyan-900/20 text-cyan-400 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/20">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">FOCUS ON FUNDAMENTALS</h3>
              <p className="text-slate-400">
                We don't chase every new AI trend. We implement what works today to generate sales tomorrow.
              </p>
            </div>
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg hover:border-brand-500/20 transition-all">
              <div className="w-12 h-12 bg-brand-900/20 text-brand-400 rounded-lg flex items-center justify-center mb-6 border border-brand-500/20">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">RELIABILITY FIRST</h3>
              <p className="text-slate-400">
                Your sales system is your business's engine. It needs to work 24/7 without breaking. We build robustly.
              </p>
            </div>
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg hover:border-brand-500/20 transition-all">
              <div className="w-12 h-12 bg-orange-900/20 text-orange-400 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">SPEED TO LAUNCH</h3>
              <p className="text-slate-400">
                We don't do 6-month consulting projects. We audit, build, and launch in weeks, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold mb-8 text-white tracking-wide">READY TO SIMPLIFY YOUR GROWTH?</h2>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] font-display tracking-wide border border-brand-400/20"
          >
            WORK WITH US
          </button>
        </div>
      </section>
    </div>
  );
};