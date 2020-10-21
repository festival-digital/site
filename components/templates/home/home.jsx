import React from 'react';
import Header from 'components/organisms/home-header/home-header';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import { Content } from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <>
    <Header />
    <Content>
      <Breadcrumb
        options={[
          {
            href: 'fodase',
            label: 'Início',
          },
          {
            href: 'mano',
            label: 'Home',
          },
        ]}
      />
    </Content>
  </>
);

export default Home;
