import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CerranaOS } from './pages/CerranaOS';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          {/* Default (Spanish unprefixed) routes */}
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<CerranaOS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Spanish prefixed routes */}
          <Route path="/es" element={<Home />} />
          <Route path="/es/platform" element={<CerranaOS />} />
          <Route path="/es/services" element={<Services />} />
          <Route path="/es/pricing" element={<Pricing />} />
          <Route path="/es/about" element={<About />} />
          <Route path="/es/contact" element={<Contact />} />
          <Route path="/es/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/es/terms-of-service" element={<TermsOfService />} />

          {/* English prefixed routes */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/platform" element={<CerranaOS />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/pricing" element={<Pricing />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/en/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}

export default App;