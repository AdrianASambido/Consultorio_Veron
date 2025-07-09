import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #eaf2fa;
  border-radius: 10px;
  padding: 12px 18px;
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 12px;
  text-align: center;
  font-size: 2.5rem;
`;

const MapContainer = styled.div`
  flex-grow: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const Location = () => {
  const mapSrc = "https://maps.google.com/maps?q=4%20bis%20entre%20528%20bis%20y%20529%2C%20Tolosa&t=&z=15&ie=UTF8&iwloc=&output=embed";
  return (
    <Section id="ubicacion">
      <Title>Ubicación</Title>
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
