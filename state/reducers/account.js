import * as ActionTypes from 'state/action-types';

export const accountDefault = {
  ida: null,
  username: null,
};

const accountReducer = (state = accountDefault, action) => {
  switch (action.type) {
    case ActionTypes.IDA_SIGNIN: {
      return {
        ...state,
        ida: action.ida,
        username: action.username,
      };
    }
    case ActionTypes.IDA_LOGOFF: {
      return {
        ...state,
        ida: null,
        username: null,
      };
    }
    default:
      return state;
  }
};

export default accountReducer;
