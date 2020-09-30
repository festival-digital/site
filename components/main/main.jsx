import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@resystem/design-system';
import Header from 'components/organisms/header/header';
import { MainComponent } from './main.style';

/**
 * This is the Main component
 * @param {object} props proptypes to be pass to the component
 * @param {React.Component} props.children children component
 * @returns {React.Component}
 */
const Main = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <MainComponent>
      <Header />
      {children}
    </MainComponent>
  </ThemeProvider>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
