import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, Zap, Users, Repeat, Star, Quote, ChevronLeft, ChevronRight, Check, Activity, DollarSign, MessageSquare, Briefcase, Building, Hexagon, Triangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Testimonial } from '../types';

const FeatureCard: React.FC<{ 
  icon: React.ElementType, 
  title: string, 
  desc: string 
}> = ({ icon: Icon, title, desc }) => (
  <div className="group bg-dark-900 p-8 rounded-2xl border border-white/5 hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] relative overflow-hidden h-full flex flex-col">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-500/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light text-sm">{desc}</p>
  </div>
);

const StepCard: React.FC<{
  number: string,
  title: string,
  desc: string
}> = ({ number, title, desc }) => (
  <div className="relative flex flex-col items-center text-center p-6 bg-dark-800/50 rounded-xl border border-white/5 backdrop-blur-sm">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
      {number}
    </div>
    <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">{title}</h3>
    <p className="text-sm text-slate-400">{desc}</p>
  </div>
);

const ClientCard: React.FC<{
  title: string,
  problems: string[]
}> = ({ title, problems }) => (
  <div className="bg-dark-900 p-6 rounded-2xl border border-white/10 hover:border-brand-500/30 transition-colors">
    <h3 className="font-display font-bold text-lg text-white mb-4 pb-2 border-b border-white/10">{title}</h3>
    <ul className="space-y-3">
      {problems.map((p, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
          <CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.4)] rounded-full" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TestimonialSlider: React.FC<{ data: Testimonial[] }> = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, data.length]);

  const next = () => setCurrent((prev) => (prev + 1) % data.length);
  const prev = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Abstract decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-900/20 blur-[60px] rounded-full pointer-events-none"></div>

      <div className="relative bg-dark-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-center">
        {/* Large Quote Icon Background */}
        <div className="absolute top-6 left-8 text-brand-900/30">
          <Quote size={120} fill="currentColor" />
        </div>

        <div className="relative z-10">
          {data.map((t, idx) => (
            <div 
              key={t.id}
              className={`transition-all duration-700 ease-in-out absolute inset-0 flex flex-col justify-center px-8 md:px-12 ${
                idx === current 
                  ? 'opacity-100 translate-x-0 relative' 
                  : 'opacity-0 translate-x-8 absolute pointer-events-none'
              }`}
            >
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed italic mb-8 text-center md:text-left">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 justify-center md:justify-start">
                <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-brand-500 to-cyan-500 shadow-[0_0_15px_rgba(124,58,237,0.4)] overflow-hidden shrink-0">
                  {/* Fallback to Initials if image fails or not provided */}
                  {t.image ? (
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-full h-full object-cover rounded-full bg-dark-800"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center bg-dark-800 text-white font-bold text-lg rounded-full ${t.image ? 'hidden' : ''}`}>
                     {t.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="text-white font-display font-bold tracking-wide">{t.author}</div>
                  <div className="text-sm text-brand-400">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-8 flex gap-3 z-20">
          <button 
            onClick={prev}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-brand-500/30"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-brand-500/30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-brand-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]' : 'w-2 bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const SalesSystemDemo: React.FC = () => {
  const [step, setStep] = useState(0);
  const { language } = useLanguage();
  const t = translations[language].home.systemDemo;
  
  // Animation cycle: 
  // 0: Idle
  // 1: Lead Detected
  // 2: AI Engaging
  // 3: Qualified
  // 4: Booked
  // 5: Revenue Up

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-dark-950 rounded-2xl border border-brand-500/30 overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.15)] relative group">
       {/* Tech decorative header */}
       <div className="h-10 bg-dark-900 border-b border-white/10 flex items-center justify-between px-4">
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          </div>
          <div className="text-[10px] font-mono text-brand-400 tracking-[0.2em] uppercase opacity-80 flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             {t.status}
          </div>
       </div>

       <div className="p-6 relative min-h-[300px] flex flex-col justify-between">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Main Activity Feed */}
          <div className="relative z-10 space-y-4">
            <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">{t.liveFeed}</div>
            
            {/* Step 1: Lead Detected */}
            <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${step >= 1 ? 'bg-brand-900/20 border-brand-500/30 opacity-100 translate-x-0' : 'bg-transparent border-transparent opacity-30 -translate-x-4'}`}>
               <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]">
                  <Users size={16} />
               </div>
               <div>
                  <div className="text-sm text-white font-medium">{t.leadDetected}</div>
                  <div className="text-xs text-brand-300">Source: Website Form</div>
               </div>
            </div>

            {/* Step 2: AI Engaging */}
            <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${step >= 2 ? 'bg-cyan-900/20 border-cyan-500/30 opacity-100 translate-x-0' : 'bg-transparent border-transparent opacity-30 -translate-x-4'}`}>
               <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                  <MessageSquare size={16} />
               </div>
               <div>
                  <div className="text-sm text-white font-medium">{t.aiActive}</div>
                  <div className="text-xs text-cyan-300">{t.engaging}</div>
               </div>
            </div>

            {/* Step 4: Booked */}
            <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${step >= 4 ? 'bg-green-900/20 border-green-500/30 opacity-100 translate-x-0' : 'bg-transparent border-transparent opacity-30 -translate-x-4'}`}>
               <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  <Check size={16} />
               </div>
               <div>
                  <div className="text-sm text-white font-medium">{t.booked}</div>
                  <div className="text-xs text-green-300">Calendar Updated</div>
               </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-2 gap-4 mt-6 relative z-10">
             <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5 backdrop-blur">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                   <DollarSign size={10} /> {t.revenue}
                </div>
                <div className={`text-xl font-display font-bold text-white transition-all duration-300 ${step >= 5 ? 'text-green-400 scale-110 origin-left' : ''}`}>
                   $24,500
                </div>
             </div>
             <div className="bg-dark-900/80 p-3 rounded-xl border border-white/5 backdrop-blur">
                <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1 flex items-center gap-1">
                   <Activity size={10} /> {t.conversion}
                </div>
                <div className="text-xl font-display font-bold text-white">
                   18.4% <span className="text-xs font-sans font-normal text-green-500 ml-1">↑ 2.1%</span>
                </div>
             </div>
          </div>
       </div>

       {/* Footer Label */}
       <div className="absolute bottom-2 right-4 text-[9px] text-white/10 font-mono pointer-events-none">
          {t.label}
       </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].home;
  const common = t.packages;

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Gradients/Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-brand-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/50 text-brand-300 text-sm font-medium mb-8 border border-brand-500/30 shadow-[0_0_15px_rgba(124,58,237,0.2)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_#a78bfa]"></span>
                <span className="tracking-wide uppercase">{t.hero.pill}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-8 leading-tight">
                {t.hero.titleLine1} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-cyan-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  {t.hero.titleLine2}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-display font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 border border-brand-400/20"
                >
                  {t.hero.ctaPrimary} <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('core-four')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-slate-300 border border-white/20 rounded-lg font-display font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:border-brand-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  {t.hero.ctaSecondary} <ChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Right Column: Sales System Demo */}
            <div className="relative">
               {/* Decorative glow behind the demo */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/10 blur-[80px] rounded-full pointer-events-none"></div>
               <SalesSystemDemo />
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-dark-900 border-y border-white/5 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <p className="text-center text-sm font-display font-bold text-slate-500 tracking-widest uppercase mb-8">
            {t.trustedBy}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
             {/* Logo 1: Apex Solar */}
             <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-default">
                <div className="w-8 h-8 bg-brand-500/20 rounded flex items-center justify-center border border-brand-500/50">
                  <Briefcase size={18} className="text-brand-400" />
                </div>
                <span className="font-display font-bold text-xl text-white">APEX<span className="text-brand-400">SOLAR</span></span>
             </div>

             {/* Logo 2: Luxe Legal */}
             <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-default">
                <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center border border-cyan-500/50">
                   <Building size={18} className="text-cyan-400" />
                </div>
                <span className="font-display font-bold text-xl text-white">LUXE<span className="text-cyan-400 font-serif italic">LEGAL</span></span>
             </div>

             {/* Logo 3: Jenkins HVAC */}
             <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-default">
                <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center border border-orange-500/50">
                   <Hexagon size={18} className="text-orange-400" />
                </div>
                <span className="font-display font-bold text-xl text-white">JENKINS<span className="font-mono text-orange-400 text-lg">HVAC</span></span>
             </div>

             {/* Logo 4: TechFlow */}
             <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-default">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                   <Triangle size={18} className="text-green-400 rotate-90" />
                </div>
                <span className="font-display font-bold text-xl text-white">TECH<span className="text-green-400">FLOW</span></span>
             </div>
          </div>
        </div>
      </section>

      {/* The Core Four */}
      <section id="core-four" className="py-24 bg-dark-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-wide">{t.coreFour.title}</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              {t.coreFour.subtitle} <span className="text-brand-400 font-semibold">{t.coreFour.subtitleHighlight}</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <FeatureCard 
              icon={Zap}
              title={t.coreFour.cards[0].title}
              desc={t.coreFour.cards[0].desc}
            />
            <FeatureCard 
              icon={Repeat}
              title={t.coreFour.cards[1].title}
              desc={t.coreFour.cards[1].desc}
            />
            <FeatureCard 
              icon={Star}
              title={t.coreFour.cards[2].title}
              desc={t.coreFour.cards[2].desc}
            />
             <FeatureCard 
              icon={Users}
              title={t.coreFour.cards[3].title}
              desc={t.coreFour.cards[3].desc}
            />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-dark-900/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">{t.whoWeHelp.title}</h2>
              <p className="text-slate-400">{t.whoWeHelp.subtitle}</p>
            </div>
            <button 
              onClick={() => navigate('/services')}
              className="text-brand-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all hover:text-brand-300 font-display tracking-wide"
            >
              {t.whoWeHelp.viewServices} <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.whoWeHelp.cards.map((card, idx) => (
               <ClientCard 
                  key={idx}
                  title={card.title} 
                  problems={card.problems}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{t.testimonials.title}</h2>
             <p className="text-slate-400">{t.testimonials.subtitle}</p>
          </div>
          <TestimonialSlider data={t.testimonials.list} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{t.process.title}</h2>
            <p className="text-slate-400">{t.process.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-brand-900 -z-10"></div>
                
              {t.process.steps.map((step, idx) => (
                <StepCard key={idx} number={`0${idx + 1}`} title={step.title} desc={step.desc} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block p-4 bg-brand-900/20 rounded-xl border border-brand-500/20 backdrop-blur-sm">
                <p className="font-medium text-brand-300 flex items-center gap-2">
                  <Zap size={18} className="fill-brand-300" /> {t.process.time} <span className="font-bold text-white">{t.process.days}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">{common.title}</h2>
            <p className="text-slate-400">{common.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Core */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/30 transition-all">
              <h3 className="text-xl font-display font-bold mb-2 text-white">CERRANA CORE</h3>
              <p className="text-slate-500 text-sm mb-6">{common.core.desc}</p>
              <div className="text-3xl font-display font-bold mb-2 text-slate-200">$147<span className="text-sm font-normal text-slate-500">/{common.month}</span></div>
              <div className="text-xs text-slate-500 mb-6 font-mono">+ $497 {common.setup}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {common.core.features.map((f: string, i: number) => (
                   <li key={i} className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide uppercase">{common.viewDetails}</button>
            </div>

            {/* Growth Bundle */}
            <div className="bg-dark-900 rounded-2xl p-8 border-2 border-brand-500 shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col relative transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-brand-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg text-white font-display tracking-wider shadow-[0_0_10px_rgba(124,58,237,0.5)]">{common.growth.badge}</div>
              <h3 className="text-xl font-display font-bold mb-2 text-white">GROWTH BUNDLE</h3>
              <p className="text-brand-200 text-sm mb-6">{common.growth.desc}</p>
              <div className="text-3xl font-display font-bold mb-2 text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">$347<span className="text-sm font-normal text-white">/{common.month}</span></div>
              <div className="text-xs text-brand-300/80 mb-6 font-mono">+ $997 {common.setup}</div>

              <ul className="space-y-4 mb-8 flex-grow">
                 {common.growth.features.map((f: string, i: number) => (
                   <li key={i} className="flex gap-3 text-white"><CheckCircle size={16} className="text-brand-400 shrink-0 shadow-[0_0_5px_#a78bfa]" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white transition-all font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] font-display tracking-wide uppercase">{common.viewDetails}</button>
            </div>

            {/* Full Funnel */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/30 transition-all">
              <h3 className="text-xl font-display font-bold mb-2 text-white">FULL FUNNEL</h3>
              <p className="text-slate-500 text-sm mb-6">{common.full.desc}</p>
              <div className="text-3xl font-display font-bold mb-2 text-slate-200">$397<span className="text-sm font-normal text-slate-500">/{common.month}</span></div>
              <div className="text-xs text-slate-500 mb-6 font-mono">+ $1,497 {common.setup}</div>

              <ul className="space-y-4 mb-8 flex-grow">
                {common.full.features.map((f: string, i: number) => (
                   <li key={i} className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> {f}</li>
                ))}
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide uppercase">{common.viewDetails}</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white tracking-wide">{t.faq.title}</h2>
          </div>
          <div className="space-y-4">
            {t.faq.questions.map((item: any, idx: number) => (
              <details key={idx} className="bg-dark-900 p-6 rounded-xl border border-white/5 group cursor-pointer open:border-brand-500/30 transition-colors">
                <summary className="font-semibold text-white flex justify-between items-center list-none font-display tracking-wide">
                  {item.q}
                  <span className="transition group-open:rotate-180 text-brand-500"><ChevronDown size={20} /></span>
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};