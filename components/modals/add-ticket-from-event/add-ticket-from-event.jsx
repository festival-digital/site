import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VanillaMask from 'vanilla-masker';
import { Animation } from '@resystem/design-system';

import {
  Title,
  Space,
  SpaceSmall,
  Wrapper,
  Modal,
  MessageContainer,
  MessageImage,
  Message,
} from './add-ticket-from-event.style';
import Button from '../../atoms/button/button';
import CancelButton from '../../atoms/cancel-button/cancel-button';
import SimpleInput from '../../atoms/simple-input/simple-input';

const AddTicketFromEvent = ({
  opened,
  handleConfirmButton,
  handleCancelButton,
}) => {
  /* values */
  const [ticketInput, setTicketInput] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  /* erros */
  const [ticketError, setTicketError] = useState('');

  const hasError = (string) => {
    console.log(string, !!string);
    return !!string;
  };
  const simpleInputValidation = (string) =>
    string.length === 0 ? 'Código inválido! Tente novamente' : '';

  function handleConfirmButtonClick() {
    handleConfirmButton({
      ticket: ticketInput,
    });
  }

  function handleIgnoreButtonClick() {
    handleCancelButton();
  }

  function handleTicketInput({ target }) {
    setTicketInput(target.value.replace('/-/', ''));
    setTicketError(simpleInputValidation(target.value));
  }

  useEffect(() => {
    if (hasError(simpleInputValidation(ticketInput))) setButtonDisabled(true);
    else setButtonDisabled(false);
  }, [ticketInput]);

  /* onChanges */

  return (
    <Wrapper opened={opened}>
      <Animation
        animation="slideInUp"
        duration="400ms"
        customStyle="width: 100%"
      >
        <Modal>
          <Title>Complete seu cadastro para acessar o evento!</Title>
          <Space />
          <Space />
          <SimpleInput
            placeholder="Digite o código do ingresso"
            value={VanillaMask.toPattern(ticketInput, 'SSSS-SS-SSSS').toUpperCase()}
            onChange={handleTicketInput}
            error={ticketError}
          />

          <MessageContainer>
            <MessageImage
              src="/static/icons/avatar-pink.svg"
              alt="avatar que representa um usuário qualquer do jogo"
            />
            <Message>
              O código do ingresso tem 10 dígitos (letras e números), e está no
              e-mail de confirmação que você recebeu do Sympla!
            </Message>
          </MessageContainer>
          <Space />
          <Button
            disabled={buttonDisabled}
            onClick={handleConfirmButtonClick}
            icon="check_circle"
          >
            Adicionar
          </Button>
          <Space />
          <CancelButton onClick={handleIgnoreButtonClick}>
            Cancelar
          </CancelButton>
        </Modal>
      </Animation>
    </Wrapper>
  );
};

AddTicketFromEvent.propTypes = {
  opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
};

AddTicketFromEvent.defaultProps = {
  opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
};

export default AddTicketFromEvent;
