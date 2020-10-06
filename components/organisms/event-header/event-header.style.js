import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  width: 100%;
  z-index: 30;

  ${({ isSticky, backgroundURI }) => {
    return isSticky
      ? `
      top: 0px;
      background: url(${backgroundURI});
      background-size: cover;
      background-position: top center;
      animation-duration: 0.3s;
      animation-name: onStickyEnter;
    `
      : '';
  }}

  @keyframes onStickyEnter {
    from {
      transform: translateY(-60px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const LinearBackground = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, #1d1d1d 40.21%, rgba(29, 29, 29, 0) 100%);
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};
  z-index: 100;

  ${({ isSticky, theme: { spacingInset } }) => {
    return isSticky
      ? `
      padding: ${spacingInset.xs} ${spacingInset.xs};
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75);
      z-index: 100;
    `
      : '';
  }}
`;

export const MainButton = styled.button`
  width: 48px;
  height: 48px;
  padding: 5px;
  border: 2px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #000000;
  border-radius: 10px;
  background: linear-gradient(180deg, #ea5ebf 0%, #8740c6 100%, #8740c6 100%);
  margin-right: ${({ theme }) => theme.spacingInline.xxxs};
  overflow: hidden;
  cursor: pointer;
  z-index: 100;
`;

export const MainButtonImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/static/images/platdig-idv-concepts-avatar2.png');
  background-size: cover;
  box-shadow: none;
`;

export const OasiLogo = styled.img`
  height: 20px;
  z-index: 100;
`;
