import queryString from 'query-string';
import { SET_USER } from 'components/store/actions';
import idaLib from '../../libs/ida.lib';
import { fetchUser } from './main.repository';
import {
  SET_AUTH,
  SET_LOADING_PAGE,
} from 'components/store/actions';

/**
 * open ida signin pop and resolve possible errors if
 */
export const openIDASignin = async (ida) => {
console.log('ida', ida);
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
    getUserResponse.data.oneUser.status === 'IN_REGISTER'
  ) {
    navigationTo('/complete-signup');
    return;
  }
  
  if (
    getUserResponse.data &&
    getUserResponse.data.oneUser &&
    getUserResponse.data.oneUser.tickets.length &&
    getUserResponse.data.oneUser.tickets.filter(({ event }) => {
      const currentDate = new Date().getTime();
      return currentDate > +event.start_date && currentDate < +event.end_date;
    }).length
  ) {
    navigationTo('/game');
    return;
  }

  navigationTo('/events');  
};

export const onAuthChange = (auth, setLoading, router, dispatch) => {
  if (auth) {
    dispatch({
      type: SET_AUTH,
      auth,
    });

    getUser({
      ida: auth.ida,
      setLoading,
      navigationTo: router.push,
      dispatch,
    });
  }
    
  dispatch({
    type: SET_LOADING_PAGE,
    loading: false,
  });
}

/**
 * open iniIda signin pop and resolve possible errors if
 */
export const initIda = async (
  router, dispatch, setLoading,
) => {
  console.log('initIda');
  const query = `?${router.asPath.split('?')[1 || '']}`;
  const parsedQuery = queryString.parse(query);
  const ida = await idaLib({
    onAuthChange: (auth) => onAuthChange(auth, setLoading, router, dispatch),
  });
  console.log('ida', ida);
  dispatch({
    type: 'SET_IDA',
    ida: ida,
  })

  if (parsedQuery.logout === 'true') await ida.logout();
  
  // ida.onCurrentUserChange((auth) => {
    
  // });
};