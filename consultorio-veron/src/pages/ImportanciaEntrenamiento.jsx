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
const SubTitle = styled.h2`
  color: #1a3c5a;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const List = styled.ul`
  color: #3985AF;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export default function ImportanciaEntrenamiento() {
  return (
    <Page>
      <Title>Importancia del Entrenamiento</Title>
      <p>La actividad física estimula el sistema músculo-esquelético y neuromotor. Al moverse regularmente, las personas mayores mejoran su movilidad, coordinación y fuerza funcional para las tareas diarias.</p>
      <SubTitle>Impacto de la actividad física en la salud</SubTitle>
      <List>
        <li>Osteoporosis: La Actividad física con carga ayuda a conservar la densidad ósea.</li>
        <li>Hipertensión: Reduce la tensión arterial sistólica y mejora la función vascular.</li>
        <li>Diabetes tipo II: favorece el uso de glucosa por el músculo, ayudando al control metabólico.</li>
        <li>Ánimo y bienestar: promueve neuroplasticidad y regula neurotransmisores como la serotonina.</li>
      </List>
    </Page>
  );
} 