import { client } from 'utils/apollo';
import { ALL_EVENTS_QUERY } from 'queries/event.queries';

/**
 * request user on api
 * @param {Object} event receive all the events constraints for filter the search
 * @returns {Promise} contains all events that match with event args
 */
export const fetchAllEvents = (event) =>
  client().query({
    query: ALL_EVENTS_QUERY,
    variables: { event },
  });
