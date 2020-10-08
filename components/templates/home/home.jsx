import React from 'react';
import Header from 'components/organisms/home-header/home-header';
import Menu from 'components/organisms/home-menu/home-menu';
import { Content } from './home.style';
/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <>
    <Header />
    <Menu opened/>
    <Content>Pagina Home</Content>
  </>
);

export default Home;
