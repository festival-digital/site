import { gql } from "apollo-boost";

export const ONE_EVENT_QUERY = gql`
query oneEvent($id: String) {
  oneEvent(id: $id) {
    id
    name
    sympla_id
    tickets {
      id
    }
    description
    ticket_url
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
      tags
      title
      end_date
      start_date
      has_subscription
      type
      streaming_url
    }
  }
}
`;
