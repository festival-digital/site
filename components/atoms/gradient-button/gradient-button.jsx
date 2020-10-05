import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './gradient-button.style';

const GradientButton = ({
  children, customStyle, onClick, type,
}) => (
  <Button
    type={type}
    onClick={onClick}
    customStyle={customStyle}
  >
    {children}
  </Button>
);

GradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

GradientButton.defaultProps = {
  customStyle: '',
  onClick: () => { console.warn('Not implemented') },
  type: 'button',
};

export default GradientButton;
