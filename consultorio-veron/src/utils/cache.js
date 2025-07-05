// Utilidades para manejo de cache y almacenamiento local

// Configuración de cache
const CACHE_CONFIG = {
  PREFIX: 'consultorio_veron_',
  DEFAULT_TTL: 24 * 60 * 60 * 1000, // 24 horas en milisegundos
  MAX_SIZE: 50 * 1024 * 1024 // 50MB
};

// Función para generar una clave de cache
export const generateCacheKey = (key) => {
  return `${CACHE_CONFIG.PREFIX}${key}`;
};

// Función para verificar si el navegador soporta localStorage
export const isLocalStorageSupported = () => {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// Función para verificar si el navegador soporta sessionStorage
export const isSessionStorageSupported = () => {
  try {
    const test = 'test';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

// Función para obtener datos del cache
export const getFromCache = (key, storage = 'localStorage') => {
  if (!isLocalStorageSupported() && storage === 'localStorage') return null;
  if (!isSessionStorageSupported() && storage === 'sessionStorage') return null;

  try {
    const cacheKey = generateCacheKey(key);
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const cached = storageObj.getItem(cacheKey);

    if (!cached) return null;

    const { data, timestamp, ttl } = JSON.parse(cached);
    const now = Date.now();

    // Verificar si el cache ha expirado
    if (now - timestamp > ttl) {
      storageObj.removeItem(cacheKey);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error getting from cache:', error);
    return null;
  }
};

// Función para guardar datos en el cache
export const setCache = (key, data, ttl = CACHE_CONFIG.DEFAULT_TTL, storage = 'localStorage') => {
  if (!isLocalStorageSupported() && storage === 'localStorage') return false;
  if (!isSessionStorageSupported() && storage === 'sessionStorage') return false;

  try {
    const cacheKey = generateCacheKey(key);
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    
    const cacheData = {
      data,
      timestamp: Date.now(),
      ttl
    };

    storageObj.setItem(cacheKey, JSON.stringify(cacheData));
    return true;
  } catch (error) {
    console.error('Error setting cache:', error);
    return false;
  }
};

// Función para eliminar datos del cache
export const removeFromCache = (key, storage = 'localStorage') => {
  try {
    const cacheKey = generateCacheKey(key);
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    storageObj.removeItem(cacheKey);
    return true;
  } catch (error) {
    console.error('Error removing from cache:', error);
    return false;
  }
};

// Función para limpiar todo el cache
export const clearCache = (storage = 'localStorage') => {
  try {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const keys = Object.keys(storageObj);
    
    keys.forEach(key => {
      if (key.startsWith(CACHE_CONFIG.PREFIX)) {
        storageObj.removeItem(key);
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error clearing cache:', error);
    return false;
  }
};

// Función para obtener el tamaño del cache
export const getCacheSize = (storage = 'localStorage') => {
  try {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const keys = Object.keys(storageObj);
    let size = 0;
    
    keys.forEach(key => {
      if (key.startsWith(CACHE_CONFIG.PREFIX)) {
        size += storageObj.getItem(key).length;
      }
    });
    
    return size;
  } catch (error) {
    console.error('Error getting cache size:', error);
    return 0;
  }
};

// Función para limpiar cache expirado
export const cleanExpiredCache = (storage = 'localStorage') => {
  try {
    const storageObj = storage === 'localStorage' ? localStorage : sessionStorage;
    const keys = Object.keys(storageObj);
    const now = Date.now();
    let cleaned = 0;
    
    keys.forEach(key => {
      if (key.startsWith(CACHE_CONFIG.PREFIX)) {
        try {
          const cached = JSON.parse(storageObj.getItem(key));
          if (now - cached.timestamp > cached.ttl) {
            storageObj.removeItem(key);
            cleaned++;
          }
        } catch (e) {
          // Si hay error al parsear, eliminar el item corrupto
          storageObj.removeItem(key);
          cleaned++;
        }
      }
    });
    
    return cleaned;
  } catch (error) {
    console.error('Error cleaning expired cache:', error);
    return 0;
  }
};

// Función para cachear imágenes
export const cacheImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      setCache(`image_${src}`, { src, loaded: true });
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
};

// Función para precargar múltiples imágenes
export const preloadImages = (imageUrls) => {
  return Promise.all(imageUrls.map(url => cacheImage(url)));
}; 