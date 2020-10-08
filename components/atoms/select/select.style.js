import styled from 'styled-components';

export const Form = styled.form`
  margin: 100px;
`;

export const SelectContent = styled.div`
  position: relative;
  display: flex;
  width: ${({ small }) => small ? '264px' : '308px'};
  height: 46px;
  line-height: 3;
  overflow: hidden;
  border-radius: 10px;
  height: 46px;
  background-color: #404040;
  border: 2px solid #000000;
  color: #ffffff;
  box-shadow: 0px 2px 0px #000000;

  &::after {
    content: url('./static/icons/arrow_down.svg');
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background-color: #404040;
    cursor: pointer;
    pointer-events: none;
    transition: 0.25s all ease;
  }
  &:hover::after {
      content: url('./static/icons/arrow_up.svg');
    }
  }
`;

export const SelectForm = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #404040;
  flex: 1;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 12px ${({ small }) => small ? '43px' : '87px'} 12px 16px;
  &::-ms-expand {
    display: none;
  }
  &:focus,
  &:hover,
  &:active {
    padding: 12px ${({ small }) => small ? '43px' : '87px'} 12px 16px;
  }
`;

export const Option = styled.option``;
