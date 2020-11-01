import { gql } from "apollo-boost";

export const UPDATE_USER_MUTATION = gql`
  mutation($user: UserInput) {
    updateUser(user: $user) {
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
