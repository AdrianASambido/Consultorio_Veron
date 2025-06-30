import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100%;
  background: #1a3c5a;
  color: #fff;
  text-align: center;
  padding: 14px 0 10px 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-top: 30px;
`;

const Footer = () => (
  <FooterBar>
    @AdoGe Innovations. Todos los derechos reservados.
  </FooterBar>
);

export default Footer; 