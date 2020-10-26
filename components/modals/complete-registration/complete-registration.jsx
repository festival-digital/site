import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animation } from '@resystem/design-system';
import {
  Title,
  Space,
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

const CompleteRegistration = ({
  cpf,
  firstName,
  lastName,
  birthDate,
  email,
  opened,
  handleConfirmButton,
  handleCancelButton,
}) => {
  /* values */
  const [cpfInput, setCpfInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [birthDateInput, setBirthDateInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [buttonDisable, setButtonDisable] = useState(false);

  /* erros */
  const [cpfError, setCpfError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [emailError, setEmailError] = useState('');

  const hasError = (string) => {
    console.log(string, !!string);
    return !!string;
  };
  const simpleInputValidation = (string) =>
    string.length === 0 ? 'Campo inválido' : '';

  function handleConfirmButtonClick() {
    handleConfirmButton({
      cpf: cpfInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      birthDate: birthDateInput,
      email: emailInput,
    });
  }

  function handleIgnoreButtonClick() {
    handleCancelButton();
  }

  useEffect(() => {
    if (firstName) setFirstNameError(simpleInputValidation(firstNameInput));
    if (lastName) setLastNameError(simpleInputValidation(lastNameInput));
    if (cpf) setCpfError(cpfValidation(cpfInput));
    if (birthDate) setBirthDateError(dateValidation(birthDateInput));
    if (email) setEmailError(emailValidation(emailInput));
    if (
      hasError(firstNameError) ||
      hasError(lastNameError) ||
      hasError(cpfError) ||
      hasError(birthDateError) ||
      hasError(emailError)
    ) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [firstNameInput, lastNameInput, cpfInput, birthDateInput, emailInput]);

  useEffect(() => {
    setButtonDisable(true);
  }, []);

  /* onChanges */
  const handleOnChangeFirstName = ({ target }) => {
    setFirstNameInput(target.value);
    setFirstNameError(simpleInputValidation(target.value));
  };

  const handleOnChangeLastName = ({ target }) => {
    setLastNameInput(target.value);
    setLastNameError(simpleInputValidation(target.value));
  };

  const handleOnChangeBirthDate = ({ target }) => {
    setBirthDateInput(maskDate(target.value));
    setBirthDateError(dateValidation(target.value));
  };

  const handleOnChangeCPF = ({ target }) => {
    const value = target.value.replace(/[^\w\s]/gi, '');
    setCpfError(cpfValidation(value));
    setCpfInput(maskCPF(value));
  };

  const handleOnChangeEmail = ({ target }) => {
    const { value } = target;
    setEmailError(emailValidation(value));
    setEmailInput(value);
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
          {!firstName && (
            <SimpleInput
              placeholder="Digite seu nome"
              value={firstNameInput}
              onChange={handleOnChangeFirstName}
              error={firstNameError}
            />
          )}
          <SpaceSmall />
          {!lastName && (
            <SimpleInput
              placeholder="Digite seu sobrenome"
              value={lastNameInput}
              onChange={handleOnChangeLastName}
              error={lastNameError}
            />
          )}
          <SpaceSmall />
          {!cpf && (
            <SimpleInput
              placeholder="Digite seu cpf"
              value={cpfInput}
              onChange={handleOnChangeCPF}
              error={cpfError}
              maxLength={14}
            />
          )}
          <SpaceSmall />
          {!birthDate && (
            <SimpleInput
              placeholder="Digite sua data nascimento"
              value={birthDateInput}
              onChange={handleOnChangeBirthDate}
              error={birthDateError}
            />
          )}
          <SpaceSmall />
          {!email && (
            <SimpleInput
              placeholder="Digite seu email"
              value={emailInput}
              onChange={handleOnChangeEmail}
              error={emailError}
            />
          )}
          <Space />
          <Button disabled={buttonDisable} onClick={handleConfirmButtonClick}>
            {' '}
            Continuar
          </Button>
          <Space />
          <CancelButton onClick={handleIgnoreButtonClick}>Ignorar</CancelButton>
        </Modal>
      </Animation>
    </Wrapper>
  );
};

CompleteRegistration.propTypes = {
  cpf: PropTypes.bool,
  firstName: PropTypes.bool,
  lastName: PropTypes.bool,
  birthDate: PropTypes.bool,
  email: PropTypes.bool,
  opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
};

CompleteRegistration.defaultProps = {
  cpf: false,
  firstName: false,
  lastName: false,
  birthDate: false,
  email: false,
  opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
};

export default CompleteRegistration;
