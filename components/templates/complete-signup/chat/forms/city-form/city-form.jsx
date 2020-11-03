import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './city-form.style';

const CityForm = ({
  cityLocation, onSubmit, setCityLocation,
}) => (
  <FormWrapper>
    <SimpleInput
      value={cityLocation}
      placeholder="Diga sua cidade"
      onChange={(e) => setCityLocation(e.target.value)}
    />
    <Button type="button" onClick={onSubmit} disabled={!cityLocation}>
      Enviar
    </Button>
    {/* <LinkButton>Pular</LinkButton> */}
    <FakeInput />
  </FormWrapper>
);

CityForm.propTypes = {
  cityLocation: PropTypes.string.isRequired,
  setCityLocation: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

CityForm.defaultProps = {};

export default CityForm;


