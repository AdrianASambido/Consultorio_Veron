import React from 'react';
import { checkOnlineStatus } from '../utils/network.js';

// Hook para manejar estado de conectividad
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = React.useState(checkOnlineStatus());
  const [lastOnline, setLastOnline] = React.useState(Date.now());

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setLastOnline(Date.now());
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isOnline,
    lastOnline,
    offlineDuration: isOnline ? 0 : Date.now() - lastOnline
  };
}; 