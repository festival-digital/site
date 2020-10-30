import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => {
    const { open } = props;
    return !open ? 'none' : 'flex';
  }};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 60;
  position: fixed;
  overflow-y: auto;
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

export const ContentButton = styled.div`
  display: flex;
`;

export const ContainerForm = styled.div`
  margin-bottom: 30px;
`;
