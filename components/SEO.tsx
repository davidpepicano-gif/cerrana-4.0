import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: string; // New prop for JSON-LD structure
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  const logicalUrl = `https://cerrana.com${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'Cerrana AI, WhatsApp AI, GHL, GoHighLevel, Agente de IA, Clínica Estética, Clínica Odontológica, CRM, Automatización'} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={logicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://cerrana.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={logicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://cerrana.com/og-image.jpg" />

      {/* Canonical Link */}
      <link rel="canonical" href={logicalUrl} />

      {/* Inject JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};