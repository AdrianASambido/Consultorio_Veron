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

export default function Beneficios() {
  return (
    <PageWrapper>
      <Card>
        <Title>Beneficios para tu cuerpo</Title>
        <List>
          <li>Huesos más fuertes → estimula la formación ósea y previene osteoporosis.</li>
          <li>Mejor equilibrio → activa reflejos posturales y reduce el riesgo de caídas.</li>
          <li>Control de azúcar → mejora la sensibilidad a la insulina, útil frente a diabetes tipo II.</li>
        </List>
        <SubTitle>Cómo te ayuda tu corazón y mente</SubTitle>
        <Paragraph>El ejercicio físico regular mejora la salud cardiovascular y contribuye a estabilizar la presión arterial. Además, favorece la liberación de endorfinas, lo que ayuda a mejorar el estado de ánimo y disminuir el estrés.</Paragraph>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 