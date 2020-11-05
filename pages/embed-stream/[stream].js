import React from 'react';
import BaseHead from 'components/base-head/BaseHead'
import StreamTemplate from 'components/templates/stream/streamTemplate';
import PrivateContext from 'components/private-context/private-context';

const StreamPage = ({ stream }) => {
  return (
    <>
      <BaseHead
        title="Página de Transmissão"
        description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
      />
      <PrivateContext>
        <StreamTemplate stream={stream} />
      </PrivateContext>
    </>
  );
};

StreamPage.getInitialProps = ({ query }) => ({ stream: query.stream });

export default StreamPage;
