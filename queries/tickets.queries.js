import { gql } from 'apollo-boost';

export const ALL_TICKETS_QUERY = gql`
  query ($ticket: TicketInput) {
    allTickets(ticket: $ticket) {
      id
      code
      sympla_ticket_name
      sympla_buyer_last_name
      sympla_buyer_first_name
      event {
        name
        id
        image_url
      }
    }
  }
`;
