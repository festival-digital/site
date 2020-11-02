import { gql } from 'apollo-boost';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { client } from 'utils/apollo';

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
`;

const getActivity = async (stream, setActivity) => {
  const activity = await client().query({
    query: gql`
    query oneActivity($id: String) {
      oneActivity(id: $id) {
        streaming_url
      }
    }
    `,
    variables: { id: stream }
  });
  console.log('getActivity -> activity', activity);
  setActivity(activity.data.oneActivity);
}

const StreamTemplate = ({ stream }) => {
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    getActivity(stream, setActivity)
  }, []);
  const router = useRouter();
  return (
    <>
      <GoBackButton
        onClick={() => router.back()}
        customStyle={`
          width: 150px;
          position: absolute;
          top: 10px;
          left: 10px;
        `}
      />
      <Iframe src={activity ? activity.streaming_url : 'http://player.twitch.tv/?channel=discopedia&parent=localhost'} allowfullscreen />
    </>
  );
};

export default StreamTemplate;
