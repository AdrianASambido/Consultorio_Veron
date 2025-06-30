import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f8fb;
  border-radius: 12px;
  padding: 20px 10px;
  box-shadow: 0 2px 8px rgba(26,60,90,0.08);
  width: 220px;
`;

const Photo = styled.img`
  width: 90px;
  height: 90px;
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
  <InfoBox>
    <Photo src="/images/ejemplo3.jpg" alt="Foto cliente" />
    <Name>Profesor Patricio Verón</Name>
    <Matricula>Matrícula: 12345</Matricula>
    <Especialidad>Especialista en Rehabilitación y Readaptación</Especialidad>
  </InfoBox>
);

export default ClientInfo; 