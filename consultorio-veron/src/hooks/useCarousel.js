import { useState, useEffect } from 'react';
import { CAROUSEL_CONFIG } from '../utils/constants';

export const useCarousel = (images) => {
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(Array(images.length).fill(false));

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, CAROUSEL_CONFIG.INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleError = (idx) => {
    setError(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  return {
    current,
    error,
    handleError,
    goToSlide,
  };
}; 