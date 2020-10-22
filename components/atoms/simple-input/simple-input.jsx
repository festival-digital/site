import React from 'react';
import PropTypes from 'prop-types';
import { Input, ErrorMessage, InputBase } from './simple-input.style';

/**
 * This is the simple input component
 * @returns {React.Component}
 */
const SimpleInput = ({ error, ...props }) => {
  return (
    <InputBase>
      <Input {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputBase>
  );
};

SimpleInput.defaultProps = {
  type: 'text',
};

export default SimpleInput;
