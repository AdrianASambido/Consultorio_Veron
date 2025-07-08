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
`;

const services = [
  {
    title: 'Rendimiento',
    content: 'Entrenamientos orientados al rendimiento',
  },
  {
    title: 'Readaptación',
    content: 'Readaptación físico funcional deportiva',
  },
  {
    title: 'Evaluación',
    content: 'Evaluación y seguimiento personalizado',
  },
  {
    title: 'Prevención',
    content: 'Entrenamiento preventivo orientado a la salud',
  },
  {
    title: 'Asesoramiento',
    content: 'Asesoramiento en actividad física',
  },
];

const Services = () => (
  <Section>
    <Title>Servicios</Title>
    <Tabs items={services} />
  </Section>
);

export default Services;