import React, { useEffect } from 'react';
import styled from 'styled-components';
import BaseHead from 'components/base-head/BaseHead'
import EventTemplate from 'components/templates/event/event';
import PrivateContext from 'components/private-context/private-context';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventPage = ({ event_id }) =>  (
  <>
    <BaseHead
      title="Página do Evento"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <Container>
        <EventTemplate event_id={event_id} />
      </Container>
    </PrivateContext>
  </>
);

EventPage.getInitialProps = ({ query }) => ({ event_id: query.event });

export default EventPage;
