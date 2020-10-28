import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import Select from 'components/atoms/select/select';
import { FormWrapper } from './disability-form.style';

const DisabilityForm = ({
  disability, disabilityOptions, onSubmit, setDisability,
}) => (
  <FormWrapper>
    <Select
      options={disabilityOptions}
      value={disability}
      onChange={(e) => {
        setDisability(e.target.value);
      }}
      placeholder="Selecione sua deficiência"
    />
    <Button type="button" onClick={onSubmit} disabled={!disability}>
      Enviar
    </Button>
    <LinkButton>Pular</LinkButton>
  </FormWrapper>
);

DisabilityForm.propTypes = {
  disabilityOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  disability: PropTypes.string.isRequired,
  setDisability: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

DisabilityForm.defaultProps = {
  disabilityOptions: [],
};

export default DisabilityForm;


