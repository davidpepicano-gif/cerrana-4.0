import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: string; // New prop for JSON-LD structure
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const baseUrl = 'https://cerrana.com';
  const path = location.pathname === '/' ? '' : location.pathname;
  
  // Construct URLs for localized alternate hreflangs
  const esUrl = `${baseUrl}${path}?lang=es`;
  const enUrl = `${baseUrl}${path}?lang=en`;
  const defaultUrl = `${baseUrl}${path}`;
  
  // Canonical links point to the correct localized version
  const canonicalUrl = language === 'en' ? enUrl : esUrl;

  const defaultKeywordsES = 'agente de ventas IA, agente de ventas con inteligencia artificial en español, automatización de ventas B2C, CRM con IA en español, respuesta automática a leads, seguimiento automático de ventas, chatbot de ventas WhatsApp Instagram, convertir leads de anuncios, IA para negocios hispanos en Estados Unidos, asistente de ventas IA bilingüe';
  const defaultKeywordsEN = 'AI sales agent, AI sales automation, bilingual sales AI, lead response automation, Spanish-speaking AI sales assistant, AI CRM, convert ad leads';
  const activeKeywords = keywords || (language === 'es' ? defaultKeywordsES : defaultKeywordsEN);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={activeKeywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Alternate hreflangs */}
      <link rel="alternate" hreflang="es" href={esUrl} />
      <link rel="alternate" hreflang="en" href={enUrl} />
      <link rel="alternate" hreflang="x-default" href={defaultUrl} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://cerrana.com/og-image-sales-ai.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://cerrana.com/og-image-sales-ai.jpg" />

      {/* Inject JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};