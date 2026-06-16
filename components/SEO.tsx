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
  
  const baseUrl = 'https://cerrana.com';
  const path = location.pathname === '/' ? '' : location.pathname;
  
  // Canonical links point to the main page without localized query parameters
  const canonicalUrl = `${baseUrl}${path}`;

  const defaultKeywordsES = 'agente de ventas IA, automatización de ventas B2C, IA para negocios hispanos en Estados Unidos, respuesta automática a leads, CRM con IA en español, chatbot de ventas WhatsApp Instagram, convertir leads de anuncios';
  const activeKeywords = keywords || defaultKeywordsES;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={activeKeywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://cerrana.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://cerrana.com/og-image.jpg" />

      {/* Inject JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};