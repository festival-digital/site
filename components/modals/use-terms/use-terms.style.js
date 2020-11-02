import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;

  @media (min-width: 769px) {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const Header = styled.header`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ExitButton = styled.button`
  display: none;
  position: absolute;
  z-index: 20px;
  bottom: 100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  color: ${({ theme }) => theme.neutralColor[1]};
  padding: 8px 16px 8px 8px;
  box-sizing: border-box;
  border: 2px solid #000000;
  border-radius: 8px 8px 0px 0px;
  background: #8740C6;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;

  > span {
    margin-left: 8px;
  }

  @media (min-width: 769px) {
    display: inline-flex;
  }
`;

export const Modal = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #1D1D1D;
  padding: 24px 16px;
  width: 100%;
  height: 100%;

  @media (min-width: 769px) {
    width: 768px;
    height: 520px;
  }
`;
export const TermsWrapper = styled.div`
  height: 100%;
  margin-top: 24px;
  padding-bottom: 40px;
`;
