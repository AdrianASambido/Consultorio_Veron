import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #fff;
  border-radius: 0;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 32px 18px 24px 18px;
  width: 100%;
  height: 100%;
  color: #1a3c5a;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 10px;
  text-align: center;
  font-size: 2.2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: #3985AF;
  margin-bottom: 18px;
  text-align: center;
  font-size: 1.1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #222;
  font-size: 1.08rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;

const Professor = () => {
  return (
    <Section>
      <Title>Profesor Patricio Verón</Title>
      <Subtitle>Director y responsable de SOMA Evaluaciones</Subtitle>
      <Content>
        <p>Licenciado en Educación Física, especialista en evaluación funcional y readaptación deportiva. Más de 15 años de experiencia ayudando a personas a alcanzar su máximo potencial físico y bienestar integral.</p>
      </Content>
    </Section>
  );
};

export default Professor;
