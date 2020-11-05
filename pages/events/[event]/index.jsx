import React, { useEffect } from 'react';
import styled from 'styled-components';
import EventTemplate from 'components/templates/event/event';
import PrivateContext from 'components/private-context/private-context';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventPage = ({ event_id }) => {
  return (
    <PrivateContext>
      <Container>
        <EventTemplate event_id={event_id} />
      </Container>
    </PrivateContext>
  );
};

EventPage.getInitialProps = ({ query }) => ({ event_id: query.event });

export default EventPage;
