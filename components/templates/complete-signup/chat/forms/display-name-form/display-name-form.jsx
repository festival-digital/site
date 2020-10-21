import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './display-name-form.style';

/**
 * this display name form component
 * @returns {React.Component}
 */
const DisplayNameForm = ({
  displayName, onSubmit, setDisplayName,
}) => (
  <FormWrapper>
    <SimpleInput
      value={displayName}
      placeholder="Diga como quer ser chamado"
      onChange={(e) => setDisplayName(e.target.value)}
    />
    <Button type="button" onClick={onSubmit} disabled={!displayName}>
      Pode me chamar assim
    </Button>
    <FakeInput />
  </FormWrapper>
);

DisplayNameForm.propTypes = {
  displayName: PropTypes.string.isRequired,
  setDisplayName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

DisplayNameForm.defaultProps = {};

export default DisplayNameForm;
