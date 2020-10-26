import styled from 'styled-components';

export const Header = styled.header`
  position: ${({ fixed }) => !fixed ? 'relative' : 'fixed'};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000000;
  padding: 15px 20px;
  @media (min-width: 789px) {
    padding: 20px 40px;
  }
  z-index: 20;
`;

export const Brand = styled.img`
  height: 16px;

  @media (min-width: 789px) {
    height: 36px;
  }
`;

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 789px) {
    display: inline-flex;
  }
`;

export const BurgerIcon = styled.img`
  width: 24px;
  margin-left: 24px;

  @media (min-width: 769px) {
    display: none;
  }
`;
