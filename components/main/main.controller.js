import ida from '../../libs/ida.lib';
import { fetchUser } from './main.repository';
import { SET_USER } from 'components/store/actions';

/**
 * open ida signin pop and resolve possible errors if 
 */
export const openIDASignin = async () => {
  try {
    await ida.signinWithPopup();
  } catch (err) {
    console.log([err]);
    throw err;
  }
};

/**
 * get user on APP API and manage to complete signin or main flux
 * @param {object} params infations and state control function 
 * @param {string} ida user IDA token to be found on APP API  
 * @param {function} setLoading set loading state when waits for api response   
 * @param {function} navigationTo used to redirect user to another page   
 */
export const getUser = async ({
  ida, setLoading, navigationTo, dispatch,
}) => {
  setLoading(true);

  let getUserResponse;
  try {
    getUserResponse = await fetchUser(ida);
  } catch (err) {
    console.log([err]);
    throw err;
  }

  console.log(ida);
  console.log(getUserResponse);
  
  if (!getUserResponse.data.oneUser) {
    navigationTo('/complete-signup');
    setLoading(false);
    return;
  }

  dispatch({
    type: SET_USER,
    user: getUserResponse.data.oneUser,
  })

  setLoading(false);
};