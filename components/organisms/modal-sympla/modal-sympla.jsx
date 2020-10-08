import React from 'react';
import {
  Wrapper,
  Modal,
  NavigationLink,
  Title,
  Space,
  Text,
  Brand,
  WrapperLogo,
  SubmitButton,
  CancelButton,
  SpaceSmall,
  Icon,
} from './modal-sympla.style';

const ModalSympla = () => {
  return (
    <Wrapper opened>
      <Modal>
        <WrapperLogo>
          <Brand
            style={{ height: '22px' }}
            src="/static/icons/oasis-logo.svg"
            alt="esse é um logo provisório para a plataforma da feira digital"
          />
          <Icon> + </Icon>
          <Brand
            src="/static/icons/sympla-logo.svg"
            alt="esse é um logo da plataforma sympla"
          />
        </WrapperLogo>
        <Space />
        <Title>Finalize a compra dos seus ingressos no Sympla!</Title>
        <Space />
        <Text>
          O Sympla é uma plataforma segura de compra de ingressos. Depois de
          comprar, você já volta aqui pra Oasi para curtir seu evento!
        </Text>
        <Space />
        <NavigationLink>Saiba mais sobre o sympla</NavigationLink>
        <Space />
        <SubmitButton>Entendi, vamos lá</SubmitButton>
        <SpaceSmall />
        <CancelButton>Cancelar</CancelButton>
      </Modal>
    </Wrapper>
  );
};

export default ModalSympla;
