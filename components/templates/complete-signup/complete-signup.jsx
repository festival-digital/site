import React, { useState, useContext } from 'react';
import masker from 'vanilla-masker';
import Icon from '@material-ui/core/Icon';
import { CheckboxInput } from '@resystem/design-system';
import TextInput from 'components/molecules/text-input/TextInput';
import Store from 'components/store/Store';
import { completeRegister } from './complete-signup.controller';
import ida from 'libs/ida.lib';
import {
  Content, Title, Description, Form,
  SubmitButton, Footer, IconWrapper,
} from './complete-signup.style';

/**
 * This is the CompleteSignup component
 * @returns {React.Component}
 */
const CompleteSignup = () => {
  const { state } = useContext(Store);
  const [loading, setLoading] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Content>
      <header>
        <Title>Finalizar cadastro</Title>  
        <Description>Estamos quase! Só precisamos de mais alguns dados seus para garantir sua segurança na plataforma.</Description>  
      </header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          completeRegister({
            setLoading,
            setErrors,
            name,
            email,
            cpf,
            ida: state.auth.ida,
          });
        }}
      >
        <div>
          <TextInput
            type="tel"
            label="CPF"
            error={errors.cpf}
            value={masker.toPattern(cpf, '999.999.999-99')}
            onChange={setCpf}
          />
          <TextInput
            label="Nome Completo"
            error={errors.name}
            value={name}
            onChange={setName}
          />
          <TextInput
            label="E-mail"
            error={errors.email}
            value={email}
            onChange={setEmail}
          />
        </div>
        <Footer>
          <CheckboxInput
            checked
            customStyle={`
              & + label {
                color: #000;
                font-size: 16px;
              }

              & + label:before {
                border-color: #000;
              }
            `}
          >Li e concordo com os <a href="#">termos de uso e privacidade</a> da PLATAFORMA</CheckboxInput>
          <SubmitButton
            disabled={!name || !cpf}
          >
            Finalizar
            <IconWrapper>
              <Icon>done</Icon>
            </IconWrapper>
          </SubmitButton>
        </Footer>
      </Form>
    </Content>
  );
};

export default CompleteSignup;