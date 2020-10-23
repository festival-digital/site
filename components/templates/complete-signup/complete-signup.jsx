import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Store from 'components/store/Store';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import {
  Apresentation,
  Brand,
  Content,
  Title,
  ActionWrapper,
  Illustration,
  DesktopIllustration,
  ButtonWrapper,
} from './complete-signup.style';
import { initCreateOasisAccount } from './complete-signup.controller';

/**
 * This is the CompleteSignup component
 * @returns {React.Component}
 */
const CompleteSignup = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [loading, setLoading] = useState('');

  const navigateTo = () => {
    router.replace('/complete-signup/chat');
  };

  return (
    <Content>
      <Apresentation>
        <Title>Prepare-se para conhecer o novo mundo de</Title>
        <Brand src="/static/icons/oasi.svg" alt="" />
      </Apresentation>
      <ActionWrapper>
        <ButtonWrapper>
          <GradientButton
            onClick={() => {
              initCreateOasisAccount({
                ida: state.auth ? state.auth.ida : null,
                setLoading,
                navigateTo,
                dispatch,
                userId: state.user ? state.user.id : null,
              });
            }}
          >
            Entrar!
          </GradientButton>
        </ButtonWrapper>
        <Illustration src="/static/icons/signup-illustration.svg" alt="" />
        <DesktopIllustration
          src="/static/icons/desktop-signup-illustration.svg"
          alt=""
        />
      </ActionWrapper>
    </Content>
  );
};

export default CompleteSignup;
