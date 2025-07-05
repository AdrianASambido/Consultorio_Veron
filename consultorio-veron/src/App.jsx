import React from 'react';
import Carousel from './components/Carousel';
import VideoPreview from './components/VideoPreview';
import ClientInfo from './components/ClientInfo';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeaderInfo from './components/HeaderInfo';
import { GlobalStyle } from './styles/GlobalStyles';
import {
  MainLayout,
  LogoBox,
  LogoImg,
  ContentBox,
  TopSection,
  CarouselWrapper,
  SideBar
} from './styles/LayoutStyles';
import { IMAGE_PATHS } from './utils/constants';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderInfo />
      <LogoBox>
        <LogoImg src={IMAGE_PATHS.LOGO} alt="Logo Consultorio" />
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
