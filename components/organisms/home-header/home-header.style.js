import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #000000;
  padding: 15px 20px;
  
  @media (min-width: 789px) {
    padding: 20px 40px;
  }
`;

export const Brand = styled.img`
  height: 16px;

  @media (min-width: 789px) {
    height: 36px;
  }
`;

export const IDAContent = styled.div`
  display: none;

  @media (min-width: 789px) {
    display: inline-block;
  }
`;

export const Navigation = styled.ul`
  display: none;

  @media (min-width: 789px) {
    display: inline-flex;
  }
`;

export const NavigationItem = styled.li`
  margin-right: 24px;
  text-transform: uppercase;
  
  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.brandColor.fourtiary.medium};
  }
`;

export const BurgerIcon = styled.img`
  width: 24px;
  margin-left: 24px;

  @media (min-width: 769px) {
    display: none;
  }
`;
