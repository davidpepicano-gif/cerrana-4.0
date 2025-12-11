import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Check, Zap, Globe, MessageSquare, Activity, Calendar, Clock, Star, TrendingUp, Users, MousePointer2, MoveRight, Bot, Layout, Send, Database, Layers, Monitor, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Testimonial } from '../types';

/* ------------------------------------------------------------
   COMPONENT: Interactive Chat Simulation (Hero)
   ------------------------------------------------------------ */
const HeroChat: React.FC = () => {
    const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
        { role: 'ai', text: 'Hola, ¿te gustaría agendar una cita para aumentar tus ventas hoy?' }
    ]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const sequence = async () => {
            if (step === 0) {
                await new Promise(r => setTimeout(r, 2000));
                setMessages(prev => [...prev, { role: 'user', text: 'Sí, me interesa.' }]);
                setStep(1);
            } else if (step === 1) {
                await new Promise(r => setTimeout(r, 1000));
                setMessages(prev => [...prev, { role: 'ai', text: 'Perfecto. Tengo un espacio a las 4pm. ¿Te lo reservo?' }]);
                setStep(2);
            } else if (step === 2) {
                await new Promise(r => setTimeout(r, 1500));
                setMessages(prev => [...prev, { role: 'user', text: 'Claro, 4pm está bien.' }]);
                setStep(3);
            } else if (step === 3) {
                await new Promise(r => setTimeout(r, 1000));
                setMessages(prev => [...prev, { role: 'ai', text: '¡Listo! Cita confirmada para las 4pm. ✅' }]);
                setStep(4);
            } else if (step === 4) {
                 await new Promise(r => setTimeout(r, 5000)); // Reset
                 setMessages([{ role: 'ai', text: 'Hola, ¿te gustaría agendar una cita para aumentar tus ventas hoy?' }]);
                 setStep(0);
            }
        };
        sequence();
    }, [step]);

    return (
        <div className="bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl w-full max-w-sm mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">CERRANA AI AGENT</div>
            </div>
            <div className="space-y-3 h-[250px] overflow-hidden flex flex-col justify-end relative z-10">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 fade-in duration-300`}>
                        <div className={`max-w-[80%] p-3 rounded-xl text-sm backdrop-blur-sm ${m.role === 'ai' ? 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5' : 'bg-brand-600/90 text-white rounded-tr-none border border-brand-500/50 shadow-lg'}`}>
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>
            {/* Fake Input */}
            <div className="mt-3 border-t border-white/5 pt-3 flex gap-2 relative z-10">
                <div className="h-8 bg-white/5 rounded w-full backdrop-blur-sm border border-white/5"></div>
                <div className="h-8 w-8 bg-brand-600/90 rounded flex items-center justify-center shadow-lg"><Send size={14} className="text-white" /></div>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------
   COMPONENT: Before/After Slider (Impact)
   ------------------------------------------------------------ */
const ComparisonSlider: React.FC<{ t: any }> = ({ t }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-col-resize select-none border border-white/10 shadow-2xl group"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            {/* BEFORE LAYER (Background) */}
            <div className="absolute inset-0 bg-red-950/20 flex flex-col items-center justify-center p-8 text-center grayscale opacity-60">
                <h3 className="text-4xl font-display font-bold text-slate-500 mb-6">{t.before}</h3>
                <div className="space-y-4">
                    {t.beforeList.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-slate-500 text-lg">
                             <div className="w-2 h-2 rounded-full bg-red-500/50"></div> {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* AFTER LAYER (Foreground - Clipped) */}
            <div 
                className="absolute inset-0 bg-gradient-to-br from-brand-900/40 to-dark-900 flex flex-col items-center justify-center p-8 text-center"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
                 {/* Neon Grid bg for After */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="relative z-10">
                    <h3 className="text-4xl font-display font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">{t.after}</h3>
                    <div className="space-y-4">
                        {t.afterList.map((item: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-white text-lg font-medium">
                                <Check size={20} className="text-green-400" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_white]"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-900 shadow-[0_0_20px_rgba(255,255,255,0.5)] border-2 border-white">
                    <MoveRight size={20} />
                </div>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------
   COMPONENT: Interactive Service Visuals
   ------------------------------------------------------------ */

// 1. Web Funnel Visual
const VisualWeb = () => (
    <div className="h-full flex flex-col items-center justify-center py-10 relative overflow-hidden">
        {/* Animated Particles flowing down */}
        {[...Array(5)].map((_, i) => (
             <div key={i} className="absolute top-0 w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ left: `${20 + i * 15}%`, animationDuration: `${2 + i}s`, opacity: 0.5 }}></div>
        ))}
        
        {/* Funnel Layers */}
        <div className="w-48 h-12 bg-white/5 border border-white/10 rounded-lg mb-2 flex items-center justify-center text-[10px] text-slate-400 animate-pulse backdrop-blur-sm">TRAFFIC</div>
        <div className="w-32 h-20 bg-gradient-to-b from-brand-500/20 to-brand-600/20 border-x border-brand-500/50 transform perspective-500 rotate-x-12 mb-2 flex items-center justify-center backdrop-blur-sm">
            <div className="text-brand-300 text-xs font-bold tracking-widest">CONVERT</div>
        </div>
        <div className="w-16 h-16 bg-brand-500/90 backdrop-blur rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)] text-white relative z-10 border border-white/20">
            <Zap size={24} fill="currentColor" />
        </div>
        <div className="mt-4 flex gap-2">
            <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded border border-green-500/30 backdrop-blur-sm">LEAD</div>
            <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded border border-green-500/30 backdrop-blur-sm">SALE</div>
        </div>
    </div>
);

// 2. Interactive Chat (Capture)
const VisualCapture = () => {
    const [response, setResponse] = useState<string | null>(null);
    return (
        <div className="h-full flex flex-col p-6">
            <div className="flex-grow bg-dark-950/50 rounded-lg border border-white/5 p-4 mb-4 overflow-y-auto space-y-3 custom-scrollbar backdrop-blur-sm">
                <div className="flex justify-end"><span className="bg-brand-600 text-white text-xs px-3 py-2 rounded-lg rounded-tr-none shadow-lg">User: Lead Info?</span></div>
                {response && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                         <span className="bg-white/10 text-slate-200 text-xs px-3 py-2 rounded-lg rounded-tl-none flex items-center gap-2 border border-white/5 backdrop-blur-md">
                            <Bot size={12} className="text-brand-400" /> {response}
                         </span>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setResponse("Pricing starts at $150.")} className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 rounded py-2 text-slate-300 transition-colors backdrop-blur-sm">Pricing?</button>
                <button onClick={() => setResponse("Yes, slots open at 2pm.")} className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 rounded py-2 text-slate-300 transition-colors backdrop-blur-sm">Availability?</button>
            </div>
        </div>
    );
};

// 3. Animated Pipeline (Core)
const VisualCore = () => (
    <div className="h-full flex items-center justify-center p-4">
        <div className="w-full flex justify-between gap-2">
            {['Leads', 'Qual', 'Won'].map((col, i) => (
                <div key={i} className="flex-1 h-32 bg-white/5 rounded border border-white/10 flex flex-col items-center py-2 backdrop-blur-sm">
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-2">{col}</span>
                    {/* Animated Card */}
                    {i === 0 && <div className="w-10 h-8 bg-brand-500/20 border border-brand-500/40 rounded animate-[pulse_3s_infinite] backdrop-blur-md"></div>}
                    {i === 1 && <div className="w-10 h-8 bg-brand-500/40 border border-brand-500/60 rounded animate-[pulse_3s_infinite_1s] backdrop-blur-md"></div>}
                    {i === 2 && <div className="w-10 h-8 bg-green-500/80 rounded border border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-[pulse_3s_infinite_2s] backdrop-blur-md"></div>}
                </div>
            ))}
        </div>
    </div>
);

/* ------------------------------------------------------------
   COMPONENT: Engine Promo (New Section)
   ------------------------------------------------------------ */
const EnginePromo: React.FC<{ t: any }> = ({ t }) => {
    const navigate = useNavigate();
    
    return (
        <section className="py-32 relative bg-dark-950 overflow-hidden border-t border-white/5">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Interactive Visual (3D Stack) */}
                    <div className="relative group perspective-[1000px] h-[400px] flex items-center justify-center">
                        {/* Connecting Lines */}
                        <div className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-brand-500 to-transparent left-1/2 -translate-x-1/2 opacity-30"></div>
                        
                        {/* Layer 1: Data */}
                        <div className="absolute top-[30%] w-64 h-40 bg-dark-900/80 border border-white/10 rounded-xl shadow-2xl transform rotate-x-60 rotate-z-45 transition-all duration-700 group-hover:translate-y-[100px] group-hover:border-brand-500/50 flex items-center justify-center backdrop-blur-md">
                            <div className="text-center">
                                <Database className="w-8 h-8 text-brand-500 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-brand-400">Database Layer</span>
                            </div>
                        </div>

                        {/* Layer 2: Logic */}
                        <div className="absolute top-[20%] w-64 h-40 bg-dark-900/80 border border-white/10 rounded-xl shadow-2xl transform rotate-x-60 rotate-z-45 transition-all duration-700 z-10 group-hover:translate-y-0 group-hover:border-cyan-500/50 flex items-center justify-center backdrop-blur-md">
                             <div className="text-center">
                                <Cpu className="w-8 h-8 text-cyan-500 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-cyan-400">Logic Layer</span>
                            </div>
                        </div>

                        {/* Layer 3: Interface */}
                        <div className="absolute top-[10%] w-64 h-40 bg-gradient-to-br from-brand-900/80 to-dark-900/90 border border-white/20 rounded-xl shadow-[0_0_50px_rgba(124,58,237,0.3)] transform rotate-x-60 rotate-z-45 transition-all duration-700 z-20 group-hover:-translate-y-[100px] group-hover:border-white/50 flex items-center justify-center backdrop-blur-xl">
                             <div className="text-center">
                                <Monitor className="w-8 h-8 text-white mx-auto mb-2" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Command Center</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-6 animate-pulse">
                            <Layers size={12} /> {t.tag}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            {t.title}
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                            {t.subtitle}
                        </p>

                        <div className="space-y-6 mb-12">
                            {t.features.map((feature: any, i: number) => (
                                <div key={i} className="flex gap-4 items-start bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-brand-500/30 transition-colors group/item">
                                    <div className="mt-1 w-8 h-8 rounded-lg bg-dark-950 flex items-center justify-center text-brand-400 group-hover/item:text-white group-hover/item:bg-brand-600 transition-all shadow-inner">
                                        {i === 0 ? <MessageSquare size={16} /> : i === 1 ? <Activity size={16} /> : <Clock size={16} />}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                                        <p className="text-slate-400 text-xs">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={() => navigate('/platform')}
                                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                            >
                                {t.ctaMain} <ArrowRight size={18} />
                            </button>
                            <button 
                                onClick={() => navigate('/platform')}
                                className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/30 text-white font-semibold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                {t.ctaSub}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

/* ------------------------------------------------------------
   COMPONENT: Real Stories (Testimonials)
   ------------------------------------------------------------ */
const RealStories: React.FC<{ t: any }> = ({ t }) => {
    const navigate = useNavigate();
    
    // Group colors for branding each category
    const colors = {
        capture: 'border-cyan-500/30 bg-cyan-900/10 text-cyan-400',
        core: 'border-purple-500/30 bg-purple-900/10 text-purple-400',
        web: 'border-brand-500/30 bg-brand-900/10 text-brand-400',
        growth: 'border-yellow-500/30 bg-yellow-900/10 text-yellow-400'
    };

    return (
        <section className="py-24 bg-dark-950 border-t border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#2e1065_0%,transparent_70%)] opacity-30"></div>
             
             <div className="container mx-auto px-4 relative z-10">
                 <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-bold border border-white/10 mb-4 backdrop-blur-sm">
                        <Star size={12} className="text-yellow-400" fill="currentColor" /> SOCIAL PROOF
                     </div>
                     <h2 className="text-4xl font-display font-bold text-white mb-4">{t.title}</h2>
                     <p className="text-slate-400 text-lg">{t.subtitle}</p>
                 </div>

                 <div className="space-y-12 max-w-5xl mx-auto">
                     {/* Capture */}
                     <div className={`rounded-2xl border ${colors.capture} p-6 md:p-8 backdrop-blur-md relative group hover:bg-white/5 transition-colors`}>
                         <div className="absolute -top-3 left-8 px-3 py-1 bg-dark-950 border border-cyan-500/50 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest">{t.capture.title}</div>
                         <div className="grid md:grid-cols-2 gap-8 mt-4">
                             {t.capture.testimonials.map((item: any, i: number) => (
                                 <div key={i} className="flex gap-4">
                                     <div className="mt-1 text-cyan-500/50"><MessageSquare size={24} /></div>
                                     <div>
                                         <p className="text-slate-300 italic mb-3 text-sm leading-relaxed">"{item.quote}"</p>
                                         <div className="text-xs font-bold text-white">— {item.author}</div>
                                         <div className="text-[10px] text-slate-500 uppercase">{item.role}</div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                         <div className="mt-8 text-center border-t border-white/5 pt-6">
                            <button onClick={() => navigate('/contact')} className="text-cyan-400 hover:text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors">
                                {t.capture.cta} <ArrowRight size={16} />
                            </button>
                         </div>
                     </div>

                     {/* Core */}
                     <div className={`rounded-2xl border ${colors.core} p-6 md:p-8 backdrop-blur-md relative group hover:bg-white/5 transition-colors`}>
                         <div className="absolute -top-3 left-8 px-3 py-1 bg-dark-950 border border-purple-500/50 rounded-full text-xs font-bold text-purple-400 uppercase tracking-widest">{t.core.title}</div>
                         <div className="grid md:grid-cols-2 gap-8 mt-4">
                             {t.core.testimonials.map((item: any, i: number) => (
                                 <div key={i} className="flex gap-4">
                                     <div className="mt-1 text-purple-500/50"><Activity size={24} /></div>
                                     <div>
                                         <p className="text-slate-300 italic mb-3 text-sm leading-relaxed">"{item.quote}"</p>
                                         <div className="text-xs font-bold text-white">— {item.author}</div>
                                         <div className="text-[10px] text-slate-500 uppercase">{item.role}</div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                         <div className="mt-8 text-center border-t border-white/5 pt-6">
                            <button onClick={() => navigate('/contact')} className="text-purple-400 hover:text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors">
                                {t.core.cta} <ArrowRight size={16} />
                            </button>
                         </div>
                     </div>

                     {/* Web */}
                     <div className={`rounded-2xl border ${colors.web} p-6 md:p-8 backdrop-blur-md relative group hover:bg-white/5 transition-colors`}>
                         <div className="absolute -top-3 left-8 px-3 py-1 bg-dark-950 border border-brand-500/50 rounded-full text-xs font-bold text-brand-400 uppercase tracking-widest">{t.web.title}</div>
                         <div className="grid md:grid-cols-2 gap-8 mt-4">
                             {t.web.testimonials.map((item: any, i: number) => (
                                 <div key={i} className="flex gap-4">
                                     <div className="mt-1 text-brand-500/50"><Globe size={24} /></div>
                                     <div>
                                         <p className="text-slate-300 italic mb-3 text-sm leading-relaxed">"{item.quote}"</p>
                                         <div className="text-xs font-bold text-white">— {item.author}</div>
                                         <div className="text-[10px] text-slate-500 uppercase">{item.role}</div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                         <div className="mt-8 text-center border-t border-white/5 pt-6">
                            <button onClick={() => navigate('/contact')} className="text-brand-400 hover:text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors">
                                {t.web.cta} <ArrowRight size={16} />
                            </button>
                         </div>
                     </div>

                     {/* Growth */}
                     <div className={`rounded-2xl border ${colors.growth} p-6 md:p-8 backdrop-blur-md relative group hover:bg-white/5 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.1)]`}>
                         <div className="absolute -top-3 left-8 flex gap-2">
                             <div className="px-3 py-1 bg-dark-950 border border-yellow-500/50 rounded-full text-xs font-bold text-yellow-400 uppercase tracking-widest">{t.growth.title}</div>
                             <div className="px-3 py-1 bg-yellow-500 text-dark-950 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">{t.growth.badge}</div>
                         </div>
                         <div className="grid md:grid-cols-2 gap-8 mt-4">
                             {t.growth.testimonials.map((item: any, i: number) => (
                                 <div key={i} className="flex gap-4">
                                     <div className="mt-1 text-yellow-500/50"><TrendingUp size={24} /></div>
                                     <div>
                                         <p className="text-slate-300 italic mb-3 text-sm leading-relaxed">"{item.quote}"</p>
                                         <div className="text-xs font-bold text-white">— {item.author}</div>
                                         <div className="text-[10px] text-slate-500 uppercase">{item.role}</div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                         <div className="mt-8 text-center border-t border-white/5 pt-6">
                            <button onClick={() => navigate('/contact')} className="text-yellow-400 hover:text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors">
                                {t.growth.cta} <ArrowRight size={16} />
                            </button>
                         </div>
                     </div>
                 </div>

                 {/* Scarcity */}
                 <div className="mt-12 text-center space-y-2">
                     <p className="text-yellow-400 text-sm font-medium animate-pulse">{t.scarcity.line1}</p>
                     <p className="text-brand-300 text-xs">{t.scarcity.line2}</p>
                     <p className="text-slate-500 text-xs">{t.scarcity.line3}</p>
                 </div>
             </div>
        </section>
    );
};

/* ------------------------------------------------------------
   COMPONENT: Post-Purchase Timeline (Extra Funnel)
   ------------------------------------------------------------ */
const PostPurchaseTimeline: React.FC<{ t: any }> = ({ t }) => {
    const navigate = useNavigate();
    return (
        <section className="py-24 bg-dark-900 border-t border-white/5">
             <div className="container mx-auto px-4 max-w-4xl text-center">
                 <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-12">{t.title}</h2>
                 
                 <div className="space-y-6 relative">
                     {/* Vertical Line */}
                     <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                     
                     {t.steps.map((step: any, i: number) => (
                         <div key={i} className="relative z-10 flex items-center justify-center gap-4 md:gap-8 group">
                             <div className="w-1/2 text-right pr-4 md:pr-0">
                                 <div className="inline-block px-3 py-1 bg-dark-950 border border-brand-500/30 rounded-lg text-brand-400 text-xs font-bold uppercase tracking-wider group-hover:bg-brand-500 group-hover:text-white transition-colors">
                                     {step.day}
                                 </div>
                             </div>
                             <div className="w-4 h-4 rounded-full bg-dark-950 border-2 border-brand-500 shadow-[0_0_10px_rgba(124,58,237,0.5)] shrink-0"></div>
                             <div className="w-1/2 text-left pl-4 md:pl-0">
                                 <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                                     {step.text}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>

                 <div className="mt-16 bg-brand-900/10 border border-brand-500/20 rounded-2xl p-8 max-w-lg mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                      <div className="relative z-10">
                          <button onClick={() => navigate('/contact')} className="w-full px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg shadow-lg uppercase tracking-wide transition-transform hover:scale-105 mb-4 hover:shadow-brand-500/20">
                              {t.cta}
                          </button>
                          <p className="text-xs text-yellow-500 font-mono animate-pulse">{t.scarcity}</p>
                      </div>
                 </div>
             </div>
        </section>
    );
};

/* ------------------------------------------------------------
   MAIN PAGE COMPONENT
   ------------------------------------------------------------ */
export const Home: React.FC = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].home;

    return (
        <div className="bg-dark-950 overflow-x-hidden pb-24">
            
            {/* 1. HERO SECTION (Interactive Chat) */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 mb-6 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            {t.hero.pill}
                         </div>
                         <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                            {t.hero.titleLine1} <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                                {t.hero.titleLine2}
                            </span>
                         </h1>
                         <p className="text-xl text-slate-400 mb-8 max-w-lg font-light">
                             {t.hero.subtitle}
                         </p>
                         
                         <div className="flex flex-col sm:flex-row gap-4 mb-8">
                             <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] font-display tracking-wide uppercase transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]">
                                 {t.hero.ctaPrimary}
                             </button>
                             <button onClick={() => document.getElementById('impact')?.scrollIntoView({behavior:'smooth'})} className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-white/5">
                                 {t.hero.ctaSecondary}
                             </button>
                         </div>
                         
                         <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-500/20 max-w-md backdrop-blur-sm">
                             <div className="text-red-400 text-lg">⚠️</div>
                             <p className="text-red-300 text-xs font-medium">{t.hero.urgency}</p>
                         </div>
                    </div>

                    {/* Right: Interactive Chat Mockup */}
                    <div className="relative">
                        <HeroChat />
                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-dark-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl animate-bounce">
                             <div className="text-xs text-slate-400 uppercase">Speed</div>
                             <div className="font-bold text-brand-400">Instant ⚡</div>
                        </div>
                         <div className="absolute bottom-10 -left-8 bg-dark-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl animate-pulse">
                             <div className="text-xs text-slate-400 uppercase">Status</div>
                             <div className="font-bold text-green-400">Online 🟢</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. IMPACT SECTION (Before/After Slider) */}
            <section id="impact" className="py-24 bg-dark-900/50 border-y border-white/5 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-2">{t.impact.title}</h2>
                        <div className="w-16 h-1 bg-brand-500 mx-auto rounded"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto mb-12">
                        <ComparisonSlider t={t.impact} />
                    </div>

                    <div className="text-center">
                         <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-white text-dark-950 hover:bg-slate-200 rounded-full font-display font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-wide transition-transform hover:scale-105 relative overflow-hidden group">
                             <span className="relative z-10">{t.impact.cta}</span>
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                         </button>
                         <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
                             <Clock size={12} className="text-brand-500" /> {t.impact.urgency}
                         </p>
                    </div>
                </div>
            </section>

            {/* 3. CERRANA ECOSYSTEM (Services) - REFACTORED TO SHOW 3 MAIN COMBOS */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">{t.services.title}</h2>
                        <p className="text-xl text-slate-400">{t.services.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service Card Template */}
                        {[
                            { key: 'core', icon: Layout, visual: <VisualCore />, color: 'border-purple-500/30' },
                            { key: 'growth', icon: Bot, visual: <VisualCapture />, color: 'border-brand-500/30' }, // Growth adds AI
                            { key: 'full', icon: Globe, visual: <VisualWeb />, color: 'border-cyan-500/30' } // Full adds Web
                        ].map((s) => {
                             // @ts-ignore
                             const content = t.services[s.key];
                             const Icon = s.icon;
                             
                             return (
                                <div key={s.key} className={`bg-dark-900 rounded-2xl border ${s.color} p-1 flex flex-col hover:scale-[1.02] transition-transform duration-300 group shadow-2xl`}>
                                    {/* Visual Header */}
                                    <div className="h-40 bg-dark-950 rounded-xl overflow-hidden relative border-b border-white/5">
                                        {s.visual}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Icon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                                            <h3 className="font-display font-bold text-white text-lg">{content.title}</h3>
                                        </div>
                                        <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-3">{content.subtitle}</p>
                                        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">{content.desc}</p>
                                        
                                        <div className="space-y-4">
                                            <button onClick={() => navigate('/pricing')} className="w-full py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded border border-white/10 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group-hover:bg-brand-600/90 group-hover:border-brand-600 group-hover:shadow-lg">
                                                {content.cta} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                            </button>
                                            <div className="flex items-center gap-2 text-[10px] text-yellow-500/80 bg-yellow-500/5 p-2 rounded border border-yellow-500/10">
                                                <span>⚠️</span> {content.urgency}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             );
                        })}
                    </div>
                </div>
            </section>

            {/* NEW: 3.5. ENGINE PROMO (Platform) */}
            <EnginePromo t={t.engineSection} />

            {/* 4. RESULTS TIMELINE (72 Hours) */}
            <section className="py-24 bg-dark-900/30 border-y border-white/5">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-2">{t.results.title}</h2>
                    <p className="text-slate-400 mb-12">{t.results.desc}</p>

                    <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-dark-800 -z-10 -translate-y-1/2"></div>
                        
                        {[t.results.step1, t.results.step2, t.results.step3].map((step, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-dark-950 border-2 border-brand-500 flex items-center justify-center text-xl font-bold text-brand-400 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-110 relative z-10 backdrop-blur-md">
                                    {i + 1}
                                </div>
                                <div className="mt-4 font-display font-bold text-white tracking-wide uppercase">{step}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                         <button onClick={() => navigate('/contact')} className="px-12 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold shadow-lg uppercase tracking-wide transition-all hover:-translate-y-1 relative overflow-hidden group">
                             <span className="relative z-10">{t.results.cta}</span>
                             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                         </button>
                         <div className="mt-4 inline-block px-4 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-300 text-xs animate-pulse backdrop-blur-sm">
                             {t.results.urgency}
                         </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS (Simple 3 Steps) */}
             <section className="py-24 bg-dark-950">
                 <div className="container mx-auto px-4 max-w-5xl">
                     <div className="flex flex-col md:flex-row gap-12 items-center">
                         <div className="md:w-1/2">
                             <h2 className="text-3xl font-display font-bold text-white mb-8">{t.process.title}</h2>
                             <div className="space-y-6">
                                 {t.process.steps.map((step: any, i: number) => (
                                     <div key={i} className="group p-4 bg-dark-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-brand-500/50 transition-colors flex items-center gap-4 cursor-default">
                                         <div className="text-3xl font-bold text-slate-700 group-hover:text-brand-500 transition-colors">0{i+1}</div>
                                         <div>
                                             <div className="text-white font-bold">{step.title}</div>
                                             <div className="text-slate-400 text-sm">{step.desc}</div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                         <div className="md:w-1/2 bg-brand-900/10 rounded-3xl p-8 border border-brand-500/20 text-center relative overflow-hidden backdrop-blur-sm">
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                             <h3 className="relative z-10 text-2xl font-bold text-white mb-6">Ready to automate?</h3>
                             <button onClick={() => navigate('/contact')} className="relative z-10 px-8 py-3 bg-white text-dark-950 font-bold rounded-lg hover:scale-105 transition-transform shadow-lg">
                                 {t.process.cta}
                             </button>
                             <p className="relative z-10 mt-4 text-xs text-brand-300 font-mono">{t.process.urgency}</p>
                         </div>
                     </div>
                 </div>
             </section>

            {/* 6. SOCIAL PROOF (Glowing Logos) */}
            <section className="py-12 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">{t.social.title}</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                         {['APEX SOLAR', 'LUXE LEGAL', 'JENKINS HVAC', 'TECHFLOW'].map((name, i) => (
                             <div key={i} className="font-display font-bold text-xl text-white hover:text-brand-400 hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] cursor-default transition-all">
                                 {name}
                             </div>
                         ))}
                    </div>
                </div>
            </section>
            
            {/* NEW: 7. REAL STORIES (Testimonials) */}
            <RealStories t={t.realStories} />
            
            {/* NEW: 8. POST-PURCHASE TIMELINE */}
            <PostPurchaseTimeline t={t.extraFunnel} />

            {/* 9. FINAL IMPACT (Split Screen) */}
            <section className="min-h-[60vh] flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-dark-900 flex flex-col justify-center p-12 md:p-24 border-r border-white/5">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-600 mb-6">SLEEPING BUSINESS</h2>
                    <ul className="space-y-4 text-slate-500 text-lg">
                        <li className="flex gap-3"><span className="text-red-900">✖</span> Missed calls</li>
                        <li className="flex gap-3"><span className="text-red-900">✖</span> Unanswered leads</li>
                        <li className="flex gap-3"><span className="text-red-900">✖</span> Zero growth</li>
                    </ul>
                </div>
                <div className="md:w-1/2 bg-brand-900 relative overflow-hidden flex flex-col justify-center p-12 md:p-24">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-lg">WORKING BUSINESS</h2>
                        <ul className="space-y-4 text-white text-lg mb-12">
                            <li className="flex gap-3"><Check className="text-green-400"/> Auto-booked</li>
                            <li className="flex gap-3"><Check className="text-green-400"/> Instant replies</li>
                            <li className="flex gap-3"><Check className="text-green-400"/> Scaling daily</li>
                        </ul>
                        <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-white/90 backdrop-blur text-brand-900 rounded-lg font-bold shadow-2xl hover:bg-white transition-colors uppercase tracking-wider">
                            {t.final.cta}
                        </button>
                        <p className="mt-4 text-white/60 text-sm font-mono">{t.final.urgency}</p>
                     </div>
                </div>
            </section>
        </div>
    );
};