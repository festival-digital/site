import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@resystem/design-system';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import ErrorMessagemSearch from 'components/atoms/errorMessageSearch/errorMessagemSearch';
import { questions } from './questions';
import Footer from 'components/organisms/footer/footer';
import Card from 'components/organisms/card-faq/card';
import Button from 'components/atoms/button/button';
import Header from 'components/organisms/home-header/home-header';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import {
  phoneValidation,
  emailValidation,
  phoneMask,
} from 'utils/validations';
import {
  Container,
  Wrapper,
  Contact,
  Form,
  Space,
  SpaceSmall,
  Title,
  InputSearch,
  Textarea as TextareaInput,
  TextareaBase,
  WrapperSearch,
  customButtonStyle,
  ErrorMessage,
  customInputStyle,
  ContainerInputs,
} from './faq.style';

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

/**
 * This is page FAQ
 * @returns {React.Component}
 */
const FAQPage = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(false);
  const [filterQuestion, setFilterQuestion] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [messageSearch, setMessageSearch] = useState(false);

  const hasError = (string) => string.length > 0;

  useEffect(() => {
    const filter = questions.filter(({ title, description }) => {
      return (
        title.toLowerCase().includes(filterQuestion.toLowerCase()) ||
        description.toLowerCase().includes(filterQuestion.toLowerCase())
      );
    });

    if (filter.length > 0) {
      setFilteredQuestions(filter);
      setMessageSearch(false);
    } else {
      setFilteredQuestions(questions);
      setMessageSearch(true);
    }
  }, [filterQuestion]);

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

  const isClicked = (id) => {
    if (id === activeId) {
      return setActiveId(false);
    }
    return setActiveId(id);
  };

  const handleOnChangeFilter = ({ target }) => setFilterQuestion(target.value);
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
      return setMessageError('Preencha o campo de telefone!');
    }
    return setMessageError('');
  };

  const handleBlurEmail = () => {
    if (!phone) {
      return setMessageError('Preencha o campo de email!');
    }
    return setMessageError('');
  };

  const handleClick = () => {};
  return (
    <Container>
      <Header />
      <Wrapper>
        <WrapperSearch>
          <Breadcrumb
            options={[
              { href: '/', label: 'Início' },
              { href: '/faq', label: 'Perguntas Frequentes' },
            ]}
          />
          <Space />
          <InputSearch
            placeholder="Pesquisa"
            onChange={handleOnChangeFilter}
            value={filterQuestion}
          />
        </WrapperSearch>
        {messageSearch && (
          <ErrorMessagemSearch>
            Não encontramos resultados para sua busca
          </ErrorMessagemSearch>
        )}
        <SpaceSmall />
        <Title>Perguntas Frequentes</Title>
        {filteredQuestions.map((question, index) => {
          const { title, description } = question;
          return (
            <Card
              key={title}
              title={title}
              activeId={activeId}
              id={index}
              description={description}
              onClick={isClicked}
            />
          );
        })}
        <Contact>
          <Space />
          <Title>
            Ficou com mais alguma dúvida? Entre em contato com a gente
          </Title>
          <SpaceSmall />
          <Text>
            Preencha o formulário abaixo com suas dúvidas, sugestões ou
            comentários. Vamos tentar te dar um retorno o mais rápido possível!
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
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default FAQPage;
