import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animation, SmallText, Text } from '@resystem/design-system';
import {
  disabilitiesCollection,
  gendersCollection,
  sexualOrientationCollection,
  skinColorCollection,
  statesCollection,
} from 'collections';
import SimpleSelect from 'components/atoms/select/select';
import SwitchButton from 'components/atoms/switch-button/switch-button';
import {
  Title,
  Space,
  SpaceNano,
  SpaceSmall,
  Wrapper,
  Modal,
} from './complete-registration.style';
import Button from '../../atoms/button/button';
import CancelButton from '../../atoms/cancel-button/cancel-button';
import SimpleInput from '../../atoms/simple-input/simple-input';
import {
  validateCPF,
  emailValidation,
  dateValidation,
  cpfValidation,
  maskCPF,
  maskDate,
} from '../../../utils/validations';

import {
  getUser,
  getAllUsers,
  getEvent,
  getAllEvents,
} from './complete-registration.controller';

const CompleteRegistration = ({
  skinColor,
  gender,
  sexualOrientation,
  city,
  country,
  age,
  disability,

  opened,
  handleConfirmButton,
  handleCancelButton,
}) => {
  /*  required fields */
  const [skinColorInput, setSkinColorInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [sexualOrientationInput, setSexualOrientationInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [isDisabilityInput, setIsDisabilityInput] = useState('');
  const [disabilityInput, setDisabilityInput] = useState('');
  /*  required fields errors */
  const [skinColorError, setSkinColorError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [sexualOrientationError, setSexualOrientationError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isDisabilityError, setIsDisabilityError] = useState('');
  const [disabilityError, setDisabilityError] = useState('');

  const [buttonDisable, setButtonDisable] = useState(false);

  const disabilityOptions = [
    {
      id: 'sim',
      label: 'sim',
    },
    {
      id: 'não',
      label: 'não',
    },
  ];

  const hasError = (string) => {
    console.log('has error ', string, !!string);
    return !!string;
  };

  const hasValue = (string) => string.length > 0;
  const simpleSelectValidation = (string) =>
    string.length === 0 ? 'Selecione uma opção' : '';

  const simpleInputValidation = (string) =>
    string.length === 0 ? 'Campo inválido' : '';

  function handleConfirmButtonClick() {
    console.log(hasValue(skinColorInput), 'skinColorInput');
    console.log(hasValue(genderInput), 'genderInput');
    console.log(hasValue(sexualOrientationInput), 'sexualOrientationInput');
    console.log(hasValue(countryInput), 'countryInput');
    console.log(hasValue(cityInput), 'cityInput');
    console.log(hasValue(ageInput), 'ageInput');
    console.log(hasValue(isDisabilityInput), 'isDisabilityInput');
    console.log(hasValue(disabilityInput), 'disabilityInput');
    if (
      hasValue(skinColorInput) &&
      hasValue(genderInput) &&
      hasValue(sexualOrientationInput) &&
      hasValue(countryInput) &&
      hasValue(cityInput) &&
      hasValue(ageInput) &&
      hasValue(isDisabilityInput) &&
      hasValue(disabilityInput)
    ) {
      handleConfirmButton({
        skinColor: skinColorInput,
        gender: genderInput,
        sexualOrientation: sexualOrientationInput,
        country: countryInput,
        city: countryInput,
        age: ageInput,
        disability,
      });
    } else {
      setSkinColorError(simpleSelectValidation(skinColorInput));
      setGenderError(simpleSelectValidation(genderInput));
      setSexualOrientationError(simpleSelectValidation(sexualOrientationInput));
      setCountryError(simpleSelectValidation(countryInput));
      setCityError(simpleInputValidation(cityInput));
      setAgeError(simpleInputValidation(ageInput));
      setIsDisabilityError(simpleSelectValidation(isDisabilityInput));
      setDisabilityError(simpleSelectValidation(disabilityInput));
      setButtonDisable(true);
    }
  }

  function handleIgnoreButtonClick() {
    handleCancelButton();
  }

  useEffect(() => {
    if (
      hasValue(skinColorInput) &&
      hasValue(genderInput) &&
      hasValue(sexualOrientationInput) &&
      hasValue(countryInput) &&
      hasValue(cityInput) &&
      hasValue(ageInput) &&
      hasValue(isDisabilityInput) &&
      hasValue(disabilityInput)
    )
      setButtonDisable(false);
  }, [
    skinColorInput,
    genderInput,
    sexualOrientationInput,
    countryInput,
    cityInput,
    ageInput,
    isDisabilityInput,
    disabilityInput,
  ]);

  useEffect(() => {
    // getAllUsers('5f987a8bd1298b6768b78001');
    //  getAllEvents();
    // const event = getEvent('5f987a8bd1298b6768b78112');
    setButtonDisable(false);
  }, []);

  /* onChanges required */
  const handleSelectChange = (event, inputName) => {
    switch (inputName) {
      case 'skinColor':
        setSkinColorInput(event.target.value);
        setSkinColorError(simpleSelectValidation(event.target.value));
        break;
      case 'gender':
        setGenderInput(event.target.value);
        setGenderError(simpleSelectValidation(event.target.value));
        break;
      case 'sexualOrientation':
        setSexualOrientationInput(event.target.value);
        setSexualOrientationError(simpleSelectValidation(event.target.value));
        break;
      case 'country':
        setCountryInput(event.target.value);
        setCountryError(simpleSelectValidation(event.target.value));
        break;
      case 'isDisability':
        setIsDisabilityInput(event.target.value);
        setIsDisabilityError(simpleSelectValidation(event.target.value));
        break;
      case 'setDisability':
        setDisabilityInput(event.target.value);
        setDisabilityError(simpleSelectValidation(event.target.value));
        break;
      default:
        break;
    }
  };

  const handleOnChangeCity = ({ target }) => {
    setCityInput(target.value);
    setCityError(simpleInputValidation(target.value));
  };

  const handleOnChangeAge = ({ target }) => {
    setAgeInput(target.value);
    setAgeError(simpleInputValidation(target.value));
  };

  return (
    <Wrapper opened={opened}>
      <Animation
        animation="slideInUp"
        duration="400ms"
        customStyle="width: 100%;"
      >
        <Modal>
          <Title>Complete seu cadastro para acessar o evento!</Title>
          <Space />
          <Space />
          {!skinColor && (
            <SimpleSelect
              placeholder="Selecione sua cor de pele"
              value={skinColorInput}
              onChange={(event) => handleSelectChange(event, 'skinColor')}
              error={skinColorError}
              options={skinColorCollection}
            />
          )}
          <SpaceSmall />
          {!gender && (
            <SimpleSelect
              placeholder="Selecione seu gênero"
              value={genderInput}
              onChange={(event) => handleSelectChange(event, 'gender')}
              error={genderError}
              options={gendersCollection}
            />
          )}
          <SpaceSmall />
          {!sexualOrientation && (
            <SimpleSelect
              placeholder="Selecione sua orientação sexual"
              value={sexualOrientationInput}
              onChange={(event) =>
                handleSelectChange(event, 'sexualOrientation')
              }
              error={sexualOrientationError}
              options={sexualOrientationCollection}
            />
          )}
          <SpaceSmall />
          {!country && (
            <SimpleSelect
              placeholder="Selecione seu estado"
              value={countryInput}
              onChange={(event) => handleSelectChange(event, 'country')}
              error={countryError}
              options={statesCollection}
            />
          )}
          <SpaceSmall />
          {!city && (
            <SimpleInput
              placeholder="Digite sua cidade"
              value={cityInput}
              onChange={handleOnChangeCity}
              error={cityError}
            />
          )}
          {!age && (
            <SimpleInput
              placeholder="Digite sua idade"
              value={ageInput}
              onChange={handleOnChangeAge}
              error={ageError}
            />
          )}
          <SpaceNano />
          <Text>Possui alguma deficiência ?</Text>
          <SpaceNano />
          <SwitchButton
            options={disabilityOptions}
            handleOnClick={(event) => handleSelectChange(event, 'isDisability')}
            error={isDisabilityError}
          />
          <SpaceNano />
          {isDisabilityInput === disabilityOptions[0].id && (
            <SimpleSelect
              placeholder="Informe qual"
              value={disabilityInput}
              onChange={(event) => handleSelectChange(event, 'setDisability')}
              error={disabilityError}
              options={disabilitiesCollection}
            />
          )}
          <Space />
          <Button disabled={buttonDisable} onClick={handleConfirmButtonClick}>
            Continuar
          </Button>
          <Space />
          <CancelButton onClick={handleIgnoreButtonClick}>Ignorar</CancelButton>
          <Space />
        </Modal>
      </Animation>
    </Wrapper>
  );
};

CompleteRegistration.propTypes = {
  skinColor: PropTypes.string,
  gender: PropTypes.string,
  sexualOrientation: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  age: PropTypes.string,
  disability: PropTypes.string,
  opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
};

CompleteRegistration.defaultProps = {
  skinColor: '',
  gender: '',
  sexualOrientation: '',
  country: '',
  city: '',
  age: '',
  disability: '',
  opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
};

export default CompleteRegistration;
