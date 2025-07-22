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
  padding-bottom: 90px;
  @media (max-width: 700px) {
    padding-bottom: 40px;
  }
`;

const IntroSection = styled.div`
  max-width: 700px;
  margin: 0 auto 48px auto;
  padding: 0 20px;
  text-align: center;
  @media (max-width: 600px) {
    padding: 0 5px;
    margin-bottom: 28px;
  }
`;
const IntroTitle = styled.h2`
  color: #1a3c5a;
  font-size: 2.4rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 12px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const IntroText = styled.p`
  color: #3985AF;
  font-size: 1.18rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;
const ListTitle = styled.h3`
  color: #1a3c5a;
  font-size: 1.25rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 1.05rem;
  }
`;
const ServiceList = styled.ul`
  color: #3985AF;
  font-size: 1.08rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  text-align: left;
  max-width: 500px;
  margin: 0 auto 32px auto;
  padding-left: 1.2em;
  @media (max-width: 600px) {
    font-size: 0.97rem;
    padding-left: 1em;
    margin-bottom: 18px;
  }
`;
const ServiceListItem = styled.li`
  margin-bottom: 8px;
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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    gap: 8px;
    margin-bottom: 18px;
  }
`;
const ServiceIcon = styled.div`
  color: #3985AF;
  font-size: 2.2rem;
  flex-shrink: 0;
  margin-top: 2px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
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
  @media (max-width: 600px) {
    font-size: 1.05rem;
  }
`;
const ServiceDesc = styled.p`
  color: #3985AF;
  font-size: 1.08rem;
  margin: 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 600px) {
    font-size: 0.97rem;
  }
`;

const ServicesContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 600px) {
    max-width: 99vw;
  }
`;

const services = [
  {
    title: 'Rendimiento',
    icon: <FaRunning />,
    content: 'Entrenamiento orientado tanto al rendimiento deportivo como a la salud general.',
  },
  {
    title: 'Readaptación',
    icon: <FaRedo />,
    content: 'Readaptación física y deportiva post-lesión, asegurando un regreso seguro y progresivo a la actividad.',
  },
  {
    title: 'Evaluación',
    icon: <FaClipboardCheck />,
    content: 'Evaluaciones y valoraciones funcionales para un diagnóstico preciso y seguimiento personalizado.',
  },
  {
    title: 'Prevención',
    icon: <FaShieldAlt />,
    content: 'Preparación física prequirúrgica para optimizar tu recuperación.',
  },
];

const Services = () => (
  <Section>
    <ServicesContent>
      <IntroSection>
        <IntroTitle>¿Quiénes somos?</IntroTitle>
        <IntroText>
          Somos un espacio dedicado al <strong>entrenamiento personalizado</strong>, enfocado en la <strong>readaptación física</strong>, el <strong>desarrollo del rendimiento</strong> y la <strong>promoción de la salud integral</strong>. Nuestro objetivo es acompañarte en cada etapa, ya sea para <strong>recuperarte de una lesión</strong>, <strong>potenciar tu desempeño</strong> o <strong>cuidar tu bienestar</strong>.
        </IntroText>
      </IntroSection>
      {/* Sección de servicios visuales, si quieres mantenerla */}
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
