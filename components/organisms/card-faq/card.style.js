import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ opened }) => `${!opened ? '#404040' : '#8740C6'}`};
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  height: 66px;
  padding: 0 24px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 16px;
  display: flex;
  z-index: 30;
`;
export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  vertical-align: middle;
  padding: 20px 0;

  &::before {
    content: ${({ opened }) => `${!opened ? '+' : '-'}`};
    color: #ffffff;
    font-size: 24px;
    margin-right: 13px;
  }
`;

export const Icon = styled.span`
  font-size: 28px;
  margin-right: 13px;
`;

export const Description = styled.div`
  position: relative;
  top: -6px;
  background: #000000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #ffffff;
  padding: 16px;
  margin-bottom: 10px;
`;
