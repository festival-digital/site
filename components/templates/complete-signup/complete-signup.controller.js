import { createUser } from './complete-signup.repository';
import { validateCPF } from 'utils/validations';

/**
 * function that validate and try errors or the api response
 * @param {object} user user to be map
 * @param {string} user.cpf user cpf
 * @param {string} user.name user display name
 * @param {string} user.ida user ativist identification
 * @param {string} user.email user email
 */
const mapUserToAPI = ({ ida, cpf, email, name }) => ({
  ida,
  email,
  first_name: email.split(' ')[0],
  last_name: name.split(' ').slice(1).join(' '),
  cpf: cpf.replace(/\D+/g, ''),
});

/**
 * function that validate and try errors or the api response
 * @param {object} params infations and state control function 
 * @param {function} params.setLoading set loading state when waits for api response   
 * @param {function} params.setErrors set error state if there is input errors   
 * @param {function} params.cpf user cpf
 * @param {function} params.name user name
 */
export const completeRegister = async ({
  setLoading, setErrors, cpf, name,
  email, ida,
}) => {
  setLoading(true);
  setErrors({});

  const cpfRegexp = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!cpfRegexp.test(cpf) || !validateCPF(cpf.replace(/\D+/g, ''))) {
    setErrors({ cpf: 'CPF Inválido' });
    return;
  }

  let createUserResponse;
  console.log(ida);
  try {
    createUserResponse = await createUser(mapUserToAPI({
      ida,
      cpf,
      name,
      email
    }));
  } catch (err) {
    console.log([err]);
    throw err;
  }

  console.log(createUserResponse);

  setErrors({});
  setLoading(false);
};
