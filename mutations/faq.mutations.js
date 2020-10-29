import { gql } from 'apollo-boost';

export const CREATE_FAQ_MUTATION = gql`
  mutation($FAQQuestion: FAQQuestionInput) {
    createFAQQuestion(FAQQuestion: $FAQQuestion) {
      id
    }
  }
`;
