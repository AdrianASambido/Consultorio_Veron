import styled from 'styled-components';

export const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 18px auto;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
`;

export const LogoImg = styled.img`
  width: 100%;
  max-height: 230px;
  height: auto;
`;

export const ContentBox = styled.div`
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

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  flex: 2 1 400px;
  min-width: 320px;
`;

export const SideBar = styled.div`
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 220px;
`; 