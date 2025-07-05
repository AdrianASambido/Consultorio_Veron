// Utilidades para internacionalización y manejo de idiomas

// Configuración de idiomas soportados
export const SUPPORTED_LANGUAGES = {
  es: {
    name: 'Español',
    flag: '🇪🇸',
    direction: 'ltr'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    direction: 'ltr'
  }
};

// Textos en diferentes idiomas
export const TRANSLATIONS = {
  es: {
    // Navegación
    home: 'Inicio',
    services: 'Servicios',
    contact: 'Contacto',
    about: 'Acerca de',
    
    // Servicios
    evaluation: 'Evaluación Física',
    performance: 'Rendimiento Deportivo',
    training: 'Entrenamiento',
    consultation: 'Consulta',
    
    // Formulario de contacto
    name: 'Nombre',
    email: 'Email',
    phone: 'Teléfono',
    message: 'Mensaje',
    send: 'Enviar',
    required: 'Campo requerido',
    invalidEmail: 'Email inválido',
    invalidPhone: 'Teléfono inválido',
    
    // Mensajes
    contactSuccess: 'Mensaje enviado exitosamente',
    contactError: 'Error al enviar el mensaje',
    loading: 'Cargando...',
    
    // Footer
    rights: 'Todos los derechos reservados',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    
    // Accesibilidad
    skipToContent: 'Saltar al contenido principal',
    menu: 'Menú',
    close: 'Cerrar',
    
    // SEO
    pageTitle: 'Consultorio Verón - Evaluación Física y Rendimiento Deportivo',
    pageDescription: 'Servicios profesionales de evaluación física y rendimiento deportivo en Buenos Aires',
    keywords: 'consultorio, evaluación física, rendimiento deportivo, salud, deporte'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    about: 'About',
    
    // Services
    evaluation: 'Physical Evaluation',
    performance: 'Sports Performance',
    training: 'Training',
    consultation: 'Consultation',
    
    // Contact form
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send',
    required: 'Required field',
    invalidEmail: 'Invalid email',
    invalidPhone: 'Invalid phone',
    
    // Messages
    contactSuccess: 'Message sent successfully',
    contactError: 'Error sending message',
    loading: 'Loading...',
    
    // Footer
    rights: 'All rights reserved',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    
    // Accessibility
    skipToContent: 'Skip to main content',
    menu: 'Menu',
    close: 'Close',
    
    // SEO
    pageTitle: 'Consultorio Verón - Physical Evaluation and Sports Performance',
    pageDescription: 'Professional physical evaluation and sports performance services in Buenos Aires',
    keywords: 'consulting, physical evaluation, sports performance, health, sports'
  }
};

// Función para obtener el idioma actual
export const getCurrentLanguage = () => {
  return localStorage.getItem('language') || 'es';
};

// Función para establecer el idioma
export const setLanguage = (language) => {
  if (SUPPORTED_LANGUAGES[language]) {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = SUPPORTED_LANGUAGES[language].direction;
    return true;
  }
  return false;
};

// Función para obtener una traducción
export const t = (key, language = null) => {
  const currentLang = language || getCurrentLanguage();
  const translations = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  
  return translations[key] || key;
};

// Función para formatear fechas según el idioma
export const formatDate = (date, language = null) => {
  const currentLang = language || getCurrentLanguage();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Intl.DateTimeFormat(currentLang, options).format(new Date(date));
};

// Función para formatear números según el idioma
export const formatNumber = (number, language = null) => {
  const currentLang = language || getCurrentLanguage();
  return new Intl.NumberFormat(currentLang).format(number);
};

// Función para formatear moneda según el idioma
export const formatCurrency = (amount, currency = 'ARS', language = null) => {
  const currentLang = language || getCurrentLanguage();
  return new Intl.NumberFormat(currentLang, {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Función para detectar el idioma del navegador
export const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  
  return SUPPORTED_LANGUAGES[langCode] ? langCode : 'es';
};

// Función para inicializar el idioma
export const initializeLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  const language = savedLanguage || detectBrowserLanguage();
  
  setLanguage(language);
  return language;
}; 