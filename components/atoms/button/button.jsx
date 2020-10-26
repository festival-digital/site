import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { ButtonForm } from './button.style';

const Button = ({ children, customStyle, icon, ...props }) => (
  <ButtonForm {...props} customStyle={customStyle}>
    {icon && <Icon>{icon}</Icon>}
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
  icon: PropTypes.string,
};

Button.defaultProps = {
  color: '#EA5EBF',
  disabledColor: '#FFBEEB',
  icon: null,
};

export default Button;
