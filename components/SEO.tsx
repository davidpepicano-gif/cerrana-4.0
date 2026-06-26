import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: string; // New prop for JSON-LD structure
}

const getBasePath = (pathname: string) => {
  if (pathname.startsWith('/en')) {
    return pathname.replace(/^\/en/, '') || '/';
  }
  if (pathname.startsWith('/es')) {
    return pathname.replace(/^\/es/, '') || '/';
  }
  return pathname;
};

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  
  const baseUrl = 'https://cerrana.com';
  const basePath = getBasePath(location.pathname);
  
  // Canonical links: English paths point to /en/..., Spanish/Default paths point to /... (unprefixed)
  const canonicalUrl = location.pathname.startsWith('/en')
    ? `${baseUrl}/en${basePath === '/' ? '' : basePath}`
    : `${baseUrl}${basePath === '/' ? '' : basePath}`;

  const esUrl = `${baseUrl}/es${basePath === '/' ? '' : basePath}`;
  const enUrl = `${baseUrl}/en${basePath === '/' ? '' : basePath}`;
  const defaultUrl = `${baseUrl}${basePath === '/' ? '' : basePath}`;

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

      {/* hreflang alternates */}
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
      
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