import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper } from './ticket-form.style';

const TicketForm = ({
  ticket, onSubmit, setTicket,
}) => (
  <FormWrapper>
    <SimpleInput
      value={ticket}
      placeholder="Digite o código do ingresso"
      onChange={(e) => setTicket(e.target.value)}
    />
    <Button type="button" onClick={onSubmit} disabled={!ticket}>
      Tenho! É esse aqui
    </Button>
    <LinkButton>Não sei para onde estou indo</LinkButton>
  </FormWrapper>
);

TicketForm.propTypes = {
  ticket: PropTypes.string.isRequired,
  setTicket: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TicketForm.defaultProps = {};

export default TicketForm;


