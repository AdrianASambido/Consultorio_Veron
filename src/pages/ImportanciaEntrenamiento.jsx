import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f8fb;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 2.5rem 2rem;
  max-width: 700px;
  width: 100%;
`;
const Title = styled.h1`
  color: #3985AF;
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const SubTitle = styled.h2`
  color: #1a3c5a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;
const List = styled.ul`
  color: #3985AF;
  font-size: 1.18rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding-left: 1.2em;
`;
const Paragraph = styled.p`
  color: #1a3c5a;
  font-size: 1.13rem;
  text-align: center;
`;
const FloatingHomeButton = styled(Link)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #3985AF;
  color: #fff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(26,60,90,0.18);
  font-size: 2rem;
  z-index: 1000;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #246b8f;
    transform: scale(1.08);
  }
`;

export default function ImportanciaEntrenamiento() {
  return (
    <PageWrapper>
      <Card>
        <Title>Importancia del Entrenamiento</Title>
        <Paragraph>La actividad física estimula el sistema músculo-esquelético y neuromotor. Al moverse regularmente, las personas mayores mejoran su movilidad, coordinación y fuerza funcional para las tareas diarias.</Paragraph>
        <SubTitle>Impacto de la actividad física en la salud</SubTitle>
        <List>
          <li>Osteoporosis: La Actividad física con carga ayuda a conservar la densidad ósea.</li>
          <li>Hipertensión: Reduce la tensión arterial sistólica y mejora la función vascular.</li>
          <li>Diabetes tipo II: favorece el uso de glucosa por el músculo, ayudando al control metabólico.</li>
          <li>Ánimo y bienestar: promueve neuroplasticidad y regula neurotransmisores como la serotonina.</li>
        </List>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 