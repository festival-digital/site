import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  display: ${(props) => {
    const { opened } = props;
    return !opened ? 'none' : 'flex';
  }};
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 50px);
  bottom: 0;
  left: 0;
  z-index: 30;
  padding: 50px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  overflow: auto;
`;

export const Navigation = styled.ul``;

export const NavigationItem = styled.li`
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 30px;

  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    color: ${({ theme }) => theme.brandColor.fourtiary.medium};
  }
`;

export const IDAContent = styled.div`
  display: inline-block;
`;
