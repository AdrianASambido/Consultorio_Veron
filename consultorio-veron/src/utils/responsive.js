// Utilidades para manejo de responsive design y breakpoints

export const BREAKPOINTS = {
  MOBILE: '320px',
  TABLET: '768px',
  DESKTOP: '1100px',
  LARGE_DESKTOP: '1400px'
};

export const MEDIA_QUERIES = {
  MOBILE: `@media (max-width: ${BREAKPOINTS.TABLET})`,
  TABLET: `@media (min-width: ${BREAKPOINTS.TABLET}) and (max-width: ${BREAKPOINTS.DESKTOP})`,
  DESKTOP: `@media (min-width: ${BREAKPOINTS.DESKTOP})`,
  LARGE_DESKTOP: `@media (min-width: ${BREAKPOINTS.LARGE_DESKTOP})`
};

// Función para obtener el breakpoint actual
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width < 768) return 'mobile';
  if (width < 1100) return 'tablet';
  if (width < 1400) return 'desktop';
  return 'large-desktop';
};

// Función para verificar si estamos en un dispositivo móvil
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Función para verificar si estamos en un dispositivo táctil
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Función para obtener el tamaño de pantalla en píxeles
export const getScreenDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  availWidth: window.screen.availWidth,
  availHeight: window.screen.availHeight
});

// Función para verificar orientación del dispositivo
export const getDeviceOrientation = () => {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

// Función para obtener la densidad de píxeles
export const getPixelRatio = () => {
  return window.devicePixelRatio || 1;
};

// Función para verificar si el navegador soporta características modernas
export const getBrowserSupport = () => ({
  flexbox: CSS.supports('display', 'flex'),
  grid: CSS.supports('display', 'grid'),
  webp: false, // Se puede implementar con un test de imagen
  webgl: !!window.WebGLRenderingContext,
  serviceWorker: 'serviceWorker' in navigator,
  pushNotifications: 'PushManager' in window
}); 