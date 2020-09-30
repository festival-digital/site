import styled from 'styled-components';

export const Content = styled.section`
  display: grid;
  min-height: 100%;
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  padding: 32px 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 28.13px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  line-height: 19.2px;
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: grid;
    grid-gap: 16px;
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-gap: 24px;
`;

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #771F5C;
  color: #EA5EBF;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:disabled {
    background-color: #CCC;
    color: #808080;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 13px;
  top: calc(50% - 12px);
`;

export const Input = styled.input`
  width: 100%:
  height: 48px;
  border: 2px solid #808080;
  border-radius: 
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:focus {
    border: 2px solid #808080;
  }
`;
