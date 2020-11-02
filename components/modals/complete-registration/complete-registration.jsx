import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Animation, Text } from '@resystem/design-system';
import {
  disabilitiesCollection,
  gendersCollection,
  sexualOrientationCollection,
  skinColorCollection,
  statesCollection,
} from 'collections';
import Store from 'components/store/Store';
import SimpleSelect from 'components/atoms/select/select';
import SwitchButton from 'components/atoms/switch-button/switch-button';
import { stringToDate } from 'utils/date-formatter';
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
import { dateValidation, maskDate } from '../../../utils/validations';

import {
  getUser,
  updateUser,
  getAllUsers,
  getEvent,
  getAllEvents,
} from './complete-registration.controller';

const CompleteRegistration = ({ handleConfirmButton, handleCancelButton }) => {
  const { state } = useContext(Store);
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  /*  required fields */
  const [skinColorInput, setSkinColorInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [sexualOrientationInput, setSexualOrientationInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [birthDateInput, setBirthDateInput] = useState('');
  const [isDisabilityInput, setIsDisabilityInput] = useState(false);
  const [disabilityInput, setDisabilityInput] = useState('');
  /*  required fields errors */
  const [skinColorError, setSkinColorError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [sexualOrientationError, setSexualOrientationError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [isDisabilityError, setIsDisabilityError] = useState('');
  const [disabilityError, setDisabilityError] = useState('');

  const [buttonDisable, setButtonDisable] = useState(false);

  const disabilityOptions = [
    {
      id: 'sim',
      label: 'sim',
      value: true,
    },
    {
      id: 'não',
      label: 'não',
      value: false,
    },
  ];

  function hasError(string) {
    return !!string;
  }

  function hasValue(string) {
    return string.length > 0;
  }
  function simpleSelectValidation(string) {
    return string.length === 0 ? 'Selecione uma opção' : '';
  }

  function simpleInputValidation(string) {
    return string.length === 0 ? 'Campo inválido' : '';
  }
  function getFederativeUnit(id) {
    return statesCollection
      .filter((item) => item.id === parseInt(id, 10))
      .map((item) => item.uf);
  }

  function handleConfirmButtonClick() {
    // console.log(hasValue(skinColorInput), 'skinColorInput');
    // console.log(hasValue(genderInput), 'genderInput');
    // console.log(hasValue(sexualOrientationInput), 'sexualOrientationInput');
    // console.log(hasValue(countryInput), 'countryInput');
    // console.log(hasValue(cityInput), 'cityInput');
    // console.log(hasValue(birthDateInput), 'birthDateInput');
    // console.log(hasValue(isDisabilityInput), 'isDisabilityInput');
    // console.log(hasValue(disabilityInput), 'disabilityInput');

    const needDisability = !user.disability && isDisabilityInput;
    const checkDisability = needDisability ? hasValue(disabilityInput) : true;
    const [countryFederativenUnit] = hasValue(countryInput)
      ? getFederativeUnit(countryInput)
      : [countryInput];

    const dateFormatted = hasValue(birthDateInput)
      ? stringToDate(birthDateInput)
      : stringToDate('00/00/0000');

    const dateISO = dateFormatted.toISOString();

    // if user is complete or else
    if (
      (user.skin_color || hasValue(skinColorInput)) &&
      (user.gender || hasValue(genderInput)) &&
      (user.sexual_orientation || hasValue(sexualOrientationInput)) &&
      (user.state || hasValue(countryInput)) &&
      (user.city || hasValue(cityInput)) &&
      (user.birth_date || hasValue(birthDateInput)) &&
      // (user.has_disability || hasValue(isDisabilityInput)) &&
      checkDisability
    ) {
      const userUpdated = {
        id: user?.id || null,
        skin_color: user?.skin_color || skinColorInput,
        gender: user?.gender || genderInput,
        sexual_orientation: user?.sexual_orientation || sexualOrientationInput,
        state: user?.state || countryFederativenUnit,
        city: user?.city || cityInput,
        birth_date: user?.birth_date || dateISO,
        has_disability: isDisabilityInput,
        disability: needDisability ? disabilityInput : user.disability,
      };
      updateUser(userUpdated).then((response) => {
        console.log('user updated ', response);
        setIsOpen(false);
      });
      handleConfirmButton(userUpdated);
    } else {
      setSkinColorError(simpleSelectValidation(skinColorInput));
      setGenderError(simpleSelectValidation(genderInput));
      setSexualOrientationError(simpleSelectValidation(sexualOrientationInput));
      setCountryError(simpleSelectValidation(countryInput));
      setCityError(simpleInputValidation(cityInput));
      setBirthDateError(dateValidation(birthDateInput));
      setIsDisabilityError(simpleSelectValidation(isDisabilityInput));
      setDisabilityError(simpleSelectValidation(disabilityInput));
      setButtonDisable(true);
    }
  }

  function handleIgnoreButtonClick() {
    const needDisability = !user.disability && isDisabilityInput;
    const [countryFederativenUnit] = hasValue(countryInput)
      ? getFederativeUnit(countryInput)
      : [countryInput];

    const userUpdated = {
      id: user?.id || null,
      skin_color: user?.skin_color || skinColorInput,
      gender: user?.gender || genderInput,
      sexual_orientation: user?.sexual_orientation || sexualOrientationInput,
      state: user?.state || countryFederativenUnit,
      city: user?.city || cityInput,
      birth_date: user?.birth_date || birthDateInput,
      has_disability: isDisabilityInput,
      disability: needDisability ? disabilityInput : user.disability,
    };
    handleCancelButton(userUpdated);
    setIsOpen(false);
  }

  useEffect(() => {
    const needDisability = !user.disability && isDisabilityInput;
    const checkDisability = needDisability ? hasValue(disabilityInput) : true;
    // if user is complete or else
    if (
      (user.skin_color || hasValue(skinColorInput)) &&
      (user.gender || hasValue(genderInput)) &&
      (user.sexual_orientation || hasValue(sexualOrientationInput)) &&
      (user.state || hasValue(countryInput)) &&
      (user.city || hasValue(cityInput)) &&
      (user.birth_date || hasValue(birthDateInput)) &&
      // (user.has_disability || hasValue(isDisabilityInput)) &&
      checkDisability
    ) {
      setButtonDisable(false);
    }
  }, [
    user,
    skinColorInput,
    genderInput,
    sexualOrientationInput,
    countryInput,
    cityInput,
    birthDateInput,
    isDisabilityInput,
    disabilityInput,
  ]);

  useEffect(() => {
    getUser(state?.auth?.ida || '5f9344948b147955a09bffc3').then((response) => {
      const fetchedUser = response?.data?.oneUser || {};
      setUser(fetchedUser);
      setIsDisabilityInput(fetchedUser?.has_disability);
      if (
        !(
          fetchedUser.skin_color &&
          fetchedUser.gender &&
          fetchedUser.sexual_orientation &&
          fetchedUser.state &&
          fetchedUser.city &&
          fetchedUser.birth_date
        )
      ) {
        setIsOpen(true);
      }
    });
  }, [state]);

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
        setIsDisabilityInput(event.target.value === 'true');
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

  const handleOnChangeBirthDate = ({ target }) => {
    setBirthDateInput(maskDate(target.value));
    setBirthDateError(dateValidation(target.value));
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Animation
        animation="slideInUp"
        duration="400ms"
        customStyle="width: 100%;"
      >
        <Modal>
          <Title>Complete seu cadastro para acessar o evento!</Title>
          <Space />
          <Space />
          {!user.skin_color && (
            <SimpleSelect
              placeholder="Selecione sua cor de pele"
              value={skinColorInput}
              onChange={(event) => handleSelectChange(event, 'skinColor')}
              error={skinColorError}
              options={skinColorCollection}
            />
          )}
          <SpaceSmall />
          {!user.gender && (
            <SimpleSelect
              placeholder="Selecione seu gênero"
              value={genderInput}
              onChange={(event) => handleSelectChange(event, 'gender')}
              error={genderError}
              options={gendersCollection}
            />
          )}
          <SpaceSmall />
          {!user.sexual_orientation && (
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
          {!user.state && (
            <SimpleSelect
              placeholder="Selecione seu estado"
              value={countryInput}
              onChange={(event) => handleSelectChange(event, 'country')}
              error={countryError}
              options={statesCollection}
            />
          )}
          <SpaceSmall />
          {!user.city && (
            <SimpleInput
              placeholder="Digite sua cidade"
              value={cityInput}
              onChange={handleOnChangeCity}
              error={cityError}
            />
          )}
          {!user.birth_date && (
            <SimpleInput
              placeholder="Digite sua data de nascimento"
              value={birthDateInput}
              onChange={handleOnChangeBirthDate}
              error={birthDateError}
            />
          )}
          {!user.has_disability && (
            <>
              <SpaceNano />
              <Text>Possui alguma deficiência ?</Text>
              <SpaceNano />
              <SwitchButton
                options={disabilityOptions}
                value={isDisabilityInput}
                handleOnClick={(event) =>
                  handleSelectChange(event, 'isDisability')
                }
                error={isDisabilityError}
              />
            </>
          )}
          <SpaceNano />
          {!user.has_disability && isDisabilityInput && (
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
  // skinColor: PropTypes.string,
  // gender: PropTypes.string,
  // sexualOrientation: PropTypes.string,
  // country: PropTypes.string,
  // city: PropTypes.string,
  // age: PropTypes.string,
  // disability: PropTypes.string,
  // opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
};

CompleteRegistration.defaultProps = {
  // skinColor: '',
  // gender: '',
  // sexualOrientation: '',
  // country: '',
  // city: '',
  // age: '',
  // disability: '',
  // opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
};

export default CompleteRegistration;
