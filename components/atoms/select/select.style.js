import styled from 'styled-components';

export const SelectForm = styled.select`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: #404040;
  border: 2px solid #000000;
  box-shadow: 0px 2px 0px #000000;
  padding: 0 16px;
  color: ${({ value }) => value ? '#ffffff' : '#808080'};

  &:focus {
    padding: 0 16px;
    border: 2px solid #000000;
    box-shadow: 0px 2px 0px #000000;
  }
`;

export const Option = styled.option`
  padding: 16px 12px 43px 12px;
`;
