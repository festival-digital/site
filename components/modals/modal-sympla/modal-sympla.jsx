import React from 'react';
import PropTypes from 'prop-types';
import { Animation } from '@resystem/design-system';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import CancelButton from 'components/atoms/cancel-button/cancel-button';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import {
  Wrapper,
  Modal,
  BackgroundHeader,
  HeaderContent,
  MainContent,
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

const ModalSympla = ({
  opened,
  handleConfirmButton,
  handleCancelButton,
  handleBackButton,
   toSympla, onCancel
}) => {
  function handleConfirmButtonClick() {
    handleConfirmButton();
  }

  function handleCancelButtonClick() {
    handleCancelButton();
  }

  function handleBackButtonClick() {
    handleBackButton();
  }

  return (
    <Wrapper opened={opened}>
      <Animation
        animation="slideInUp"
        duration="650ms"
        customStyle="width:100%;"
      >
        <Modal>
          <BackgroundHeader alt="" />
          <HeaderContent>
            <ContentButtonGoBack>
              <GoBackButton onClick={handleBackButtonClick} />
            </ContentButtonGoBack>
            <WrapperLogo>
              <Brand
                src="/static/icons/oasi.svg"
                alt="esse é um logo provisório para a plataforma da feira digital"
              />
              <Icon> + </Icon>
              <Brand
                src="/static/icons/sympla-logo.svg"
                alt="esse é um logo da plataforma sympla"
              />
            </WrapperLogo>
          </HeaderContent>
          <MainContent>
            <Title>Finalize a compra dos seus ingressos no Sympla!</Title>
            <Space />
            <Text>
              O Sympla é uma plataforma segura de compra de ingressos. Depois de
              comprar, você já volta aqui pra Oasi para curtir seu evento!
            </Text>
            <Space />
            <Space />
            <NavigationLink onClick={() => { window.open('https://www.sympla.com.br', '_blank') }}
          >Saiba mais sobre o sympla
        </NavigationLink>
        <Space />
        <GradientButton onClick={toSympla}>Entendi, vamos lá</GradientButton>
        <SpaceSmall />
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          </MainContent>
        </Modal>
      </Animation>
    </Wrapper>
  );
};

ModalSympla.propTypes = {
  opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
  handleBackButton: PropTypes.func,
  toSympla: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

ModalSympla.defaultProps = {
  opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
  handleBackButton: () => {},
  toSympla: () => {},
  onCancel: () => {},
};

export default ModalSympla;
