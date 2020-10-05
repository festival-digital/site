import React from 'react';
import { Button } from '@resystem/design-system';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import { Content } from './home.style';
import Header from 'components/organisms/home-header/home-header';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <>
    <Header />
    <Content>
      Pagina Home
    </Content>
  </>
);

export default Home;
