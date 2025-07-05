import React from 'react';
import { initializePWA, isPWAInstalled } from '../utils/pwa.js';

// Hook para manejar PWA en componentes
export const usePWA = () => {
  const [isInstalled, setIsInstalled] = React.useState(isPWAInstalled());
  const [registration, setRegistration] = React.useState(null);
  
  React.useEffect(() => {
    const initPWA = async () => {
      const reg = await initializePWA();
      setRegistration(reg);
    };
    
    initPWA();
  }, []);
  
  return {
    isInstalled,
    registration,
    isPWAInstalled
  };
}; 