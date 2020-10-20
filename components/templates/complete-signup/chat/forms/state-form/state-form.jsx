import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import Select from 'components/atoms/select/Select';
import { FormWrapper } from './state-form.style';

const StateForm = ({
  stateLocation, stateLocationOptions, onSubmit, setStateLocation,
}) => (
  <FormWrapper>
    <Select
      options={stateLocationOptions}
      value={stateLocation}
      onChange={(e) => {
        setStateLocation(e.target.value);
      }}
      placeholder="Selecionar seu estado"
    />
    <Button type="button" onClick={onSubmit} disabled={!stateLocation}>
      Enviar
    </Button>
    <LinkButton>Pular</LinkButton>
  </FormWrapper>
);

StateForm.propTypes = {
  stateLocationOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  setLocation: PropTypes.string.isRequired,
  setStateLocation: PropTypes.func.isRequired,
};

StateForm.defaultProps = {
  stateLocationOptions: [],
};

export default StateForm;


