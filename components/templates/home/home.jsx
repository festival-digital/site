import React from 'react';
import Header from 'components/organisms/home-header/home-header';
import CompleteRegistration from 'components/modals/complete-registration/complete-registration';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import { Content } from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */

const dados = {
  firstName: '',
  lastName: '',
  birthDate: '',
  cpf: '',
  email: '',
};

const Home = () => (
  <>
    <Header />
    <Content>
      <CompleteRegistration {...dados} />
    </Content>
  </>
);

export default Home;
