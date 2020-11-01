import { createFAQQuestion as createFAQQuestionRespository } from './form-contact.repository';

export const createFAQQuestion = async ({
  name,
  email,
  phone,
  message,
  user,
}) => {
  let responseFAQQuestion = '';
  try {
    responseFAQQuestion = await createFAQQuestionRespository({
      name,
      email,
      phone,
      message,
      user,
    });
  } catch (err) {
    throw err;
  }
  return responseFAQQuestion;
};
