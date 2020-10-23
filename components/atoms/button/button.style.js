import styled from 'styled-components';

export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

  &:disabled {
    background-color: ${({ disabledColor }) => disabledColor};
    border-width: 2px;
    border-style: solid;
    border-color: ${({ color }) => color};
    box-shadow: 0px 2px 0px ${({ color }) => color};
  }

  & span:first-child {
    margin-right: 5px;
  }

  ${({ customStyle }) => customStyle}
`;
