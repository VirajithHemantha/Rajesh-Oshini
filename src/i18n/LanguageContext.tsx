import React, { createContext, useContext, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextProps {
  lang: Language;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'en',
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  lang: Language;
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ lang, children }) => {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
