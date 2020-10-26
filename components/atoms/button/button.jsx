import React from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from './button.style';

const Button = ({ children, customStyle, ...props }) => (
  <ButtonForm {...props} customStyle={customStyle}>
    {children}
  </ButtonForm>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
};

Button.defaultProps = {
  color: '#EA5EBF',
  disabledColor: '#FFBEEB',
};

export default Button;
