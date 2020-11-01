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
  z-index: 100;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.brandColor.secondary.darkest};
  padding: 24px;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.neutralColor[1]};
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const SpaceNano = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.nano};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;
