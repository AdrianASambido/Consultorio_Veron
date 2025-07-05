// Utilidades para manejo de errores de red y conectividad

// Función para verificar conectividad a internet
export const checkOnlineStatus = () => {
  return navigator.onLine;
};

// Función para verificar si hay conexión a un servidor específico
export const checkServerConnectivity = async (url = 'https://www.google.com') => {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-cache'
    });
    return true;
  } catch (error) {
    return false;
  }
};

// Función para hacer peticiones HTTP con retry
export const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(10000) // 10 segundos timeout
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      lastError = error;
      
      if (i === maxRetries - 1) {
        throw lastError;
      }
      
      // Esperar antes del siguiente intento (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

// Función para manejar errores de red
export const handleNetworkError = (error) => {
  if (error.name === 'AbortError') {
    return {
      type: 'timeout',
      message: 'La petición tardó demasiado en completarse',
      retry: true
    };
  }
  
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return {
      type: 'network',
      message: 'Error de conexión. Verifica tu conexión a internet',
      retry: true
    };
  }
  
  if (error.message.includes('HTTP error')) {
    const status = error.message.match(/status: (\d+)/)?.[1];
    
    switch (status) {
      case '404':
        return {
          type: 'not_found',
          message: 'El recurso solicitado no fue encontrado',
          retry: false
        };
      case '500':
        return {
          type: 'server_error',
          message: 'Error interno del servidor',
          retry: true
        };
      case '403':
        return {
          type: 'forbidden',
          message: 'Acceso denegado',
          retry: false
        };
      default:
        return {
          type: 'http_error',
          message: `Error HTTP ${status}`,
          retry: true
        };
    }
  }
  
  return {
    type: 'unknown',
    message: 'Error desconocido',
    retry: true
  };
};

// Función para mostrar notificación de estado de red
export const showNetworkNotification = (isOnline) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(
      isOnline ? 'Conexión restaurada' : 'Sin conexión',
      {
        body: isOnline 
          ? 'Tu conexión a internet ha sido restaurada' 
          : 'No tienes conexión a internet. Algunas funciones pueden no estar disponibles',
        icon: '/images/logo_Solo.jpeg'
      }
    );
  }
};

// Función para verificar velocidad de conexión
export const checkConnectionSpeed = async () => {
  const startTime = performance.now();
  
  try {
    await fetch('https://www.google.com/favicon.ico', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-cache'
    });
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    if (duration < 100) return 'fast';
    if (duration < 500) return 'medium';
    return 'slow';
  } catch (error) {
    return 'offline';
  }
};

// Función para precargar recursos críticos
export const preloadCriticalResources = async () => {
  const criticalResources = [
    '/images/logo_consultorio.jpeg',
    '/images/logo_Solo.jpeg'
  ];
  
  const promises = criticalResources.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error(`Failed to load: ${src}`));
      img.src = src;
    });
  });
  
  try {
    await Promise.allSettled(promises);
    return true;
  } catch (error) {
    console.warn('Some critical resources failed to load:', error);
    return false;
  }
};

// Función para manejar peticiones offline
export const handleOfflineRequest = (request) => {
  // Aquí puedes implementar lógica para guardar peticiones
  // y ejecutarlas cuando vuelva la conexión
  console.log('Request queued for offline execution:', request);
  
  // Guardar en localStorage para ejecutar después
  const offlineQueue = JSON.parse(localStorage.getItem('offlineQueue') || '[]');
  offlineQueue.push({
    ...request,
    timestamp: Date.now()
  });
  localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
};

// Función para procesar cola de peticiones offline
export const processOfflineQueue = async () => {
  const offlineQueue = JSON.parse(localStorage.getItem('offlineQueue') || '[]');
  
  if (offlineQueue.length === 0) return;
  
  const successfulRequests = [];
  const failedRequests = [];
  
  for (const request of offlineQueue) {
    try {
      await fetchWithRetry(request.url, request.options);
      successfulRequests.push(request);
    } catch (error) {
      failedRequests.push(request);
    }
  }
  
  // Actualizar cola con solo las peticiones fallidas
  localStorage.setItem('offlineQueue', JSON.stringify(failedRequests));
  
  return {
    successful: successfulRequests.length,
    failed: failedRequests.length
  };
}; 