import axios from 'axios';
import { get, post, remove } from 'services/client';
import * as ActionTypes from 'state/action-types';
import { API_IDA, API_OASI } from 'services/routes';

export const signin = (payload) => {
  const config = {
    client: API_OASI,
    path: 'login',
    data: {
      name: 'mauricio',
      password: 'mauricio123',
    },
  };
  return (dispatch) => {
    return get(config).then(
      (response) => {
        console.log('response ', response);
        return response;
      }
      // .then(r => r.json()
      //  .then(t =>
      //    dispatch({ type: ActionTypes.PAY, payload, t }))
      //
      // )
    );
  };
};

export const signup = (payload) => {
  const config = {
    client: API_OASI,
    path: 'login',
    data: {
      name: 'mauricio',
      password: 'mauricio123',
    },
  };
  return (dispatch) => {
    return get(config).then(
      (response) => {
        console.log('response ', response);
        return response;
      }
      // .then(r => r.json()
      //  .then(t =>
      //    dispatch({ type: ActionTypes.PAY, payload, t }))
      //
      // )
    );
  };
};
