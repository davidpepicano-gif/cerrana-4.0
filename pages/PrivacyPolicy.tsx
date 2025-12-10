import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pb-24 pt-24 md:pt-32 text-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-wide">
          Privacy Policy
        </h1>
        
        <div className="bg-dark-900 rounded-2xl p-8 border border-white/5 shadow-xl leading-relaxed text-slate-400 space-y-8">
            
            {/* Meta Info */}
            <div className="border-b border-white/10 pb-6 mb-6">
                <p className="font-semibold text-white">Cerrana AI LLC</p>
                <p>Website: <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
                <p>Contact: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="mt-4 text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>

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
                    <li>Maintain system integrity and safety</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">2.3 Customer Support</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Respond to inquiries</li>
                    <li>Provide onboarding, troubleshooting, training</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">2.4 Business Operations</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Billing and account management</li>
                    <li>Service analytics and product improvement</li>
                    <li>Marketing communications you opt into</li>
                </ul>

                <div className="bg-brand-900/20 border border-brand-500/30 p-6 rounded-xl mt-8">
                    <h3 className="text-lg font-bold text-brand-300 mb-2">AI Note (Important Disclosure)</h3>
                    <p className="mb-4">
                        Cerrana may use third-party AI/LLM services (e.g., OpenAI, Google AI, Meta AI) or our own proprietary AI models to deliver features you explicitly enable, such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Summarization</li>
                        <li>Classification</li>
                        <li>Natural language responses</li>
                        <li>AI voice/chat assistants</li>
                        <li>Workflow automation logic</li>
                    </ul>
                    <p>
                        Where feasible, we minimize, mask, or de-identify Customer Data before sending it to model providers.
                        We do not permit model providers to use Customer Data to train or improve their public models unless explicitly allowed by the customer.
                    </p>
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) Sharing & Disclosure</h2>
                <p className="mb-4">We do not sell personal information. We may share or disclose information only as described below:</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.1 Service Providers / Processors</h3>
                <p className="mb-2">Third parties that help us operate the Services, including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-2">
                    <li>Hosting/servers</li>
                    <li>SMS and telephony carriers</li>
                    <li>WhatsApp and messaging platforms</li>
                    <li>Email delivery services</li>
                    <li>Payment processors</li>
                    <li>Analytics and monitoring</li>
                    <li>Customer support tools</li>
                    <li>Cloud infrastructure</li>
                </ul>
                <p className="text-sm italic">These providers are contractually required to process information only according to our instructions.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.2 Integrations You Enable</h3>
                <p>If you configure connections to third-party systems (e.g., WhatsApp, Meta, SMS, CRMs, email platforms), Customer Data will flow to those services based on your settings. You are responsible for the configuration and compliance of those integrations.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.3 Corporate Transactions</h3>
                <p>Information may be shared or transferred if we engage in a merger, acquisition, financing, or asset sale, subject to confidentiality and continuity safeguards.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">3.4 Legal & Safety Obligations</h3>
                <p>We may disclose information if required to comply with laws, regulations, or legal processes; respond to lawful requests; or protect the rights, safety, or property of Cerrana, users, or the public.</p>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Data Retention</h2>
                <p className="mb-4">We retain personal information only as long as necessary to provide the Services, fulfill the purposes described in this Policy, comply with legal obligations, or resolve disputes.</p>
                <p>You may request deletion at any time: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">5) Your Rights</h2>
                <p className="mb-4">Depending on your location (including GDPR and CCPA jurisdictions), you may have rights to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Request a copy of your data</li>
                    <li>Opt out of certain uses (marketing, cookies)</li>
                    <li>Restrict or object to processing</li>
                    <li>Withdraw consent for features that rely on consent</li>
                </ul>
                <p>To exercise these rights, contact: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="text-sm italic mt-2">You will not be discriminated against for exercising privacy rights.</p>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">6) Cookies & Tracking</h2>
                <p>We use cookies and similar technologies for security, site functionality, user preferences, analytics, and feature performance. You may modify cookie settings in your browser or through tools we provide.</p>
            </section>

            {/* Section 7 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">7) Data Security</h2>
                <p className="mb-4">We implement administrative, technical, and physical safeguards designed to protect personal information, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Encryption in transit</li>
                    <li>Access controls and authentication</li>
                    <li>Monitoring and intrusion detection</li>
                    <li>Secure development practices</li>
                </ul>
                <p className="mt-4">No system is 100% secure, but we work continuously to improve protection.</p>
            </section>

            {/* Section 8 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">8) International Data Transfers</h2>
                <p>If you access the Services from outside the United States, your information may be processed in the U.S. or other countries with different data protection laws. We use reasonable safeguards for international transfers where required.</p>
            </section>

            {/* Section 9 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">9) Children’s Privacy</h2>
                <p>Our Services are not intended for users under 18. We do not knowingly collect information from children. If you believe a child has provided information, contact us at <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a>.</p>
            </section>

            {/* Section 10 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">10) Changes to This Privacy Policy</h2>
                <p>We may update this Policy periodically. If we make material changes, we will update the “Last Updated” date and may provide additional notice. Continued use of the Services after changes take effect means you accept the updated Policy.</p>
            </section>

            {/* Section 11 */}
            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">11) Contact Us</h2>
                <p className="mb-4">For privacy questions, requests, or concerns, contact:</p>
                <p className="text-lg font-bold text-white">📧 <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="text-lg font-bold text-white">🌐 <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
            </section>

        </div>
      </div>
    </div>
  );
};
