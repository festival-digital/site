import React, { useState } from 'react';
import styled from 'styled-components';
import ActivityCard from 'components/organisms/activity-card';
import EventCard from 'components/organisms/event-card';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import EventHeader from 'components/organisms/event-header/event-header';
import { Text, TextInput } from '@resystem/design-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.neutralColor[8]};
  padding-left: ${({ theme }) => theme.spacingInset.xs};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

const Separator = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.neutralColor[8]};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.neutralColor[8]};
  padding: ${({ theme }) => theme.spacingSquish.nano};

  & input {
    background: #404040;
    color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 40px;
  }
`;

const FilterButtonContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacingInline.xxxs};
  & button {
    margin-right: ${({ theme }) => theme.spacingInline.nano};
  }
`;

const PlainButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  height: 33px;
  /* Brand / Secondary / Medium */
  background: ${({ background }) => background || `#414141`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

const EventsPage = () => {
  const handler = () => {
    console.log(123);
  };
  return (
    <>
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

export default EventsPage;
