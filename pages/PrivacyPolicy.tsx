import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-dark-950 min-h-screen pb-24 pt-24 md:pt-32 text-slate-200">
      <SEO 
        title={translations[language].seo.privacy.title} 
        description={translations[language].seo.privacy.description}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-wide">
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </h1>
        
        <div className="bg-dark-900 rounded-2xl p-8 border border-white/5 shadow-xl leading-relaxed text-slate-400 space-y-8">
            
            {/* Meta Info */}
            <div className="border-b border-white/10 pb-6 mb-6">
                <p className="font-semibold text-white">Cerrana AI LLC</p>
                <p>{language === 'es' ? 'Sitio Web:' : 'Website:'} <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
                <p>{language === 'es' ? 'Contacto:' : 'Contact:'} <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="mt-4 text-sm text-slate-500">
                  {language === 'es' ? 'Última actualización: 26 de junio de 2026' : 'Last Updated: June 26, 2026'}
                </p>
            </div>

            {language === 'es' ? (
              <>
                <p>
                  Cerrana AI LLC ("Cerrana", "nosotros", "nuestro" o "nos") proporciona asistentes de ventas con inteligencia artificial, herramientas de automatización, integraciones de CRM, servicios web y software relacionado ("Servicios"). Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos la información personal cuando utilizas nuestros Servicios o visitas Cerrana.com.
                </p>
                <p className="font-medium text-white">
                  Al utilizar nuestros Servicios, aceptas los términos de esta Política de Privacidad y nuestros Términos de Servicio.
                </p>

                {/* Section 1 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">1) Información que recopilamos</h2>
                    <p className="mb-4">Recopilamos las siguientes categorías de información:</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.1 Información proporcionada por el usuario</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Datos de contacto (nombre, correo electrónico, teléfono)</li>
                        <li>Credenciales de la cuenta que creas</li>
                        <li>Información comercial (nombre de la empresa, industria, usuarios)</li>
                        <li>Detalles de pago (procesados a través de proveedores de pago seguros)</li>
                        <li>Contenido cargado (archivos, indicaciones, scripts, entradas de IA, datos de CRM)</li>
                        <li>Comunicaciones directas (correo electrónico, chat, solicitudes de soporte)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.2 Información recopilada automáticamente</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Información del dispositivo y del navegador</li>
                        <li>Dirección IP y ubicación general</li>
                        <li>Registros de uso (páginas visitadas, funciones utilizadas, acciones tomadas)</li>
                        <li>Cookies y tecnologías de seguimiento similares (analíticas, seguridad, preferencias)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.3 Datos de clientes en integraciones</h3>
                    <p>
                        Si conectas servicios externos (por ejemplo, WhatsApp, SMS, plataformas de correo electrónico, Meta/Google, CRM), procesaremos los datos de esos sistemas únicamente para proporcionar las funciones configuradas.
                        <br/><span className="italic text-sm">Eres responsable de poseer el derecho legal de compartir dichos datos.</span>
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">2) Cómo utilizamos la información</h2>
                    <p className="mb-4">Utilizamos la información personal y los Datos de Clientes para:</p>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">2.1 Proveer y mejorar los servicios</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Operar y mantener el software de la plataforma</li>
                        <li>Crear resultados basados en IA (asistentes de chat/voz, flujos de trabajo, etc.)</li>
                        <li>Entregar integraciones nativas y sincronizaciones de CRM</li>
                        <li>Entrenar modelos de IA y mejorar la precisión del servicio (con las medidas de seguridad adecuadas)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">2.2 Seguridad y cumplimiento legal</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Detectar y prevenir fraudes, abusos o vulnerabilidades</li>
                        <li>Hacer cumplir nuestros Términos de Servicio</li>
                        <li>Solucionar errores de la plataforma</li>
                    </ul>

                    <div className="bg-brand-900/20 border border-brand-500/30 p-6 rounded-xl mt-8">
                        <h3 className="text-lg font-bold text-brand-300 mb-2">Nota sobre Inteligencia Artificial</h3>
                        <p className="mb-4">
                            Cerrana puede utilizar servicios de IA/LLM de terceros (por ejemplo, OpenAI, Google AI, Meta AI) para proporcionar funciones habilitadas de manera explícita:
                        </p>
                        <p>
                            Minimizamos y desasociamos datos de identificación personal antes de enviarlos a proveedores externos de modelos. No permitimos el uso de tus datos para el entrenamiento público de modelos.
                        </p>
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) Divulgación de datos</h2>
                    <p className="mb-4">No vendemos información personal. Compartimos información únicamente con:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Proveedores de servicios de alojamiento y nube</li>
                        <li>Operadores de SMS y telefonía</li>
                        <li>Plataformas oficiales de WhatsApp y mensajería de Meta</li>
                        <li>Procesadores de pago seguros</li>
                    </ul>
                </section>

                {/* Section 4 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Derechos de privacidad</h2>
                    <p className="mb-4">
                      Puedes solicitar el acceso, corrección, eliminación o exportación de tus datos personales en cualquier momento escribiendo a: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a>
                    </p>
                </section>
              </>
            ) : (
              <>
                <p>
                  Cerrana AI LLC (“Cerrana,” “we,” “our,” or “us”) provides AI-powered assistants, automation tools, CRM integrations, website services, and related software (“Services”). This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our Services or visit Cerrana.com.
                </p>
                <p className="font-medium text-white">
                  By using our Services, you agree to this Privacy Policy and our Terms of Service.
                </p>

                {/* Section 1 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">1) Information We Collect</h2>
                    <p className="mb-4">We collect the following categories of information:</p>
                    
                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.1 Information You Provide</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Contact information (name, email, phone)</li>
                        <li>Account credentials you create</li>
                        <li>Business information (company name, industry, users)</li>
                        <li>Payment details (processed via secure third-party providers)</li>
                        <li>Content you upload (files, prompts, scripts, AI inputs, CRM data)</li>
                        <li>Communications with us (email, chat, support requests)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.2 Automatically Collected Information</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Device and browser information</li>
                        <li>IP address and general location</li>
                        <li>Usage logs (pages visited, features used, actions taken)</li>
                        <li>Cookies and similar tracking technologies (analytics, security, preferences)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">1.3 Customer Data in Integrations</h3>
                    <p>
                        If you connect external services (e.g., WhatsApp, SMS/A2P, email platforms, Meta/Google, CRMs), we may process data from those systems solely to deliver the features you configure.
                        <br/><span className="italic text-sm">You are responsible for having the lawful right to share such data.</span>
                    </p>
                </section>

                {/* Section 2 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">2) How We Use Information</h2>
                    <p className="mb-4">We use personal and Customer Data to:</p>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">2.1 Provide & Improve Services</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Operate and maintain software</li>
                        <li>Create AI-based outputs (chat/voice assistants, automation responses, workflows)</li>
                        <li>Deliver integrations (CRM syncing, messaging, scheduling, automations)</li>
                        <li>Train models, enhance accuracy, and improve reliability (with appropriate safeguards)</li>
                    </ul>

                    <h3 className="text-lg font-bold text-white mt-6 mb-2">2.2 Security & Compliance</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Detect and prevent fraud or abuse</li>
                        <li>Enforce our Terms</li>
                        <li>Debug platform issues</li>
                    </ul>

                    <div className="bg-brand-900/20 border border-brand-500/30 p-6 rounded-xl mt-8">
                        <h3 className="text-lg font-bold text-brand-300 mb-2">AI Note (Important Disclosure)</h3>
                        <p className="mb-4">
                            Cerrana may use third-party AI/LLM services (e.g., OpenAI, Google AI, Meta AI) or our own proprietary AI models to deliver features you explicitly enable.
                        </p>
                        <p>
                            Where feasible, we minimize, mask, or de-identify Customer Data before sending it to model providers. We do not permit model providers to use Customer Data to train or improve their public models.
                        </p>
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) Sharing & Disclosure</h2>
                    <p className="mb-4">We do not sell personal information. We may share or disclose information only as described below:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Hosting and server providers</li>
                        <li>SMS and telephony carriers</li>
                        <li>WhatsApp and Meta platforms</li>
                        <li>Payment processors</li>
                    </ul>
                </section>

                {/* Section 4 */}
                <section>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Your Rights</h2>
                    <p className="mb-4">
                      You may request deletion, correction, or access to your personal data at any time: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a>
                    </p>
                </section>
              </>
            )}

        </div>
      </div>
    </div>
  );
};
