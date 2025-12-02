import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Bot, Check, ArrowRight, Activity, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 text-slate-200">
      <section className="bg-dark-900/50 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">{t.hero.title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="py-24 bg-dark-950 border-b border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-brand-900/20 text-brand-400 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/20 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{t.web.title}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t.web.desc} <span className="text-slate-200 font-semibold">{t.web.descHighlight}</span>
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">{t.web.whatYouGet}</h3>
              <ul className="space-y-4 mb-8">
                {t.web.features.map((f, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                      {f}
                   </li>
                ))}
              </ul>
              <button onClick={() => navigate('/contact')} className="text-brand-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-brand-300 uppercase">
                {t.web.cta} <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="bg-dark-900 rounded-3xl p-1 border border-white/10 shadow-2xl relative rotate-1 group-hover:rotate-0 transition-transform duration-500">
                {/* Image Placeholder: To use a real screenshot, name your file 'website-demo.png' in public/images/ */}
                <div className="bg-dark-950 rounded-[20px] overflow-hidden min-h-[300px] flex flex-col relative">
                  <img 
                    src="/images/website-demo.png" 
                    alt="Website Builder Demo"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                    onError={(e) => {
                       // Fallback to Abstract UI if image doesn't exist
                       (e.target as HTMLImageElement).style.display = 'none';
                       (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  
                  {/* Fallback Abstract UI */}
                  <div className="w-full h-full flex flex-col z-10 relative bg-dark-950">
                      {/* Browser Window Header with Logo Dots */}
                      <div className="h-10 bg-dark-900 border-b border-white/5 flex items-center gap-2 px-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-900/50"></div>
                        <div className="flex-grow"></div>
                        <div className="w-32 h-2 bg-white/5 rounded-full"></div>
                      </div>
                      
                      <div className="p-6 space-y-6 flex-grow relative">
                         <div className="bg-gradient-to-br from-brand-900/20 to-dark-900 rounded-xl border border-white/5 p-6 mb-4 flex flex-col items-center justify-center text-center space-y-3">
                             <div className="flex flex-col gap-1 items-center justify-center scale-50 opacity-50">
                                 <div className="w-4 h-4 rounded-full bg-brand-400 -translate-x-3"></div>
                                 <div className="w-4 h-4 rounded-full bg-brand-400 translate-x-3"></div>
                                 <div className="w-4 h-4 rounded-full bg-brand-400 -translate-x-3"></div>
                             </div>
                             <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                             <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                             <div className="w-1/3 h-6 bg-brand-600 rounded-md mt-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]"></div>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <div className="h-20 bg-dark-900 rounded-lg border border-white/5"></div>
                            <div className="h-20 bg-dark-900 rounded-lg border border-white/5"></div>
                         </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="py-24 bg-dark-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-2xl opacity-20 blur-lg"></div>
               {/* Image Placeholder: Name file 'crm-demo.png' in public/images/ */}
               <div className="bg-dark-900 rounded-xl shadow-2xl border border-white/10 p-2 -rotate-1 hover:rotate-0 transition-transform duration-500 relative z-10 min-h-[300px] flex items-center justify-center overflow-hidden">
                 <img 
                    src="/images/crm-demo.png" 
                    alt="CRM Pipeline Demo"
                    className="absolute inset-0 w-full h-full object-cover z-20 rounded-lg"
                    onError={(e) => {
                       // Fallback to Abstract UI if image doesn't exist
                       (e.target as HTMLImageElement).style.display = 'none';
                       (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                 />

                 {/* Fallback Abstract Pipeline */}
                 <div className="w-full h-full flex items-center justify-center bg-dark-900 relative p-6">
                    <div className="absolute top-4 left-6 text-xs text-brand-400 font-mono tracking-widest uppercase">{t.crm.demo.leadFlow}</div>
                    <div className="relative w-full max-w-sm h-40">
                        <svg className="absolute inset-0 w-full h-full" overflow="visible">
                            <path d="M40 30 L 150 80 L 40 130" stroke="#334155" strokeWidth="2" fill="none" />
                            <path d="M150 80 L 260 80" stroke="#334155" strokeWidth="2" fill="none" />
                            <circle r="3" fill="#22d3ee">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M40 30 L 150 80 L 260 80" />
                            </circle>
                            <circle r="3" fill="#22d3ee">
                                <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M40 130 L 150 80 L 260 80" />
                            </circle>
                        </svg>
                        <div className="absolute top-[10px] left-[20px] w-10 h-10 rounded-full bg-dark-800 border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                            <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                        </div>
                        <div className="absolute bottom-[10px] left-[20px] w-10 h-10 rounded-full bg-dark-800 border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                            <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-dark-800 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] z-20">
                             <Activity size={24} className="text-cyan-400" />
                        </div>
                        <div className="absolute top-1/2 right-[20px] -translate-y-1/2 bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/30 text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            {t.crm.demo.won}
                        </div>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-cyan-900/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <Activity size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{t.crm.title}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t.crm.desc}
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">{t.crm.whatYouGet}</h3>
              <ul className="space-y-4 mb-8">
                 {t.crm.features.map((f, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                      {f}
                   </li>
                ))}
              </ul>
              <button onClick={() => navigate('/contact')} className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-cyan-300 uppercase">
                {t.crm.cta} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-900/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <Bot size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{t.ai.title}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t.ai.desc}
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">{t.ai.whatYouGet}</h3>
              <ul className="space-y-4 mb-8">
                {t.ai.features.map((f, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                      {f}
                   </li>
                ))}
              </ul>
              <button onClick={() => navigate('/contact')} className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-purple-300 uppercase">
                {t.ai.cta} <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="bg-dark-900 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
                {/* Image Placeholder: Name file 'chat-demo.png' in public/images/ */}
                <img 
                    src="/images/chat-demo.png" 
                    alt="Chat Assistant Demo"
                    className="absolute inset-0 w-full h-full object-cover z-20 opacity-90 hidden"
                    onError={(e) => {
                       // Hide image if failed
                       (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] z-10"></div>
                
                {/* Fallback Chat UI */}
                <div className="space-y-6 mt-4 relative z-0">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-xs text-slate-400 border border-white/5">USR</div>
                        <div className="bg-dark-800 text-slate-200 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm border border-white/5 max-w-[80%]">
                            {t.ai.demo.user}
                        </div>
                    </div>
                    <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-xs text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">AI</div>
                        <div className="bg-brand-600/10 text-brand-100 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm border border-brand-500/20 max-w-[80%] relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                            {t.ai.demo.ai}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-14 opacity-70">
                        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-75 translate-x-1"></div>
                        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};