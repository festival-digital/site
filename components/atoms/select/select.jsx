import React from 'react';
import PropTypes from 'prop-types';
import { Form, SelectForm, Option, SelectContent } from './select.style';

/**
 * This is the Select component
 * @returns {React.Component}
 */
const Select = ({
  value, options, onChange, placeholder,
}) => (
  <SelectForm value={value} onChange={onChange}>
    <Option disabled value="" selected>
      {placeholder}
    </Option>
    {options.map(({ id, label }) => (
      <Option key={id} value={id}>{label}</Option>
    ))}
  </SelectForm>
);

Select.defaultProps = {
  placeholder: 'Selecionar',
};

export default Select;
