import React, { useState } from 'react';
import CompleteSignupTemplate from 'components/templates/complete-signup/complete-signup';
import AddTicket from 'components/modals/add-ticket/add-ticket';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const CompleteSignup = () => {
  const [isOpenTicketModal, setIsOpenTicketModal] = useState(false);
  return (
    <>
      <CompleteSignupTemplate
        showTicketModal={() => setIsOpenTicketModal(true)}
        hideTicketModal={() => setIsOpenTicketModal(false)}
      />
      <AddTicket
        opened={isOpenTicketModal}
      />
    </>
  );
};

export default CompleteSignup;
