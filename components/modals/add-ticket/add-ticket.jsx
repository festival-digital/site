import React, { useState } from  'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import TextInput from 'components/molecules/text-input/TextInput';
import ModalWrapper from 'components/organisms/modal-wrapper/modal-wrapper';
import {
  Content, Title, Description, AddTicketButton,
  AddIconWrapper, TicketList, SubmitButton, SubmitIconWrapper,
  InformationLink,
} from './add-ticket.style';

/**
 * content with ticket list and add new option
 * @returns {React.Component}
 */
const renderListContent = ({ setIsAdd }) => (
  <Content>
    <header>
      <Title>Você já tem ingresso?</Title>  
      <Description>Se sim, adicione eles aqui. Você também pode adicioná-los mais tarde.</Description>  
    </header>
    <TicketList>
      <AddTicketButton onClick={() => { setIsAdd(true) }} type="button">
        Adicionar ingresso
        <AddIconWrapper>
          <Icon style={{ color: '#771F5C' }}>add</Icon>
        </AddIconWrapper>
      </AddTicketButton>
    </TicketList>
    <SubmitButton type="submit">
      Adicionar depois
      <SubmitIconWrapper>
        <Icon style={{ color: '#FFFFFF' }}>keyboard_arrow_right</Icon>
      </SubmitIconWrapper>
    </SubmitButton>
  </Content>
);

/**
 * content to add new ticket
 * @returns {React.Component}
 */
const renderAddContent = () => (
  <Content>
    <header>
      <Title>Adicionar ingresso</Title>  
    </header>
    <div>
      <TextInput
        label="Código do ingresso"
      />
      <InformationLink href="#">Onde encontro o código do ingresso?</InformationLink>
    </div>
    <SubmitButton type="submit">
      Adicionar ingresso
      <SubmitIconWrapper>
        <Icon style={{ color: '#FFFFFF' }}>done</Icon>
      </SubmitIconWrapper>
    </SubmitButton>
  </Content>
);

/**
 * modal to add and manage ticket of an account 
 * @param {boolean} opened flag to control render state on modal, opened or hidden
 * @returns {React.Component}
 */
const AddTicket = ({ opened }) => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <ModalWrapper opened={opened}>
      { isAdd ? renderAddContent() : renderListContent({ setIsAdd }) }
    </ModalWrapper>
  );
};

AddTicket.propTypes = {
  opened: PropTypes.bool.isRequired,
};

export default AddTicket;
