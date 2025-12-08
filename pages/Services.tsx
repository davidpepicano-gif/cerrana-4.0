import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Bot, Check, ArrowRight, Activity, Globe, MessageSquare, LayoutTemplate, MousePointer2, Users, PieChart } from 'lucide-react';
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

      {/* Service 1: Smart Websites & Funnels */}
      <section className="py-24 bg-dark-950 border-b border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="group w-16 h-16 bg-brand-900/20 text-brand-400 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/20 shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all duration-300 hover:scale-110 hover:bg-brand-900/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] cursor-default">
                <Globe size={32} className="transition-transform duration-700 group-hover:rotate-[180deg]" />
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
            
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Funnel Builder Dashboard UI */}
              <div className="bg-dark-900 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.02]">
                  {/* Top Bar */}
                  <div className="h-12 border-b border-white/5 bg-dark-950/50 flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                          </div>
                          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                          <div className="text-[10px] text-slate-500 font-mono">FUNNEL_EDITOR_V4</div>
                      </div>
                      <div className="flex items-center gap-3">
                          <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-brand-600 border border-dark-900 flex items-center justify-center text-[8px] text-white">JD</div>
                              <div className="w-6 h-6 rounded-full bg-cyan-600 border border-dark-900 flex items-center justify-center text-[8px] text-white">AI</div>
                          </div>
                          <div className="px-3 py-1 bg-brand-600 text-white text-[10px] font-bold rounded-md tracking-wider">PUBLISH</div>
                      </div>
                  </div>

                  <div className="flex flex-grow relative">
                      {/* Sidebar */}
                      <div className="w-14 border-r border-white/5 bg-dark-950/30 flex flex-col items-center py-4 gap-6">
                          <LayoutTemplate size={18} className="text-brand-400" />
                          <MousePointer2 size={18} className="text-slate-600 hover:text-slate-300" />
                          <Users size={18} className="text-slate-600 hover:text-slate-300" />
                          <PieChart size={18} className="text-slate-600 hover:text-slate-300" />
                      </div>

                      {/* Main Canvas (Funnel Flow) */}
                      <div className="flex-grow bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] relative p-8 flex items-center justify-center">
                          {/* Connection Lines (SVG) */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                              <path d="M140 200 L 220 200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                              <path d="M340 200 L 420 200" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                              {/* Animated flow dots */}
                              <circle r="3" fill="#8b5cf6">
                                  <animateMotion dur="3s" repeatCount="indefinite" path="M140 200 L 220 200" />
                              </circle>
                              <circle r="3" fill="#8b5cf6">
                                  <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M340 200 L 420 200" />
                              </circle>
                          </svg>

                          <div className="flex items-center gap-12 z-10 w-full justify-center">
                              {/* Step 1: Landing Page */}
                              <div className="flex flex-col items-center gap-3">
                                  <div className="w-28 h-36 bg-dark-800 rounded-lg border border-brand-500/30 shadow-[0_0_15px_rgba(124,58,237,0.15)] relative overflow-hidden group/card hover:scale-105 transition-transform">
                                      <div className="h-2 bg-brand-600 w-full"></div>
                                      <div className="p-2 space-y-2 opacity-50">
                                          <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
                                          <div className="h-12 w-full bg-slate-700/50 rounded"></div>
                                          <div className="h-2 w-1/2 bg-slate-600 rounded"></div>
                                      </div>
                                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                      </div>
                                  </div>
                                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Landing Page</span>
                              </div>

                              {/* Step 2: Calendar */}
                              <div className="flex flex-col items-center gap-3">
                                  <div className="w-28 h-36 bg-dark-800 rounded-lg border border-white/10 hover:border-brand-500/30 shadow-lg relative overflow-hidden group/card hover:scale-105 transition-transform">
                                      <div className="h-2 bg-cyan-600 w-full"></div>
                                      <div className="p-2 flex flex-col items-center justify-center h-full pb-6 space-y-2 opacity-60">
                                          <div className="w-8 h-8 rounded-md border border-slate-600 flex items-center justify-center">
                                              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                          </div>
                                          <div className="h-1.5 w-16 bg-slate-600 rounded"></div>
                                          <div className="h-1.5 w-10 bg-slate-600 rounded"></div>
                                      </div>
                                  </div>
                                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Booking</span>
                              </div>

                              {/* Step 3: Success */}
                              <div className="flex flex-col items-center gap-3">
                                  <div className="w-28 h-36 bg-dark-800 rounded-lg border border-white/10 hover:border-brand-500/30 shadow-lg relative overflow-hidden group/card hover:scale-105 transition-transform">
                                      <div className="h-2 bg-green-600 w-full"></div>
                                      <div className="p-2 flex flex-col items-center justify-center h-full pb-6 opacity-60">
                                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                              <Check size={14} className="text-green-400" />
                                          </div>
                                          <div className="h-1.5 w-12 bg-slate-600 rounded"></div>
                                      </div>
                                  </div>
                                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Success</span>
                              </div>
                          </div>

                          {/* Analytics Overlay */}
                          <div className="absolute top-4 right-4 bg-dark-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl w-40">
                              <div className="flex items-center justify-between mb-2">
                                  <span className="text-[10px] text-slate-400 font-bold">CONVERSION</span>
                                  <span className="text-[10px] text-green-400 font-mono">▲ 12.5%</span>
                              </div>
                              <div className="h-12 w-full flex items-end gap-1">
                                  <div className="w-1/5 bg-brand-500/30 h-[40%] rounded-sm"></div>
                                  <div className="w-1/5 bg-brand-500/40 h-[60%] rounded-sm"></div>
                                  <div className="w-1/5 bg-brand-500/60 h-[30%] rounded-sm"></div>
                                  <div className="w-1/5 bg-brand-500/80 h-[80%] rounded-sm"></div>
                                  <div className="w-1/5 bg-brand-500 h-[90%] rounded-sm animate-pulse"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: CRM */}
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
              <div className="group w-16 h-16 bg-cyan-900/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 hover:scale-110 hover:bg-cyan-900/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] cursor-default">
                <Activity size={32} className="transition-transform duration-300 group-hover:scale-125" />
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

      {/* Service 3: AI Assistant */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="group w-16 h-16 bg-purple-900/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:scale-110 hover:bg-purple-900/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-default">
                <Bot size={32} className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
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