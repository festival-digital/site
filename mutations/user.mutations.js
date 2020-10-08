import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
  mutation ($user: UserInput) {
    createUser(user: $user) {
      id
      ida
      first_name
      last_name
      email
      cpf
    }
  } 
`;
