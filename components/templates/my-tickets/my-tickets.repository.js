import { client } from 'utils/apollo';
import { ALL_TICKETS_QUERY } from 'queries/tickets.queries';

/**
 * request tickets on api
 * @returns {Promise} contains tickets or error
 */
export const getTickets = ({ user }) =>
  client().query({
    query: ALL_TICKETS_QUERY,
    variables: { ticket: { user } },
  });