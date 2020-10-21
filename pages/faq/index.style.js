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

export const Contact = styled.div`
  display: block;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    @media (min-width: 650px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

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

export const Input = styled.input`
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  background: #404040;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  display: inline-flex;
  padding: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-right: 10px;

  &:focus {
    margin-right: 10px;
    padding: 10px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #000000;
  }

  @media (min-width: 650px) {
    max-width: 308px;
  }
`;

export const Textarea = styled.input.attrs({ type: 'textarea' })`
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  background: #404040;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  display: block;
  padding: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: 140px;

  &:focus {
    padding: 10px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #000000;
  }
`;

export const customButtonStyle = `
border: 2px solid #EA5EBF;
box-sizing: border-box;
box-shadow: 0px 2px 0px #EA5EBF;
border-radius: 10px;
background: #FF9AE0;

 @media (min-width: 650px) {
    max-width: 221px;
    align-self: flex-end;
  }
`;
