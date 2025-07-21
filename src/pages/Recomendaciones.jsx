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
const List = styled.ul`
  color: #3985AF;
  font-size: 1.18rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding-left: 1.2em;
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

export default function Recomendaciones() {
  return (
    <PageWrapper>
      <Card>
        <Title>Recomendaciones SOMA</Title>
        <List>
          <li>2 a 3 veces por semana: Ejercicios de fuerza, adaptados al nivel del cada persona</li>
          <li>Trabajo de equilibrio y control postural, orientado a la autonomía y a la prevención de caídas.</li>
          <li>Ejercicios de locomoción controlada, con patrones de marcha y desplazamientos en diferentes direcciones y contextos.</li>
        </List>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 