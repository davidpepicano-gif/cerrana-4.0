import React, { useEffect } from 'react';
import { Mail, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  // Inject the script for the booking widget logic
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api.orbitpenguintech.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactSchema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "description": language === 'es' ? "Agenda tu demo de 20 minutos con Cerrana AI para automatizar tus ventas B2C." : "Schedule your 20-minute demo with Cerrana AI to automate your B2C sales.",
      "mainEntity": {
          "@type": "Organization",
          "name": "Cerrana AI",
          "telephone": "+1 (919) 918-0505",
          "email": "support@cerrana.com",
          "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "availableLanguage": ["es", "en"],
              "areaServed": "United States"
          }
      }
    },
    {
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
          "name": language === 'es' ? "Contacto" : "Contact",
          "item": "https://cerrana.com/contact"
        }
      ]
    }
  ]);

  return (
    <div className="bg-dark-950 min-h-screen pb-24 md:pb-0 text-slate-200">
      <SEO 
        title={language === 'es' ? "Agenda tu Demo | Cerrana AI" : "Schedule Your Demo | Cerrana AI"} 
        description={language === 'es' ? "Agenda una demo de 20 minutos y te mostramos cómo Cerrana convierte en ventas los leads que ya pagas por atraer. En español e inglés." : "Schedule a 20-minute demo and we will show you how Cerrana converts the leads you already pay for into sales. In Spanish & English."}
        schema={contactSchema}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-start relative z-10">
          
          {/* Left Column: Copy */}
          <div className="sticky top-24">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-sm font-medium mb-6 border border-brand-500/20">
              {t.audit}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-wide">
              {t.title} <br/> <span className="text-brand-500">{t.titleHighlight}</span>.
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
              {t.desc}
            </p>
            
            <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-lg mb-10 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-brand-600"></div>
              <h3 className="font-display font-bold text-white mb-6 tracking-wide">{t.nextSteps.title}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-300 text-sm">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-400 border border-brand-500/20"><Calendar size={18} /></div>
                  <div className="mt-1">{t.nextSteps.step1}</div>
                </li>
                <li className="flex items-start gap-4 text-slate-300 text-sm">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-400 border border-brand-500/20"><Mail size={18} /></div>
                  <div className="mt-1">{t.nextSteps.step2}</div>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-dark-950"></div>
                <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-dark-950"></div>
                <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-dark-950"></div>
              </div>
              <p>{t.trusted}</p>
            </div>
          </div>

          {/* Right Column: Booking Calendar Iframe */}
          <div className="bg-dark-900 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 relative min-h-[700px] overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-600/5 to-transparent pointer-events-none rounded-3xl"></div>
             
             <iframe 
                src="https://api.orbitpenguintech.com/widget/booking/8VOP9c0P6N573TCKO1BB" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '750px' }} 
                scrolling="auto" 
                id="8VOP9c0P6N573TCKO1BB_1764537972996"
                className="relative z-10"
                title="Booking Calendar"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};