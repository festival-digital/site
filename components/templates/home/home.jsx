import React from 'react';
import Header from 'components/organisms/home-header/home-header';
import ModalCompleteRegistration from 'components/modals/complete-registration/complete-registration';
import ModaSympla from 'components/modals/modal-sympla/modal-sympla';
import ModalAddTicket from 'components/modals/add-ticket/add-ticket';
import ModalAddTicketFromEvent from 'components/modals/add-ticket-from-event/add-ticket-from-event';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import { Content } from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */

const registrationData = {
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
      <ModalAddTicketFromEvent />
      <ModalAddTicket />
      <ModalCompleteRegistration {...registrationData} opened={false} />
      <ModaSympla opened />
    </Content>
  </>
);

export default Home;
