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
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 18px;
  text-align: center;
  font-size: 2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 800;
  padding-top: 0;
`;

const MapContainer = styled.div`
  flex-grow: 1;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(26,60,90,0.08);
  margin-top: 8px;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Location = () => {
  const mapSrc = "https://maps.google.com/maps?q=calle%204%20bis%20n%C3%BAmero%20329%20entre%20528%20bis%20y%20529%20tolosa&t=&z=15&ie=UTF8&iwloc=&output=embed";
  return (
    <Section id="ubicacion">
      <Title>¿Dónde estamos?</Title>
      <MapContainer>
        <MapFrame
          src={mapSrc}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapContainer>
    </Section>
  );
};

export default Location;
