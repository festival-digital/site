import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Headers from 'components/Header';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
`;

const Home = () => (
  <ThemeProvider theme={{}}>
    <Headers />
    asdsad
  </ThemeProvider>
);

export default Home;
