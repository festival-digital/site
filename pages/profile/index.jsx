import React from 'react';
import ProfileTemplate from 'components/templates/profile/profile';
import PrivateContext from 'components/private-context/private-context';

const Profile = () => (
  <PrivateContext>
    <ProfileTemplate />
  </PrivateContext>
);

export default Profile;
