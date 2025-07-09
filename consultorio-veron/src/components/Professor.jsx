import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #eaf2fa;
  border-radius: 10px;
  padding: 24px 18px;
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 12px;
  text-align: center;
  font-size: 2.5rem;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Professor = () => {
  return (
    <Section>
      <Title>Profesor Patricio Verón</Title>
      <Content>
        <p>Información sobre el Profesor Patricio Verón.</p>
      </Content>
    </Section>
  );
};

export default Professor;
