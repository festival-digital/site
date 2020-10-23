import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border: 2px solid #000000;
  color: ${({ theme }) => theme.neutralColor[1]};
  background: ${({ theme }) => theme.brandColor.primary.gradient};
  box-sizing: border-box;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  cursor: pointer;

  & > span {
    vertical-align: middle;
    margin-right: 8px; 
  }

  ${(props) => props}
`;
