import React from 'react';
import Carousel from './components/Carousel';
import VideoPreview from './components/VideoPreview';
import ClientInfo from './components/ClientInfo';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderInfo from './components/HeaderInfo';
import styled, { createGlobalStyle } from 'styled-components';
/*esto modifica todo el cuerpo del html/ 
* Centra todo (por display: flex, align-items: center, justify-content: center).
* Podés sacar eso si querés que el logo quede a la izquierda en lugar de centrado.*/
const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f8fb;
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
/*modifica el logo */
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 18px auto;
  width: 110%;
  max-width: 1110px;
  box-sizing: border-box;
`;
/*modifica el tamaño del logo */
const LogoImg = styled.img`
  width: 100%;
  max-height: 230px;
  height: auto;
`;
/*modifica el contenedor principal de toda la app.*/
const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/*modifica el cuadro blanco principal (donde está el carrusel, video, servicios, etc.)*/
const ContentBox = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 32px 18px 18px 18px;
  margin-top: 0;
  margin-bottom: 30px;
  width: 100%;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
/*modifica la fila que tiene el carrucel y los videos (lado a lado del descktop) */
const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;
/*modifica el espacio que ocupa el carrucel*/
const CarouselWrapper = styled.div`
  width: 100%;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderInfo />
      <LogoBox>
        <LogoImg src="/images/logo_consultorio.jpeg" alt="Logo Consultorio" />
      </LogoBox>
      <MainLayout>
        <ContentBox>
          <TopSection>
            <CarouselWrapper>
              <Carousel />
            </CarouselWrapper>
          </TopSection>
          <SideBar>
            <ClientInfo />
            <VideoPreview />
          </SideBar>
          <Services />
          <Contact />
        </ContentBox>
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
