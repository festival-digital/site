import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  background: #404040;
  align-items: center;
  border-radius: 10px;
`;

export const Icon = styled.img`
  width: 17px;
  height: 17px;
  margin: 0 15px;
`;

export const Input = styled.input`
  background: #404040;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding: 14px 0;
  color: #ffffff;
  width: 100%;
  border-radius: 10px;

  &:focus {
    font-size: 16px;
    line-height: 19px;
    padding: 14px 0;
    color: #ffffff;
    width: 100%;
  }

  @media (min-width: 650px) {
    display: inline-flex;
    max-width: 308px;
    margin: 0;
  }
`;
