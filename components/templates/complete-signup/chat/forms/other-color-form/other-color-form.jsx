import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper } from './other-color-form.style';

const OtherColorForm = ({
  otherColor, onSubmit, setOtherColor,
}) => (
  <FormWrapper>
    <SimpleInput
      value={otherColor}
      placeholder="Diga sua cor"
      onChange={(e) => setOtherColor(e.target.value)}
    />
    <Button type="button" onClick={onSubmit} disabled={!otherColor}>
      Enviar
    </Button>
    <LinkButton>Prefiro não falar</LinkButton>
  </FormWrapper>
);

OtherColorForm.propTypes = {
  otherColor: PropTypes.string.isRequired,
  setOtherColor: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

OtherColorForm.defaultProps = {};

export default OtherColorForm;


