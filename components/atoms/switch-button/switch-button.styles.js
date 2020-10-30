import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45px 12px;
  grid-row-gap: 6px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  border: 2px solid #000000;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  overflow: hidden;
  background: #404040;
  margin-bottom: 10px;
`;

export const Button = styled.div`
  flex-grow: 1;
  text-align: center;

  & input:checked ~ label {
    border: 2px solid #000000;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #000000;
    background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

export const ErrorMessage = styled.p`
  text-align: left;
  color: #ff2626;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
`;
