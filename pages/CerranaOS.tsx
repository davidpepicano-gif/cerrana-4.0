import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    MessageSquare, Activity, Users, Bot, Zap, Calendar, Globe, Mail, 
    Smartphone, Star, CreditCard, Lock, Phone, BarChart3, AppWindow,
    Check, ArrowRight, Monitor, LayoutGrid, Clock, ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

/* ------------------------------------------------------------
   Advanced Visuals for Each Module (CSS + State)
   ------------------------------------------------------------ */
const MiniVisual: React.FC<{ type: number }> = ({ type }) => {
    // Shared state for simple loop animations
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(s => (s + 1) % 4);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    switch (type) {
        case 0: // Conversations Hub (Icons aggregating to center)
            return (
                <div className="relative h-24 w-full bg-dark-900 rounded border border-white/5 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    {/* Central Hub */}
                    <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center z-10 shadow-lg shadow-brand-500/30">
                        <MessageSquare size={20} className="text-white" />
                    </div>
                    {/* Incoming Icons */}
                    <div className={`absolute top-2 left-2 p-1.5 bg-[#25D366] rounded-full text-white transition-all duration-1000 ${step === 0 ? 'translate-x-16 translate-y-8 scale-50 opacity-0' : 'translate-x-0 translate-y-0 scale-100 opacity-100'}`}><Smartphone size={10}/></div>
                    <div className={`absolute top-2 right-2 p-1.5 bg-[#E1306C] rounded-full text-white transition-all duration-1000 delay-300 ${step === 1 ? '-translate-x-16 translate-y-8 scale-50 opacity-0' : 'translate-x-0 translate-y-0 scale-100 opacity-100'}`}><Monitor size={10}/></div>
                    <div className={`absolute bottom-2 left-4 p-1.5 bg-[#1DA1F2] rounded-full text-white transition-all duration-1000 delay-500 ${step === 2 ? 'translate-x-14 -translate-y-8 scale-50 opacity-0' : 'translate-x-0 translate-y-0 scale-100 opacity-100'}`}><Mail size={10}/></div>
                    
                    {/* Pulse Effect */}
                    <div className="absolute w-12 h-12 bg-brand-500 rounded-xl animate-ping opacity-20"></div>
                </div>
            );
        case 1: // Pipeline (Card Drag & Drop)
            return (
                <div className="h-24 w-full bg-dark-900 border border-white/5 rounded p-2 flex gap-2 overflow-hidden">
                    <div className="w-1/3 bg-white/5 rounded flex flex-col gap-1 p-1">
                        <div className="h-1 w-full bg-white/10 rounded"></div>
                        {/* Static cards */}
                        <div className="h-6 bg-white/5 rounded border border-white/5"></div>
                    </div>
                    <div className="w-1/3 bg-white/5 rounded flex flex-col gap-1 p-1 relative">
                        <div className="h-1 w-full bg-white/10 rounded"></div>
                        {/* Moving Card */}
                        <div className={`absolute w-[90%] h-6 bg-brand-500/20 border border-brand-500/50 rounded flex items-center justify-center transition-all duration-1000 ease-in-out shadow-lg z-10
                            ${step === 0 ? 'top-4 left-1' : step === 1 ? 'top-4 left-[110%]' : step === 2 ? 'top-4 left-[110%] bg-green-500/20 border-green-500' : 'top-4 left-1 opacity-0'}
                        `}>
                            <div className="w-2 h-2 rounded-full bg-current"></div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white/5 rounded flex flex-col gap-1 p-1">
                        <div className="h-1 w-full bg-white/10 rounded"></div>
                        <div className="h-6 bg-white/5 rounded border border-white/5 mt-8"></div>
                    </div>
                </div>
            );
        case 2: // CRM (Data Enrichment)
            return (
                <div className="h-24 w-full bg-dark-900 border border-white/5 rounded p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 font-bold text-xs">JD</div>
                    <div className="flex-1 space-y-2">
                        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                        <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                        <div className="flex gap-1 overflow-hidden">
                            <div className={`h-4 px-2 bg-brand-500/20 text-brand-300 text-[8px] rounded flex items-center transition-all duration-500 ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Lead</div>
                            <div className={`h-4 px-2 bg-blue-500/20 text-blue-300 text-[8px] rounded flex items-center transition-all duration-500 delay-300 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Verified</div>
                            <div className={`h-4 px-2 bg-green-500/20 text-green-300 text-[8px] rounded flex items-center transition-all duration-500 delay-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>$5k</div>
                        </div>
                    </div>
                </div>
            );
        case 3: // AI (Chat Processing)
            return (
                <div className="h-24 w-full bg-dark-900 border border-white/5 rounded p-3 flex flex-col justify-between">
                    <div className={`self-end bg-brand-600/50 text-white text-[8px] p-2 rounded-lg rounded-tr-none transition-opacity duration-300 ${step === 0 ? 'opacity-100' : 'opacity-50'}`}>
                        Price?
                    </div>
                    <div className={`self-start bg-white/10 text-slate-300 text-[8px] p-2 rounded-lg rounded-tl-none flex items-center gap-1 transition-all duration-300 ${step === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
                        <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-200"></div>
                    </div>
                    <div className={`self-start bg-brand-500/20 border border-brand-500/30 text-brand-200 text-[8px] p-2 rounded-lg rounded-tl-none transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        Starting at $100.
                    </div>
                </div>
            );
        case 4: // Workflows (Connection Line)
            return (
                <div className="h-24 w-full flex items-center justify-center gap-2 px-4">
                    <div className="w-8 h-8 rounded bg-white/10 border border-white/20 flex items-center justify-center"><Zap size={14} className="text-yellow-400"/></div>
                    
                    <div className="flex-1 h-0.5 bg-white/10 relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent animate-[shimmer_2s_infinite]"></div>
                    </div>
                    
                    <div className="w-8 h-8 rounded bg-white/10 border border-white/20 flex items-center justify-center relative">
                        <Mail size={14} className={`text-brand-400 transition-all ${step % 2 === 0 ? 'scale-110 text-white' : ''}`}/>
                        <div className={`absolute inset-0 bg-brand-500/30 rounded blur-sm transition-opacity ${step % 2 === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                </div>
            );
        case 5: // Calendar (Slot Selection)
            return (
                <div className="h-24 w-full p-2 bg-dark-900 border border-white/5 rounded grid grid-cols-4 gap-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`rounded transition-colors duration-500 flex items-center justify-center
                            ${i === 5 ? (step >= 2 ? 'bg-green-500 text-white' : 'bg-white/5 hover:bg-white/10') : 'bg-white/5 opacity-50'}
                        `}>
                            {i === 5 && step >= 2 && <Check size={12}/>}
                        </div>
                    ))}
                    {/* Cursor Simulation */}
                    <div className={`absolute transition-all duration-1000 z-10 pointer-events-none text-white drop-shadow-md
                        ${step === 0 ? 'top-12 left-12' : step === 1 ? 'top-10 left-[60%]' : 'top-10 left-[60%] scale-90'}
                    `}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M0 0L8.5 22.5L11.5 13.5L20.5 10.5L0 0Z" stroke="black" strokeWidth="2"/></svg>
                    </div>
                </div>
            );
        case 6: // Websites (Conversion Button)
            return (
                <div className="h-24 w-full bg-dark-900 border border-white/5 rounded p-2 flex flex-col justify-center items-center gap-2">
                    <div className="w-24 h-2 bg-white/10 rounded"></div>
                    <div className="w-16 h-2 bg-white/5 rounded mb-2"></div>
                    <div className={`px-4 py-1.5 rounded text-[8px] font-bold uppercase transition-all duration-300 transform
                        ${step === 2 ? 'bg-green-500 text-white scale-105 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-brand-600 text-white shadow-lg'}
                    `}>
                        {step === 2 ? 'Success!' : 'Sign Up'}
                    </div>
                     {/* Cursor Simulation */}
                     <div className={`absolute transition-all duration-1000 z-10 pointer-events-none text-white drop-shadow-md
                        ${step === 0 ? 'bottom-2 right-2' : step === 1 ? 'top-[55%] left-[55%]' : 'top-[55%] left-[55%] scale-90'}
                    `}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M0 0L8.5 22.5L11.5 13.5L20.5 10.5L0 0Z" stroke="black" strokeWidth="2"/></svg>
                    </div>
                </div>
            );
        case 7: // Email (Flying Envelopes)
            return (
                <div className="h-24 w-full relative overflow-hidden flex items-center justify-center">
                    <div className="z-10 bg-brand-600 p-2 rounded-full shadow-lg">
                        <Mail size={16} className="text-white" />
                    </div>
                    {/* Particles */}
                    {[0, 1, 2].map((i) => (
                        <div key={i} className={`absolute w-2 h-1.5 bg-white/50 rounded-sm transition-all duration-1000
                            ${step === i ? 'top-1/2 left-1/2 opacity-100 scale-100' : `top-[${20 + i*20}%] left-[${80 + i*5}%] opacity-0 scale-50`}
                        `} style={{ transform: `translate(${step === i ? 0 : 40}px, ${step === i ? 0 : -20 + i * 10}px)` }}></div>
                    ))}
                </div>
            );
        case 8: // SMS (Notification Pop)
            return (
                <div className="h-24 w-full flex items-center justify-center">
                    <div className="w-16 h-20 border-2 border-white/10 rounded-lg bg-black relative overflow-hidden flex flex-col">
                        <div className="h-3 w-full bg-white/5 border-b border-white/5"></div>
                        <div className={`mt-2 mx-1 p-1 bg-white/10 rounded text-[6px] text-white transition-all duration-500 transform ${step >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                            <div className="flex gap-1 items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>New SMS</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 9: // Reputation (Stars Filling)
            return (
                <div className="h-24 w-full flex flex-col items-center justify-center gap-2">
                    <div className="text-2xl font-bold text-white transition-all">{step >= 4 ? '5.0' : '4.' + (step + 5)}</div>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map(i => (
                            <Star 
                                key={i} 
                                size={12} 
                                className={`transition-all duration-300 ${i <= step ? 'fill-yellow-400 text-yellow-400 scale-110' : 'text-slate-700'}`} 
                            />
                        ))}
                    </div>
                </div>
            );
        case 10: // Payments (Swipe Success)
            return (
                <div className="h-24 w-full flex items-center justify-center">
                    <div className={`w-32 h-10 rounded border flex items-center justify-center gap-2 transition-all duration-500
                        ${step >= 2 ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 text-slate-400'}
                    `}>
                        {step >= 2 ? <Check size={16} /> : <span className="text-[10px] font-mono">$1,200.00</span>}
                    </div>
                    {/* Scanning Line */}
                    <div className={`absolute h-10 w-1 bg-brand-500/50 blur-sm transition-all duration-1000 ${step === 1 ? 'left-[60%] opacity-100' : 'left-[40%] opacity-0'}`}></div>
                </div>
            );
        case 11: // Memberships (Unlock)
            return (
                <div className="h-24 w-full flex items-center justify-center">
                    <div className={`p-3 rounded-full border-2 transition-all duration-500
                        ${step >= 2 ? 'border-green-500 text-green-500 bg-green-500/10' : 'border-slate-500 text-slate-500'}
                    `}>
                        <Lock size={20} className={`transition-transform duration-500 ${step >= 2 ? '-translate-y-0.5' : ''}`} />
                        {/* Shackle animation logic simplified by icon swap if desired, or just movement */}
                    </div>
                </div>
            );
        case 12: // Call Tracking (Waveform)
            return (
                <div className="h-24 w-full flex items-center justify-center gap-0.5 px-8">
                    {[...Array(10)].map((_, i) => (
                        <div 
                            key={i} 
                            className="w-1 bg-brand-500 rounded-full transition-all duration-300"
                            style={{ 
                                height: `${Math.random() * (step % 2 === 0 ? 30 : 10) + 10}px`,
                                opacity: 0.5 + Math.random() * 0.5
                            }}
                        ></div>
                    ))}
                </div>
            );
        case 13: // Analytics (Graph Growth)
            return (
                <div className="h-24 w-full flex items-end justify-between px-6 pb-4 gap-1">
                    {[30, 45, 60, 80, 50, 90, 100].map((h, i) => (
                        <div 
                            key={i} 
                            className="flex-1 bg-brand-500 rounded-t transition-all duration-500"
                            style={{ 
                                height: `${step >= 1 ? h : 10}%`,
                                opacity: i / 7
                            }}
                        ></div>
                    ))}
                </div>
            );
        case 14: // Mobile App (Badge)
            return (
                <div className="h-24 w-full flex items-center justify-center">
                    <div className="relative">
                        <div className="w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-brand-500/50"></div>
                        </div>
                        <div className={`absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white border-2 border-dark-900 transition-all duration-300 transform
                            ${step >= 1 ? 'scale-100' : 'scale-0'}
                        `}>
                            1
                        </div>
                    </div>
                </div>
            );
        default: return <div className="bg-white/5 h-24 w-full"></div>;
    }
};

export const CerranaOS: React.FC = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const t = translations[language].os_page;

    const icons = [
        MessageSquare, LayoutGrid, Users, Bot, Zap, Calendar, Globe, Mail, 
        Smartphone, Star, CreditCard, Lock, Phone, BarChart3, AppWindow
    ];

    return (
        <div className="bg-dark-950 min-h-screen text-slate-200">
            <SEO 
                title="Cerrana OS | CRM y Agente de Ventas IA Todo en Uno" 
                description="Cerrana OS centraliza tus leads, conversaciones, seguimiento y ventas en un solo sistema con IA. Para negocios B2C hispanos en EE. UU."
                schema={JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://cerrana.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Cerrana OS",
                      "item": "https://cerrana.com/platform"
                    }
                  ]
                })}
            />
            
            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-bold border border-brand-500/20 mb-6 animate-pulse backdrop-blur-sm">
                        <Monitor size={12} /> SYSTEM ONLINE
                    </div>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
                        {t.hero.title}
                        <span className="block text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400 mt-2 font-light tracking-wide">
                            {t.hero.subtitle}
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t.hero.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button onClick={() => document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})} className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/30 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-white/5">
                            {t.hero.cta1}
                        </button>
                        <button onClick={() => navigate('/pricing')} className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                            {t.hero.cta2}
                        </button>
                    </div>

                    {/* Animated Dashboard Mockup */}
                    <div className="max-w-5xl mx-auto bg-dark-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none"></div>
                        <div className="bg-dark-950 rounded-lg overflow-hidden relative">
                            {/* Header */}
                            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div></div>
                                <div className="ml-4 h-4 w-32 bg-white/5 rounded"></div>
                            </div>
                            {/* Body Grid */}
                            <div className="p-6 grid grid-cols-3 gap-6 h-[400px] overflow-hidden">
                                <div className="col-span-2 space-y-4">
                                    <div className="h-48 bg-white/5 rounded border border-white/5 flex items-end p-4 gap-2">
                                        {[30, 50, 40, 70, 55, 80, 95].map((h, i) => (
                                            <div key={i} className="flex-1 bg-brand-500/30 hover:bg-brand-500 transition-colors rounded-t duration-700 hover:scale-y-110 origin-bottom" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded bg-brand-500/20 text-brand-400 flex items-center justify-center"><Users size={16}/></div>
                                            <div className="text-2xl font-bold text-white">1,204 <span className="text-xs text-green-400 font-normal">+12%</span></div>
                                        </div>
                                        <div className="h-24 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center"><MessageSquare size={16}/></div>
                                            <div className="text-2xl font-bold text-white">843 <span className="text-xs text-green-400 font-normal">+8%</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-full bg-white/5 rounded border border-white/5 p-4 space-y-3">
                                        <div className="text-xs font-bold text-slate-500 uppercase">Recent Activity</div>
                                        {[1,2,3,4,5].map(i => (
                                            <div key={i} className="flex gap-2 items-center animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                                                <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                                                <div className="h-2 w-20 bg-white/10 rounded"></div>
                                                <div className="ml-auto text-[10px] text-slate-500">2m</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. DEFINITION & HUB (ENHANCED) */}
            <section className="py-24 bg-dark-900 border-y border-white/5 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">{t.definition.title}</h2>
                    <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto">{t.definition.desc}</p>
                    
                    {/* Hub Visualization */}
                    <div className="relative w-full max-w-3xl mx-auto h-[500px] flex items-center justify-center">
                        {/* Center Core Pulse */}
                        <div className="absolute w-[400px] h-[400px] bg-brand-500/5 rounded-full animate-pulse-slow"></div>
                        <div className="absolute w-[300px] h-[300px] bg-brand-500/10 rounded-full animate-ping [animation-duration:3s]"></div>

                        {/* Center Core */}
                        <div className="w-32 h-32 bg-dark-950/90 backdrop-blur rounded-full border-4 border-brand-500 shadow-[0_0_50px_rgba(139,92,246,0.6)] flex items-center justify-center z-20 relative animate-bounce [animation-duration:3s]">
                            <span className="font-display font-bold text-white text-xl tracking-wider">OS</span>
                        </div>
                        
                        {/* Orbiting Modules */}
                        {t.definition.modules.map((mod: string, i: number) => {
                            const angle = (i * (360 / t.definition.modules.length));
                            const radius = 180;
                            
                            return (
                                <div 
                                    key={i} 
                                    className="absolute flex items-center justify-center z-10 w-full h-full pointer-events-none"
                                    style={{ 
                                        animation: `spin 60s linear infinite`,
                                    }}
                                >
                                    <div 
                                        className="absolute flex items-center justify-center"
                                        style={{ 
                                            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, // Counter-rotate to keep text upright if needed, or let it spin
                                        }}
                                    >
                                        <div 
                                            className="px-4 py-2 bg-dark-800/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-slate-300 shadow-lg hover:border-brand-500/50 hover:text-white transition-colors cursor-default pointer-events-auto"
                                            style={{ animation: `counter-spin 60s linear infinite` }} // Keep text upright
                                        >
                                            {mod}
                                        </div>
                                        
                                        {/* Particle Stream to Center */}
                                        <div className="absolute w-2 h-2 bg-brand-400 rounded-full opacity-0 animate-flow-in" style={{ 
                                            transformOrigin: 'center',
                                            left: '50%',
                                            top: '50%',
                                            animationDelay: `${i * 0.5}s`
                                        }}></div>
                                    </div>
                                </div>
                            );
                        })}
                        
                        {/* Styles for animations in this section */}
                        <style>{`
                            @keyframes spin { 100% { transform: rotate(360deg); } }
                            @keyframes counter-spin { 100% { transform: rotate(-360deg); } }
                            @keyframes flow-in {
                                0% { opacity: 0; transform: translate(0, 0) scale(0); }
                                50% { opacity: 1; scale: 1; }
                                100% { opacity: 0; transform: translate(${-180}px, 0) scale(0); } /* Rough approximation of moving to center */
                            }
                        `}</style>
                    </div>
                </div>
            </section>

            {/* 3. FEATURE GRID (15 Modules) */}
            <section className="py-24 bg-dark-950" id="demo">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {t.features.map((feature: any, i: number) => {
                            const Icon = icons[i];
                            return (
                                <div key={i} className="bg-dark-900 rounded-xl border border-white/5 p-6 hover:border-brand-500/30 transition-all hover:-translate-y-1 group relative overflow-hidden backdrop-blur-sm">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-brand-500/10"></div>
                                    
                                    <div className="flex items-center justify-between mb-6 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/5 rounded-lg text-slate-400 group-hover:text-brand-400 transition-colors shadow-inner">
                                                <Icon size={20} />
                                            </div>
                                            <h3 className="font-bold text-white text-sm uppercase tracking-wide">{feature.title}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6 relative z-10">
                                        <MiniVisual type={i} />
                                    </div>

                                    <p className="text-slate-400 text-sm mb-4 min-h-[40px] leading-relaxed">{feature.desc}</p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-brand-400 bg-brand-500/5 p-2 rounded border border-brand-500/10">
                                        <Check size={12} /> {feature.benefit}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* MID-SECTION CTA */}
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-900/50 to-dark-900 border border-brand-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.1)]">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                                {t.midFeatureCta?.text || "Ready to centralize your entire business?"}
                            </h3>
                            <button 
                                onClick={() => navigate('/pricing')}
                                className="px-8 py-4 bg-white/90 backdrop-blur-md text-brand-900 font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform uppercase tracking-wider hover:bg-white"
                            >
                                {t.midFeatureCta?.button || "Build Your System"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PLANS SECTION */}
            <section className="py-24 bg-dark-900 border-y border-white/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">{t.plans.title}</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Core */}
                        <div className="bg-dark-950 rounded-2xl border border-white/10 p-8 flex flex-col relative group hover:border-brand-500/30 transition-colors">
                            <h3 className="font-display font-bold text-xl text-white mb-2">{t.plans.core.title}</h3>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-6">{t.plans.core.subtitle}</p>
                            <div className="text-4xl font-bold text-white mb-1">{t.plans.core.price}</div>
                            <div className="text-sm text-slate-500 mb-8">{t.plans.core.setup}</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {t.plans.core.features.map((f: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                                        <Check size={16} className="text-brand-500 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => navigate('/pricing')} className="w-full py-4 border border-white/10 text-white font-bold rounded-lg hover:bg-white/5 transition-colors uppercase tracking-wide text-sm">
                                {t.plans.core.cta}
                            </button>
                        </div>

                        {/* Growth */}
                        <div className="bg-dark-900 rounded-2xl border border-brand-500 p-8 flex flex-col relative shadow-[0_0_30px_rgba(124,58,237,0.15)] transform md:-translate-y-4 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                                <span className="bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">{t.plans.growth.badge}</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-white mb-2 mt-2">{t.plans.growth.title}</h3>
                            <p className="text-xs text-brand-400 font-bold uppercase tracking-widest mb-6">{t.plans.growth.subtitle}</p>
                            <div className="text-4xl font-bold text-white mb-1">{t.plans.growth.price}</div>
                            <div className="text-sm text-slate-500 mb-8">{t.plans.growth.setup}</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {t.plans.growth.features.map((f: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm text-white">
                                        <Check size={16} className="text-brand-400 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => navigate('/pricing')} className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors uppercase tracking-wide text-sm shadow-lg shadow-brand-500/20">
                                {t.plans.growth.cta}
                            </button>
                        </div>

                        {/* Full */}
                        <div className="bg-dark-950 rounded-2xl border border-white/10 p-8 flex flex-col relative group hover:border-cyan-500/30 transition-colors">
                             <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-cyan-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{t.plans.full.badge}</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-white mb-2">{t.plans.full.title}</h3>
                            <p className="text-xs text-cyan-500 font-bold uppercase tracking-widest mb-6">{t.plans.full.subtitle}</p>
                            <div className="text-4xl font-bold text-white mb-1">{t.plans.full.price}</div>
                            <div className="text-sm text-slate-500 mb-8">{t.plans.full.setup}</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {t.plans.full.features.map((f: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                                        <Check size={16} className="text-cyan-500 shrink-0" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => navigate('/pricing')} className="w-full py-4 border border-white/10 text-white font-bold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-cyan-400 transition-colors uppercase tracking-wide text-sm">
                                {t.plans.full.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DIFFERENTIATION */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-12">{t.difference.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.difference.points.map((point: string, i: number) => (
                            <div key={i} className={`p-6 rounded-xl border flex flex-col items-center justify-center gap-4 ${i === 3 ? 'bg-brand-600 text-white border-brand-500 shadow-xl scale-105' : 'bg-dark-900 text-slate-400 border-white/5 opacity-70'}`}>
                                {i === 3 ? <Check size={32} /> : <div className="text-2xl font-bold">≠</div>}
                                <span className="font-bold text-sm">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-24 bg-dark-900 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.testimonials.map((item: any, i: number) => (
                            <div key={i} className="bg-dark-950 p-6 rounded-xl border border-white/5 relative">
                                <div className="text-4xl text-white/10 absolute top-4 left-4 font-serif">“</div>
                                <p className="text-slate-300 italic mb-4 relative z-10">{item.quote}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500"></div>
                                    <div>
                                        <div className="text-xs font-bold text-white">{item.author}</div>
                                        <div className="text-[10px] text-slate-500 uppercase">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-brand-900/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">{t.finalCta.title}</h2>
                    <p className="text-xl text-brand-300 mb-12">{t.finalCta.subtitle}</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                        <button onClick={() => document.getElementById('demo')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm">
                            {t.finalCta.btn1}
                        </button>
                        <button onClick={() => navigate('/pricing')} className="px-10 py-4 bg-white/90 backdrop-blur text-brand-900 font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform hover:bg-white">
                            {t.finalCta.btn2}
                        </button>
                    </div>
                    <p className="text-sm text-yellow-500 font-mono animate-pulse">{t.finalCta.urgency}</p>
                </div>
            </section>

        </div>
    );
};