import { client } from 'utils/apollo';
import {
  ADD_TICKET_INTO_USER_MUTATION,
  CREATE_USER_MUTATION,
  UPDATE_USER_MUTATION,
} from 'mutations/user.mutations';
import { ALL_EVENTS_QUERY } from 'queries/event.queries';

/**
 * request user on api
 * @param {string} params user IDA token to be found on APP API
 * @returns {Promise} contains user data or null
 */
export const createUser = (user) =>
  client().mutate({
    mutation: CREATE_USER_MUTATION,
    variables: { user },
  });

/**
 * request update user on api
 * @param {string} params user IDA token to be found on APP API
 * @returns {Promise} contains user data or null
 */
export const updateUser = (user) =>
client().mutate({
  mutation: UPDATE_USER_MUTATION,
  variables: { user },
});

/**
 * request events on api
 * @returns {Promise} contains events array
 */
export const getEvents = () =>
  client().query({
    query: ALL_EVENTS_QUERY,
  });

/**
 * request events on api
 * @returns {Promise} contains events array
 */
export const addTicket = ({ sympla_event_id, user_id, code }) =>
  client().mutate({
    mutation: ADD_TICKET_INTO_USER_MUTATION,
    variables: {
      sympla_event_id,
      user_id,
      code,
    },
  });
