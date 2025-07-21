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
  color: #1a3c5a;
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

export default function Fuentes() {
  return (
    <PageWrapper>
      <Card>
        <Title>Fuentes</Title>
        <List>
          <li><b>Soberanes Fernández, R. et al. (2009).</b> Funcionalidad en adultos mayores y su calidad de vida. Revista Médica del ISSSTE.</li>
          <li><b>García Molina, M. et al. (2010).</b> Beneficios de la actividad física en adultos mayores. Revista Andaluza de Medicina del Deporte.</li>
          <li><b>Poblete Valderrama, G. (2016).</b> Nivel de actividad física y funcionalidad en adultos mayores. Tesis, Universidad Austral de Chile.</li>
          <li><b>Fragala, M. S. et al. (2017).</b> Entrenamiento de fuerza para adultos mayores. American College of Sports Medicine.</li>
          <li><b>Aranda, R. M. (2018).</b> Actividad física y calidad de vida en el adulto mayor. Una revisión narrativa. Revista Habanera de Ciencias Médicas, 17(5), 813</li>
        </List>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 