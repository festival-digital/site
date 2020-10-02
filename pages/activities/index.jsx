import React, { useState } from 'react';
import styled from 'styled-components';
import { ActivityCardSimple } from 'components/organisms/activity-card';
import ActivityIncentiveCard from 'components/molecules/activity-incentive-card';
import { SmallText } from '@resystem/design-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-left: 18px;
  color: black;
`;

const Separator = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Activities = () => {
  const handler = () => {
    console.log(123);
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <SmallText variant="warning" />
          Acontecendo agora!
        </TitleContainer>
        <ActivityCardSimple
          backgroundUrl="static/images/card1.png"
          iconUrl="static/images/card1-logo.png"
          title="Feira da Música de Fortaleza"
          subtitle="11 a 13 de novembro"
        />
        <TitleContainer>
          <SmallText variant="warning" />
          Próximos Eventos
        </TitleContainer>
        <ActivityCardSimple
          backgroundUrl="static/images/card2.png"
          iconUrl="static/images/card2-logo.png"
          title="Afete-se Digital"
          subtitle="24 de Novembro - 23:00"
        />
        <ActivityCardSimple
          backgroundUrl="static/images/card3.png"
          iconUrl="static/images/card3-logo.png"
          title="Festival Móveis Convida"
          subtitle="02 a 04 de dezembro - 23:00"
        />
        <Separator backgroundColor="#000" />
        <ActivityIncentiveCard />
      </Container>
    </>
  );
};

export default Activities;
