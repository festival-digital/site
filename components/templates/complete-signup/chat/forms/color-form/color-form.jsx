import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import Select from 'components/atoms/select/select';
import { FormWrapper, FakeInput } from './color-form.style';

const ColorForm = ({
  color, colorOptions, onSubmit, setColor,
}) => (
  <FormWrapper>
    <Select
      options={colorOptions}
      value={color}
      onChange={(e) => {
        setColor(e.target.value);
      }}
      placeholder="Selecionar sua cor"
    />
    <Button type="button" onClick={onSubmit} disabled={!color}>
      Enviar
    </Button>
    {/* <LinkButton>Pular</LinkButton> */}
    <FakeInput />
  </FormWrapper>
);

ColorForm.propTypes = {
  colorOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};

ColorForm.defaultProps = {
  colorOptions: [],
};

export default ColorForm;


