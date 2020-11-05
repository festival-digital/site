import React from 'react';
import styled from 'styled-components';
import BaseHead from 'components/base-head/BaseHead'
import CompleteSignupTemplate from 'components/templates/complete-signup/complete-signup';
import PrivateContext from 'components/private-context/private-context';

const Wrapper = styled.div`
  background-color: #000;
  color: white;
`;

/**
 * This is the Home component
 * @returns {React.Component}
 */
const CompleteSignup = () => (
  <>
    <BaseHead
      title="Complete seu cadastro na Oasi"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <PrivateContext>
      <Wrapper>
        <CompleteSignupTemplate />
      </Wrapper>
    </PrivateContext>
  </>
);

export default CompleteSignup;
