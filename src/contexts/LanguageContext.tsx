import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, string>;
  t: (key: string) => string;
}

// Initial empty translations object
const initialTranslations: Record<string, string> = {};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations: initialTranslations,
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(initialTranslations);

  // In a real app, this would load translations from files or an API
  const loadTranslations = async (langCode: string) => {
    try {
      // Mock translation loading
      console.log(`Loading translations for ${langCode}`);
      
      // In a real app, you would fetch these from a backend or JSON files
      const mockTranslations: Record<string, Record<string, string>> = {
        hi: {
          "home": "होम",
          "events": "कार्यक्रम",
          "community": "समुदाय",
          "about": "हमारे बारे में",
          "login": "लॉग इन करें",
          "signup": "साइन अप करें"
          // Add more translations as needed
        },
        ta: {
          "home": "முகப்பு",
          "events": "நிகழ்வுகள்",
          "community": "சமூகம்",
          "about": "எங்களைப் பற்றி",
          "login": "உள்நுழைய",
          "signup": "பதிவு செய்க"
        }
        // Add more languages as needed
      };
      
      // If we have translations for this language, use them
      if (langCode !== "en" && mockTranslations[langCode]) {
        setTranslations(mockTranslations[langCode]);
      } else {
        // For English or unsupported languages, use empty translations
        // which will cause the t() function to return the key (English text)
        setTranslations({});
      }
    } catch (error) {
      console.error("Failed to load translations:", error);
      setTranslations({});
    }
  };

  // Load translations when language changes
  React.useEffect(() => {
    loadTranslations(language);
  }, [language]);

  // Translation function
  const t = (key: string) => {
    // If we have a translation for this key, return it
    if (translations[key]) {
      return translations[key];
    }
    // Otherwise return the key itself (which is the English text)
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
