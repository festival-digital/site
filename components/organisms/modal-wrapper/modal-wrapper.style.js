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
  background-color: rgba(0, 0, 0, 0.9);
  overflow: auto;
`;

export const Modal = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 24px 16px;
`;
