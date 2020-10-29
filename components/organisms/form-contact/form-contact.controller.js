import { createFAQQuestion as createFAQQuestionRespository } from './form-contact.repository';

export const createFAQQuestion = async ({
  name,
  email,
  phone,
  message,
  user,
}) => {
  try {
    await createFAQQuestionRespository({
      name,
      email,
      phone,
      message,
      user,
    });
  } catch (err) {
    return;
  }
  setLoading(false);
};
