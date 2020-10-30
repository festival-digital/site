import { gql } from 'apollo-boost';

export const VOTE_MUTATION = gql`
  mutation ($vote: VoteInput!) {
    vote (vote: $vote) {
      id
      show {
        id
      }
    }
  }
`;

export const UNVOTE_MUTATION = gql`
  mutation ($vote_id: ID!) {
    unvote (vote_id: $vote_id) {
      id
    }
  }
`;
