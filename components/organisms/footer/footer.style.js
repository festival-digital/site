import styled from 'styled-components';

export const Footer = styled.footer``;

export const IDAContent = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(180deg, #2E08C2 0%, #A439D7 100%);

`;

export const IDAContentWrapper = styled.div`
  display: inline-grid;
  width: 100%;
  max-width: 1024px;
  padding: 20px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 240px;  
  }
`;

export const ContentAbout = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IDASubtitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 16px;
  color: #ffffff;
`;

export const IDALink = styled.a`
  display: block;
  padding: 16px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

export const IDAText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 24px;

  @media (min-width: 769px) {
    margin-bottom: 0px;
  }
`;

export const WrapperButtonIDA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  

  @media (min-width: 769px) {
    max-width: 240px;  
  }

  & > button {
    width: 100%;
  }
`;

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
