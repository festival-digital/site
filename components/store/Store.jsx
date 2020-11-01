/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SET_USER,
  RESET_USER,
  SET_AUTH,
  RESET_AUTH,
  OPEN_MENU_MODAL,
  CLOSE_MENU_MODAL,
  SET_LOADING_PAGE,
} from './actions';

const Store = React.createContext();

export const initialState = {
  user: null,
  auth: {},
  menu: false,
  loading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER: {
      console.log('SET_USER STORE', action.user);
      return { ...state, user: action.user };
    }
    case RESET_USER:
      return { ...state, user: null };
    case SET_AUTH: {
      console.log('SET_AUTH STORE', action.auth);
      return { ...state, auth: action.auth };
    }
    case RESET_AUTH:
      return { ...state, auth: null };
    case OPEN_MENU_MODAL:
      return { ...state, menu: true };
    case CLOSE_MENU_MODAL:
      return { ...state, menu: false };
    case SET_LOADING_PAGE:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const { children, value } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object.isRequired,
};

StoreProvider.defaultProps = {
  children: [],
};

export default Store;
