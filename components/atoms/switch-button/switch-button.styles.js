import styled from 'styled-components';

export const Container = styled.div`
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
