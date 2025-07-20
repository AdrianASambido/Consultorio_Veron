import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderInfo from './components/HeaderInfo';
import Inicio from './pages/Inicio';
import Beneficios from './pages/Beneficios';
import ImportanciaEntrenamiento from './pages/ImportanciaEntrenamiento';
import Recomendaciones from './pages/Recomendaciones';
import Fuentes from './pages/Fuentes';
import Reserva from './pages/Reserva';
import Footer from './components/Footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f8fb;
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
`;

const FooterBar = styled.footer`
  width: 100%;
  background: #3985AF;
  color: #fff;
  text-align: center;
  padding: 12px 0 12px 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 1.1rem;
  margin-top: 48px;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <HeaderInfo />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/importancia" element={<ImportanciaEntrenamiento />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/fuentes" element={<Fuentes />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
      <FooterBar>
        <Footer />
      </FooterBar>
    </Router>
  );
}

export default App;
