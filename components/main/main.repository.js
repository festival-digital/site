import { client } from 'utils/apollo';
import { ONE_USER_QUERY } from 'queries/user.queries';

/**
 * request user on api
 * @param {string} ida user IDA token to be found on APP API
 * @returns {Promise} contains user data or null
 */
export const fetchUser = (ida) => client().query({
  query: ONE_USER_QUERY,
  variables: { ida },
});
