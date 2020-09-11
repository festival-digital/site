import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 15px;
  border-bottom: 1px solid #000000;
`;

export const Brand = styled.img`
  height: 40px;
`;

export const BurgerIcon = styled.img`
  width: 24px;
  margin-left: 24px;

  @media (min-width: 769px) {
    display: none;
  }
`;


