import React from 'react';
import PropTypes from 'prop-types';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import CancelButton from 'components/atoms/cancel-button/cancel-button';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import {
  Wrapper,
  Modal,
  NavigationLink,
  Title,
  Space,
  Text,
  Brand,
  WrapperLogo,
  SpaceSmall,
  ContentButtonGoBack,
  Icon,
} from './modal-sympla.style';

const ModalSympla = ({ opened, toSympla, onCancel }) => {
  return (
    <Wrapper opened={opened}>
      <Modal>
        {/* <ContentButtonGoBack>
          <GoBackButton />
        </ContentButtonGoBack> */}
        <WrapperLogo>
          <Brand
            style={{ height: '22px' }}
            src="/static/icons/oasi.svg"
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
        <NavigationLink onClick={() => { window.open('https://www.sympla.com.br', '_blank') }}
          >Saiba mais sobre o sympla
        </NavigationLink>
        <Space />
        <GradientButton onClick={toSympla}>Entendi, vamos lá</GradientButton>
        <SpaceSmall />
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </Modal>
    </Wrapper>
  );
};

ModalSympla.propType = {
  opened: PropTypes.bool.isRequired,
  toSympla: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ModalSympla;
