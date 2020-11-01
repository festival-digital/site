import React from 'react';
import MyTicketsTemplate from 'components/templates/my-tickets/my-tickets';
import PrivateContext from 'components/private-context/private-context';


/**
 * This is the MyTickets component
 * @returns {React.Component}
 */
const MyTickets = () => (
  <PrivateContext>
    <MyTicketsTemplate />
  </PrivateContext>
);

export default MyTickets;