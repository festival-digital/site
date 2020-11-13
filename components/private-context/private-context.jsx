import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Store from 'components/store/Store';
import Loading from '../atoms/loading/loading';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const validateToken = async (token, ida) => {
  await ida.validateToken({ token });
}

const PrivateContext = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const publicPage = '/';
  
  useEffect(() => {
    if (!state.loading && !state.auth) {
      router.push(publicPage);
    }
  }, [state.loading, state.auth]);
  useEffect(() => {
    if (router.query.t) validateToken(router.query.t, state.ida);
  }, []);

  return state.loading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    children
  );
};

export default PrivateContext;
