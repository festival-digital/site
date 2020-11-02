import { client } from 'utils/apollo';
import { ALL_EVENTS_QUERY } from 'queries/events.queries';

/**
 * request events on api
 * @returns {Promise} contains events or error
 */
export const getEvents = () => client().query({
  query: ALL_EVENTS_QUERY,
});
