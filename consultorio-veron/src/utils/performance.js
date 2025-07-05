// Utilidades para monitoreo de performance

export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

export const lazyLoadImage = (src, callback) => {
  const img = new Image();
  img.onload = () => callback(null, img);
  img.onerror = () => callback(new Error(`Failed to load image: ${src}`));
  img.src = src;
};

export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(url => 
      new Promise((resolve, reject) => {
        lazyLoadImage(url, (error, img) => {
          if (error) reject(error);
          else resolve(img);
        });
      })
    )
  );
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}; 