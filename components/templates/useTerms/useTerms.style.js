import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperSearch = styled.div`
  margin: 24px 0;

  @media (min-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
  margin: 24px 0;

  @media (min-width: 650px) {
    margin: 0;
  }
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
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media (min-width: 680px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const Textarea = styled.textarea`
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
  word-wrap: break-word;
  resize: none;

  &:focus {
    padding: 10px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #000000;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  text-align: left;
  color: #ff2626;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;
export const TextareaBase = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const customButtonStyle = `
 @media (min-width: 650px) {
    max-width: 221px;
    align-self: flex-end;
  }
`;

export const customInputStyle = `
 @media (min-width: 650px) {
     max-width: 300px;
     margin-right: 30px;
  }
`;
