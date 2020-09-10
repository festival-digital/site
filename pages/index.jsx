import React from 'react';
import styled from 'styled-components';
import { defaultTheme, IDALoginButton, Title } from '@resystem/design-system';
import { ThemeProvider } from 'styled-components';
import Headers from 'components/Header';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
`;

const Home = () => (
  <ThemeProvider theme={defaultTheme}>
    <Headers />
    <Title>teste</Title>
    <IDALoginButton dark small />
  </ThemeProvider>
);

export default Home;
