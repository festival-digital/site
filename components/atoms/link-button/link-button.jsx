import React from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from './link-button.style';

const Button = ({ children, ...props }) => (
  <ButtonForm {...props}>{children}</ButtonForm>
);

Button.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
};

Button.defaultProps = {
  children: 'Button',
  color: '#EA5EBF',
};

export default Button;
