import React from 'react';
import {
  Title,
  Space,
  SpaceSmall,
  Wrapper,
  Modal,
} from './complete-registration.style';
import Select from '../../atoms/select/select';
import TextInput from '../../molecules/text-input/TextInput';
import CancelButton from '../../atoms/cancel-button/cancel-button';
import GradientButton from '../../atoms/gradient-button/gradient-button';

const teste = ['banna', 'maça', 'abacate'];

const handleClick = () => console.log('teste');

const CompleteRegistration = () => {
  return (
    <Wrapper opened>
      <Modal>
        <Title>Complete seu cadastro para acessar o evento!</Title>
        <Space />
        <Select options={teste} />
        <Space />
        <TextInput label="Digite sua cidade e estado" />
        <GradientButton>Continuar</GradientButton>
        <SpaceSmall />
        <CancelButton onClick={handleClick}>Ignorar</CancelButton>
      </Modal>
    </Wrapper>
  );
};

export default CompleteRegistration;
