import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventHeader from 'components/organisms/event-header';
import buildClass from 'utils/buildClass';
import { enhancedCodeGenerator } from 'utils/codeGenerator';
import { Text as TXT } from '@resystem/design-system';
import {
  Container,
  EventCover,
  LinearBackground,
  EventLogo,
  EventDate,
  DescriptionEvent,
  BadgeContainer,
  Badge,
  ButtonAddTicket,
  Title,
  SmallText,
  LinkBadge,
  Text,
} from './styles';

const EventPage = () => {
  const badges = [
    'música',
    'oficinas',
    'mostra de vidioclipe',
    'hackatom',
    'zona de propulsão',
  ];
  return (
    <Container>
      <EventCover>
        <LinearBackground>
          <EventLogo src="/static/images/card1-logo.png" alt="Logo do evento" />
          <EventDate>
            <span>11 a 13</span>
            <span>novembro</span>
          </EventDate>
        </LinearBackground>
      </EventCover>
      <DescriptionEvent>
        <Title>Feira da Música de Fortaleza</Title>
        <SmallText>Evento é gratuito</SmallText>
        <LinkBadge href="/"> Site do evento </LinkBadge>
        <BadgeContainer>
          {badges.map((item) => (
            <Badge key={enhancedCodeGenerator()}>{item}</Badge>
          ))}
        </BadgeContainer>
        <Text>
          Cinco dias de muita música brasileira, com artistas locais e
          emergentes. Também vai rolar exposições com artistas de Fortaleza, e
          claro que não podia faltar a feirinha online, né?
        </Text>
        <ButtonAddTicket>Já tenho um ingresso</ButtonAddTicket>
        <Text variant="warning">Acontecendo agora!</Text>
      </DescriptionEvent>
    </Container>
  );
};

export default EventPage;
