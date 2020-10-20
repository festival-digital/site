import { gql } from 'apollo-boost';

export const ALL_EVENTS_QUERY = gql`
  query {
    allEvents {
      id
      sympla_id
      name
    }
  } 
`;
