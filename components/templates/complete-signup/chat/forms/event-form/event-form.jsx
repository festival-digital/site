import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/button';
import LinkButton from 'components/atoms/link-button/link-button';
import Select from 'components/atoms/select/Select';
import { FormWrapper } from './event-form.style';

const EventForm = ({
  event, eventOptions, onSubmit, setEvent,
}) => (
  <FormWrapper>
    <Select
      options={eventOptions}
      value={event}
      onChange={(e) => {
        setEvent(e.target.value);
      }}
      placeholder="Selecionar evento"
    />
    <Button type="button" onClick={onSubmit} disabled={!event}>
      Estou indo para esse evento
    </Button>
    <LinkButton>Não sei para onde estou indo</LinkButton>
  </FormWrapper>
);

EventForm.propTypes = {
  eventOptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  event: PropTypes.string.isRequired,
  setEvent: PropTypes.func.isRequired,
};

EventForm.defaultProps = {
  eventOptions: [],
};

export default EventForm;


