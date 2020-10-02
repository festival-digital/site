import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Store from 'components/store/Store';
import Header from 'components/organisms/header/header';
import ida from 'libs/ida.lib';
import { SET_AUTH } from 'components/store/actions';
import { openIDASignin, getUser } from './main.controller';
import { MainComponent } from './main.style';
import theme from 'utils/theme';

/**
 * This is the Main component
 * @param {object} props proptypes to be pass to the component
 * @param {React.Component} props.children children component
 * @returns {React.Component}
 */
const Main = ({ children }) => {
  const { dispatch } = useContext(Store);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // component did mount cycle
  useEffect(() => {
    ida.onCurrentUserChange((auth) => {
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
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainComponent>
        <Header onIDASignin={openIDASignin} />
        {children}
      </MainComponent>
    </ThemeProvider>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
