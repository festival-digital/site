import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@resystem/design-system';
import { MainComponent } from './main.style';
import Header from 'components/organisms/header/header';
import Footer from 'components/organisms/footer/footer';
 


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
      { children }
      <Footer />
      
     
    </MainComponent>
     
     
     
  </ThemeProvider>

  
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
