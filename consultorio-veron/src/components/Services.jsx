import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import { FaRunning, FaRedo, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';

const Section = styled.section`
  background: #fff;
  border-radius: 0;
  padding: 48px 32px 32px 32px;
  margin: 0;
  width: 100vw;
  color: #3985AF;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 14px;
  text-align: center;
  font-size: 2.1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 32px;
  font-size: 1.08rem;
  color: #3985AF;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 400;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;
const ServiceIcon = styled.div`
  color: #3985AF;
  font-size: 2.2rem;
  flex-shrink: 0;
  margin-top: 2px;
`;
const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
`;
const ServiceTitle = styled.h3`
  color: #1a3c5a;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;
const ServiceDesc = styled.p`
  color: #3985AF;
  font-size: 1.08rem;
  margin: 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;

const services = [
  {
    title: 'Rendimiento',
    icon: <FaRunning />,
    content: '¡Llevá tu potencial al máximo! Programas personalizados para que superes tus límites y logres tus objetivos deportivos.',
  },
  {
    title: 'Readaptación',
    icon: <FaRedo />,
    content: 'Recuperate y volvé más fuerte. Te acompañamos en cada paso para que regreses seguro y confiado a tu actividad favorita.',
  },
  {
    title: 'Evaluación',
    icon: <FaClipboardCheck />,
    content: 'Conocé tu punto de partida. Diagnóstico profesional y seguimiento para que avances con certeza y motivación.',
  },
  {
    title: 'Prevención',
    icon: <FaShieldAlt />,
    content: 'Invertí en tu salud. Entrenamientos preventivos para sentirte bien hoy y siempre, cuidando tu bienestar integral.',
  },
];

const Services = () => (
  <Section>
    <Title>Nuestros Servicios</Title>
    <Subtitle>Descubrí cómo podemos ayudarte con soluciones a medida.</Subtitle>
    {services.map((serv, idx) => (
      <ServiceItem key={idx}>
        <ServiceIcon>{serv.icon}</ServiceIcon>
        <ServiceText>
          <ServiceTitle>{serv.title}</ServiceTitle>
          <ServiceDesc>{serv.content}</ServiceDesc>
        </ServiceText>
      </ServiceItem>
    ))}
  </Section>
);

export default Services;
