import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: string; // New prop for JSON-LD structure
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords || 'Cerrana AI, Sales Automation, CRM, AI Agents');
    
    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    // Note: With HashRouter, the canonical URL is often just the root, 
    // but we construct a logical representation for crawlers.
    const logicalUrl = `https://cerrana.com${location.pathname === '/' ? '' : location.pathname}`;
    updateMeta('og:url', logicalUrl, 'property');
    
    // Twitter
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');
    updateMeta('twitter:url', logicalUrl, 'property');

    // Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', logicalUrl);

    // Inject JSON-LD Schema
    if (schema) {
        let script = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = schema;
    }

  }, [title, description, keywords, schema, location]);

  return null;
};