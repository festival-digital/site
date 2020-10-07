import styled from 'styled-components';
import ModalWrapper from 'components/organisms/modal-wrapper/modal-wrapper';

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

export const Brand = styled.img`
  height: 27px;

  @media (min-width: 789px) {
    height: 36px;
  }
`;

export const WrapperLogo = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const Modal = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.brandColor.secondary.darkest};
  padding: 24px 16px;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.neutralColor[1]};
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

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
  background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  border: 2px solid #000000;
  box-shadow: 0px 2px 0px #000000;
  color: ${({ theme }) => theme.neutralColor[1]};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:disabled {
    background-color: #ccc;
    color: #808080;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 33px;
  border-radius: 10px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.neutralColor[7]};
  color: ${({ theme }) => theme.neutralColor[1]};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Icon = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0 13px;
  color: white;
`;
