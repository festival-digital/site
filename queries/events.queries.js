import { gql } from 'apollo-boost';

export const ALL_EVENTS_QUERY = gql`
  query {
    allEvents {
      id
      title_key
      name
      cover_url
      image_url
      end_date
      start_date
      tags
      status
      description
      activities {
        id
        title
        description
        end_date
        start_date
        tags
        streaming_url
      }
      end_date
      start_date
      sympla_url
      is_free
    }
  }
`;
