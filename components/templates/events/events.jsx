import React, { useState, useEffect } from 'react';
import moment, { monthsShort } from 'moment';
import Link from 'next/link';
import EventCard from 'components/organisms/event-card';
import Loading from 'components/atoms/loading/loading';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import { isMobile } from 'utils/validations';
import EventHeader from 'components/organisms/event-header/event-header';
import { Text } from '@resystem/design-system';
import { getEvents } from './events.controller';
import {
  Container,
  TitleContainer,
  Separator,
  FilterContainer,
  FilterButtonContainer,
  PlainButton,
  EventList,
  LoadingWrapper,
} from './events.style';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const getDateString = (startDate, endDate) => {
  const momentStartDate = moment(+startDate);
  const momentEndDate = moment(+endDate);

  let startDay = (momentStartDate.date()).toString();
  let endDay = (momentEndDate.date()).toString();

  startDay = startDay.length === 1 ? `0${startDay}` : startDay;
  endDay = endDay.length === 1 ? `0${endDay}` : endDay;

  if (momentStartDate.month() === momentEndDate.month()) {
    return `de ${startDay} a ${endDay} de ${months[momentEndDate.month()]}`;
  }

  return `de ${startDay} ${
    monthsShort[momentStartDate.month()]
  } a ${endDay} de ${months[momentEndDate.month()]}`;
};

const renderNowEvents = ({ events }) =>
  events.map((event) => (
    <li key={event.id}>
      <Link href="/events/[event]" as={`/events/${event.id}`}>
        <a>
          <EventCard
            backgroundUrl={event.cover_url}
            iconUrl={event.image_url}
            title={event.name}
            subtitle={getDateString(event.start_date, event.end_date)}
          />
        </a>
      </Link>
    </li>
  ));

const renderOtherEvents = ({ events }) =>
  events.map((event) => (
    <li key={event.id}>
      <Link href="/events/[event]" as={`/events/${event.id}`}>
        <a>
          <EventCard
            backgroundUrl={event.cover_url}
            iconUrl={event.image_url}
            title={event.name}
            subtitle={getDateString(event.start_date, event.end_date)}
          />
        </a>
      </Link>
    </li>
  ));

const EventsTemplate = () => {
  const [loading, setLoading] = useState(true);
  const [nowEvents, setNowEvents] = useState([]);
  const [otherEvents, setOtherEvents] = useState([]);

  useEffect(() => {
    getEvents({ setLoading, setNowEvents, setOtherEvents });
  }, []);

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      {/* <CompleteRegistration opened /> */}
      <Container>
        <div className="wrapper">
          <EventHeader />
          {/* <FilterContainer>
            <input placeholder="Buscar evento" />
            <FilterButtonContainer>
              <PlainButton background="#FF9AE0">Todos</PlainButton>
              <PlainButton>Meus eventos</PlainButton>
            </FilterButtonContainer>
          </FilterContainer> */}
          {nowEvents.length ? (
            <>
              <TitleContainer>
                <Text variant="warning">Acontecendo agora!</Text>
              </TitleContainer>
              <EventList>{renderNowEvents({ events: nowEvents })}</EventList>
            </>
          ) : null}
          {otherEvents.length ? (
            <>
              <TitleContainer>Próximos Eventos</TitleContainer>
              <EventList>{renderOtherEvents({ events: otherEvents })}</EventList>
            </>
          ) : null}
          <Separator />
        </div>
        {
          isMobile() ? (
            <ActivityIncentiveCard />
          ) : null
        }
      </Container>
    </>
  );
};

export default EventsTemplate;
