import React from 'react';
import BaseHead from 'components/base-head/BaseHead'
import ChatTemplate from 'components/templates/complete-signup/chat/chat';
import PrivateContext from 'components/private-context/private-context';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Chat = () => (
  <>
    <BaseHead
      title="Complete seu cadastro na Oasi"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <ChatTemplate />
    </PrivateContext>
  </>
);

export default Chat;
