import React from 'react';
import StreamTemplate from 'components/templates/stream/streamTemplate';
import PrivateContext from 'components/private-context/private-context';

const StreamPage = ({ stream }) => {
  return (
    <PrivateContext>
      <StreamTemplate stream={stream} />
    </PrivateContext>
  );
};

StreamPage.getInitialProps = ({ query }) => ({ stream: query.stream });

export default StreamPage;
