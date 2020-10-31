import React, { useState } from 'react';
import EventCard from 'components/organisms/event-card';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import EventHeader from 'components/organisms/event-header/event-header';
import { Text } from '@resystem/design-system';
import {
  Container, TitleContainer, Separator,
  FilterContainer, FilterButtonContainer, PlainButton,
} from './events.style';

const EventsTemplate = () => {
  const handler = () => {
    console.log(123);
  };
  return (
    <>
      {/* <CompleteRegistration opened /> */}
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
        <EventCard
          backgroundUrl="static/images/card1.png"
          iconUrl="static/images/card1-logo.png"
          title="Feira da Música de Fortaleza"
          subtitle="11 a 13 de novembro"
        />
        <TitleContainer>Próximos Eventos</TitleContainer>
        <EventCard
          backgroundUrl="static/images/card2.png"
          iconUrl="static/images/card2-logo.png"
          title="Afete-se Digital"
          subtitle="24 de Novembro - 23:00"
        />
        <EventCard
          backgroundUrl="static/images/card3.png"
          iconUrl="static/images/card3-logo.png"
          title="Festival Móveis Convida"
          subtitle="02 a 04 de dezembro - 23:00"
        />
        <Separator />
        <ActivityIncentiveCard />
      </Container>
    </>
  );
};

export default EventsTemplate;
