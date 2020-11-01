import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  position: absolute;
  display: block;
  background-color: #1d1d1d;
`;

export const Content = styled.div`
  padding: 32px 16px;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1140px) {
    padding: 32px 80px;
  }
`;

export const Title = styled.h1`
  font-family: Space Mono, sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 80px;
  color: ${({ theme }) => theme.neutralColor[1]};
`;

export const AuthorParagraph = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.neutralColor[1]};
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 16px;

  @media (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const Subtitle = styled.h2`
  font-family: Space Mono, sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: ${({ theme }) => theme.lineHeight.far};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Author = styled.div`
  > p {
    font-family: Space Mono;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: ${({ theme }) => theme.neutralColor[1]};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.neutralColor[1]};
  font-family: ${({ theme }) => theme.fontFamily.primary}, sans-serif;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 140%;
`;

export const Strong = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Space = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingStack.xs};
`;

export const SpaceSmall = styled.div`
  margin-bottom: 7px;
`;

export const ImagemAnimation = styled.img`
  width: 100%;
  @media (min-width: 1140px) {
    padding: 0 100px;
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
`;

export const customStyleButton = `
  width: 48px;
  Height: 48px;
`;

export const IconQuestionMask = styled.img``;
