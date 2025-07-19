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
    /* Eliminar centrado global para evitar problemas de alineación */
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    padding: 0;
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
  align-items: stretch;
  justify-content: center;
`;
/*modifica el cuadro blanco principal (donde está el carrusel, video, servicios, etc.)*/
const ContentBox = styled.div`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const SectionCard = styled.section`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 32px 24px;
  margin: 32px 0 0 0;
  width: 90vw;
  max-width: 1100px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 18px 6vw;
    width: 98vw;
  }
`;
/*modifica la fila que tiene el carrucel y los videos (lado a lado del descktop) */
const TopSection = styled.div`
  width: 100%;
  margin-bottom: 0;
`;
/*modifica el espacio que ocupa el carrucel*/
const CarouselWrapper = styled.div`
  width: 100%;
`;
/*Modifica el contenedor de los videos*/
const SideBar = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-top: 32px;
  align-items: stretch;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 18px;
    margin-top: 18px;
  }
`;
// Banner llamativo con gradiente y texto
const Banner = styled.div`
  width: 100vw;
  min-width: 100vw;
  margin: 0;
  padding: 100px 32px 80px 32px;
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
    padding: 60px 16px 40px 16px;
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
const FooterBar = styled.footer`
  width: 100vw;
  background: #3985AF;
  color: #fff;
  text-align: center;
  padding: 32px 0 18px 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 1.1rem;
  margin-top: 48px;
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
      <Services />
      <MainLayout>
        <ContentBox>
          <SectionCard>
            <TopSection>
              <CarouselWrapper>
                <Carousel />
              </CarouselWrapper>
            </TopSection>
          </SectionCard>
          <SectionCard>
            <SideBar>
              <ClientInfo />
              <Location />
            </SideBar>
          </SectionCard>
          <SectionCard>
            <VideoPreview />
          </SectionCard>
          <SectionCard>
            <Contact />
          </SectionCard>
        </ContentBox>
        <FooterBar>
          <Footer />
        </FooterBar>
      </MainLayout>
    </>
  );
}

export default App;
