import React from 'react';
import ChatTemplate from 'components/templates/complete-signup/chat/chat';
import PrivateContext from 'components/private-context/private-context';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Chat = () => (
  <PrivateContext>
    <ChatTemplate />
  </PrivateContext>
);

export default Chat;
