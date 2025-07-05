// Utilidades para analytics y tracking

export const trackEvent = (eventName, properties = {}) => {
  // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  
  // Log local para desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

export const trackPageView = (pageName) => {
  trackEvent('page_view', { page_name: pageName });
};

export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('button_click', { 
    button_name: buttonName, 
    location: location 
  });
};

export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', { form_name: formName });
};

export const trackVideoPlay = (videoName) => {
  trackEvent('video_play', { video_name: videoName });
};

export const trackImageView = (imageName) => {
  trackEvent('image_view', { image_name: imageName });
};

// Hook para tracking automático de componentes
export const useAnalytics = (componentName) => {
  const trackComponentView = () => {
    trackEvent('component_view', { component_name: componentName });
  };

  const trackComponentInteraction = (action) => {
    trackEvent('component_interaction', { 
      component_name: componentName, 
      action: action 
    });
  };

  return {
    trackComponentView,
    trackComponentInteraction
  };
}; 