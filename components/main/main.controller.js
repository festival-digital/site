import { SET_USER } from 'components/store/actions';
import ida from '../../libs/ida.lib';
import { isMobile } from 'utils/validations';
import { fetchUser } from './main.repository';

/**
 * open ida signin pop and resolve possible errors if
 */
export const openIDASignin = async () => {
  try {
    await ida.signinWithPopup();
  } catch (err) {
    console.log([err]);
  }
};

/**
 * get user on APP API and manage to complete signin or main flux
 * @param {object} params infations and state control function
 * @param {string} ida user IDA token to be found on APP API
 * @param {function} setLoading set loading state when waits for api response
 * @param {function} navigationTo used to redirect user to another page
 */
export const getUser = async ({ ida, setLoading, navigationTo, dispatch }) => {
  setLoading(true);
  let getUserResponse;
  try {
    getUserResponse = await fetchUser(ida);
  } catch (err) {
    console.log([err]);
    setLoading(false);
    return;
  }

  dispatch({
    type: SET_USER,
    user: getUserResponse.data.oneUser,
  });

  setLoading(false);

  if (
    !getUserResponse.data ||
    !getUserResponse.data.oneUser ||
    !getUserResponse.data.oneUser.status ||
    getUserResponse.data.oneUser.status === 'INCOMPLETE'
  ) {
    navigationTo('/complete-signup');
  } 
  
  // if (getUserResponse.data.oneUser.status === 'ACTIVE') {
  //   if (isMobile()) {
  //     navigationTo('/events');
  //   } else {
  //     navigationTo('/game');
  //   }
  // }
};