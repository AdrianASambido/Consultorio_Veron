import React from 'react';
import { getFromCache, setCache, removeFromCache } from '../utils/cache.js';

// Hook para manejar cache en componentes
export const useCache = (key, initialData = null, ttl = 24 * 60 * 60 * 1000) => {
  const [data, setData] = React.useState(() => {
    return getFromCache(key) || initialData;
  });

  const updateCache = React.useCallback((newData) => {
    setCache(key, newData, ttl);
    setData(newData);
  }, [key, ttl]);

  const clearCache = React.useCallback(() => {
    removeFromCache(key);
    setData(initialData);
  }, [key, initialData]);

  return {
    data,
    updateCache,
    clearCache
  };
}; 