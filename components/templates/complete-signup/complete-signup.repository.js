import { client } from 'utils/apollo';
import { CREATE_USER_MUTATION } from 'mutations/user.mutations';

/**
 * request user on api
 * @param {string} params user IDA token to be found on APP API
 * @returns {Promise} contains user data or null
 */
export const createUser = (user) => client().mutate({
  mutation: CREATE_USER_MUTATION,
  variables: { user },
});
