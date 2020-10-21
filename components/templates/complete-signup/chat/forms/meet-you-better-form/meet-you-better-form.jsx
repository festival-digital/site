import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './meet-you-better-form.style';

const MeetYouBetterForm = ({ onSubmit }) => (
  <FormWrapper>
    <FakeInput />
    <Button type="button" onClick={onSubmit}>
      Claro! Vamos começar
    </Button>
    <LinkButton>Prefiro fazer isso depois</LinkButton>
  </FormWrapper>
);

MeetYouBetterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

MeetYouBetterForm.defaultProps = {};

export default MeetYouBetterForm;


