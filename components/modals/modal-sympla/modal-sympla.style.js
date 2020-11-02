import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => {
    const { opened } = props;
    return !opened ? 'none' : 'flex';
  }};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 30;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.brandColor.secondary.darkest};
  padding: 24px 16px;
  width: 100%;

  @media (min-width: 600px) {
    /* background-image: url('/static/images/sympla-modal-background.png'),
      linear-gradient(0deg, red 9.9%, blue 34.38%, rgba(29, 29, 29, 0) 85.94%);
    background-size: 100%;
    background-repeat: no-repeat; */
    text-align: center;
  }
`;
export const BackgroundHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 300px;
  border: none;
  z-index: 0;
  @media (min-width: 600px) {
    background-image: url('/static/images/sympla-modal-background.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ContentButtonGoBack = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const WrapperLogo = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: center;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    & img:nth-child(1) {
      height: 55px;
    }

    & p {
      font-size: 40px;
    }

    & img:nth-child(3) {
      height: 79px;
    }
  }
`;

export const Brand = styled.img`
  height: 27px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      #1d1d1d 58%,
      rgba(29, 29, 29, 0.766355) 62%,
      transparent 80%
    );
    z-index: -1;
  } */

  @media (min-width: 600px) {
    max-width: 320px;
  }
  z-index: 1;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.neutralColor[1]};

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const NavigationLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brandColor.fourtiary.medium};
`;

export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: ${({ theme }) => theme.neutralColor[1]};
`;

export const Icon = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0 13px;
  color: white;
`;
