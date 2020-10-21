import styled from 'styled-components';

export const Footer = styled.footer``;

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: block;
  margin: 24px auto;
  box-sizing: border-box;

  @media (min-width: 845px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const WrapperButtonIDA = styled.div`
  text-align: center;
  margin: 16px;

  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    text-align: center;
  }
`;

export const IDAContent = styled.div`
  margin-top: 60px;
  width: 100%;
  display: block;
  padding: 16px;
  background: linear-gradient(180deg, #2e08c2 0%, #a439d7 100%);
`;

export const ContentAbout = styled.div``;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const Navigation = styled.ul`
  border-bottom: 1px solid #ffffff;
  display: block;
  padding-bottom: 10px;
  margin: 40px 30px;

  @media (min-width: 845px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const NavigationItem = styled.li`
  text-transform: uppercase;
  margin-bottom: 15px;
  text-align: center;
  display: block;

  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.brandColor.fourtiary.medium};
  }

  @media (min-width: 845px) {
    display: inline-flex;
    margin-bottom: 0;
    margin-right: 18px;
  }
`;

export const MediaSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandIcon = styled.img`
  width: 132px;
  height: 45px;
  margin: 30px 0;

  @media (min-width: 845px) {
    margin: 0;
  }
`;

export const Icon = styled.img`
  margin: 10px;
  margin-left: 30px;
  vertical-align: middle;

  @media (min-width: 845px) {
    margin-left: 24px;
    justify-content: space-between;
  }
`;

export const Organization = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 845px) {
    margin-top: 40px;
    margin: 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
