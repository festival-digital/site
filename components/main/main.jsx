import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Store from 'components/store/Store';
import HomeMenu from 'components/organisms/home-menu/home-menu';
import {
  CLOSE_MENU_MODAL, SET_LOADING_PAGE,
} from 'components/store/actions';
import theme from 'utils/theme';
import { getUser, initIda, openIDASignin } from './main.controller';
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
  dispatch({
    type: SET_LOADING_PAGE,
    loading: false,
  });

  //  initIda(router, dispatch, setLoading);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainComponent>
        {children}
        <HomeMenu
          // onIDASignin={() => openIDASignin(state.ida)}
          onIDASignin={() => null}
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
