import React from 'react';
import styled from 'styled-components';
import CompleteSignupTemplate from 'components/templates/complete-signup/complete-signup';

const Wrapper = styled.div`
  background-color: #000;
  color: white;
`;

/**
 * This is the Home component
 * @returns {React.Component}
 */
const CompleteSignup = () => (
  <Wrapper>
    <CompleteSignupTemplate />
  </Wrapper>
);

export default CompleteSignup;
