/**
 * function that make validation on cpf field
 *
 * @function validateCPF
 * @param  {string} strCPF  it's the cpf value
 * @returns {boolean} it's the validation
 */
export const validateCPF = (strCPF) => {
  let sum;
  let rest;
  let i;
  sum = 0;
  if (strCPF === '00000000000') return false;
  for (i = 1; i <= 9; i += 1)
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(strCPF.substring(9, 10), 10)) return false;

  sum = 0;
  for (i = 1; i <= 10; i += 1)
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(strCPF.substring(10, 11), 10)) return false;
  return true;
};

export function removePhoneMask(input) {
  return input.replace(/[^\w\s]/gi, '').replace(' ', '');
}

export function phoneMask(input) {
  let v = input;
  v = v.replace(/\D/g, '');
  v = v.length > 11 ? v.s(0, 11) : v;
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
  v = v.replace(/(\d{5})(\d)/, '$1-$2');
  return v;
}

export function isPhone(input) {
  const inputWithoutChars = input.replace(/\W/g, '');
  const inputPhoneFormatted = `+55${inputWithoutChars}`;
  const regexPhone = /^\+[0-9]{9,}$/;
  return regexPhone.test(inputPhoneFormatted);
}

export function isEmail(input) {
  const regexW3C = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regexW3C.test(input);
}

export function emailValidation(email) {
  return isEmail(email) ? '' : 'formato de e-mail inválido';
}

export function phoneValidation(phone) {
  return isPhone(phone) ? '' : 'número de celular inválido';
}

export function maskCPF(input) {
  return input.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}
