import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 10px;
  border: solid 2px #000000;
  padding: 16px 0px;
  align-items: center;
  color: #ffffff;

  & > div:last-child {
    a {
      color: #EA5EBF;
      font-weight: 500;
    }
    
    & > span {
      display: none;
    }
  }
`;

export const LinkText = styled.a`
  margin: 0px 16px;
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;
