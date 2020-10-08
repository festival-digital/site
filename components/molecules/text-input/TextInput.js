import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {
  IconContainer,
  InputGroup,
  InputBase,
  InputTextStyle,
  FieldsetStyle,
  LabelStyle,
  InputMessage,
} from './text-input.style';

import buildClass from '../../../utils/buildClass';

const hasError = (error) => error.length > 0;

const InputText = ({
  error, id, label, onChange,
  customStyle, type, value, ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleOnChange = (event) => {
    if (onChange) onChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputGroup customStyle={customStyle}>
      <InputBase>
        <InputTextStyle
          {...props}
          value={value}
          onChange={handleOnChange}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          id={id}
          className={value.length ? 'hasValue' : ''}
          type={showPassword ? 'text' : type}
        />
        <LabelStyle
          htmlFor={id}
          className={buildClass({ fail: hasError(error) })}
        >
          {label}
        </LabelStyle>
        <FieldsetStyle
          aria-hidden="true"
          className={buildClass({ fail: hasError(error) })}
        >
          <legend>
            <span>{label}</span>
          </legend>
        </FieldsetStyle>
        <IconContainer
          className={buildClass({ icon: true, showIcon: type === 'password' })}
        >
          <If condition={type !== 'password'}>
            <ValidationIcon errorMessage={error} />
          </If>
          <If condition={type === 'password'}>
            <PasswordIcon
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </If>
        </IconContainer>
      </InputBase>
      <InputMessage>{error}</InputMessage>
    </InputGroup>
  );
};

const ValidationIcon = ({ errorMessage }) =>
  hasError(errorMessage) ? (
    <CancelIcon className={buildClass({ fail: true })} />
  ) : (
    <CheckCircleIcon className={buildClass({ success: true })} />
  );

const PasswordIcon = ({ showPassword, toggleShowPassword }) =>
  showPassword ? (
    <VisibilityOffIcon
      className={buildClass({ showIcon: true, password: true })}
      onClick={toggleShowPassword}
    />
  ) : (
    <VisibilityIcon
      className={buildClass({ showIcon: true, password: true })}
      onClick={toggleShowPassword}
    />
  );

const If = ({ condition, children }) => (condition ? children : null);

InputText.propTypes = {
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  customStyle: PropTypes.string,
  type: PropTypes.oneOf(['tel', 'email','text', 'password']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  customStyle: '',
  error: '',
  label: '',
  onChange: () => {},
  type: 'text',
  value: '',
};

export default InputText;
