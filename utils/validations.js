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

export const cpfValidation = (cpf) => {
  return validateCPF(cpf) ? '' : 'Número de CPF inválido';
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
  return isEmail(email) ? '' : 'Formato de e-mail inválido';
}

export function phoneValidation(phone) {
  return isPhone(phone) ? '' : 'Número de celular inválido';
}

export function maskCPF(input) {
  let v = input;
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d{3})(\d{0,8})/g, '$1.$2');
  v = v.replace(/(\d{3}).(\d{3})(\d)/g, '$1.$2.$3');
  v = v.replace(/(\d{3}).(\d{3}).(\d{3})(\d)/g, '$1.$2.$3-$4');
  v = v.replace(/(\d{3}).(\d{3}).(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  return v;
  // input.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

export function maskDate(input) {
  let v = input;
  if (v.length < 3) return input;
  v = v.replace(/\D/g, '');
  v = v.length > 8 ? v.substring(0, 8) : v;
  v = v.replace(/(\d{2})(\d{1,6})/g, '$1/$2');
  v = v.replace(/(\d{2})(\d{1,4})/g, '$1/$2');
  return v;
}

export function dateValidation(input) {
  return input.replace(/\D/g, '').length < 8 ? 'Data inválida' : '';
}

export const isMobile = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
