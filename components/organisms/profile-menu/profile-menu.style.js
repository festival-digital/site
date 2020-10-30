import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-right: 20px;
`;

export const customButtonStyle = `
    background: linear-gradient(180deg, #EA5EBF 0%, #8740C6 100%, #8740C6 100%);
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 2px 0px #000000;
    border-radius: 10px;
    width: 48px;
    height: 48px;
`;

export const Menu = styled.ul`
  display: block;
  width: 245px;
  background: #404040;
  border-radius: 0px 10px 10px 10px;
  position: absolute;
  z-index: 30;
  box-shadow: 0px 2px 0px #000000;
  margin-top: 3px;
  overflow: hidden;
`;

export const MenuItem = styled.li`
  padding: 9px 0 9px 15px;
  border-bottom: 1px solid #1d1d1d;

  > a {
    display: flex;
  }
  &:hover {
    background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  }
`;

export const Icon = styled.img``;

export const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 15px;
`;
