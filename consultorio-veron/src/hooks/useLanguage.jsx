import React from 'react';
import { getCurrentLanguage, setLanguage, t, formatDate, formatNumber, formatCurrency } from '../utils/i18n.js';

// Hook para manejar idiomas en componentes
export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguageState] = React.useState(getCurrentLanguage());
  
  const changeLanguage = (language) => {
    if (setLanguage(language)) {
      setCurrentLanguageState(language);
      window.location.reload(); // Recargar para aplicar cambios
    }
  };
  
  return {
    language: currentLanguage,
    changeLanguage,
    t: (key) => t(key, currentLanguage),
    formatDate: (date) => formatDate(date, currentLanguage),
    formatNumber: (number) => formatNumber(number, currentLanguage),
    formatCurrency: (amount, currency) => formatCurrency(amount, currency, currentLanguage)
  };
}; 