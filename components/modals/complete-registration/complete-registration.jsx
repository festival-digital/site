import React, { useState, useEffect } from 'react';
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
  maskCPF,
} from '../../../utils/validations';

const CompleteRegistration = ({
  cpf,
  firstName,
  lastName,
  birthDate,
  email,
}) => {
  /* values */
  const [cpfInput, setCpfInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [birthDateInput, setBirthDateInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);

  /* erros */
  const [cpfError, setCpfError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [emailError, setEmailError] = useState('');

  const hasError = (string) => string.length > 0;

  useEffect(() => {
    if (
      firstNameInput &&
      lastNameInput &&
      birthDateInput &&
      emailInput &&
      cpfInput
    ) {
      if (
        hasError(firstNameError) ||
        hasError(lastNameError) ||
        hasError(birthDateError) ||
        hasError(emailError) ||
        hasError(cpfError)
      ) {
        setButtonEnabled(true);
      } else {
        setButtonEnabled(false);
      }
    }
  }, [
    firstNameInput,
    lastNameInput,
    birthDateInput,
    emailInput,
    cpfInput,
    firstNameError,
    lastNameError,
    birthDateError,
    emailError,
    cpfError,
  ]);

  /* onChanges */
  const handleOnChangeFirstName = ({ target }) =>
    setFirstNameInput(target.value);

  const handleOnChangeLastName = ({ target }) => setLastNameInput(target.value);

  const handleOnChangeBirthDate = ({ target }) =>
    setBirthDateInput(target.value);

  const handleOnChangeCPF = ({ target }) => {
    if (!validateCPF(target.value)) {
      setCpfError('Preencha um CPF válido');
    } else {
      setCpfError('');
    }
    setCpfInput(target.value);
  };

  const handleOnChangeEmail = ({ target }) => {
    const { value } = target;
    setEmailError(emailValidation(value));
    setEmailInput(value);
  };

  /* onBlur */
  const handleBlurFirstName = () => {
    if (!firstNameInput) {
      return setFirstNameError('Preencha o seu nome!');
    }
    return setFirstNameError('');
  };

  const handleBlurLastName = () => {
    if (!lastNameInput) {
      return setLastNameError('Preencha o seu sobrenome!');
    }
    return setLastNameError('');
  };

  return (
    <Wrapper opened>
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
            onBlur={handleBlurFirstName}
          />
        )}
        <SpaceSmall />
        {!lastName && (
          <SimpleInput
            placeholder="Digite seu sobrenome"
            value={lastNameInput}
            onChange={handleOnChangeLastName}
            error={lastNameError}
            onBlur={handleBlurLastName}
          />
        )}
        <SpaceSmall />
        {!cpf && (
          <SimpleInput
            placeholder="Digite seu cpf"
            value={cpfInput}
            onChange={handleOnChangeCPF}
            error={cpfError}
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
        <Button disabled={buttonEnabled}> Continuar</Button>
        <Space />
        <CancelButton>Ignorar</CancelButton>
      </Modal>
    </Wrapper>
  );
};

export default CompleteRegistration;
