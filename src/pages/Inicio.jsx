import React from 'react';
import Services from '../components/Services';
import Contact from '../components/Contact';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaDumbbell, FaClipboardList, FaBook, FaMapMarkerAlt, FaHeartbeat, FaArrowCircleDown } from 'react-icons/fa';
import Carousel from '../components/Carousel';

const Banner = styled.section`
  background: #f4f8fb;
  padding: 3.5rem 1rem 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
`;
const BannerIcon = styled(FaHeartbeat)`
  color: #3985AF;
  font-size: 4.5rem;
  margin-bottom: 1.2rem;
`;
const BannerTitle = styled.h1`
  color: #3985AF;
  font-size: 3.2rem;
  font-weight: 900;
  margin: 0 0 1.2rem 0;
  letter-spacing: 1.5px;
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const BannerSubtitle = styled.p`
  color: #246b8f;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;

const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0 2.5rem 0;
`;
const NavTitle = styled.h2`
  color: #1a3c5a;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;
const NavDesc = styled.p`
  color: #3985AF;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const NavButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;
const NavButton = styled(Link)`
  background: #3985AF;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 1.1rem 2.2rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(26,60,90,0.07);
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 210px;
  justify-content: center;
  &:hover {
    background: #246b8f;
    transform: translateY(-2px) scale(1.04);
  }
  svg {
    font-size: 1.4em;
  }
`;

const PrettySeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.5rem 0 3.5rem 0;
  gap: 1.5rem;
`;
const Line = styled.div`
  flex: 1;
  height: 3px;
  background: linear-gradient(90deg, #B5E9FC 0%, #3985AF 100%);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(26,60,90,0.07);
`;
const SeparatorIcon = styled(FaArrowCircleDown)`
  color: #3985AF;
  font-size: 2.7rem;
  background: #f4f8fb;
  border-radius: 50%;
  padding: 0.4rem;
`;

const ContactSection = styled.div`
  margin-top: 0;
  background: #f4f8fb;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
`;

export default function Inicio() {
  return (
    <div>
      <Banner>
        <BannerIcon />
        <BannerTitle>
          Bienvenido a SOMA
        </BannerTitle>
        <BannerSubtitle>
          Impulsando tu bienestar físico y mental. Evaluaciones, entrenamiento y salud en un solo lugar.
        </BannerSubtitle>
      </Banner>
      <Carousel />
      <Services />
      <NavSection>
        <NavTitle>Explorá más sobre salud y bienestar</NavTitle>
        <NavDesc>Descubrí información útil y recomendaciones en nuestras secciones especiales:</NavDesc>
        <NavButtons>
          <NavButton to="/beneficios"><FaHeart /> Beneficios</NavButton>
          <NavButton to="/importancia"><FaDumbbell /> Importancia</NavButton>
          <NavButton to="/recomendaciones"><FaClipboardList /> Recomendaciones</NavButton>
          <NavButton to="/infancia"><FaBook /> Infancia</NavButton>
          <NavButton to="/reserva"><FaMapMarkerAlt /> Reserva</NavButton>
        </NavButtons>
      </NavSection>
      <PrettySeparator>
        <Line />
        <SeparatorIcon />
        <Line />
      </PrettySeparator>
      <ContactSection>
        <Contact />
      </ContactSection>
    </div>
  );
} 