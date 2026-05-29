import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Minus, Zap, ArrowRight, MousePointer2, Layers, Cpu, Globe, Rocket, ShieldCheck, PlayCircle, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

type TierId = 'core' | 'growth' | 'full';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].pricing;
  
  const [selectedTier, setSelectedTier] = useState<TierId>('growth');

  // Map tier IDs to external payment links
  const paymentLinks: Record<TierId, string> = {
      core: 'https://api.orbitpenguintech.com/payment-link/693742c2bbe2195bc3522919',
      growth: 'https://api.orbitpenguintech.com/payment-link/69373fc3bbe219f70852224e',
      full: 'https://api.orbitpenguintech.com/payment-link/69373ebfd8c1a809410a2d71'
  };

  // Dynamic description for Step 3 of the journey based on tier
  const getBuildStepDescription = (tier: TierId) => {
      switch(tier) {
          case 'core': return t.journey.step3.core;
          case 'growth': return t.journey.step3.growth;
          case 'full': return t.journey.step3.full;
          default: return t.journey.step3.growth;
      }
  };

  const handleSelectTier = (tier: TierId) => {
      setSelectedTier(tier);
      // Smooth scroll to journey section
      const journeySection = document.getElementById('journey-section');
      if (journeySection) {
          journeySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

  const pricingSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cerrana Clinic OS",
    "description": "Automatización de ventas, CRM clínico, y agente de Meta WhatsApp AI Booker para clínicas.",
    "brand": {
      "@type": "Brand",
      "name": "Cerrana AI"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Core CRM",
        "price": "147.00",
        "priceCurrency": "USD",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "147.00",
            "priceCurrency": "USD",
            "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Growth Bundle",
        "price": "347.00",
        "priceCurrency": "USD",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "347.00",
            "priceCurrency": "USD",
            "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Full Funnel",
        "price": "397.00",
        "priceCurrency": "USD",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "397.00",
            "priceCurrency": "USD",
            "unitCode": "MON"
        }
      }
    ]
  });

  return (
    <div className="bg-dark-950 min-h-screen pb-24 text-slate-200">
      <SEO 
        title={language === 'es' ? "Planes y Precios Recurrentes | Cerrana Clinic OS" : "Pricing Plans & Tiering | Cerrana Clinic OS"} 
        description={language === 'es' ? "Desde pipelines y CRM clínicos hasta el WhatsApp AI Booker oficial de Meta. Elige el motor idóneo para escalar la facturación de tu clínica." : "From medical CRM pipelines to Meta WhatsApp AI Booker. Select the perfect engine to scale your aesthetic or dental clinic sales."}
        schema={pricingSchema}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden text-center">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-wide">
              {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
         </div>
      </section>

      {/* Main Interactive Builder Section */}
      <section className="container mx-auto px-4 mb-24 max-w-7xl">
        
        {/* STEP 1: SELECT */}
        <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
                {t.steps.step1}
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Core Card */}
            <div 
                onClick={() => handleSelectTier('core')}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative group h-full flex flex-col ${selectedTier === 'core' ? 'bg-dark-900 border-brand-500 shadow-[0_0_30px_rgba(124,58,237,0.2)] scale-[1.02]' : 'bg-dark-900/40 border-white/10 hover:border-white/20 hover:bg-dark-900/60'}`}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-dark-950 rounded-lg border border-white/10 text-slate-400 group-hover:text-white transition-colors"><Layers size={24} /></div>
                    {selectedTier === 'core' && <div className="text-[10px] font-bold bg-brand-500 text-white px-2 py-1 rounded tracking-wider">{t.common.selected}</div>}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">{t.tiers.core.title}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t.tiers.core.subtitle}</p>
                <div className="text-3xl font-display font-bold text-white mb-1">$147<span className="text-sm font-sans font-normal text-slate-500">/{t.common.month}</span></div>
                <div className="text-xs text-slate-500 font-mono mb-6">+ $497 {t.common.setupFee}</div>
                <ul className="space-y-3 mb-6 flex-grow">
                    {t.tiers.core.features.slice(0,3).map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-400"><Check size={14} className="text-brand-500 mt-0.5" /> {f}</li>
                    ))}
                </ul>
                <div className={`w-full py-3 rounded-lg text-center text-sm font-bold uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 ${selectedTier === 'core' ? 'bg-brand-500/10 border-brand-500 text-brand-300' : 'border-white/10 text-slate-500 group-hover:border-white/30 group-hover:text-white'}`}>
                    {selectedTier === 'core' ? <Check size={16} /> : <Eye size={16} />} {t.tiers.core.cta}
                </div>
            </div>

            {/* Growth Card */}
            <div 
                onClick={() => handleSelectTier('growth')}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative group h-full flex flex-col transform ${selectedTier === 'growth' ? 'bg-dark-900 border-brand-500 shadow-[0_0_40px_rgba(124,58,237,0.3)] scale-105 z-10' : 'bg-dark-900/40 border-white/10 hover:border-white/20 hover:bg-dark-900/60 scale-100'}`}
            >
                 <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                    <span className="bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">{t.tiers.growth.badge}</span>
                </div>
                <div className="flex justify-between items-start mb-4 mt-2">
                    <div className="p-3 bg-brand-500/10 rounded-lg border border-brand-500/30 text-brand-400"><Cpu size={24} /></div>
                    {selectedTier === 'growth' && <div className="text-[10px] font-bold bg-brand-500 text-white px-2 py-1 rounded tracking-wider">{t.common.selected}</div>}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">{t.tiers.growth.title}</h3>
                <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-4">{t.tiers.growth.subtitle}</p>
                <div className="text-3xl font-display font-bold text-white mb-1">$347<span className="text-sm font-sans font-normal text-slate-500">/{t.common.month}</span></div>
                <div className="text-xs text-brand-200/70 font-mono mb-6">+ $997 {t.common.setupFee}</div>
                <ul className="space-y-3 mb-6 flex-grow">
                    {t.tiers.growth.features.slice(0,4).map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white"><Check size={14} className="text-brand-400 mt-0.5 shadow-[0_0_5px_#a78bfa]" /> {f}</li>
                    ))}
                </ul>
                <div className={`w-full py-3 rounded-lg text-center text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${selectedTier === 'growth' ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg' : 'border border-white/10 text-slate-500 group-hover:border-brand-500/30 group-hover:text-brand-300'}`}>
                    {selectedTier === 'growth' ? <Check size={16} /> : <Eye size={16} />} {t.tiers.growth.cta}
                </div>
            </div>

            {/* Full Card */}
            <div 
                onClick={() => handleSelectTier('full')}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative group h-full flex flex-col ${selectedTier === 'full' ? 'bg-dark-900 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-[1.02]' : 'bg-dark-900/40 border-white/10 hover:border-white/20 hover:bg-dark-900/60'}`}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-dark-950 rounded-lg border border-white/10 text-cyan-400 group-hover:text-white transition-colors"><Globe size={24} /></div>
                    {selectedTier === 'full' && <div className="text-[10px] font-bold bg-cyan-500 text-dark-900 px-2 py-1 rounded tracking-wider">{t.common.selected}</div>}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">{t.tiers.full.title}</h3>
                <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4">{t.tiers.full.subtitle}</p>
                <div className="text-3xl font-display font-bold text-white mb-1">$397<span className="text-sm font-sans font-normal text-slate-500">/{t.common.month}</span></div>
                <div className="text-xs text-slate-500 font-mono mb-6">+ $1,497 {t.common.setupFee}</div>
                <ul className="space-y-3 mb-6 flex-grow">
                    {t.tiers.full.features.slice(0,3).map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-400"><Check size={14} className="text-cyan-400 mt-0.5" /> {f}</li>
                    ))}
                </ul>
                 <div className={`w-full py-3 rounded-lg text-center text-sm font-bold uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 ${selectedTier === 'full' ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300' : 'border-white/10 text-slate-500 group-hover:border-cyan-500/30 group-hover:text-cyan-300'}`}>
                    {selectedTier === 'full' ? <Check size={16} /> : <Eye size={16} />} {t.tiers.full.cta}
                </div>
            </div>
        </div>

        {/* STEP 2: JOURNEY VISUALIZER */}
        <div id="journey-section" className="text-center mb-8 pt-8">
            <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
                {t.steps.step2}
            </div>
        </div>

        <div className="bg-dark-900 rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="text-center mb-12 relative z-10">
                <h2 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">
                    {t.journey.title} <span className="text-brand-400 underline decoration-brand-500/30 underline-offset-4">{t.tiers[selectedTier].title}</span>
                </h2>
                <p className="text-slate-400 text-sm">See exactly what happens when you click start.</p>
            </div>

            <div className="relative z-10">
                {/* Desktop Horizontal Line */}
                <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-1 bg-dark-800 rounded-full">
                    <div className="h-full bg-gradient-to-r from-brand-600 to-cyan-500 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center group">
                        <div className="w-14 h-14 rounded-full bg-dark-950 border-2 border-brand-500 z-10 flex items-center justify-center text-brand-400 shadow-[0_0_20px_rgba(124,58,237,0.3)] mb-6 transition-transform group-hover:scale-110">
                            <MousePointer2 size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{t.journey.step1.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{t.journey.step1.desc}</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center group">
                         <div className="w-14 h-14 rounded-full bg-dark-950 border-2 border-brand-500 z-10 flex items-center justify-center text-brand-400 shadow-[0_0_20px_rgba(124,58,237,0.3)] mb-6 transition-transform group-hover:scale-110">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{t.journey.step2.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{t.journey.step2.desc}</p>
                    </div>

                    {/* Step 3 (Dynamic) */}
                    <div className="relative flex flex-col items-center text-center group">
                         <div className="w-14 h-14 rounded-full bg-dark-950 border-2 border-cyan-500 z-10 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] mb-6 transition-transform group-hover:scale-110">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{t.journey.step3.title}</h3>
                        <p className="text-sm text-slate-300 font-medium leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5 animate-in fade-in duration-500 key={selectedTier}">
                           {getBuildStepDescription(selectedTier)}
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-col items-center text-center group">
                         <div className="w-14 h-14 rounded-full bg-dark-950 border-2 border-green-500 z-10 flex items-center justify-center text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] mb-6 transition-transform group-hover:scale-110">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{t.journey.step4.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{t.journey.step4.desc}</p>
                    </div>
                </div>
            </div>

            {/* 3. FINAL CTA */}
            <div className="mt-16 text-center border-t border-white/5 pt-12">
                <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8">
                    {t.steps.step3}
                </div>
                <br/>
                <button 
                    onClick={() => window.open(paymentLinks[selectedTier], '_blank')}
                    className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-dark-950 rounded-full font-display font-bold text-xl uppercase tracking-wider shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform overflow-hidden"
                >
                    <span className="relative z-10">{t.common.startJourney} {t.tiers[selectedTier].title}</span>
                    <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <div className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck size={12} /> Secure Stripe Checkout • 14-Day Money Back Guarantee
                </div>
            </div>
        </div>

      </section>

      {/* A La Carte Section */}
      <section className="container mx-auto px-4 mb-24 max-w-5xl">
        <h2 className="text-2xl font-display font-bold text-white mb-8 text-center tracking-wide flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-white/10"></span>
            {t.alaCarte.title}
            <span className="w-12 h-px bg-white/10"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-900 p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-500/30 transition-all">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{t.alaCarte.capture.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">{t.alaCarte.capture.desc}</p>
                    <div className="text-xs text-brand-400 font-mono">Setup: $697</div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-white">$247<span className="text-sm font-normal text-slate-500">/{t.common.month}</span></div>
                    <button 
                        onClick={() => window.open('https://api.orbitpenguintech.com/payment-link/69373d67d8c1a827930a2b23', '_blank')} 
                        className="mt-2 text-sm text-brand-400 hover:text-white transition-colors underline decoration-brand-500/30 underline-offset-4"
                    >
                        {t.alaCarte.capture.cta}
                    </button>
                </div>
            </div>

            <div className="bg-dark-900 p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-500/30 transition-all">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-display font-bold text-white mb-1">{t.alaCarte.web.title}</h3>
                    <p className="text-sm text-slate-400 mb-2">{t.alaCarte.web.desc}</p>
                     <div className="text-xs text-brand-400 font-mono">Setup: $997</div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-white">$97<span className="text-sm font-normal text-slate-500">/{t.common.month}</span></div>
                    <button 
                        onClick={() => window.open('https://api.orbitpenguintech.com/payment-link/6937340bbbe219324d521079', '_blank')} 
                        className="mt-2 text-sm text-brand-400 hover:text-white transition-colors underline decoration-brand-500/30 underline-offset-4"
                    >
                        {t.alaCarte.web.cta}
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 mb-24 max-w-5xl">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center tracking-wide">{t.comparison.title}</h2>
        
        <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-dark-900 rounded-2xl border border-white/10 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-4 bg-dark-950 p-6 border-b border-white/10 text-sm font-display font-bold tracking-wide text-white sticky top-0">
                    <div className="text-slate-400 font-sans font-normal pl-4">{t.comparison.headers[0]}</div>
                    <div className="text-center">{t.comparison.headers[1]}</div>
                    <div className="text-center text-brand-400">{t.comparison.headers[2]}</div>
                    <div className="text-center">{t.comparison.headers[3]}</div>
                </div>

                {/* Sales & CRM */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">{t.comparison.sections.crm}</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.pipeline}</div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.contact}</div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* AI Assistant */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">{t.comparison.sections.ai}</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.leadResponse}</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.booking}</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* Web & Funnels */}
                <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">{t.comparison.sections.web}</div>
                
                <div className="grid grid-cols-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.website}</div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Minus size={18} className="text-slate-700" /></div>
                    <div className="text-center flex justify-center"><Check size={18} className="text-brand-500" /></div>
                </div>

                {/* Pricing Summary */}
                 <div className="bg-dark-800/30 px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/5">{t.comparison.sections.investment}</div>
                
                <div className="grid grid-cols-4 p-6 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.setup}</div>
                    <div className="text-center text-sm text-slate-400">$497</div>
                    <div className="text-center text-sm text-white font-medium">$997</div>
                    <div className="text-center text-sm text-slate-400">$1,497</div>
                </div>
                 <div className="grid grid-cols-4 p-6 hover:bg-white/5 transition-colors items-center">
                    <div className="text-slate-300 font-medium pl-4">{t.comparison.features.monthly}</div>
                    <div className="text-center text-sm text-slate-400">$147/{t.common.month}</div>
                    <div className="text-center text-sm text-white font-bold text-brand-400">$347/{t.common.month}</div>
                    <div className="text-center text-sm text-slate-400">$397/{t.common.month}</div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center tracking-wide">{t.faq.title}</h2>
          <div className="space-y-4">
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">{t.faq.q1.q}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{t.faq.q1.a}</p>
             </div>
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">{t.faq.q2.q}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{t.faq.q2.a}</p>
             </div>
             <div className="bg-dark-900 p-6 rounded-xl border border-white/5">
                 <h3 className="font-semibold text-white mb-2 font-display">{t.faq.q3.q}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{t.faq.q3.a}</p>
             </div>
          </div>
      </section>
    </div>
  )
}