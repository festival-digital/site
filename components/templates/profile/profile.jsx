import React, { useState } from 'react';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import ProfileCard from 'components/organisms/profile-card/profileCard';
import { Header, Wrapper, Title } from './profile.style';
import ProfileEditCard from 'components/organisms/profile-edit-card/profileEditCard';

const dummy = {
  birth_date: new Date('01/25/1996'),
  gender: '',
  other_gender: 'outo memo',
  city: 'São Paulo',
  state: 'SP',
  skin_color: '',
  other_skin_color: 'All Black',
  has_disability: true,
  disability: 'moved by Ganja'
}

const ProfileTemplate = () => {
  const [edit, setEdit] = useState(false)

  return (
    <Wrapper>
      <Header>
        <GoBackButton />
      </Header>
      <Title>Dados Cadastrais</Title>
      {
        !edit ?
          (
            <ProfileCard
              { ...dummy }
              handleClick={() => setEdit(true)}
            />
          ) :
          (
            <ProfileEditCard
              initialState={dummy}
            />
          )
      }
    </Wrapper>
  )
};

export default ProfileTemplate;
