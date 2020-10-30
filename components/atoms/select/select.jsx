import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ErrorMessage,
  Form,
  SelectForm,
  Option,
  SelectContent,
} from './select.style';

/**
 * This is the Select component
 * @returns {React.Component}
 */
const Select = ({ error, value, options, onChange, placeholder }) => (
  <Container>
    <SelectForm value={value} onChange={onChange}>
      <Option disabled value="" defaultValue hidden>
        {placeholder}
      </Option>
      {options.map(({ id, label }) => {
        return (
          <Option key={id} value={id}>
            {label}
          </Option>
        );
      })}
    </SelectForm>
    <ErrorMessage>{error}</ErrorMessage>
  </Container>
);

Select.defaultProps = {
  placeholder: 'Selecionar',
};

export default Select;
