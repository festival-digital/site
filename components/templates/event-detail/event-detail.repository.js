import { client } from 'utils/apollo';
import { ONE_EVENT_QUERY } from 'queries/event.queries';

/**
 * request user on api
 * @param {Object} id event id to be found on APP API
 * @returns {Promise} contains event data or null
 */
export const fetchEvent = (id) =>
  client().query({
    query: ONE_EVENT_QUERY,
    variables: { id },
  });
