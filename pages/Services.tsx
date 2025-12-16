import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, Bot, Check, ArrowRight, Activity, Globe, MessageSquare, 
  LayoutTemplate, MousePointer2, Users, PieChart, Target, AlertCircle, 
  Trophy, User, Zap, Mail, Smartphone, Clock, Settings, Plus, 
  Type, Image as ImageIcon, Video, Monitor, ChevronLeft, Move, Trash2,
  FileText, Search, MoreVertical, Phone, Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

const ServiceExplainer: React.FC<{
    icon: React.ElementType,
    title: string,
    data: any,
    cta: string,
    color: string,
    children?: React.ReactNode
}> = ({ icon: Icon, title, data, cta, color, children }) => {
    const navigate = useNavigate();
    
    // Dynamic color classes based on prop
    const bgMap: Record<string, string> = {
        'brand': 'bg-brand-500',
        'cyan': 'bg-cyan-500',
        'purple': 'bg-purple-500'
    };
    const textMap: Record<string, string> = {
        'brand': 'text-brand-400',
        'cyan': 'text-cyan-400',
        'purple': 'text-purple-400'
    };

    return (
        <section className="py-24 border-b border-white/5 last:border-0 relative">
             <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Explanation */}
                    <div>
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${bgMap[color]}/20`}>
                            <Icon size={32} className={textMap[color]} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">{title}</h2>
                        
                        <div className="space-y-6 mb-10">
                            {/* What */}
                            <div className="flex gap-4">
                                <div className="mt-1"><Activity size={20} className="text-slate-500" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WHAT IS IT?</div>
                                    <p className="text-slate-200 text-lg font-light">{data.what}</p>
                                </div>
                            </div>
                            
                            {/* Who */}
                             <div className="flex gap-4">
                                <div className="mt-1"><User size={20} className="text-slate-500" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WHO IS IT FOR?</div>
                                    <p className="text-slate-200 text-lg font-light">{data.who}</p>
                                </div>
                            </div>

                            {/* Problem */}
                             <div className="flex gap-4">
                                <div className="mt-1"><AlertCircle size={20} className="text-red-400/70" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">THE PROBLEM</div>
                                    <p className="text-slate-200 text-lg font-light">{data.problem}</p>
                                </div>
                            </div>

                            {/* Result */}
                             <div className="flex gap-4">
                                <div className="mt-1"><Trophy size={20} className={textMap[color]} /></div>
                                <div>
                                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${textMap[color]}`}>THE RESULT</div>
                                    <p className="text-white text-xl font-semibold">{data.result}</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => navigate('/contact')} 
                            className={`px-8 py-4 ${bgMap[color]} hover:opacity-90 text-white font-bold rounded-lg shadow-lg font-display tracking-wide uppercase transition-all hover:scale-105 flex items-center gap-2`}
                        >
                            {cta} <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Right Column: Visual Prompt */}
                    <div className="relative group perspective-1000">
                        {children}
                    </div>

                </div>
             </div>
        </section>
    )
};

