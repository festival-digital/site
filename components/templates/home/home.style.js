import styled from 'styled-components';

export const PageTemplate = styled.div``;

export const InitialWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #000;
  min-height: 100vh;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0px;
    left: 0;
    background: linear-gradient(0deg, #000000 34%, rgba(0, 0, 0, 0) 84.68%);
    z-index: 11;
  }

  :before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 65%;
    top: 0px;
    left: 0;
    background-image: url('/static/images/home-bg.jpg');
    background-size: cover;
    background-position: center;
    z-index: 10;
  }

  @media (min-width: 769px) {
    background-image: url('/static/images/home-bg.jpg');
    background-size: cover;
    background-position: center;

    &:before {
      display: none;
    }

    &:after {
      background: linear-gradient(
        89.99deg,
        #000000 21%,
        rgba(0, 0, 0, 0) 90.68%
      );
    }
  }
`;

export const ApresentationContent = styled.div`
  positiom: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-self: center;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
  z-index: 12;

  @media (min-width: 769px) {
    padding: 48px;
  }
`;

export const Title = styled.h1`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.4em;
  color: #ffffff;

  @media (min-width: 769px) {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    line-height: 100%;
    color: #ffffff;
  }

  & > span {
    visibility: hidden;
  }
`;

export const OasiLogo = styled.img`
  display: block;
  margin-top: 8px;
  height: 43px;

  @media (min-width: 769px) {
    margin-top: 24px;
    height: 135px;
  }
`;

export const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 24px;
  max-width: 400px;

  @media (min-width: 769px) {
    margin-top: 48px;
  }
`;

export const DownButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & > span {
    display: none;
  }

  @media (min-width: 769px) {
    width: 48px;
    margin-top: 48px;
  }
`;

export const DownIllustration = styled.img`
  position: relative;
  z-index: 12;
  width: 48px;
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

export const IDAContent = styled.div`
  width: 100%;
  text-align: center;
  background: linear-gradient(180deg, #2e08c2 0%, #a439d7 100%);
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

export const AboutPlataform = styled.section``;

export const AboutPlataformRow = styled.div`
  display: grid;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    ${({ reverse }) => {
      if (reverse) {
        return `
          & > div {
            grid-column-start: 1;
            grid-row-start: 1;
          }

          & > img {
            grid-column-start: 2;
            grid-row-start: 1;
          }
        `;
      }
    }}
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (min-width: 769px) {
    height: 320px;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  padding: 20px 10px;
  @media (min-width: 769px) {
    left: 44px;
  }
`;

export const AboutTitle = styled.h3`
  position: relative;
  z-index: 10;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
`;

export const AboutTitleIllusttration = styled.img`
  display: none;
  position: absolute;
  top: -44px;
  left: -44px;
  width: 88px;
  z-index: 1;

  @media (min-width: 769px) {
    display: inline;
  }
`;

export const AboutDescription = styled.p`
  position: relative;
  z-index: 10;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  max-width: 480px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 16px;

  @media (min-width: 769px) {
    margin-top: 24px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  object-fit: cover;
  height: 230px;

  @media (min-width: 769px) {
    height: 320px;
  }
`;

export const AboutOasi = styled.div`
  display: flex;
  width: 100%;
  background-color: #000000;
  background-image: url('/static/images/mosaic.svg');
  background-size: cover;
  background-position: 0%;
  align-items: center;

  @media (min-width: 769px) {
    height: 360px;
  }
`;

export const AboutOasiWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutOasiVideo = styled.div`
  width: 100%;
  max-width: 552px;
  height: 240px;
  margin-top: 32px;

  & > iframe {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 769px) {
    margin-top: 0;
  }
`;

export const AboutOasiTextWrapper = styled.div`
  padding: 32px 20px;

  @media (min-width: 769px) {
    padding: 0;
    margin-left: 128px;
  }
`;

export const AboutOasiTitle = styled.h3`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const AboutOasiDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
`;

export const NextEvent = styled.div`
  position: relative;
  padding: 40px 20px 420px 20px;
  background-color: #000000;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 420px;
    bottom: 0px;
    left: 0;
    background-image: url('${({ backgroundImg }) => backgroundImg}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 9;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 420px;
    bottom: 0px;
    left: 0;
    background: linear-gradient(179.96deg, #000000 8%, rgba(0, 0, 0, 0) 31.68%);
    z-index: 10;
  }

  @media (min-width: 769px) {
    padding: 60px 60px 60px 154px;

    &:after {
      top: 0;
      height: 100%;
      background: linear-gradient(
        89.99deg,
        #000000 31%,
        rgba(0, 0, 0, 0) 90.68%
      );
    }

    &:before {
      bottom: 0;
      height: 100%;
    }
  }
`;

export const NextEventInfoWrapper = styled.div`
  position: relative;
  z-index: 15;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 769px) {
    padding-left: 0;
    padding-right: 0;
    max-width: 500px;
  }
`;

export const NextEventTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #ff9ae0;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const NextEventMosaicIllustration = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 13;
`;

export const NextEventSubtitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const NextEventDate = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const NextEventTags = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ff9ae0;
  margin-bottom: 20px;
`;

export const NextEventDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const NextEventActionsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  position: relative;
  z-index: 15;

  @media (min-width: 769px) {
    grid-template-columns: 200px 200px;
    max-width: 500px;
  }
`;
