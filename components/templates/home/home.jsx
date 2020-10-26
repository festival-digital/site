import React from 'react';
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
