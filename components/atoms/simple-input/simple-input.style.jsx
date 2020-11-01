import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: #404040;
  border: 2px solid #000000;
  box-shadow: 0px 2px 0px #000000;
  padding: 0 16px;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    padding: 0 16px;
    border: 2px solid #000000;
    color: #9f9f9f;
    box-shadow: 0px 2px 0px #000000;
  }
  ${({ customStyle }) => customStyle}
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  text-align: left;
  color: #ff2626;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  height: 12px;
`;
export const InputBase = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
<<<<<<< HEAD
  width: 100%;

  ${({ customStyle }) => customStyle}
=======
>>>>>>> feature/fd-345
`;
