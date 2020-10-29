import { client } from 'utils/apollo';
import { CREATE_FAQ_MUTATION } from 'mutations/faq.mutations';

export const createFAQQuestion = ({ name, email, phone, message, user }) =>
  client().mutate({
    mutation: CREATE_FAQ_MUTATION,
    variables: { name, email, phone, message, user },
  });
