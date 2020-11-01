import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';
import Button from 'components/atoms/button/button';
import {
  Card, InformationWrapper, Title, FieldLabel,
  Field, LogoWrapper, FieldValue, EventLogo,
} from './ticket-card.style'

const TicketCard = ({
  eventLogo, eventTitle, code, name,
  user,
}) => (
  <Card>
    <LogoWrapper>
      <EventLogo src={eventLogo} alt="" />
      <Button
        color="#808080"
        title={`Deletar ticket para ${eventTitle}`}
        customStyle={`
          width: 50px;
          text-align: center;
          margin-top: 8px;
          
          > span:first-child,
          > span {
            margin-right: 0;
          }
        `}
      >
        <Icon>delete_forever</Icon>
      </Button>
    </LogoWrapper>
    <InformationWrapper>
      <Title>{eventTitle}</Title>
      <Field>
        <FieldLabel>Código do Ingresso</FieldLabel>
        <FieldValue>{code}</FieldValue>
      </Field>
      <Field>
        <FieldLabel>Tipo do Ingresso</FieldLabel>
        <FieldValue>{name}</FieldValue>
      </Field>
      <Field>
        <FieldLabel>Participante</FieldLabel>
        <FieldValue>{user}</FieldValue>
      </Field>
    </InformationWrapper>
  </Card>
);

TicketCard.propTypes = {
  eventLogo: PropTypes.string.isRequired,
  eventTitle: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TicketCard;
