import styled from 'styled-components';

export const Footer = styled.footer``;

export const IDAContent = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(180deg, #2e08c2 0%, #a439d7 100%);
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
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 30px;
  margin-right  : 30px;

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
  margin-top: 30px;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const BrandIcon = styled.img`
  width: 120px;
  margin-top: 30px;

  @media (min-width: 845px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const Icon = styled.img`
  width: 32px;
  margin-left: 16px;
  margin-right: 16px;
  vertical-align: middle;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-bottom: 30px;

  @media (min-width: 1200px) {
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Organization = styled.div`
  width: 100%;
  padding: 30px;

  @media (min-width: 1024px) {
    margin: 0;
    text-align: center;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const IconOrganization = styled.img`
  height: 40px;
  max-width: 100px;
  object-fit: contain;
  vertical-align: middle;
  margin-top: 16px;

  & + & {
    margin-left: 16px;
  }
`;

export const ContentOrganization = styled.div`
  display: block;
  margin-bottom: 30px; 

  @media (min-width: 1077px) {
    display: inline-flex;
    align-items: center;
    padding-left: 16px;
  }
`;

export const ContentIcon = styled.div`
  width: 100;
  display: flex;
  flex-wrap: wrap;
  
  @media (min-width: 1077px) {
    margin: 0;
    margin-left: 24px;
  }
`;

export const TextOrganization = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #bfbfbf;
  margin-top: 16px;
`;
