import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderInfo from './components/HeaderInfo';
import Inicio from './pages/Inicio';
import Beneficios from './pages/Beneficios';
import ImportanciaEntrenamiento from './pages/ImportanciaEntrenamiento';
import QuienesSomos from './pages/Recomendaciones';
import Infancia from './pages/Fuentes';
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

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/infancia" element={<Infancia />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
      <FooterBar>
        <Footer />
      </FooterBar>
    </Router>
  );
}

export default App;
