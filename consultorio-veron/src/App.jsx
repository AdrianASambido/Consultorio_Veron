import React from 'react';
import Carousel from './components/Carousel';
import VideoPreview from './components/VideoPreview';
import ClientInfo from './components/ClientInfo';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderInfo from './components/HeaderInfo';
import Location from './components/Location';
import styled, { createGlobalStyle } from 'styled-components';
import { FaHeartbeat } from 'react-icons/fa';
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
  padding: 32px;
  margin-top: 0;
  margin-bottom: 30px;
  width: 100%;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
/*modifica la fila que tiene el carrucel y los videos (lado a lado del descktop) */
const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 30px;
  justify-content: center;
  width: 100%;
`;
/*modifica el espacio que ocupa el carrucel*/
const CarouselWrapper = styled.div`
  width: 100%;
`;
/*Modifica el contenedor de los videos*/
const SideBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  margin-top: 30px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
// Banner llamativo con gradiente y texto
const Banner = styled.div`
  width: 100vw;
  min-width: 100vw;
  margin: 0;
  padding: 60px 0 80px 0;
  box-sizing: border-box;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #B5E9FC;
  box-shadow: none;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 768px) {
    padding: 60px 0 40px 0;
  }
`;
const BannerIcon = styled(FaHeartbeat)`
  color: #3985AF;
  font-size: 5.5rem;
  margin-bottom: 32px;
`;
const BannerTitle = styled.h1`
  color: #3985AF;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0 0 22px 0;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.1;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;
const BannerSubtitle = styled.h2`
  color: #3985AF;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
  letter-spacing: 0.5px;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderInfo />
      <Banner>
        <BannerIcon />
        <BannerTitle>Impulsando tu bienestar físico y mental</BannerTitle>
        <BannerSubtitle>Evaluaciones, entrenamiento y salud en un solo lugar</BannerSubtitle>
      </Banner>
      <MainLayout>
        <ContentBox>
          <TopSection>
            <CarouselWrapper>
              <Carousel />
            </CarouselWrapper>
          </TopSection>
          <Services />
          <SideBar>
            <ClientInfo />
            <Location />
          </SideBar>
          <VideoPreview />
          <Contact />
        </ContentBox>
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
