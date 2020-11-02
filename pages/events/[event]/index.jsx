import React, { useEffect } from 'react';
import styled from 'styled-components';
import EventTemplate from 'components/templates/event/event';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventPage = ({ event_id }) => {
  return (
    <Container>
     <EventTemplate event_id={event_id} />
    </Container>
  );
};

EventPage.getInitialProps = ({ query }) => ({ event_id: query.event });

export default EventPage;
