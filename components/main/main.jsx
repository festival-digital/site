import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Store from 'components/store/Store';
import Header from 'components/organisms/header/header';
import HomeMenu from 'components/organisms/home-menu/home-menu';
import ida from 'libs/ida.lib';
import {
  SET_AUTH,
  CLOSE_MENU_MODAL,
  SET_LOADING_PAGE,
} from 'components/store/actions';
import theme from 'utils/theme';
import { getUser, openIDASignin } from './main.controller';
import { MainComponent } from './main.style';

/**
 * This is the Main component
 * @param {object} props proptypes to be pass to the component
 * @param {React.Component} props.children children component
 * @returns {React.Component}
 */
const Main = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // component did mount cycle
  useEffect(() => {
    ida.onCurrentUserChange((auth) => {
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
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainComponent>
        {children}
        <HomeMenu
          onIDASignin={openIDASignin}
          opened={state.menu}
          closeMenu={() => {
            dispatch({
              type: CLOSE_MENU_MODAL,
            });
          }}
        />
      </MainComponent>
    </ThemeProvider>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
