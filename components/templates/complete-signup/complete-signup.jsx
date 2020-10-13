import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Apresentation, Brand, Content, Title,
  ActionWrapper, Illustration,
} from './complete-signup.style';
import GradientButton from 'components/atoms/gradient-button/gradient-button';

/**
 * This is the CompleteSignup component
 * @returns {React.Component}
 */
const CompleteSignup = () => {
  const router = useRouter();
  // const { state } = useContext(Store);
  // const [loading, setLoading] = useState('');

  return (
    <Content>
      <Apresentation>
        <Title>Prepare-se para conhecer o novo mundo de</Title>
        <Brand src="/static/icons/purple-oasi.svg"  alt="" />
      </Apresentation>
      <ActionWrapper>
        <GradientButton
          onClick={() => { router.push('/complete-signup/chat'); }}
        >
          Entrar!
        </GradientButton>
      </ActionWrapper>
      <Illustration src="/static/icons/signup-illustration.svg" alt="" />
    </Content>
  );
};

export default CompleteSignup;
