import { gql } from 'apollo-boost';

export const ONE_USER_QUERY = gql`
  query($ida: String) {
    oneUser(ida: $ida) {
      id
      ida
      first_name
      last_name
      display_name
      birth_date
      old
      city
      state
      gender
      other_gender
      skin_color
      other_skin_color
      has_disability
      disability
      status
      tickets {
        id
        code
        event {
          sympla_id
        }
      }
    }
  }
`;

export const ALL_USERS_QUERY = gql`
  query($user: UserInput) {
    allUsers(user: $user) {
      id
      ida
      first_name
      last_name
      display_name
      birth_date
      old
      city
      state
      gender
      other_gender
      skin_color
      other_skin_color
      has_disability
      disability
      status
      tickets {
        id
        code
        sympla_id
        sympla_order_id
        sympla_qr_code
        sympla_ticket_name
        sympla_sale_price
        sympla_buyer_first_name
        sympla_buyer_last_name
        sympla_buyer_email
      }
    }
  }
`;
