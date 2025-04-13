import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

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
  // Try to get saved language from localStorage, default to "en"
  const savedLanguage = typeof window !== 'undefined' 
    ? localStorage.getItem('preferredLanguage') || "en" 
    : "en";
    
  const [language, setLanguage] = useState(savedLanguage);
  const [translations, setTranslations] = useState(initialTranslations);

  // Enhanced translations with more common UI elements
  const loadTranslations = async (langCode: string) => {
    try {
      console.log(`Loading translations for ${langCode}`);
      
      // In a real app, you would fetch these from a backend or JSON files
      const mockTranslations: Record<string, Record<string, string>> = {
        hi: {
          "home": "होम",
          "events": "कार्यक्रम",
          "community": "समुदाय",
          "about": "हमारे बारे में",
          "login": "लॉग इन करें",
          "signup": "साइन अप करें",
          "messages": "संदेश",
          "complaints": "शिकायतें",
          "get started": "शुरू करें",
          "language": "भाषा",
          "accessibility": "पहुंच",
          "contact us": "संपर्क करें",
          "learn more": "और जानें",
          "welcome to": "में आपका स्वागत है",
          "citizen voice": "नागरिक आवाज़",
          "submit": "जमा करें",
          "cancel": "रद्द करें",
          "volunteer": "स्वयंसेवक",
          "donate": "दान करें",
          "project polling": "परियोजना मतदान",
          "crowdfunding": "क्राउडफंडिंग",
          "citizen ideas": "नागरिक विचार",
          "your voice matters": "आपकी आवाज़ महत्वपूर्ण है"
        },
        ta: {
          "home": "முகப்பு",
          "events": "நிகழ்வுகள்",
          "community": "சமூகம்",
          "about": "எங்களைப் பற்றி",
          "login": "உள்நுழைய",
          "signup": "பதிவு செய்க",
          "messages": "செய்திகள்",
          "complaints": "புகார்கள்",
          "get started": "தொடங்குங்கள்",
          "language": "மொழி",
          "accessibility": "அணுகல்",
          "contact us": "தொடர்பு கொள்ளுங்கள்",
          "learn more": "மேலும் அறிய",
          "welcome to": "வரவேற்கிறோம்",
          "citizen voice": "குடிமக்கள் குரல்",
          "submit": "சமர்ப்பிக்க",
          "cancel": "ரத்து செய்க",
          "volunteer": "தன்னார்வலர்",
          "donate": "நன்கொடை",
          "project polling": "திட்ட கருத்துக்கணிப்பு",
          "crowdfunding": "கூட்டு நிதி",
          "citizen ideas": "குடிமக்கள் யோசனைகள்",
          "your voice matters": "உங்கள் குரல் முக்கியம்"
        },
        pa: {
          "home": "ਘਰ",
          "events": "ਸਮਾਗਮ",
          "community": "ਭਾਈਚਾਰਾ",
          "about": "ਸਾਡੇ ਬਾਰੇ",
          "login": "ਲਾਗਇਨ",
          "signup": "ਸਾਈਨ ਅਪ",
          "messages": "ਸੁਨੇਹੇ",
          "complaints": "ਸ਼ਿਕਾਇਤਾਂ",
          "get started": "ਸ਼ੁਰੂ ਕਰੋ",
          "language": "ਭਾਸ਼ਾ",
          "accessibility": "ਪਹੁੰਚਯੋਗਤਾ",
          "contact us": "ਸੰਪਰਕ ਕਰੋ",
          "learn more": "ਹੋਰ ਜਾਣੋ",
          "welcome to": "ਸਵਾਗਤ ਹੈ",
          "citizen voice": "ਨਾਗਰਿਕ ਆਵਾਜ਼",
          "submit": "ਜਮ੍ਹਾਂ ਕਰੋ",
          "cancel": "ਰੱਦ ਕਰੋ",
          "volunteer": "ਸਵੈਸੇਵਕ",
          "donate": "ਦਾਨ ਕਰੋ",
          "project polling": "ਪ੍ਰੋਜੈਕਟ ਪੋਲਿੰਗ",
          "crowdfunding": "ਕ੍ਰਾਊਡਫੰਡਿੰਗ",
          "citizen ideas": "ਨਾਗਰਿਕ ਵਿਚਾਰ",
          "your voice matters": "ਤੁਹਾਡੀ ਆਵਾਜ਼ ਮਹੱਤਵ ਰੱਖਦੀ ਹੈ"
        },
        as: {
          "home": "ঘৰ",
          "events": "কাৰ্যক্ৰমসমূহ",
          "community": "সম্প্ৰদায়",
          "about": "আমাৰ বিষয়ে",
          "login": "লগইন",
          "signup": "ছাইন আপ",
          "messages": "বাৰ্তাসমূহ",
          "complaints": "অভিযোগসমূহ",
          "get started": "আৰম্ভ কৰক",
          "language": "ভাষা",
          "accessibility": "অভিগম্যতা",
          "contact us": "যোগাযোগ কৰক",
          "learn more": "অধিক জানক",
          "welcome to": "স্বাগতম",
          "citizen voice": "নাগৰিক কণ্ঠ",
          "submit": "জমা দিয়ক",
          "cancel": "বাতিল কৰক",
          "volunteer": "স্বেচ্ছাসেৱী",
          "donate": "দান কৰক",
          "project polling": "প্ৰকল্প ভোটদান",
          "crowdfunding": "ক্ৰাউডফাণ্ডিং",
          "citizen ideas": "নাগৰিক ধাৰণাসমূহ",
          "your voice matters": "আপোনাৰ কণ্ঠ গুৰুত্বপূৰ্ণ"
        },
        mr: {
          "home": "मुख्यपृष्ठ",
          "events": "कार्यक्रम",
          "community": "समुदाय",
          "about": "आमच्याबद्दल",
          "login": "लॉगिन करा",
          "signup": "साइन अप करा",
          "messages": "संदेश",
          "complaints": "तक्रारी",
          "get started": "सुरू करा",
          "language": "भाषा",
          "accessibility": "प्रवेशयोग्यता",
          "contact us": "संपर्क करा",
          "learn more": "अधिक जाणून घ्या",
          "welcome to": "स्वागत आहे",
          "citizen voice": "नागरिक आवाज",
          "submit": "सादर करा",
          "cancel": "रद्द करा",
          "volunteer": "स्वयंसेवक",
          "donate": "दान करा",
          "project polling": "प्रकल्प मतदान",
          "crowdfunding": "क्राउडफंडिंग",
          "citizen ideas": "नागरिक कल्पना",
          "your voice matters": "तुमचा आवाज महत्त्वाचा आहे"
        },
        gu: {
          "home": "હોમ",
          "events": "ઇવેન્ટ્સ",
          "community": "સમુદાય",
          "about": "અમારા વિશે",
          "login": "લોગિન",
          "signup": "સાઇન અપ",
          "messages": "સંદેશાઓ",
          "complaints": "ફરિયાદો",
          "get started": "શરૂ કરો",
          "language": "ભાષા",
          "accessibility": "સુલભતા",
          "contact us": "સંપર્ક કરો",
          "learn more": "વધુ જાણો",
          "welcome to": "આપનું સ્વાગત છે",
          "citizen voice": "નાગરિક અવાજ",
          "submit": "સબમિટ કરો",
          "cancel": "રદ કરો",
          "volunteer": "સ્વયંસેવક",
          "donate": "દાન કરો",
          "project polling": "પ્રોજેક્ટ પોલિંગ",
          "crowdfunding": "ક્રાઉડફંડિંગ",
          "citizen ideas": "નાગરિક વિચારો",
          "your voice matters": "તમારો અવાજ મહત્વપૂર્ણ છે"
        },
        te: {
          "home": "హోమ్",
          "events": "ఈవెంట్స్",
          "community": "కమ్యూనిటీ",
          "about": "మా గురించి",
          "login": "లాగిన్",
          "signup": "సైన్ అప్",
          "messages": "సందేశాలు",
          "complaints": "ఫిర్యాదులు",
          "get started": "ప్రారంభించండి",
          "language": "భాష",
          "accessibility": "ప్రాప్యత",
          "contact us": "సంప్రదించండి",
          "learn more": "మరింత తెలుసుకోండి",
          "welcome to": "స్వాగతం",
          "citizen voice": "పౌర స్వరం",
          "submit": "సమర్పించండి",
          "cancel": "రద్దు చేయండి",
          "volunteer": "స్వచ్ఛంద సేవకుడు",
          "donate": "విరాళం ఇవ్వండి",
          "project polling": "ప్రాజెక్ట్ పోలింగ్",
          "crowdfunding": "క్రౌడ్‌ఫండింగ్",
          "citizen ideas": "పౌర ఆలోచనలు",
          "your voice matters": "మీ గొంతు ముఖ్యమైనది"
        }
      };
      
      // Save the language preference
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferredLanguage', langCode);
      }
      
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
  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  // Translation function - case insensitive
  const t = (key: string) => {
    const lowerKey = key.toLowerCase();
    // If we have a translation for this key, return it
    if (translations[lowerKey]) {
      return translations[lowerKey];
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
