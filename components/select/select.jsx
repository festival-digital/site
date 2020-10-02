import React from 'react';
import PropTypes from 'prop-types';
import { Form, SelectForm, Option } from './select.style';

/**
 * This is the Select component
 * @returns {React.Component}
 */
const Select = ({ value, options, small, onChange }) => {
  const [select, setSelect] = React.useState('');
  return (
    <Form>
      <SelectForm value={select} onChange={({ target }) => setSelect(target.value)} small={small}>
        <Option disabled value="">
          Selecionar
        </Option>
        {options.map((item) => (
          <Option key={item} value={item}>{item}</Option>
        ))}
      </SelectForm>
    </Form>
  );
};

export default Select;
