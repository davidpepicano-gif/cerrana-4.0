import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getBasePath = (pathname: string) => {
  if (pathname.startsWith('/en')) {
    return pathname.replace(/^\/en/, '') || '/';
  }
  if (pathname.startsWith('/es')) {
    return pathname.replace(/^\/es/, '') || '/';
  }
  return pathname;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Derive language directly from the URL path
  const language: Language = location.pathname.startsWith('/en') ? 'en' : 'es';

  const handleSetLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    const basePath = getBasePath(currentPath);
    
    if (lang === 'en') {
      navigate(`/en${basePath === '/' ? '' : basePath}${location.search}`);
    } else {
      navigate(`/es${basePath === '/' ? '' : basePath}${location.search}`);
    }
  };

  useEffect(() => {
    // Sync with localStorage & cookie
    localStorage.setItem('language', language);
    document.cookie = `language=${language}; path=/; max-age=31536000`;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};