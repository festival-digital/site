import { client } from 'utils/apollo';
import { ONE_ACTIVITY_QUERY } from 'queries/activities.queries';
import { VOTE_MUTATION, UNVOTE_MURATION } from 'mutations/vote.mutations';

/**
 * request activity on api
 * @returns {Promise} contains activity or error
 */
export const getActivity = ({ title_key }) =>
  client().query({
    query: ONE_ACTIVITY_QUERY,
    variables: { title_key },
  });

export const vote = ({ user, show, ratePoint }) => 
  client().mutate({
    mutation: VOTE_MUTATION,
    variables: { vote: { user, show, rate_point: ratePoint } },
  });

export const unvote = ({ voteId }) => 
  client().mutate({
    mutation: UNVOTE_MUTATION,
    variables: { vote_id: voteId },
  });
