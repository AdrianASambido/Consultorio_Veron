import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Importa todas las imágenes de la carpeta images excepto el logo
const imageModules = import.meta.glob('/public/images/*.{jpg,jpeg,png,gif,webp}', { eager: true });
const images = Object.keys(imageModules)
  .filter(path => !path.includes('logo') && !path.includes('textos_presentacion'))
  .map(path => path.replace('/public', ''));

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #eaf2fa;
`;

const SlidesWrapper = styled.div`
  display: flex;
  height: 380px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.current * 100}%);
`;

const Slide = styled.img`
  width: ${props => 100 / props.itemsPerPage}%;
  flex-shrink: 0;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: ${props => 100 / props.itemsPerPage}%;
  flex-shrink: 0;
  height: 100%;
  background: #e0e0e0;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 14px;
  z-index: 2;
`;

const Dot = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background: ${props => (props.active ? '#3985AF' : '#B5E9FC')};
  border: 2px solid #1a3c5a;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
`;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(Array(images.length).fill(false));
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      const width = window.innerWidth;
      let count = 3;
      if (width < 768) {
        count = 1;
      } else if (width < 1024) {
        count = 2;
      }
      // Si hay menos imágenes que el máximo, mostrar solo 1 o 3
      if (images.length < 3) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener('resize', calculateItemsPerPage);
    calculateItemsPerPage();

    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, [images.length]);

  const numPages = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    if (current >= numPages) {
      setCurrent(0);
    }
  }, [numPages, current]);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % numPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [numPages, images.length]);

  const handleError = idx => {
    setError(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  if (images.length === 0) {
    return <CarouselContainer><Placeholder itemsPerPage={1}>Sin imágenes</Placeholder></CarouselContainer>;
  }

  return (
    <CarouselContainer>
      <SlidesWrapper current={current} itemsPerPage={itemsPerPage}>
        {images.map((src, idx) =>
          error[idx] ? (
            <Placeholder key={`placeholder-${idx}`} itemsPerPage={itemsPerPage}>
              Imagen no disponible
            </Placeholder>
          ) : (
            <Slide
              key={src}
              src={src}
              alt={`slide-${idx}`}
              itemsPerPage={itemsPerPage}
              onError={() => handleError(idx)}
            />
          )
        )}
      </SlidesWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
