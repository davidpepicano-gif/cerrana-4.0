import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Shield, Zap, Cpu, Check, X, ArrowRight, Heart, Brain, Users, Globe, Building2, Wrench, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-dark-950 min-h-screen text-slate-200">
      
      {/* 1. HERO: WHO WE ARE */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <h1 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-500"></span> {t.whoWeAre.title}
            </h1>
            <p className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                {t.whoWeAre.desc1}
            </p>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed max-w-3xl">
                <p>{t.whoWeAre.desc2}</p>
                <p className="text-white font-medium border-l-4 border-brand-500 pl-4">{t.whoWeAre.desc3}</p>
            </div>
        </div>
      </section>

      {/* 2. MISSION: REMOVING GUESSWORK */}
      <section className="py-24 bg-dark-900 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-6">
                          <Target size={14} /> {t.mission.title}
                      </div>
                      <h2 className="text-4xl font-display font-bold text-white mb-6">{t.mission.subtitle}</h2>
                      <p className="text-slate-400 mb-8">{t.mission.desc}</p>
                      
                      <ul className="space-y-4">
                          {t.mission.points.map((point: string, i: number) => (
                              <li key={i} className="flex items-center gap-3 text-slate-300">
                                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                                      <Check size={14} />
                                  </div>
                                  {point}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
                      <div className="bg-dark-950 border border-white/10 rounded-2xl p-8 relative z-10 shadow-2xl">
                          <p className="text-xl md:text-2xl font-display font-bold text-white leading-relaxed text-center">
                              "{t.mission.closing}"
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. PROBLEM: THE REALITY */}
      <section className="py-24 bg-dark-950 relative">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-display font-bold text-white mb-4">{t.problem.title}</h2>
                  <p className="text-slate-400 text-lg">{t.problem.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                      {t.problem.points.map((point: string, i: number) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-red-950/10 border border-red-900/20 rounded-xl hover:bg-red-950/20 transition-colors">
                              <X size={20} className="text-red-500 shrink-0" />
                              <span className="text-slate-300">{point}</span>
                          </div>
                      ))}
                  </div>
                  <div className="flex flex-col justify-center bg-dark-900 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-900/20 rounded-full blur-[50px]"></div>
                      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">CERRANA</h3>
                      <p className="text-lg text-slate-400 leading-relaxed relative z-10">
                          {t.problem.closing}
                      </p>
                      <div className="mt-8 relative z-10">
                          <button onClick={() => navigate('/contact')} className="text-brand-400 font-bold flex items-center gap-2 hover:text-brand-300 transition-colors">
                              See the solution <ArrowRight size={16} />
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. DIFFERENCE: WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-dark-900 border-y border-white/5">
          <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">{t.difference.title}</h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {t.difference.points.map((item: any, i: number) => {
                      const icons = [Brain, Zap, Target, Globe, Building2];
                      const Icon = icons[i] || Zap;
                      
                      return (
                        <div key={i} className={`bg-dark-950 p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all group ${i === 3 ? 'md:col-span-2' : ''}`}>
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
                                <Icon size={24} className="text-slate-400 group-hover:text-brand-400 transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="py-24 bg-dark-950">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-12">{t.industries.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {t.industries.list.map((ind: string, i: number) => (
                      <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium hover:border-brand-500/50 hover:bg-brand-500/10 hover:text-brand-300 transition-all cursor-default">
                          {ind}
                      </span>
                  ))}
              </div>
              
              <p className="text-xl text-slate-400 font-light border-t border-white/5 pt-12">
                  {t.industries.closing}
              </p>
          </div>
      </section>

      {/* 6. TEAM PHILOSOPHY */}
      <section className="py-24 bg-dark-900 border-y border-white/5 relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-900/10 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-display font-bold text-white mb-6">{t.team.title}</h2>
                      <p className="text-slate-400 mb-8 text-lg">{t.team.desc}</p>
                      <div className="space-y-4 mb-8">
                          {t.team.values.map((val: string, i: number) => (
                              <div key={i} className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                                  <span className="text-white font-medium">{val}</span>
                              </div>
                          ))}
                      </div>
                      <p className="text-brand-400 font-display font-bold tracking-wide uppercase">{t.team.closing}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 opacity-50 hover:opacity-100 transition-opacity duration-700">
                      <div className="bg-dark-950 p-6 rounded-2xl border border-white/5 h-40 flex items-center justify-center transform translate-y-8">
                          <Wrench size={40} className="text-slate-600" />
                      </div>
                      <div className="bg-dark-950 p-6 rounded-2xl border border-white/5 h-40 flex items-center justify-center">
                          <Brain size={40} className="text-slate-600" />
                      </div>
                      <div className="bg-dark-950 p-6 rounded-2xl border border-white/5 h-40 flex items-center justify-center transform translate-y-8">
                          <Briefcase size={40} className="text-slate-600" />
                      </div>
                      <div className="bg-dark-950 p-6 rounded-2xl border border-white/5 h-40 flex items-center justify-center">
                          <Users size={40} className="text-slate-600" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. IMPACT */}
      <section className="py-24 bg-dark-950">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
              <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">{t.impact.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  {t.impact.testimonials.map((item: any, i: number) => (
                      <div key={i} className="bg-dark-900 p-8 rounded-2xl border border-white/5 relative">
                          <div className="absolute top-8 left-8 text-6xl text-white/5 font-serif leading-none">“</div>
                          <p className="text-slate-300 text-lg relative z-10 mb-6 italic">{item.quote}</p>
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-px bg-brand-500"></div>
                              <span className="text-white font-bold text-sm uppercase tracking-wider">{item.author}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 8. COMMITMENT */}
      <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
              <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-400">
                  <Heart size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{t.commitment.title}</h2>
              <p className="text-slate-400 mb-12">{t.commitment.subtitle}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-16">
                  {t.commitment.points.map((point: string, i: number) => (
                      <div key={i} className="bg-dark-950 border border-white/5 p-4 rounded-xl flex items-center justify-center text-slate-300">
                          {point}
                      </div>
                  ))}
              </div>
              
              <p className="text-2xl font-display font-bold text-white max-w-2xl mx-auto leading-normal">
                  {t.commitment.closing}
              </p>
          </div>
      </section>

      {/* 9. CTA */}
      <section className="py-24 bg-dark-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-900/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10">{t.cta.title}</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button onClick={() => navigate('/contact')} className="px-10 py-5 bg-white text-dark-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      👉 {t.cta.btn1}
                  </button>
                  <button onClick={() => navigate('/')} className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors">
                      {t.cta.btn2}
                  </button>
              </div>
              <p className="text-sm text-yellow-500 font-mono animate-pulse">
                  {t.cta.urgency}
              </p>
          </div>
      </section>

    </div>
  );
};