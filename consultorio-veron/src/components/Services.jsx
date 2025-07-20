import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import { FaRunning, FaRedo, FaClipboardCheck, FaShieldAlt } from 'react-icons/fa';

const Section = styled.section`
  background: #fff;
  border-radius: 0;
  margin: 0;
  width: 100%;
  color: #3985AF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
`;

const Title = styled.h2`
  color: #1a3c5a;
  padding: 10px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 2.8rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 100px;
  font-size: 1.50rem;
  color: #3985AF;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 450;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px 50px 0px 50px;
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

const ServicesContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
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
    <ServicesContent>
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
    </ServicesContent>
  </Section>
);

export default Services;
