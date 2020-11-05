import React from 'react';
import BaseHead from 'components/base-head/BaseHead'
import EventsTemplate from 'components/templates/events/events';
import PrivateContext from 'components/private-context/private-context';

const EventsPage = () => (
  <>
    <BaseHead
      title="Lista de eventos Oasi"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <EventsTemplate />
    </PrivateContext>
  </>
);

export default EventsPage;
