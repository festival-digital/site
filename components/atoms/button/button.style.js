import styled from 'styled-components';

export const ButtonForm = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  color: #ffffff;
  background-color: ${({ color }) => color};
  text-transform: uppercase;
  font-style: Roboto;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  & > span {
    vertical-align: middle;
    margin-right: 8px;
  }

  &:disabled {
    background-color: ${({ disabledColor }) => disabledColor};
  }

  ${({ customStyle }) => customStyle}
`;
