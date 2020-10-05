import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  color: ${({ theme }) => theme.neutralColor[1]};
  padding: 16px 14px;
  background-color: ${({ theme }) => theme.neutralColor[7]};
  box-sizing: border-box;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  border-radius: 10px;
`;
