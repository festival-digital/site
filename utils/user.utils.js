import { gql } from "apollo-boost";

export const USER_SCHEMA = `
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
      id
      sympla_id
    }
  }
`;

export const USER_QUERY = gql`
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
          id
          sympla_id
        }
      }
    }
  }
`;