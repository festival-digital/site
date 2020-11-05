import React from 'react';
import EventsTemplate from 'components/templates/events/events';
import PrivateContext from 'components/private-context/private-context';

const EventsPage = () => {
  return (
    <PrivateContext>
     <EventsTemplate />
    </PrivateContext>
  );
};

export default EventsPage;
