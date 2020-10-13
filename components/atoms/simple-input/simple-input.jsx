import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './simple-input.style';

/**
 * This is the simple input component
 * @returns {React.Component}
 */
const SimpleInput = (props) => <Input {...props} />;

SimpleInput.defaultProps = {
  type: 'text',
};

export default SimpleInput;
