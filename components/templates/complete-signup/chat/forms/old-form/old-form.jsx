import React from 'react';
import PropTypes from 'prop-types';
import VanillaMask from 'vanilla-masker';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './old-form.style';

const OldForm = ({
  old, onSubmit, setOld,
}) => (
  <FormWrapper>
    <SimpleInput
      type="tel"
      value={old}
      placeholder="Diga sua idade"
      onChange={(e) => setOld(VanillaMask.toPattern(e.target.value, '999'))}
    />
    <Button type="button" onClick={onSubmit} disabled={!old}>
      Enviar
    </Button>
    <FakeInput />
    {/* <LinkButton>Pular</LinkButton> */}
  </FormWrapper>
);

OldForm.propTypes = {
  old: PropTypes.string.isRequired,
  setOld: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

OldForm.defaultProps = {};

export default OldForm;