export const Services: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].services_page;

  const serviceSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation and CRM Implementation",
    "provider": {
        "@type": "Organization",
        "name": "Cerrana AI"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cerrana Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Smart Funnels & Websites"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "CRM & Automation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Booking Agents"
                }
            }
        ]
    }
  });

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 text-slate-200">
      <SEO 
        title="Our Services | Cerrana AI - CRM, Funnels & AI Agents" 
        description="Explore our specialized services: AI Sales Agents, CRM Implementation, and High-Converting Funnels. We build the engine that drives your revenue."
        schema={serviceSchema}
      />

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

      {/* Service 1: Web (Funnel Builder Visual) */}
      <ServiceExplainer 
        icon={Globe} 
        title={t.web.title} 
        data={t.web.explanation} 
        cta={t.web.cta} 
        color="brand"
      >
        <div className="bg-[#18181b] rounded-xl border border-white/10 shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col group font-sans select-none hover:border-brand-500/30 transition-all duration-500 transform hover:scale-[1.02]">
            
            {/* 1. Top Builder Bar */}
            <div className="h-14 bg-[#27272a] border-b border-black/20 flex items-center justify-between px-4 z-20 shrink-0">
               {/* Left: Back & Breadcrumbs */}
               <div className="flex items-center gap-4">
                  <div className="text-slate-400 hover:text-white cursor-pointer p-1 hover:bg-white/5 rounded"><ChevronLeft size={20} /></div>
                  <div className="flex flex-col">
                     <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Funnel Step</span>
                     <span className="text-sm text-white font-medium flex items-center gap-2">
                         Sales Page V1 <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">PUBLISHED</span>
                     </span>
                  </div>
               </div>
               {/* Center: Device Toggles */}
               <div className="hidden md:flex bg-[#18181b] rounded-lg p-1 gap-1 border border-white/5">
                  <div className="p-1.5 rounded bg-[#3f3f46] text-white shadow-sm"><Monitor size={16} /></div>
                  <div className="p-1.5 rounded text-slate-500 hover:text-white transition-colors"><Smartphone size={16} /></div>
               </div>
               {/* Right: Actions */}
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 flex items-center justify-center text-xs font-bold">1</div>
                  <div className="h-6 w-px bg-white/10 mx-1"></div>
                  <div className="px-3 py-1.5 rounded text-slate-400 hover:text-white text-xs font-medium cursor-pointer border border-transparent hover:border-white/10 transition-all">Preview</div>
                  <div className="px-5 py-2 rounded bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-brand-900/20 cursor-pointer animate-pulse transition-all">Save</div>
               </div>
            </div>

            <div className="flex flex-grow relative overflow-hidden">
                {/* 2. Left Sidebar (Elements) */}
                <div className="w-16 md:w-64 bg-[#202023] border-r border-black/20 flex flex-col z-10 transition-all duration-300 absolute left-0 top-0 bottom-0 shadow-2xl">
                    <div className="p-3 border-b border-white/5 font-bold text-[10px] text-slate-400 uppercase tracking-wider hidden md:block">Elements</div>
                    <div className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-auto custom-scrollbar">
                        {/* Draggable Items */}
                        {[
                            { name: 'Section', icon: LayoutTemplate, color: 'text-green-400' },
                            { name: 'Row', icon: Activity, color: 'text-blue-400' },
                            { name: 'Headline', icon: Type, color: 'text-orange-400' },
                            { name: 'Paragraph', icon: FileText, color: 'text-slate-300' },
                            { name: 'Button', icon: MousePointer2, color: 'text-brand-400' },
                            { name: 'Form', icon: Check, color: 'text-purple-400' },
                            { name: 'Video', icon: Video, color: 'text-red-400' },
                            { name: 'Image', icon: ImageIcon, color: 'text-cyan-400' }
                        ].map((item, i) => (
                           <div key={i} className="aspect-square md:aspect-auto md:h-20 bg-[#2a2a2d] rounded border border-white/5 hover:border-brand-500 hover:bg-brand-500/10 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center gap-2 group/item transition-all hover:-translate-y-1 hover:shadow-lg">
                              <div className={`${item.color} opacity-80 group-hover/item:opacity-100`}><item.icon size={20} /></div>
                              <span className="text-[9px] text-slate-500 group-hover/item:text-brand-300 hidden md:block">{item.name}</span>
                           </div>
                        ))}
                    </div>
                </div>

                {/* 3. Main Canvas */}
                <div className="flex-grow bg-[#141415] relative overflow-y-auto ml-16 md:ml-64 p-4 md:p-8 perspective-[2000px]">
                    {/* Dot Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

                    {/* Simulated Funnel Structure (The "DOM") */}
                    <div className="w-full max-w-2xl mx-auto bg-white transition-transform duration-500 origin-top shadow-2xl border-t-4 border-brand-500 relative ring-1 ring-black/50">
                         
                         {/* Section (Green Hover) */}
                         <div className="group/section relative border-2 border-transparent hover:border-green-500/50 transition-colors p-8 md:p-12 bg-[#0f0a1e] text-center min-h-[350px] flex flex-col items-center justify-center gap-6">
                              
                              {/* Section Controls */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-green-500 text-white text-[9px] font-bold px-3 py-1 rounded-t opacity-0 group-hover/section:opacity-100 transition-opacity flex items-center gap-2">
                                  SECTION
                              </div>
                              <div className="absolute top-0 right-0 -translate-y-full flex gap-0.5 opacity-0 group-hover/section:opacity-100 transition-opacity shadow-lg">
                                  <div className="bg-green-600 p-1.5 text-white hover:bg-green-500 cursor-pointer"><Settings size={12}/></div>
                                  <div className="bg-green-600 p-1.5 text-white hover:bg-green-500 cursor-pointer"><Move size={12}/></div>
                                  <div className="bg-green-600 p-1.5 text-white hover:bg-green-500 cursor-pointer"><Trash2 size={12}/></div>
                              </div>

                              {/* Row (Blue Hover) */}
                              <div className="group/row relative w-full border-2 border-transparent hover:border-blue-500/50 transition-colors p-4">
                                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-blue-500 text-white text-[9px] font-bold px-3 py-1 rounded-t opacity-0 group-hover/row:opacity-100 transition-opacity">ROW (1 Column)</div>
                                   
                                   {/* Element: Headline (Orange Hover) */}
                                   <div className="group/el relative border-2 border-transparent hover:border-orange-500/50 p-2 mb-4 cursor-text">
                                        <div className="absolute top-0 left-0 -translate-y-full bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 opacity-0 group-hover/el:opacity-100 pointer-events-none">HEADLINE</div>
                                        <div className="absolute top-0 right-0 -translate-y-full bg-orange-500 p-1 text-white opacity-0 group-hover/el:opacity-100 cursor-pointer"><Settings size={10}/></div>
                                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                                            Turn Clicks Into <br/><span className="text-brand-500">Customers</span>
                                        </h1>
                                   </div>
                                   
                                   {/* Element: Subhead */}
                                   <div className="group/el relative border-2 border-transparent hover:border-orange-500/50 p-2 mb-8 max-w-lg mx-auto">
                                        <p className="text-slate-400 text-lg">Stop losing leads to bad design. Build high-converting funnels in minutes.</p>
                                   </div>

                                   {/* Element: Button */}
                                   <div className="group/el relative border-2 border-transparent hover:border-orange-500/50 p-2 inline-block">
                                        <button className="px-8 py-4 bg-brand-600 text-white font-bold rounded shadow-lg shadow-brand-600/20 uppercase tracking-widest text-sm hover:scale-105 transition-transform">Get Started Now</button>
                                        <div className="absolute top-0 left-0 -translate-y-full bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 opacity-0 group-hover/el:opacity-100 pointer-events-none">BUTTON</div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* "Add Section" Floating Buttons */}
                    <div className="w-full max-w-2xl mx-auto mt-4 border-2 border-dashed border-slate-700 rounded-lg h-24 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors group/add">
                        <span className="px-4 py-2 bg-slate-800 rounded-full border border-slate-600 text-slate-400 text-xs font-bold uppercase tracking-wider group-hover/add:scale-110 transition-transform flex items-center gap-2 group-hover/add:text-white group-hover/add:border-brand-500 group-hover/add:bg-brand-500/10">
                            <Plus size={14} /> Add New Section
                        </span>
                    </div>
                </div>

                {/* 4. Right Sidebar (Properties) - Visible on selection simulation */}
                <div className="w-72 bg-[#202023] border-l border-black/20 absolute right-0 top-0 bottom-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-2xl z-20 flex flex-col">
                    <div className="h-14 border-b border-white/5 flex items-center px-4 justify-between font-bold text-xs text-white uppercase tracking-wider bg-[#27272a] shrink-0">
                        <span>Button Settings</span>
                        <X size={14} className="text-slate-500 cursor-pointer hover:text-white" />
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex border-b border-white/5 bg-[#202023]">
                        <div className="flex-1 py-3 text-center text-[10px] font-bold text-white border-b-2 border-brand-500 bg-white/5">GENERAL</div>
                        <div className="flex-1 py-3 text-center text-[10px] font-bold text-slate-500 hover:text-slate-300 cursor-pointer">ADVANCED</div>
                    </div>

                    <div className="p-5 space-y-6 overflow-y-auto custom-scrollbar">
                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 font-bold uppercase">Text</label>
                            <div className="bg-[#18181b] border border-white/10 rounded p-2.5 text-xs text-white focus-within:border-brand-500 transition-colors">Get Started Now</div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 font-bold uppercase">Subtext</label>
                            <div className="bg-[#18181b] border border-white/10 rounded p-2.5 text-xs text-white focus-within:border-brand-500 transition-colors">Limited Time Offer</div>
                        </div>
                        
                        <div className="h-px bg-white/5 my-4"></div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-slate-500 font-bold uppercase">Background Color</label>
                            <div className="grid grid-cols-5 gap-2">
                                <div className="aspect-square rounded bg-brand-600 border-2 border-white cursor-pointer shadow-lg shadow-brand-500/50"></div>
                                <div className="aspect-square rounded bg-red-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"></div>
                                <div className="aspect-square rounded bg-blue-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"></div>
                                <div className="aspect-square rounded bg-green-500 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"></div>
                                <div className="aspect-square rounded border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/5"><Plus size={10} className="text-slate-400"/></div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <label className="text-[10px] text-slate-500 font-bold uppercase">Margin Top</label>
                                <span className="text-[10px] text-white">20px</span>
                            </div>
                            <div className="h-1 bg-slate-700 rounded relative group/slider cursor-pointer">
                                <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-500 rounded"></div>
                                <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer group-hover/slider:scale-125 transition-transform"></div>
                            </div>
                        </div>
                         <div className="space-y-3">
                            <div className="flex justify-between">
                                <label className="text-[10px] text-slate-500 font-bold uppercase">Padding</label>
                                <span className="text-[10px] text-white">15px</span>
                            </div>
                            <div className="h-1 bg-slate-700 rounded relative group/slider cursor-pointer">
                                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-brand-500 rounded"></div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer group-hover/slider:scale-125 transition-transform"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </ServiceExplainer>

      {/* Service 2: CRM (Workflow Builder Visual) */}
      <ServiceExplainer 
        icon={Activity} 
        title={t.crm.title} 
        data={t.crm.explanation} 
        cta={t.crm.cta} 
        color="cyan"
      >
         <div className="bg-[#18181b] rounded-xl border border-white/10 shadow-2xl relative overflow-hidden min-h-[500px] flex group hover:border-cyan-500/30 transition-colors">
            {/* Sidebar (Workflow Actions) */}
            <div className="w-16 bg-[#202023] border-r border-black/20 flex flex-col items-center py-4 gap-4 z-20">
                <div className="p-2 rounded bg-cyan-500/10 text-cyan-400 mb-4"><Zap size={20} /></div>
                <div className="w-8 h-8 rounded-full bg-[#2a2a2d] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-grab"><Mail size={14} /></div>
                <div className="w-8 h-8 rounded-full bg-[#2a2a2d] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-grab"><Smartphone size={14} /></div>
                <div className="w-8 h-8 rounded-full bg-[#2a2a2d] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 cursor-grab"><Clock size={14} /></div>
                <div className="mt-auto w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-900/50 cursor-pointer hover:scale-110 transition-transform"><Check size={14} /></div>
            </div>

            {/* Workflow Canvas */}
            <div className="flex-grow bg-[#141415] relative overflow-hidden flex flex-col items-center justify-center p-8">
                {/* Infinite Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>

                <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                    
                    {/* Trigger Node */}
                    <div className="w-64 bg-[#202023] border border-cyan-500/60 rounded-lg p-4 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative mb-8 z-20 group/node hover:scale-105 transition-transform cursor-pointer">
                       <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#18181b] border border-cyan-500 rounded-full flex items-center justify-center z-20 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                          <Zap size={12} className="text-cyan-400 fill-cyan-400" />
                       </div>
                       <div className="flex justify-between items-start mb-1">
                          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Trigger</div>
                          <div className="bg-cyan-500/10 px-1.5 py-0.5 rounded text-[9px] text-cyan-300 border border-cyan-500/20">Active</div>
                       </div>
                       <div className="text-sm text-white font-medium">Form Submitted: Booking</div>
                       
                       {/* Connection Line */}
                       <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-cyan-500/50 to-white/10"></div>
                       <div className="absolute left-1/2 -bottom-4 bg-[#141415] border border-white/20 p-1 rounded-full text-slate-400 z-10 hover:text-white hover:border-white cursor-pointer transition-colors"><Plus size={10} /></div>
                    </div>

                    {/* Action 1 */}
                    <div className="w-64 bg-[#202023] border border-white/10 rounded-lg p-4 relative mb-8 z-10 group/node hover:border-cyan-500/20 transition-all hover:shadow-lg cursor-pointer">
                       <div className="text-[10px] text-slate-500 font-bold uppercase mb-1 tracking-wider">Action</div>
                       <div className="text-sm text-white flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
                              <Smartphone size={16} className="text-green-400" />
                          </div>
                          <div>
                              <div>Send SMS</div>
                              <div className="text-[10px] text-slate-500">Template: Confirm</div>
                          </div>
                       </div>
                       <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-white/10"></div>
                       <div className="absolute left-1/2 -bottom-4 bg-[#141415] border border-white/20 p-1 rounded-full text-slate-400 z-10 hover:text-white hover:border-white cursor-pointer transition-colors"><Plus size={10} /></div>
                    </div>

                    {/* Logic Branch (Wait) */}
                    <div className="w-64 bg-[#202023] border border-white/10 rounded-lg p-4 relative mb-8 z-10 group/node hover:border-orange-500/30 transition-all cursor-pointer">
                       <div className="text-[10px] text-slate-500 font-bold uppercase mb-1 tracking-wider">Condition</div>
                       <div className="text-sm text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                              <Clock size={16} className="text-orange-400" />
                            </div>
                           <div>
                                <div>Wait 15 Minutes</div>
                                <div className="text-[10px] text-slate-500">Time Window: M-F</div>
                           </div>
                       </div>
                        
                       {/* Branch Lines */}
                       <div className="absolute left-1/2 -bottom-8 w-0.5 h-4 bg-white/10"></div>
                       <div className="absolute left-1/2 -bottom-4 w-[140px] h-0.5 bg-white/10 -translate-x-1/2"></div>
                       <div className="absolute left-[calc(50%-70px)] -bottom-8 w-0.5 h-4 bg-white/10"></div>
                       <div className="absolute left-[calc(50%+70px)] -bottom-8 w-0.5 h-4 bg-white/10"></div>
                    </div>

                    {/* Branch Results */}
                    <div className="w-[340px] flex justify-between">
                        <div className="w-36 bg-[#202023] border border-white/5 rounded-lg p-3 opacity-50 flex flex-col items-center text-center">
                           <div className="text-[9px] text-slate-500 uppercase mb-1">No Reply</div>
                           <div className="text-xs text-slate-600">End Workflow</div>
                        </div>
                         <div className="w-36 bg-brand-900/20 border border-brand-500/50 rounded-lg p-3 shadow-[0_0_25px_rgba(139,92,246,0.15)] relative animate-pulse">
                           <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                           <div className="text-[9px] text-brand-400 uppercase mb-1 font-bold">Reply Detected</div>
                           <div className="text-xs text-white font-medium flex items-center gap-2">
                               <Bot size={12} className="text-brand-400" /> AI Agent Active
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar: Execution Log (Slide out) */}
            <div className="w-64 bg-[#202023] border-l border-black/20 absolute right-0 top-0 bottom-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-2xl z-20 flex flex-col">
                 <div className="h-12 border-b border-white/5 flex items-center px-4 font-bold text-xs text-slate-300 uppercase tracking-wider bg-[#27272a] justify-between">
                    <span>Execution Log</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="p-0 overflow-y-auto flex-grow">
                    {[
                        { time: 'Now', event: 'Reply Received', type: 'success', detail: '+1 (555) 012-3456' },
                        { time: '2m ago', event: 'SMS Delivered', type: 'info', detail: 'Campaign: Welcome' },
                        { time: '15m ago', event: 'Wait Step Started', type: 'info', detail: 'ID: 839210' },
                        { time: '16m ago', event: 'Form Submitted', type: 'warning', detail: 'Source: Funnel A' },
                        { time: '1h ago', event: 'Email Opened', type: 'info', detail: 'Lead: Sarah J.' },
                    ].map((log, i) => (
                        <div key={i} className="p-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default">
                            <div className="flex justify-between mb-1">
                                <span className="text-[10px] font-bold ${log.type === 'success' ? 'text-green-400' : log.type === 'warning' ? 'text-brand-400' : 'text-blue-400'}">{log.event}</span>
                                <span className="text-[9px] text-slate-600">{log.time}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">{log.detail}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
      </ServiceExplainer>

      {/* Service 3: AI (Conversations Visual) */}
      <ServiceExplainer 
        icon={Bot} 
        title={t.ai.title} 
        data={t.ai.explanation} 
        cta={t.ai.cta} 
        color="purple"
      >
         <div className="bg-[#18181b] rounded-xl border border-white/10 shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col group hover:border-purple-500/30 transition-colors">
            
            <div className="flex h-full relative">
               {/* Left Sidebar: Contacts */}
               <div className="w-16 md:w-64 border-r border-black/20 bg-[#202023] flex flex-col z-10">
                  <div className="p-4 border-b border-white/5 hidden md:block">
                      <div className="bg-[#18181b] border border-white/10 rounded-lg p-2 flex items-center gap-2 text-slate-500 text-xs">
                          <Search size={14} /> <span className="opacity-50">Search contacts...</span>
                      </div>
                  </div>
                  
                  <div className="flex-grow overflow-y-auto p-2 space-y-1">
                      {[
                          { name: 'John Doe', msg: 'Sure, that works!', time: '2m', active: true, unread: 0 },
                          { name: 'Sarah Smith', msg: 'How much is it?', time: '1h', active: false, unread: 2 },
                          { name: 'Mike Johnson', msg: 'Thanks!', time: '3h', active: false, unread: 0 },
                          { name: 'Emily Davis', msg: 'Call me later.', time: '1d', active: false, unread: 0 },
                      ].map((c, i) => (
                         <div key={i} className={`p-3 rounded-lg flex gap-3 items-center cursor-pointer transition-all ${c.active ? 'bg-brand-500/10 border border-brand-500/20 shadow-md' : 'hover:bg-white/5 border border-transparent'}`}>
                            <div className="relative">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${c.active ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' : 'bg-slate-700 text-slate-300'}`}>
                                    {c.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                {i < 2 && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#202023] rounded-full"></div>}
                            </div>
                            <div className="flex-grow hidden md:block min-w-0">
                               <div className="flex justify-between items-center mb-0.5">
                                   <span className={`text-sm font-medium truncate ${c.active ? 'text-white' : 'text-slate-300'}`}>{c.name}</span>
                                   <span className="text-[10px] text-slate-500">{c.time}</span>
                               </div>
                               <div className={`text-xs truncate ${c.unread > 0 ? 'text-white font-semibold' : 'text-slate-500'}`}>{c.msg}</div>
                            </div>
                            {c.unread > 0 && <div className="hidden md:flex w-4 h-4 rounded-full bg-brand-500 items-center justify-center text-[9px] text-white font-bold">{c.unread}</div>}
                         </div>
                      ))}
                  </div>
               </div>

               {/* Main Chat Area */}
               <div className="flex-grow flex flex-col relative bg-[#141415]">
                  {/* Chat Header */}
                  <div className="h-16 border-b border-black/20 flex items-center justify-between px-6 bg-[#202023]">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 text-dark-950 font-bold flex items-center justify-center shadow-lg">JD</div>
                        <div>
                           <div className="text-sm font-bold text-white flex items-center gap-2">
                               John Doe
                               <span className="bg-brand-500/20 text-brand-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-brand-500/30">LEAD</span>
                           </div>
                           <div className="text-[10px] text-slate-400 flex items-center gap-1">
                               <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online via SMS
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-slate-400">
                         <Phone size={18} className="hover:text-white cursor-pointer" />
                         <Video size={18} className="hover:text-white cursor-pointer" />
                         <MoreVertical size={18} className="hover:text-white cursor-pointer" />
                     </div>
                  </div>

                  {/* Message Stream */}
                  <div className="flex-grow p-6 space-y-6 overflow-hidden relative">
                      {/* Messages */}
                      <div className="flex justify-end relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                         <div className="bg-brand-600 text-white p-3 md:p-4 rounded-2xl rounded-tr-none text-xs md:text-sm max-w-[85%] shadow-md">
                            Hey, I saw your ad about the automation systems. How much is it?
                         </div>
                      </div>

                      <div className="flex justify-start relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                          <div className="flex gap-2 items-end max-w-[85%]">
                              <div className="w-8 h-8 rounded-full bg-[#202023] border border-white/10 flex items-center justify-center shrink-0">
                                  <Bot size={14} className="text-purple-400" />
                              </div>
                             <div className="bg-[#202023] text-slate-200 p-3 md:p-4 rounded-2xl rounded-tl-none text-xs md:text-sm border border-white/10 shadow-sm relative group/msg">
                                <div className="absolute -top-3 left-0 bg-purple-500/20 text-purple-300 text-[9px] px-2 py-0.5 rounded-full border border-purple-500/30 flex items-center gap-1">
                                    <Zap size={8} /> AI Auto-Response
                                </div>
                                Hi John! It depends on your needs. Are you looking for just the CRM or the full AI setup?
                             </div>
                          </div>
                      </div>

                       <div className="flex justify-end relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
                         <div className="bg-brand-600 text-white p-3 md:p-4 rounded-2xl rounded-tr-none text-xs md:text-sm max-w-[85%] shadow-md">
                            Probably the full setup. We get about 50 leads a day.
                         </div>
                      </div>
                       
                       {/* Live Typing */}
                      <div className="flex justify-start relative z-10 animate-in fade-in duration-300 delay-500">
                          <div className="flex gap-2 items-end">
                              <div className="w-8 h-8 rounded-full bg-[#202023] border border-white/10 flex items-center justify-center shrink-0">
                                  <Bot size={14} className="text-purple-400" />
                              </div>
                             <div className="bg-[#202023] border border-brand-500/30 p-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center shadow-lg">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-[bounce_1s_infinite]"></div>
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
                             </div>
                          </div>
                      </div>
                  </div>

                  {/* Input Area */}
                  <div className="h-20 border-t border-black/20 p-4 bg-[#202023] relative z-20">
                     <div className="h-full bg-[#18181b] rounded-lg border border-white/10 flex items-center px-4 justify-between hover:border-brand-500/30 transition-colors group/input">
                        <span className="text-slate-500 text-sm font-light italic flex items-center gap-2 group-hover/input:text-purple-400 transition-colors">
                            <Zap size={14} className="text-purple-500" /> AI is drafting response...
                        </span>
                        <div className="flex items-center gap-3">
                            <div className="p-2 hover:bg-white/5 rounded-full cursor-pointer text-slate-500 hover:text-white"><FileText size={16} /></div>
                            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform cursor-pointer">
                               <ArrowRight size={16} className="text-white" />
                            </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Sidebar (Contact Info) - Slide out */}
               <div className="w-72 bg-[#202023] border-l border-black/20 absolute right-0 top-0 bottom-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-2xl z-30 flex flex-col">
                   <div className="p-6 text-center border-b border-white/5 bg-[#27272a]">
                       <div className="w-20 h-20 rounded-full bg-slate-700 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white shadow-lg">JD</div>
                       <h3 className="text-white font-bold text-lg">John Doe</h3>
                       <p className="text-brand-400 text-sm">john.doe@example.com</p>
                       <div className="flex justify-center gap-2 mt-4">
                           <button className="p-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30"><Phone size={16}/></button>
                           <button className="p-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"><Mail size={16}/></button>
                           <button className="p-2 rounded-full bg-orange-500/20 text-orange-400 hover:bg-orange-500/30"><Calendar size={16}/></button>
                       </div>
                   </div>
                   <div className="p-5 space-y-6 overflow-y-auto">
                       <div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Tags</div>
                           <div className="flex flex-wrap gap-2">
                               <span className="bg-slate-700 text-white text-[10px] px-2 py-1 rounded">Lead</span>
                               <span className="bg-brand-600 text-white text-[10px] px-2 py-1 rounded">High Value</span>
                               <span className="bg-slate-700 text-white text-[10px] px-2 py-1 rounded">Web Chat</span>
                           </div>
                       </div>
                       <div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Active Campaigns</div>
                           <div className="bg-[#18181b] border border-white/5 rounded p-3 flex items-center gap-3">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               <div>
                                   <div className="text-xs text-white font-medium">New Lead Nurture</div>
                                   <div className="text-[10px] text-slate-500">Step 3 of 5</div>
                               </div>
                           </div>
                       </div>
                       <div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Opportunities</div>
                           <div className="bg-[#18181b] border border-brand-500/20 rounded p-3 border-l-2 border-l-brand-500">
                               <div className="text-xs text-white font-medium">Standard Setup</div>
                               <div className="text-lg font-bold text-white">$1,500</div>
                               <div className="text-[10px] text-brand-400 mt-1">Status: Open</div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </ServiceExplainer>

    </div>
  );
};

// Simple X icon component since it wasn't imported from lucide-react in the original set
const X = ({ size, className }: { size: number, className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 6 6 18"/><path d="m6 6 18 18"/>
    </svg>
);