import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #eaf2fa;
  border-radius: 10px;
  padding: 24px 18px;
  margin: 20px 0;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 12px;
`;

const List = styled.ul`
  padding: 0 0 0 18px;
  color: #222;
`;

const Services = () => (
  <Section>
    <Title>Servicios</Title>
    <List>
      <li>Entrenamientos orientados al rendimiento</li>
      <li>Readaptación físico funcional deportiva </li>
      <li>Evaluación y seguimiento personalizado</li>
      <li>Entrenamiento preventivo orientado a la salud,</li>
      <li>Asesoramiento en actividad física</li>
    </List>
  </Section>
);

export default Services; 