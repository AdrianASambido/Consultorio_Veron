import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;
const Title = styled.h1`
  color: #3985AF;
  font-size: 2.2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;
const Sub = styled.p`
  color: #1a3c5a;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export default function Reserva() {
  return (
    <Page>
      <Title>Reserva tu lugar</Title>
      <Sub>Ubicación: <b>OPEN IMAGE</b></Sub>
      <Sub>4 bis entre 528 bis y 529 - Tolosa</Sub>
    </Page>
  );
} 