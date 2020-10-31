import React from 'react';
import PropTypes from 'prop-types';
import { Input, ErrorMessage, InputBase } from './simple-input.style';

/**
 * This is the simple input component
 * @returns {React.Component}
 */
const SimpleInput = ({ error, customStyle, ...props }) => {
  return (
    <InputBase customStyle={customStyle}>
      <Input {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </InputBase>
  );
};

SimpleInput.defaultProps = {
  type: 'text',
};

export default SimpleInput;
