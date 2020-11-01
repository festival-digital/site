import React, { useContext, useState } from 'react';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import ProfileCard from 'components/organisms/profile-card/profileCard';
import { Header, Wrapper, Title } from './profile.style';
import ProfileEditCard from 'components/organisms/profile-edit-card/profileEditCard';
import Store from 'components/store/Store';
import { sendUser } from './profile.controller';
import { useRouter } from 'next/router';

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
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  return (
    <Wrapper>
      <Header>
        <GoBackButton onClick={() => router.back()} />
      </Header>
      <Title>Dados Cadastrais</Title>
      {
        !edit ?
          (
            <ProfileCard
              { ...state.user }
              handleClick={() => setEdit(true)}
            />
          ) :
          (
            <ProfileEditCard
              initialState={state.user}
              handleClick={(payload) => sendUser(payload, state.user, dispatch, router, setEdit)}
            />
          )
      }
    </Wrapper>
  )
};

export default ProfileTemplate;
