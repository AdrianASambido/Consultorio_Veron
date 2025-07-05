// Utilidades para manejo de PWA y service worker

// Función para registrar el service worker
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registrado exitosamente:', registration);
      return registration;
    } catch (error) {
      console.error('Error al registrar Service Worker:', error);
      return null;
    }
  }
  return null;
};

// Función para verificar si la PWA está instalada
export const isPWAInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
};

// Función para mostrar prompt de instalación
export const showInstallPrompt = () => {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar botón de instalación
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('Usuario aceptó la instalación');
          } else {
            console.log('Usuario rechazó la instalación');
          }
          deferredPrompt = null;
          installButton.style.display = 'none';
        });
      });
    }
  });
};

// Función para verificar actualizaciones del service worker
export const checkForUpdates = (registration) => {
  if (!registration) return;
  
  registration.addEventListener('updatefound', () => {
    const newWorker = registration.installing;
    
    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        // Hay una nueva versión disponible
        showUpdateNotification();
      }
    });
  });
};

// Función para mostrar notificación de actualización
export const showUpdateNotification = () => {
  const updateNotification = document.createElement('div');
  updateNotification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1a3c5a;
      color: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      max-width: 300px;
    ">
      <h4 style="margin: 0 0 10px 0;">Nueva versión disponible</h4>
      <p style="margin: 0 0 15px 0;">Hay una nueva versión de la aplicación disponible.</p>
      <button id="update-button" style="
        background: white;
        color: #1a3c5a;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
      ">Actualizar</button>
      <button id="close-notification" style="
        background: transparent;
        color: white;
        border: 1px solid white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      ">Cerrar</button>
    </div>
  `;
  
  document.body.appendChild(updateNotification);
  
  document.getElementById('update-button').addEventListener('click', () => {
    window.location.reload();
  });
  
  document.getElementById('close-notification').addEventListener('click', () => {
    document.body.removeChild(updateNotification);
  });
};

// Función para manejar estado offline/online
export const handleOfflineOnline = () => {
  const updateOnlineStatus = () => {
    const statusElement = document.getElementById('connection-status');
    if (statusElement) {
      if (navigator.onLine) {
        statusElement.textContent = 'Conectado';
        statusElement.style.color = '#4caf50';
      } else {
        statusElement.textContent = 'Sin conexión';
        statusElement.style.color = '#f44336';
      }
    }
  };
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
};

// Función para precargar recursos críticos
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/images/logo_consultorio.jpeg',
    '/images/logo_Solo.jpeg',
    '/images/logo_con_flecha_blanco.jpeg',
    '/images/logo_con_flecha_negro.jpeg'
  ];
  
  criticalResources.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Función para inicializar PWA
export const initializePWA = async () => {
  // Registrar service worker
  const registration = await registerServiceWorker();
  
  // Verificar actualizaciones
  checkForUpdates(registration);
  
  // Mostrar prompt de instalación
  showInstallPrompt();
  
  // Manejar estado offline/online
  handleOfflineOnline();
  
  // Precargar recursos críticos
  preloadCriticalResources();
  
  return registration;
}; 