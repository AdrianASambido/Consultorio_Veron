import React from 'react';
import styled from 'styled-components';
import { useCarousel } from '../../hooks/useCarousel';
import { CAROUSEL_CONFIG, COLORS } from '../../utils/constants';
import { getCarouselImages } from '../../utils/assets';

// Obtiene las imágenes del carrusel
const images = getCarouselImages();

const CarouselContainer = styled.div`
  width: 100%;
  height: ${CAROUSEL_CONFIG.HEIGHT}px;
  overflow: hidden;
  position: relative;
  background: ${COLORS.WHITE};
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
  background: ${COLORS.GRAY};
  color: ${COLORS.TEXT_GRAY};
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
  background: ${props => (props.active ? COLORS.PRIMARY : COLORS.LIGHT_GRAY)};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => (props.active ? COLORS.PRIMARY : '#999')};
  }
`;

const Carousel = () => {
  const { current, error, handleError, goToSlide } = useCarousel(images);

  if (images.length === 0) {
    return (
      <CarouselContainer>
        <Placeholder active>Sin imágenes</Placeholder>
      </CarouselContainer>
    );
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
          <Dot 
            key={idx} 
            active={idx === current} 
            onClick={() => goToSlide(idx)} 
          />
        ))}
      </Dots>
    </CarouselContainer>
  );
};

export default Carousel; 