import React from 'react';
import PropTypes from 'prop-types';
import { Form, SelectForm, Option, SelectContent } from './select.style';

/**
 * This is the Select component
 * @returns {React.Component}
 */
const Select = ({ options, small }) => {
  const [select, setSelect] = React.useState('')
  return (
      <SelectContent small={small}>
        <SelectForm
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          small={small}
          >
          <Option disabled value=""> Selecionar </Option>
          {options.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectForm>
      </SelectContent>
  )
};

export default Select;
