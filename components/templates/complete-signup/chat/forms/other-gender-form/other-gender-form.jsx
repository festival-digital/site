import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper } from './other-gender-form.style';

const OtherGenderForm = ({
  otherGender, onSubmit, setOtherGender,
}) => (
  <FormWrapper>
    <SimpleInput
      value={otherGender}
      placeholder="Diga seu gênero"
      onChange={(e) => setOtherGender(e.target.value)}
    />
    <Button type="button" onClick={onSubmit} disabled={!otherGender}>
      Enviar
    </Button>
    <LinkButton>Prefiro não falar</LinkButton>
  </FormWrapper>
);

OtherGenderForm.propTypes = {
  otherGender: PropTypes.string.isRequired,
  setOtherGender: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

OtherGenderForm.defaultProps = {};

export default OtherGenderForm;


