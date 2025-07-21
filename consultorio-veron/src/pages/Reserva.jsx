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
const Sub = styled.p`
  color: #1a3c5a;
  font-size: 1.2rem;
  margin-bottom: 1rem;
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
const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 1.5rem 0 0 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(26,60,90,0.08);
`;
const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

export default function Reserva() {
  return (
    <PageWrapper>
      <Card>
        <Title>Reserva tu lugar</Title>
        <Sub>Ubicación: <b>4 bis entre 528 bis y 529 - Tolosa</b></Sub>
        <MapContainer>
          <MapFrame
            src="https://maps.google.com/maps?q=calle%204%20bis%20n%C3%BAmero%20329%20entre%20528%20bis%20y%20529%20tolosa&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación SOMA"
          />
        </MapContainer>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 