import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  background-color: #333;
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const InfoText = styled.p`
  margin: 5px 0;
  color: #fff;
`;

const HeaderInfo = () => {
  return (
    <InfoContainer>
      <InfoText>Dirección: Calle Falsa 123, Springfield</InfoText>
      <InfoText>Teléfonos: (123) 456-7890 / (098) 765-4321</InfoText>
      <InfoText>Horarios de atención: Lunes a Viernes de 9:00 a 18:00</InfoText>
    </InfoContainer>
  );
};

export default HeaderInfo;
