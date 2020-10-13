import styled from 'styled-components';

export const Content = styled.section`
  position: relative;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
  grid-gap: 16px;
  padding: 32px 16px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 28.13px;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const Apresentation = styled.div`
`;

export const ActionWrapper = styled.div`
  position: relative;
  z-index: 11;
`;

export const Brand = styled.img`
  height: 70px;
`;

export const Illustration = styled.div`
  position: absolute;
  width: 100%;
  height: 337px;
  bottom: 0;
  z-index: 10;
  background-image: url('/static/icons/signup-illustration.svg');
  background-position: center;
  background-size: 141% 141%;
  background-repeat: no-repeat;
`;
