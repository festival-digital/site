import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import EventCard from 'components/organisms/event-card';
import Loading from 'components/atoms/loading/loading';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import EventHeader from 'components/organisms/event-header/event-header';
import { Text } from '@resystem/design-system';
import { getEvents } from './events.controller';
import {
  Container, TitleContainer, Separator,
  FilterContainer, FilterButtonContainer, PlainButton,
  EventList, LoadingWrapper,
} from './events.style';
import { monthsShort } from 'moment';

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho' ,'Julho' ,'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

const getDateString = (startDate, endDate) => {
  const momentStartDate = moment(parseInt(startDate, 10));
  const momentEndDate = moment(parseInt(endDate, 10));
  
  let startDay = (momentStartDate.day() + 1).toString();
  let endDay = (momentEndDate.day() + 1).toString();

  startDay = startDay.length === 1 ? `0${startDay}` : startDay;
  endDay = endDay.length === 1 ? `0${endDay}` : endDay;

  if (momentStartDate.month() === momentEndDate.month()) {
    return `de ${startDay} a ${endDay} de ${months[momentEndDate.month()]}`;
  }
  
  return `de ${startDay} ${monthsShort[momentStartDate.month()]} a ${endDay} de ${months[momentEndDate.month()]}`;
};

const renderNowEvents = ({ events }) => events.map((event) => (
  <li>
    <Link href={`/events/${event.title_key}`}>
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

const renderOtherEvents = ({ events }) => events.map((event) => (
  <li>
    <Link href={`/events/${event.title_key}`}>
      <a>
        <EventCard
          backgroundUrl={event.cover_url}
          iconUrl={event.image_url}
          title={event.name}
          subtitle="11 a 13 de novembro"
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
          {
            nowEvents.length ? (
              <>
                <TitleContainer>
                  <Text variant="warning">Acontecendo agora!</Text>
                </TitleContainer>
                <EventList>
                  { renderNowEvents({ events: nowEvents }) }
                </EventList>
              </>
            ) : null
          }
          {
            otherEvents.length ? (
              <>
                <TitleContainer>Próximos Eventos</TitleContainer>
                <EventList>
                  { renderNowEvents({ events: otherEvents }) }        
                </EventList>
              </>
            ) : null
          }
          <Separator />
        </div>
        <ActivityIncentiveCard />
      </Container>
    </>
  );
};

export default EventsTemplate;
