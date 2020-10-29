import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Store from 'components/store/Store';
import { Text } from '@resystem/design-system';
import Button from '../../atoms/button/button';
import SimpleInput from '../../atoms/simple-input/simple-input';
import {
  phoneValidation,
  emailValidation,
  phoneMask,
} from '../../../utils/validations';
import { createFAQQuestion } from './form-contact.controller';

import {
  Contact,
  Form,
  Space,
  SpaceSmall,
  Title,
  Textarea as TextareaInput,
  TextareaBase,
  customButtonStyle,
  ErrorMessage,
  customInputStyle,
  ContainerInputs,
} from './form-contact.style';

/**
 * This is the Textarea component
 * @returns {React.Component}
 */
const Textarea = ({ placeholder, onChange, value, error, onBlur, id }) => {
  return (
    <TextareaBase>
      <TextareaInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        id={id}
        wrap="hard"
        cols={20}
        rows={7}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextareaBase>
  );
};
const FormContact = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const hasError = (string) => string.length > 0;

  useEffect(() => {
    if (phone && email && message && fullName) {
      if (
        hasError(fullNameError) ||
        hasError(phoneError) ||
        hasError(messageError) ||
        hasError(emailError)
      ) {
        setButtonEnabled(true);
      } else {
        setButtonEnabled(false);
      }
    }
  }, [
    fullNameError,
    phoneError,
    messageError,
    emailError,
    fullName,
    phone,
    email,
    message,
  ]);
  const handleOnChangeFullName = ({ target }) => setFullName(target.value);
  const handleOnChangeMessage = ({ target }) => setMessage(target.value);

  const handleOnChangeEmail = ({ target }) => {
    const { value } = target;
    setEmailError(emailValidation(value));
    setEmail(value);
  };

  const handleOnChangePhone = ({ target }) => {
    const { value } = target;
    const mask = phoneMask(value);
    setPhoneError(phoneValidation(mask));
    setPhone(mask);
  };

  const handleBlurName = () => {
    if (!fullName) {
      return setFullNameError('Preencha o nome completo!');
    }
    return setFullNameError('');
  };

  const handleBlurMessage = () => {
    if (!message) {
      return setMessageError('Preencha o campo de mensagem!');
    }
    return setMessageError('');
  };

  const handleBlurPhone = () => {
    if (!phone) {
      return setPhoneError('Preencha o campo de telefone!');
    }
    return setMessageError('');
  };

  const handleBlurEmail = () => {
    if (!email) {
      return setEmailError('Preencha o campo de email!');
    }
    return setMessageError('');
  };

  const handleClick = (event) => {
    event.preventDefault();
    createFAQQuestion({
      name: fullName,
      phone,
      message,
      email,
      user: state.user ? state.user.id : null,
    });
    setEmail('');
    setFullName('');
    setMessage('');
    setPhone('');
  };

  return (
    <Contact>
      <Space />
      <Title>Ficou com mais alguma dúvida? Entre em contato com a gente</Title>
      <SpaceSmall />
      <Text>
        Preencha o formulário abaixo com suas dúvidas, sugestões ou comentários.
        Vamos tentar te dar um retorno o mais rápido possível!
      </Text>
      <Space />
      <Form>
        <ContainerInputs>
          <SimpleInput
            placeholder="Nome Completo"
            onChange={handleOnChangeFullName}
            value={fullName}
            error={fullNameError}
            onBlur={handleBlurName}
            customStyle={customInputStyle}
          />
          <SpaceSmall />
          <SimpleInput
            placeholder="Email*"
            onChange={handleOnChangeEmail}
            value={email}
            error={emailError}
            onBlur={handleBlurEmail}
            customStyle={customInputStyle}
          />
          <SpaceSmall />
          <SimpleInput
            placeholder="Telefone com DDD*"
            onChange={handleOnChangePhone}
            value={phone}
            error={phoneError}
            onBlur={handleBlurPhone}
            customStyle={customInputStyle}
          />
          <SpaceSmall />
        </ContainerInputs>
        <Textarea
          placeholder="Digite sua mensagem"
          onChange={handleOnChangeMessage}
          onBlur={handleBlurMessage}
          value={message}
          error={messageError}
        />
        <Space />
        <Button
          onClick={handleClick}
          disabled={buttonEnabled}
          customStyle={customButtonStyle}
        >
          Enviar Formulário
        </Button>
      </Form>
    </Contact>
  );
};

export default FormContact;
