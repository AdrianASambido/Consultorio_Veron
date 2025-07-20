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

export default function Beneficios() {
  return (
    <Page>
      <Title>Beneficios para tu cuerpo</Title>
      <List>
        <li>Huesos más fuertes → estimula la formación ósea y previene osteoporosis.</li>
        <li>Mejor equilibrio → activa reflejos posturales y reduce el riesgo de caídas.</li>
        <li>Control de azúcar → mejora la sensibilidad a la insulina, útil frente a diabetes tipo II.</li>
      </List>
      <SubTitle>Cómo te ayuda tu corazón y mente</SubTitle>
      <p>El ejercicio físico regular mejora la salud cardiovascular y contribuye a estabilizar la presión arterial. Además, favorece la liberación de endorfinas, lo que ayuda a mejorar el estado de ánimo y disminuir el estrés.</p>
    </Page>
  );
} 