import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterBar = styled.footer`
  width: 100%;
  background: #3985AF;
  color: #fff;
  text-align: center;
  padding: 12px 0 12px 0;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  margin-top: 0;
`;
const SocialLinks = styled.div`
  margin: 12px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 22px;
`;
const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.6rem;
  transition: color 0.2s;
  &:hover {
    color: #B5E9FC;
  }
`;
const Footer = () => (
  <FooterBar>
    © 2024 AdoGe Innovations. Todos los derechos reservados.<br/>
    <SocialLinks>
      <SocialIcon href="https://www.instagram.com/soma.readaptacion?igsh=MTlna2d2bGRuM3Fyag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/patricio-veron-017479244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
    </SocialLinks>
  </FooterBar>
);

export default Footer;
