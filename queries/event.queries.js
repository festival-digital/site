import { gql } from 'apollo-boost';

export const ONE_EVENT_QUERY = gql`
  query($id: String) {
    oneEvent(id: $id) {
      id
      name
      sympla_id
    }
  }
`;

// id
// name
// sympla_id
// tickets {
//   id
// }
// description
// image_url
// cover_url
// site_url
// tags
// sympla_url
// start_date
// end_date
// is_free
// status
// productor {
//   id
//   ida
// }
// activities {
//   id
//   title
//   description
//   tags
//   end_date
//   start_date
//   subscription_start_date
//   subscription_end_date
//   has_subscription
//   subscription_url
//   subscribeds {
//     id
//     ida
//   }
//   type
//   streaming_url
//   shows_uri
//   event {
//     id
//   }
// }

export const ALL_EVENTS_QUERY = gql`
  query {
    allEvents {
      id
      name
      sympla_id
      tickets {
        id
      }
      description
      image_url
      cover_url
      site_url
      tags
      sympla_url
      start_date
      end_date
      is_free
      status
      activities {
        id
        title
        description
        tags
        end_date
        start_date
        subscription_start_date
        subscription_end_date
        has_subscription
        subscription_url
      }
    }
  }
`;
