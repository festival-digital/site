import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import Select from 'components/atoms/select/Select';
import { FormWrapper } from './gender-form.style';

const GenderForm = ({
  gender, genderOptions, onSubmit, setGender,
}) => (
  <FormWrapper>
    <Select
      options={genderOptions}
      value={gender}
      onChange={(e) => {
        setGender(e.target.value);
      }}
      placeholder="Selecionar seu gênero"
    />
    <Button type="button" onClick={onSubmit} disabled={!gender}>
      Enviar
    </Button>
    <LinkButton>Pular</LinkButton>
  </FormWrapper>
);

GenderForm.propTypes = {
  genderOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
};

GenderForm.defaultProps = {
  genderOptions: [],
};

export default GenderForm;


