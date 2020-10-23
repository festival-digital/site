import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import Store from 'components/store/Store';
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

  if (loading) return <Content />;
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
                ida: state.auth.ida,
                setLoading,
                router,
                dispatch,
                userId: state.user?.id,
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
