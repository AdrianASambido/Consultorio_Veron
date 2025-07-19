import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const NavContainer = styled.div`
  background-color:rgb(37, 108, 146);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;



const Logo = styled.img`
  height: 50px; 
  
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  padding-right: 20px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

const HeaderInfo = () => {
  return (
    <NavContainer>
      <Logo src="/imagenes/logo_negro_sin_fondo.png" alt="Logo" />
      <RightNav>
        <NavLinks>
          <NavLink href="#contacto">Turnos</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
          <NavLink href="#quienes-somos">Quiénes somos</NavLink>
        </NavLinks>
        <SocialLinks>
          <SocialIconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/in/patricio-veron-017479244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIconLink>
        </SocialLinks>
      </RightNav>
    </NavContainer>
  );
};

export default HeaderInfo;
