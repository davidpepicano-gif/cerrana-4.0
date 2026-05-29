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
import { CerraAgent } from './components/CerraAgent';

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<CerranaOS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <CerraAgent />
      </Layout>
    </LanguageProvider>
  );
}

export default App;