import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ActivityCard from 'components/organisms/activity-card';
import EventCard from 'components/organisms/event-card';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import EventHeader from 'components/organisms/event-header/event-header';
import { Text, TextInput } from '@resystem/design-system';
import CompleteRegistration from 'components/modals/complete-registration/complete-registration';
import moment from 'moment';
import { dateToLabel } from 'utils/date-formatter';
import {
  Container,
  FilterButtonContainer,
  FilterContainer,
  PlainButton,
  Separator,
  TitleContainer,
} from './events.style';
import { getAllEvents } from './events.controller';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [today, setToday] = useState(moment('13/11/2020', 'DD/MM/YYYY'));
  const [happeningNow, setHappeningNow] = useState([]);
  const [nextEvents, setNextEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((response) => {
      setEvents(response);
      const between = [];
      const after = [];
      const before = [];
      response.forEach((event) => {
        if (today.isBetween(event.start_date.utc(), event.end_date.utc())) {
          between.push(event);
        } else if (!today.isAfter(event.start_date.utc())) {
          after.push(event);
        } else if (!today.isBefore(event.start_date.utc())) {
          before.push(event);
        }
      });
      setHappeningNow(between);
      setNextEvents(after);
      setPreviousEvents(before);
    });
    // console.log('isBeetween', d.isBetween(start, end));
  }, []);

  // console.log('use state', happeningNow, nextEvents, previousEvents);

  return (
    <>
      <CompleteRegistration opened />
      <Container>
        <EventHeader />
        <FilterContainer>
          <input placeholder="Buscar evento" />
          <FilterButtonContainer>
            <PlainButton background="#FF9AE0">Todos</PlainButton>
            <PlainButton>Meus eventos</PlainButton>
          </FilterButtonContainer>
        </FilterContainer>
        <TitleContainer>
          <Text variant="warning">Acontecendo agora!</Text>
        </TitleContainer>
        {happeningNow.length === 0 && (
          <TitleContainer>
            <Text variant="default">Nenhum evento acontecendo agora</Text>
          </TitleContainer>
        )}
        {happeningNow.map((event) => {
          const subtitle = dateToLabel(event.start_date, event.end_date);
          return (
            <EventCard
              key={event.id}
              backgroundUrl={event.cover_url}
              iconUrl={event.image_url}
              title={event.name}
              subtitle={subtitle}
              eventId={event.id}
            />
          );
        })}

        <TitleContainer>Próximos Eventos</TitleContainer>
        {nextEvents.map((event) => {
          const subtitle = dateToLabel(event.start_date, event.end_date);
          return (
            <EventCard
              key={event.id}
              backgroundUrl={event.cover_url}
              iconUrl={event.image_url}
              title={event.name}
              subtitle={subtitle}
              eventId={event.id}
            />
          );
        })}
        <Separator />
        <ActivityIncentiveCard />
      </Container>
    </>
  );
};

export default EventsPage;
