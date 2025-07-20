import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
const Title = styled.h1`
  color: #3985AF;
  font-size: 2.2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const List = styled.ul`
  color: #3985AF;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export default function Recomendaciones() {
  return (
    <Page>
      <Title>Recomendaciones SOMA</Title>
      <List>
        <li>2 a 3 veces por semana: Ejercicios de fuerza, adaptados al nivel del cada persona</li>
        <li>Trabajo de equilibrio y control postural, orientado a la autonomía y a la prevención de caídas.</li>
        <li>Ejercicios de locomoción controlada, con patrones de marcha y desplazamientos en diferentes direcciones y contextos.</li>
      </List>
    </Page>
  );
} 