import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './cancel-button.style';

function CancelButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}

CancelButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

CancelButton.defaultProps = {
  onClick: () => {
    console.warn('Not implemented');
  },
};

export default CancelButton;
