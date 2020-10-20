import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 33px;
  border-radius: 10px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.neutralColor[7]};
  color: ${({ theme }) => theme.neutralColor[1]};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
`;
