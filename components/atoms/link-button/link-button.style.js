import styled from 'styled-components';

export const ButtonForm = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  color: ${({ color }) => color};
  background-color: transparent;
  text-transform: uppercase;
  font-style: Roboto;
  font-size: 14px;
  font-weight: bold;
`;
