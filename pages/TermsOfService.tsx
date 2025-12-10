import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen pb-24 pt-24 md:pt-32 text-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-wide">
          Terms of Service
        </h1>
        
        <div className="bg-dark-900 rounded-2xl p-8 border border-white/5 shadow-xl leading-relaxed text-slate-400 space-y-8">
            
            {/* Meta Info */}
            <div className="border-b border-white/10 pb-6 mb-6">
                <p className="font-semibold text-white">Cerrana AI LLC</p>
                <p>Website: <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
                <p className="mt-4 text-sm text-slate-500">Last Updated: 12/08/2025</p>
            </div>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4">1) Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using Cerrana AI LLC’s websites, software, AI systems, chat/voice assistants, automations, CRM tools, integrations, documentation, and related services (collectively, the “Services”), you (“Customer,” “you”) agree to these Terms of Service (the “Terms”) and our Privacy Policy available at Cerrana.com.
                </p>
                <p className="mb-4">
                  If you use the Services on behalf of a business or organization, you represent that you are authorized to accept these Terms on their behalf.
                </p>
                <p>
                  <span className="font-semibold text-white">Age Requirement:</span> You must be at least 18 years old to use the Services.
                </p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">2) Changes to These Terms</h2>
                <p className="mb-4">
                  We may update these Terms periodically. When we do, we will update the “Last Updated” date above and may notify you if changes are material.
                </p>
                <p>
                  Continued use of the Services after updates take effect constitutes your acceptance of the revised Terms.
                </p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">3) Key Definitions</h2>
                <ul className="list-disc pl-5 space-y-4">
                  <li><span className="font-semibold text-white">Deliverable(s):</span> Any work product created through consulting or implementation services, including smart websites, funnels, CRM configurations, AI automations, prompts, scripts, voice/chat assistants, dashboards, and documentation.</li>
                  <li><span className="font-semibold text-white">SaaS Product(s):</span> Cloud-hosted Cerrana software, including AI tools, widgets, assistants, automation platforms, and reporting systems, provided via subscription.</li>
                  <li><span className="font-semibold text-white">Customer Data:</span> Content, information, prompts, system credentials, and data you submit to or generate through the Services.</li>
                  <li><span className="font-semibold text-white">Third-Party Services:</span> Software, APIs, AI models, messaging providers (e.g., WhatsApp, SMS/A2P), CRMs, or integrations that Cerrana does not own or operate.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">4) Accounts & Security</h2>
                <p className="mb-4">Some Services require creating an account. You agree to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Provide accurate and current information</li>
                  <li>Protect your access credentials</li>
                  <li>Notify Cerrana immediately of unauthorized access</li>
                </ul>
                <p>Cerrana may suspend accounts due to violations or security risk.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">5) Scope of Services</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.1 Consulting & Implementation Services</h3>
                <p className="mb-2">Cerrana may provide:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Smart websites and high-converting funnels</li>
                  <li>AI chat and voice assistant development</li>
                  <li>CRM setup, optimization, and automations</li>
                  <li>Integrations with WhatsApp, Meta, email, SMS/A2P, telephony, Google, and other platforms</li>
                  <li>AI-powered workflow design</li>
                  <li>Sales process architecture</li>
                  <li>Training, onboarding, and operational support</li>
                  <li>Custom scripts, dashboards, and logic flows</li>
                </ul>
                <p>Each project is defined in a proposal, statement of work (SOW), quote, or invoice (an “Order”).</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.2 SaaS Products</h3>
                <p className="mb-2">Subscription-based offerings may include:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>AI assistants (chat or voice)</li>
                  <li>Scheduling and forms</li>
                  <li>CRM enhancements</li>
                  <li>Pipeline automation tools</li>
                  <li>Analytics and reporting modules</li>
                  <li>Website widgets and embeddable tools</li>
                </ul>
                <p>Features and limits depend on the selected plan.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">5.3 Beta Features</h3>
                <p>Beta features may be experimental and are provided as-is, without guarantee of stability.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">6) Pricing, Billing & Payment</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.1 Fees</h3>
                <p className="mb-2">Fees for subscriptions, services, implementation, usage, or add-ons are defined in your Order or pricing page.</p>
                <p>Unless explicitly stated, all fees are billed in advance and are non-refundable.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.2 Taxes</h3>
                <p>You are responsible for all taxes, duties, and similar charges.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.3 Late Payments</h3>
                <p className="mb-2">Cerrana may:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Suspend access</li>
                  <li>Charge interest</li>
                  <li>Recover collection costs</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.4 Refund Policy</h3>
                <p>Fees are non-refundable, except where required by law or specifically agreed to in writing.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">6.5 Third-Party Fees</h3>
                <p>Charges related to third-party usage (SMS, A2P, WhatsApp Business API, telephony minutes, AI model consumption, servers, etc.) may be billed separately or directly by the provider.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">7) Subscription Terms</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.1 Auto-Renewal</h3>
                <p>Subscriptions renew monthly or annually unless cancelled before the renewal date.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.2 Upgrades & Downgrades</h3>
                <p>Upgrades take effect immediately; downgrades occur at the next renewal.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">7.3 Usage Limits</h3>
                <p>Customers must comply with usage limits such as AI messages, automations, seats, storage, API calls, or conversation volume.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">8) Intellectual Property</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">8.1 Cerrana IP</h3>
                <p className="mb-2">Cerrana retains all rights to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-2">
                  <li>Software, APIs, and backend systems</li>
                  <li>AI prompts, logic, and training data</li>
                  <li>Automations and workflows</li>
                  <li>Templates, scripts, branding elements</li>
                  <li>Documentation and assets</li>
                </ul>
                <p>No rights are granted unless expressly stated.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">8.2 Customer IP</h3>
                <p>You retain ownership of Customer Data. You grant Cerrana a license to use Customer Data only to provide, maintain, and improve the Services, and comply with applicable law.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">8.3 Deliverables</h3>
                <p className="mb-2">Unless stated otherwise:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You receive a perpetual, non-exclusive license to use project-specific Deliverables internally.</li>
                  <li>Cerrana retains ownership of reusable frameworks, libraries, logic, prompts, components, and underlying methods used to create Deliverables.</li>
                </ul>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">8.4 Feedback</h3>
                <p>Feedback may be used by Cerrana freely and without obligation.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">9) Acceptable Use</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use the Services in unlawful ways</li>
                  <li>Upload or transmit harmful, abusive, or illegal content</li>
                  <li>Violate A2P/SMS/WhatsApp messaging policies</li>
                  <li>Attempt to bypass security or rate limits</li>
                  <li>Scrape or mine data without authorization</li>
                  <li>Misuse AI for disinformation or harmful purposes</li>
                  <li>Infringe on third-party intellectual property</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">10) Data Protection & Privacy</h2>
                <p className="mb-4">Cerrana processes Customer Data in accordance with the Privacy Policy on Cerrana.com.</p>
                <p className="mb-4">We implement reasonable security controls, but no system is perfectly secure.</p>
                <p>You are responsible for ensuring you have a lawful basis to provide Customer Data.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">11) Third-Party Services</h2>
                <p className="mb-4">The Services may integrate or depend on platforms Cerrana does not control. Cerrana is not responsible for outages, policy changes, discontinuations, or pricing changes by third parties.</p>
                <p>Your use of third-party platforms is governed by their terms.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">12) Support & Service Levels</h2>
                <p className="mb-4">Support is provided based on your subscription plan or Order. Emergency and scheduled maintenance may temporarily affect availability.</p>
                <p>All support communications must be directed to: <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">13) Publicity</h2>
                <p>Unless you opt out, Cerrana may list your business name and logo on Cerrana.com and in marketing materials as a customer reference.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">14) Confidentiality</h2>
                <p className="mb-4">Both parties agree to protect the other’s confidential information using reasonable care.</p>
                <p>Exceptions include information that is public, independently developed, legally required to be disclosed, or lawfully obtained.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">15) Compliance Responsibilities</h2>
                <p className="mb-2">You are responsible for complying with all applicable laws including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Data protection & privacy</li>
                  <li>Advertising regulations</li>
                  <li>A2P and telecom messaging rules</li>
                  <li>Applicable AI use requirements</li>
                </ul>
                <p>Cerrana does not provide legal advice.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">16) Suspension of Services</h2>
                <p className="mb-2">Cerrana may suspend Services due to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Payment failure</li>
                  <li>Terms violations</li>
                  <li>Security risks</li>
                  <li>Abuse or misuse</li>
                  <li>Legal or regulatory requirement</li>
                </ul>
                <p>We will attempt to notify you when practical.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">17) Termination</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">17.1 Cancellation</h3>
                <p>You may cancel subscriptions anytime; they remain active until the end of the billing cycle.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">17.2 Termination for Cause</h3>
                <p>Either party may terminate for material breach not cured within 30 days.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">17.3 Post-Termination</h3>
                <p className="mb-2">Upon termination:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Services end immediately</li>
                  <li>Customer Data export may be available for 30 days upon request</li>
                  <li>IP, confidentiality, and liability clauses survive termination</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">18) Disclaimers</h2>
                <p className="mb-2">Except as expressly stated:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Services are provided “as-is”</li>
                  <li>Cerrana makes no guarantee of error-free or uninterrupted operation</li>
                  <li>All implied warranties are disclaimed to the fullest extent permitted by law</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">19) Limitation of Liability</h2>
                <p className="mb-2">To the fullest extent permitted by law:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Cerrana is not liable for indirect or consequential damages, including lost profits or data</li>
                  <li>Total liability is limited to the greater of: (a) Fees paid in the prior 12 months, or (b) USD $1,000</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">20) Indemnification</h2>
                <p className="mb-2">You agree to indemnify Cerrana from claims arising from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your misuse of the Services</li>
                  <li>Customer Data</li>
                  <li>Violations of these Terms</li>
                  <li>Unauthorized modifications or combinations of Deliverables</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">21) Force Majeure</h2>
                <p>Neither party is liable for delays or failures caused by events outside reasonable control, including outages, cyberattacks, natural disasters, war, or governmental action.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">22) Governing Law & Disputes</h2>
                
                <h3 className="text-lg font-bold text-white mt-6 mb-2">22.1 Governing Law</h3>
                <p>These Terms are governed by the laws of Wyoming, USA.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">22.2 Venue</h3>
                <p>Disputes must be resolved in the state or federal courts of Laramie County, Wyoming.</p>

                <h3 className="text-lg font-bold text-white mt-6 mb-2">22.3 Arbitration (Optional)</h3>
                <p>Confidential arbitration may be offered upon request.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">23) Notices</h2>
                <p className="mb-4">All legal and support communications must be sent to:</p>
                <p className="mb-1">📧 <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="mb-4">🌐 <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
                <p>Notices to Customer will be sent to the email associated with the account.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">24) Assignment</h2>
                <p className="mb-4">You may not assign these Terms without Cerrana’s written consent.</p>
                <p>Cerrana may assign these Terms as part of a merger, acquisition, or corporate restructuring.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">25) Severability</h2>
                <p>If any provision is unenforceable, the remainder stays in effect.</p>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">26) Entire Agreement</h2>
                <p className="mb-4">These Terms, the Privacy Policy, any Data Processing Agreement, and applicable Orders constitute the entire agreement.</p>
                <p className="mb-2">In case of conflict:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Order</li>
                  <li>These Terms</li>
                  <li>Documentation</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 pt-6 border-t border-white/5">27) Contact Information</h2>
                <p className="mb-4">For any questions or legal inquiries, contact:</p>
                <p className="text-lg font-bold text-white">📧 <a href="mailto:support@cerrana.com" className="text-brand-400 hover:underline">support@cerrana.com</a></p>
                <p className="text-lg font-bold text-white">🌐 <a href="https://cerrana.com" className="text-brand-400 hover:underline">https://cerrana.com</a></p>
            </section>

        </div>
      </div>
    </div>
  );
};