import React from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from './button.style';

const Button = ({ children, customStyle, ...props }) => (
  <ButtonForm {...props} customStyle={customStyle}>
    {children}
  </ButtonForm>
);

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
};

Button.defaultProps = {
  children: 'Button',
  color: '#EA5EBF',
  disabledColor: '#FFBEEB',
};

export default Button;
