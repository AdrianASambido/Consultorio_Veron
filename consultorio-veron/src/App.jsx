import React from 'react';
import Carousel from './components/Carousel';
import VideoPreview from './components/VideoPreview';
import ClientInfo from './components/ClientInfo';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f8fb;
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 18px;
`;

const LogoImg = styled.img`
  width: 140px;
  max-width: 90vw;
  height: auto;
`;

const MainLayout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 32px 18px 18px 18px;
  margin-top: 0;
  margin-bottom: 30px;
  width: 100%;
  max-width: 900px;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: center;
`;

const CarouselWrapper = styled.div`
  flex: 2 1 400px;
`;

const SideBar = styled.div`
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <LogoBox>
        <LogoImg src="/images/logo.png" alt="Logo Consultorio" />
      </LogoBox>
      <MainLayout>
        <ContentBox>
          <TopSection>
            <CarouselWrapper>
              <Carousel />
            </CarouselWrapper>
            <SideBar>
              <ClientInfo />
              <VideoPreview />
            </SideBar>
          </TopSection>
          <Services />
          <Contact />
        </ContentBox>
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
