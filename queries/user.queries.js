import { gql } from 'apollo-boost';

export const ONE_USER_QUERY = gql`
  query ($ida: String) {
    oneUser(ida: $ida) {
      id
      ida
      email
      first_name
      last_name
      cpf
    }
  } 
`;
