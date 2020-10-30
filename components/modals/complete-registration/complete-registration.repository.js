import { client } from 'utils/apollo';
import { ONE_USER_QUERY, ALL_USERS_QUERY } from 'queries/user.queries';
import { ALL_EVENTS_QUERY, ONE_EVENT_QUERY } from 'queries/event.queries';

/**
 * request user on api
 * @param {string} ida user IDA token to be found on APP API
 * @returns {Promise} contains user data or null
 */
export const fetchUser = (ida) =>
  client().query({
    query: ONE_USER_QUERY,
    variables: { ida },
  });

/**
 * request user on api
 * @param {Object} user receive all the users constraints for filter the search
 * @returns {Promise} contains all users that match with user args
 */
export const fetchAllUsers = (user) =>
  client().query({
    query: ALL_USERS_QUERY,
    variables: { user },
  });

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
