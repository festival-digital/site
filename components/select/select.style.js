import styled from 'styled-components';

export const Form = styled.form`
  margin: 100px;
`;

export const SelectForm = styled.select`
  width: ${({ small }) => (small ? '264px' : '308px')};
  height: 46px;
  border-radius: 10px;
  background-color: #404040;
  border: 2px solid #000000;
  color: #ffffff;
  box-shadow: 0px 2px 0px #000000;
`;
export const Option = styled.option`
  color: #ffffff;
  padding: 16px 12px 43px 12px;
`;
