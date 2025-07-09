import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';

const Section = styled.section`
  background: #eaf2fa;
  border-radius: 10px;
  padding: 24px 18px;
  margin: 20px 0;
  width: 100%;
  color: #000;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 12px;
  text-align: center;
  font-size: 2.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 24px;
  font-size: 1.1rem;
  color: #555;
`;

const services = [
  {
    title: 'Rendimiento',
    content: 'Entrenamientos orientados a estimular tu potencial y elevar tu rendimiento ',
  },
  {
    title: 'Readaptación',
    content: 'Físico funcional deportiva, para un retorno seguro a tu actividad deportiva ',
  },
  {
    title: 'Evaluación',
    content: 'Evaluación y seguimiento personalizado para que tenagas la certeza de  tu condición actual',
  },
  {
    title: 'Prevención',
    content: 'Entrenamiento preventivo orientado a la salud y al bienestar, ',
  },
];

const Services = () => (
  <Section>
    <Title>Nuestros Servicios</Title>
    <Subtitle>Descubrí cómo podemos ayudarte con soluciones a medida.</Subtitle>
    <Tabs items={services} />
  </Section>
);

export default Services;
