import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Button, defaultTheme } from '@resystem/design-system';
import Headers from 'components/Header';

console.log(defaultTheme);
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
`;

const Home = () => (
  <ThemeProvider theme={defaultTheme}>
    <Headers />
    asdsad
    <Button>Testando isso aqui!</Button>
  </ThemeProvider>
);

export default Home;
