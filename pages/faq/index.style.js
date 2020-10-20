import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  max-width: 1040px;
  margin: 0 auto;
`;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
  display: block;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const customButtonStyle = `
border: 2px solid #EA5EBF;
box-sizing: border-box;
box-shadow: 0px 2px 0px #EA5EBF;
border-radius: 10px;
background: #FF9AE0;
`;
