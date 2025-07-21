import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eaf2fa;
  border-radius: 10px;
  padding: 12px 18px;
  width: 100%;
  height: 100%;
  color: #000;
  box-sizing: border-box;
`;

const Photo = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1a3c5a;
  margin-bottom: 12px;
`;

const Name = styled.h3`
  margin: 0;
  color: #1a3c5a;
  font-size: 1.1rem;
`;

const Matricula = styled.p`
  margin: 4px 0 0 0;
  font-size: 0.95rem;
  color: #3b3b3b;
`;

const Especialidad = styled.p`
  margin: 2px 0 0 0;
  font-size: 0.9rem;
  color: #2a6ebd;
`;

const ClientInfo = () => (
  <InfoBox id="quienes-somos">
    <Photo src="/images/cara_cliente.jpeg" alt="Foto cliente" />
    <Name>Profesor Patricio Verón</Name>
    <Matricula>Matrícula: 11111</Matricula>
    <Especialidad>Especialista en Readaptación físico deportiva</Especialidad>
  </InfoBox>
);

export default ClientInfo;
