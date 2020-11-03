import React from 'react';
import PropTypes from 'prop-types';
import VanillaMask from 'vanilla-masker';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import { FormWrapper, FakeInput } from './ticket-form.style';

const TicketForm = ({
  ticket, onSubmit, setTicket,
}) => (
  <FormWrapper>
    <SimpleInput
      value={ticket}
      placeholder="Digite o código do ingresso"
      onChange={(e) => setTicket(VanillaMask.toPattern(e.target.value, 'SSSS-SS-SSSS').toUpperCase())}
    />
    <Button type="button" onClick={onSubmit} disabled={!ticket}>
      Tenho! É esse aqui
    </Button>
    <FakeInput />
    {/* <LinkButton>Não sei para onde estou indo</LinkButton> */}
  </FormWrapper>
);

TicketForm.propTypes = {
  ticket: PropTypes.string.isRequired,
  setTicket: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TicketForm.defaultProps = {};

export default TicketForm;


