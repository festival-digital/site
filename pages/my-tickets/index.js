import React from 'react';
import MyTicketsTemplate from 'components/templates/my-tickets/my-tickets';
import PrivateContext from 'components/private-context/private-context';
import BaseHead from 'components/base-head/BaseHead';

/**
 * This is the MyTickets component
 * @returns {React.Component}
 */
const MyTickets = () => (
  <>
    <BaseHead
      title="Oasi - Gerenciar Ingressos"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <MyTicketsTemplate />
    </PrivateContext>
  </>
);

export default MyTickets;