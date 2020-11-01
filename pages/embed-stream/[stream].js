import React from 'react';
import StreamTemplate from 'components/templates/stream/streamTemplate';

const StreamPage = ({ stream }) => {
  return (
    <>
     <StreamTemplate stream={stream} />
    </>
  );
};

StreamPage.getInitialProps = ({ query }) => ({ stream: query.stream });

export default StreamPage;
