import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

// Importa todas las imágenes de la carpeta images excepto el logo
const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const images = Object.keys(imageModules)
  .filter(path => !path.includes('logo'))
  .map(path => path.replace('/public', ''));

const CarouselContainer = styled.div`
  width: 100%;
  height: 325px;
  overflow: hidden;
  position: relative;
  background: #fff;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.5s;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: #e0e0e0;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => (props.active ? '#1a3c5a' : '#ccc')};
  cursor: pointer;
`;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(Array(images.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleError = idx => {
    setError(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  if (images.length === 0) {
    return <CarouselContainer><Placeholder active>Sin imágenes</Placeholder></CarouselContainer>;
  }

  return (
    <CarouselContainer>
      {images.map((src, idx) =>
        error[idx] ? (
          <Placeholder key={src} active={idx === current}>
            Imagen no disponible
          </Placeholder>
        ) : (
          <Slide
            key={src}
            src={src}
            alt={`slide-${idx}`}
            active={idx === current}
            onError={() => handleError(idx)}
          />
        )
      )}
      <Dots>
        {images.map((_, idx) => (
          <Dot key={idx} active={idx === current} onClick={() => setCurrent(idx)} />
        ))}
      </Dots>
    </CarouselContainer>
  );
};

export default Carousel;
