import styled from 'styled-components';

export const Content = styled.section`
  position: relative;
  display: grid;
  background: linear-gradient(180deg, #9043C5 0.33%, #B480D8 31.12%, #DCC4ED 68.81%, #F5EFFA 96.13%, #FFFFFF 110.03%);
  min-height: 100vh;
  grid-template-rows: 1fr auto;
  grid-gap: 16px;
  text-align: center;
  overflow: hidden;
  
`;

export const Title = styled.h1`
  position: relative;
  padding: 16px;
  margin-top: 10vh;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 28.13px;
  margin-bottom: 4px;
  color: #ffffff;
  z-index: 20;
`;

export const Apresentation = styled.div`
  position: relative;
  z-index: 20;
`;

export const ActionWrapper = styled.div`
  padding: 16px;
  position: relative;
  text-align: center;
  background-color: #ffffff;
  z-index: 11;

  @media (min-width: 768px) {
    padding: 36px 16px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 11;
  width: 100%;
  max-width: 420px;

  @media (min-width: 768px) {
    top: -60px;
  }
`;

export const Brand = styled.img`
  height: 70px;
`;

export const Illustration = styled.img`
  display: inline-flex;
  position: absolute;
  width: 100%;
  justify-self: center;
  bottom: calc(100% - 2px);
  left: 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopIllustration = styled.img`
  display: none;
  position: absolute;
  width: 100%;
  justify-self: center;
  bottom: calc(100% - 2px);
  left: 0;
  z-index: 10;

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;
