import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

export const TermsOfService: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-dark-950 min-h-screen pb-24 pt-24 md:pt-32 text-slate-200">
      <SEO 
        title={translations[language].seo.terms.title} 
        description={translations[language].seo.terms.description}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-wide">
          {language === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
        </h1>
        
        <div className="bg-dark-900 rounded-2xl p-8 border border-white/5 shadow-xl leading-relaxed text-slate-400 space-y-8">
            
            {/* Meta Info */}
            <div className="border-b border-white/10 pb-6 mb-6">
                <p className="font-semibold text-white">Cerrana AI LLC</p>
                <p>{language === 'es' ? 'Sitio Web:' : 'Website:'} <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
                <p className="mt-4 text-sm text-slate-500">
                  {language === 'es' ? 'Última actualización: 26 de junio de 2026' : 'Last Updated: June 26, 2026'}
                </p>
            </div>

            {language === 'es' ? (
              <>
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">1) Aceptación de los Términos</h2>
                    <p className="mb-4">
                      Al acceder o utilizar los sitios web, software, sistemas de IA, asistentes de chat/voz, automatizaciones, herramientas de CRM e integraciones de Cerrana AI LLC (colectivamente, los "Servicios"), aceptas cumplir con estos Términos de Servicio y nuestra Política de Privacidad.
                    </p>
                    <p className="mb-4">
                      Si utilizas los Servicios en nombre de una empresa, declaras que tienes la autoridad para vincular a dicha entidad a estos Términos.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">2) Modificaciones de los Términos</h2>
                    <p>
                      Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos mediante la actualización de la fecha de última modificación. El uso continuo después de dichas modificaciones constituirá tu aceptación de los nuevos términos.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) Cuentas de Usuario y Seguridad</h2>
                    <p>
                      Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta. Debes notificarnos de inmediato ante cualquier acceso no autorizado o violación de seguridad.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Limitación de Responsabilidad</h2>
                    <p>
                      En ningún caso Cerrana AI LLC será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados de o relacionados con tu uso o incapacidad de usar los Servicios.
                    </p>
                </section>
              </>
            ) : (
              <>
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">1) Acceptance of Terms</h2>
                    <p className="mb-4">
                      By accessing or using Cerrana AI LLC’s websites, software, AI systems, chat/voice assistants, automations, CRM tools, integrations, and related services (collectively, the “Services”), you agree to these Terms of Service (the “Terms”) and our Privacy Policy.
                    </p>
                    <p className="mb-4">
                      If you use the Services on behalf of a business, you represent that you are authorized to accept these Terms on their behalf.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">2) Changes to These Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify you by updating the Last Updated date. Continued use of the Services after changes take effect means you accept the updated Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) User Accounts and Security</h2>
                    <p>
                      You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or breach.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Limitation of Liability</h2>
                    <p>
                      In no event shall Cerrana AI LLC be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of or inability to use the Services.
                    </p>
                </section>
              </>
            )}

        </div>
      </div>
    </div>
  );
};
