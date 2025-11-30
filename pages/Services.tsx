import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, BarChart3, Bot, Check, ArrowRight, Activity, Globe, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 text-slate-200">
      <section className="bg-dark-900/50 border-b border-white/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">OUR SERVICES</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to turn strangers into customers, on autopilot.
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
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">SMART WEBSITES & FUNNELS</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Most websites are digital business cards that collect dust. We build high-performance assets designed to do one thing: <span className="text-slate-200 font-semibold">convert traffic into leads.</span>
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">WHAT YOU GET:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  High-converting Landing Pages
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Integrated Booking Calendars
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Fast Load Times & Mobile Optimization
                </li>
              </ul>
              <button onClick={() => navigate('/contact')} className="text-brand-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-brand-300">
                START YOUR BUILD <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="bg-dark-900 rounded-3xl p-1 border border-white/10 shadow-2xl relative rotate-1 group-hover:rotate-0 transition-transform duration-500">
                {/* Abstract UI with Logo Motif */}
                <div className="bg-dark-950 rounded-[20px] overflow-hidden min-h-[300px] flex flex-col">
                  {/* Browser Window Header with Logo Dots */}
                  <div className="h-10 bg-dark-900 border-b border-white/5 flex items-center gap-2 px-4">
                    {/* The 3 dots motif acting as window controls */}
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-900/50"></div>
                    <div className="flex-grow"></div>
                    <div className="w-32 h-2 bg-white/5 rounded-full"></div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-6 space-y-6 flex-grow relative">
                     {/* Hero banner simulation */}
                     <div className="bg-gradient-to-br from-brand-900/20 to-dark-900 rounded-xl border border-white/5 p-6 mb-4 flex flex-col items-center justify-center text-center space-y-3">
                         {/* Abstract logo shape in hero */}
                         <div className="flex flex-col gap-1 items-center justify-center scale-50 opacity-50">
                             <div className="w-4 h-4 rounded-full bg-brand-400 -translate-x-3"></div>
                             <div className="w-4 h-4 rounded-full bg-brand-400 translate-x-3"></div>
                             <div className="w-4 h-4 rounded-full bg-brand-400 -translate-x-3"></div>
                         </div>
                         <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                         <div className="w-1/2 h-2 bg-white/5 rounded-full"></div>
                         <div className="w-1/3 h-6 bg-brand-600 rounded-md mt-2 shadow-[0_0_15px_rgba(139,92,246,0.2)]"></div>
                     </div>
                     
                     {/* Grid simulation */}
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
      </section>

      {/* Service 2 */}
      <section className="py-24 bg-dark-900/30 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-2xl opacity-20 blur-lg"></div>
               {/* Abstract Pipeline with Logo Nodes */}
               <div className="bg-dark-900 rounded-xl shadow-2xl border border-white/10 p-8 -rotate-1 hover:rotate-0 transition-transform duration-500 relative z-10 min-h-[300px] flex items-center justify-center">
                 <div className="absolute top-4 left-6 text-xs text-brand-400 font-mono tracking-widest uppercase">Lead Flow</div>
                 
                 {/* Connected Nodes Visualization */}
                 <div className="relative w-full max-w-sm h-40">
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full" overflow="visible">
                        <path d="M40 30 L 150 80 L 40 130" stroke="#334155" strokeWidth="2" fill="none" />
                        <path d="M150 80 L 260 80" stroke="#334155" strokeWidth="2" fill="none" />
                        
                        {/* Animated pulses */}
                        <circle r="3" fill="#22d3ee">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M40 30 L 150 80 L 260 80" />
                        </circle>
                        <circle r="3" fill="#22d3ee">
                            <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M40 130 L 150 80 L 260 80" />
                        </circle>
                    </svg>

                    {/* Nodes - Representing the Logo Dots */}
                    {/* Top Left Node */}
                    <div className="absolute top-[10px] left-[20px] w-10 h-10 rounded-full bg-dark-800 border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                        <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                    </div>
                    
                    {/* Bottom Left Node */}
                    <div className="absolute bottom-[10px] left-[20px] w-10 h-10 rounded-full bg-dark-800 border-2 border-brand-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                        <div className="w-3 h-3 rounded-full bg-brand-500"></div>
                    </div>

                    {/* Middle Right Node (Processing) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-dark-800 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] z-20">
                         <Activity size={24} className="text-cyan-400" />
                    </div>

                    {/* End Result */}
                    <div className="absolute top-1/2 right-[20px] -translate-y-1/2 bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/30 text-sm font-bold shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        WON
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-cyan-900/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <Activity size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">CRM SETUP & AUTOMATION</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A CRM is useless if you don't use it. We build systems that work for you, automating the boring stuff so you can focus on closing.
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">WHAT YOU GET:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Custom Pipeline Architecture
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  SMS & Email Nurture Sequences
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Missed Call Text-Back Automation
                </li>
              </ul>
              <button onClick={() => navigate('/contact')} className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-cyan-300">
                ORGANIZE YOUR SALES <ArrowRight size={18} />
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
              <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">AI VOICE & CHAT ASSISTANTS</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Never miss a lead because you were busy, sleeping, or on a job. Our AI agents act as your front desk, 24/7/365.
              </p>
              
              <h3 className="font-display font-bold text-white mb-4 tracking-wide">WHAT YOU GET:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  AI Web Chat Widget (Human-like)
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Voice AI for Inbound Calls
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="bg-brand-500/10 p-1 rounded-full text-brand-400 border border-brand-500/20"><Check size={14} /></div>
                  Instant Qualification & Booking
                </li>
              </ul>
              <button onClick={() => navigate('/contact')} className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all font-display tracking-wide hover:text-purple-300">
                DEPLOY YOUR AGENT <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="bg-dark-900 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
                <div className="space-y-6 mt-4">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-xs text-slate-400 border border-white/5">USR</div>
                        <div className="bg-dark-800 text-slate-200 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm border border-white/5 max-w-[80%]">
                            Can you help me book a consultation?
                        </div>
                    </div>
                    <div className="flex items-start gap-3 flex-row-reverse">
                        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-xs text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">AI</div>
                        <div className="bg-brand-600/10 text-brand-100 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm border border-brand-500/20 max-w-[80%] relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand-600/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                            Absolutely! I have openings this Thursday at 2 PM or Friday at 10 AM. Which works best for you?
                        </div>
                    </div>
                    
                    {/* Typing indicator using Logo Motif */}
                    <div className="flex items-center gap-2 ml-14 opacity-70">
                        {/* The 3 dots logo animating */}
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