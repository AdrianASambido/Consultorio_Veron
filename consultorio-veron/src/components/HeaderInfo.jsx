import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1) translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateY(-150px) scale(1.5) translateX(-20px);
    opacity: 0;
  }
`;

const AnimatedBackground = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #1a3c5a;
  
  .squares {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 5px;
      height: 5px;
      background: rgba(255, 255, 255, 0.2);
      animation: ${bubbleAnimation} 25s linear infinite;
      bottom: -150px;
      border-radius: 50%;
      
      &:nth-child(1) {
        left: 25%;
        animation-delay: 0s;
      }
      
      &:nth-child(2) {
        left: 10%;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      
      &:nth-child(3) {
        left: 70%;
        animation-delay: 4s;
      }
      
      &:nth-child(4) {
        left: 40%;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      
      &:nth-child(5) {
        left: 65%;
        animation-delay: 0s;
      }
      
      &:nth-child(6) {
        left: 75%;
        animation-delay: 3s;
      }
      
      &:nth-child(7) {
        left: 35%;
        animation-delay: 7s;
      }
      
      &:nth-child(8) {
        left: 50%;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      
      &:nth-child(9) {
        left: 20%;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      
      &:nth-child(10) {
        left: 85%;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
`;

const NavContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const SomaLogo = styled.h1`
  color: #fff;
  font-size: 32px;
  margin: 0;
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
    <AnimatedBackground>
      <NavContainer>
        <SomaLogo>SOMA</SomaLogo>
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
            <SocialIconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIconLink>
          </SocialLinks>
        </RightNav>
      </NavContainer>
      <ul className="squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </AnimatedBackground>
  );
};

export default HeaderInfo;
