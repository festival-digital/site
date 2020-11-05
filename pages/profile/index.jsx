import React from 'react';
import ProfileTemplate from 'components/templates/profile/profile';
import PrivateContext from 'components/private-context/private-context';
import BaseHead from 'components/base-head/BaseHead';

const Profile = () => (
  <>
    <BaseHead
      title="Oasi - Dados Cadastrais"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <ProfileTemplate />
    </PrivateContext>
  </>
);

export default Profile;
