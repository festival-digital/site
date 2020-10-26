import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
  mutation($user: UserInput) {
    createUser(user: $user) {
      id
      ida
      tickets {
        id
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation($user: UserInput) {
    updateUser(user: $user) {
      id
      ida
      tickets {
        id
      }
    }
  }
`;

export const ADD_TICKET_INTO_USER_MUTATION = gql`
  mutation($code: String, $user_id: String, $sympla_event_id: String) {
    addTicketIntoUser(
      code: $code
      user_id: $user_id
      sympla_event_id: $sympla_event_id
    ) {
      id
      ida
      tickets {
        id
      }
    }
  }
`;
