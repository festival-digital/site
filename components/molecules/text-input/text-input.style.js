import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
  height: calc(48px + 12px); /* input height + message height */
  position: relative;
`;

export const InputBase = styled.div`
  position: relative;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  height: 48px;
  width: 100%;
`;

export const LabelStyle = styled.label`
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  padding: 0;

  color: ${({ theme }) => theme.neutralColor[5]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  transform-origin: top left;
  transform: translate(14px, 16px) scale(1);

  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;

  &.fail {
    color: ${({ theme }) => theme.alarmColor.fail.medium};
  }
`;

export const InputTextStyle = styled.input`
  width: 100%;
  border: 0;
  display: block;
  padding: ${({ theme }) => theme.spacingSquish.xxs};
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
  margin: 0;

  color: ${({ theme }) => theme.neutralColor[5]};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &:focus {
    display: block;
    padding: ${({ theme }) => theme.spacingSquish.xxs};
  }

  &:focus,
  &:focus + label {
    color: ${({ theme }) => theme.neutralColor[1]};
    color: #000;
  }

  &:focus + label,
  &.hasValue + label {
    transform: translate(14px, -6px) scale(0.75);
    font-size: ${({ theme }) => theme.fontSize.xs};


    &.fail {
      color: ${({ theme }) => theme.alarmColor.fail.medium};
    }
  }

  &:focus ~ fieldset {
    border-color: ${({ theme }) => theme.neutralColor[1]};
    border-color: #000000;
    &.fail {
      border-color: ${({ theme }) => theme.alarmColor.fail.medium};
    }
  }

  &:focus ~ fieldset legend,
  &.hasValue ~ fieldset legend {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
    font-size: ${({ theme }) => theme.fontSize.xxxs};
  }

  &:focus ~ .icon .password {
    color: ${({ theme }) => theme.neutralColor[1]};
  }

  &:focus ~ .icon {
    visibility: visible;
    pointer-events: visiblePainted;
    cursor: pointer;
  }
`;

export const FieldsetStyle = styled.fieldset`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 9px;
  overflow: hidden;
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-width: ${({ theme }) => theme.borderWidth.thin};
  border-style: solid;
  border-color: ${({ theme }) => theme.neutralColor[5]};
  border-color: #808080;
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSize.xxxs};

  transition: border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &.fail {
    border-color: ${({ theme }) => theme.alarmColor.fail.medium};
  }

  & legend {
    display: block;
    width: auto;
    height: 11px;
    padding: 0;
    max-width: 0.01px;
    visibility: hidden;
    text-align: left;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
    font-size: ${({ theme }) => theme.fontSize.xxxs};
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    & > span {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export const InputMessage = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  color: ${({ theme }) => theme.alarmColor.fail.medium};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 14px;

  visibility: hidden;
  pointer-events: none;

  svg {
    width: 20px;
    height: 20px;

    &.fail {
      color: ${({ theme }) => theme.alarmColor.fail.medium};
    }
    &.success {
      color: ${({ theme }) => theme.alarmColor.success.medium};
    }

    &.password {
      color: ${({ theme }) => theme.neutralColor[5]};
    }
  }

  &.showIcon {
    visibility: visible;
    pointer-events: visiblePainted;
    cursor: pointer;
  }
`;
