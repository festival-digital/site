import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './jump-form.style';

const JumpForm = ({ onSubmit }) => (
  <FormWrapper>
    <FakeInput />
    <Button type="button" onClick={onSubmit}>
      Saltar!
    </Button>
    <FakeInput />
  </FormWrapper>
);

JumpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

JumpForm.defaultProps = {};

export default JumpForm;


