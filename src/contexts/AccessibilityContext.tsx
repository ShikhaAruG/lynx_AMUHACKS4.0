
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface AccessibilityOptions {
  colorBlindMode: "none" | "protanopia" | "deuteranopia" | "tritanopia";
  dyslexiaFont: boolean;
  highContrast: boolean;
  textSize: "normal" | "large" | "x-large";
}

interface AccessibilityContextType {
  options: AccessibilityOptions;
  updateOptions: (newOptions: Partial<AccessibilityOptions>) => void;
}

const defaultOptions: AccessibilityOptions = {
  colorBlindMode: "none",
  dyslexiaFont: false,
  highContrast: false,
  textSize: "normal",
};

const AccessibilityContext = createContext<AccessibilityContextType>({
  options: defaultOptions,
  updateOptions: () => {},
});

export const useAccessibility = () => useContext(AccessibilityContext);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  // Try to load saved options from localStorage
  const loadSavedOptions = (): AccessibilityOptions => {
    try {
      const savedOptions = localStorage.getItem("accessibility_options");
      return savedOptions 
        ? JSON.parse(savedOptions) 
        : defaultOptions;
    } catch (error) {
      console.error("Failed to parse saved accessibility options:", error);
      return defaultOptions;
    }
  };

  const [options, setOptions] = useState<AccessibilityOptions>(loadSavedOptions);

  // Save options to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem("accessibility_options", JSON.stringify(options));
    } catch (error) {
      console.error("Failed to save accessibility options:", error);
    }
    
    // Apply CSS classes to the document based on the options
    document.documentElement.classList.remove(
      "color-blind-protanopia", 
      "color-blind-deuteranopia", 
      "color-blind-tritanopia",
      "dyslexia-friendly",
      "high-contrast",
      "text-size-large",
      "text-size-x-large"
    );
    
    if (options.colorBlindMode !== "none") {
      document.documentElement.classList.add(`color-blind-${options.colorBlindMode}`);
    }
    
    if (options.dyslexiaFont) {
      document.documentElement.classList.add("dyslexia-friendly");
    }
    
    if (options.highContrast) {
      document.documentElement.classList.add("high-contrast");
    }
    
    if (options.textSize !== "normal") {
      document.documentElement.classList.add(`text-size-${options.textSize}`);
    }
  }, [options]);

  const updateOptions = (newOptions: Partial<AccessibilityOptions>) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      ...newOptions,
    }));
  };

  return (
    <AccessibilityContext.Provider value={{ options, updateOptions }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
