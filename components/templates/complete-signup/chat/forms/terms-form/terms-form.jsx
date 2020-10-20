import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './terms-form.style';

const TermsForm = ({ onSubmit }) => (
  <FormWrapper>
    <FakeInput />
    <Button type="button" onClick={onSubmit}>
      Ver termos de uso
    </Button>
    <FakeInput />
  </FormWrapper>
);

TermsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

TermsForm.defaultProps = {};

export default TermsForm;


