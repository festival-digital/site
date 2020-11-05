import React from 'react';
import styled from 'styled-components';
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
  <PrivateContext>
    <Wrapper>
      <CompleteSignupTemplate />
    </Wrapper>
  </PrivateContext>
);

export default CompleteSignup;
