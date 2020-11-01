import { gql } from 'apollo-boost';

export const ONE_ACTIVITY_QUERY = gql`
  query($title_key: String) {
    oneActivity(title_key: $title_key) {
      id
      title
      description
      shows {
        id
        title
        url
        votes {
          id
          rate_point
          user {
            id
          }
        }
      }
    }
  }
`;
