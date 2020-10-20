import React from 'react';
import Header from 'components/organisms/home-header/home-header';
import { Content } from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <>
    <Header />
    <Content>Pagina Home</Content>
  </>
);

export default Home;
