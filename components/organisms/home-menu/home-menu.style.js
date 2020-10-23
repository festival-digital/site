import styled from 'styled-components';

export const Menu = styled.div`
  position: fixed;
  display: ${(props) => {
    const { opened } = props;
    return !opened ? 'none' : 'flex';
  }};
  width: 100%;
  min-height: calc(100vh - 50px);
  bottom: 0;
  left: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  overflow: auto;
`;
