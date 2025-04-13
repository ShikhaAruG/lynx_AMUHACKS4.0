import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";
import AccessibilityMenu from "./AccessibilityMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAccessibility } from "@/contexts/AccessibilityContext";

const Layout = () => {
  const { language, setLanguage } = useLanguage();
  const { options, updateOptions } = useAccessibility();

  return (
    <div className="flex flex-col min-h-screen bg-janvoice-background">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Accessibility SVG Filters */}
      <svg id="accessibility-filters" aria-hidden="true">
        <defs>
          <filter id="protanopia-filter">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.567, 0.433, 0, 0, 0
                      0.558, 0.442, 0, 0, 0
                      0, 0.242, 0.758, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="deuteranopia-filter">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.625, 0.375, 0, 0, 0
                      0.7, 0.3, 0, 0, 0
                      0, 0.3, 0.7, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
          <filter id="tritanopia-filter">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.95, 0.05, 0, 0, 0
                      0, 0.433, 0.567, 0, 0
                      0, 0.475, 0.525, 0, 0
                      0, 0, 0, 1, 0"
            />
          </filter>
        </defs>
      </svg>
      
      <div className="fixed bottom-4 right-4 flex gap-2 z-50">
        <LanguageSelector 
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        
        <AccessibilityMenu
          options={options}
          onOptionsChange={updateOptions}
        />
      </div>
    </div>
  );
};

export default Layout;
