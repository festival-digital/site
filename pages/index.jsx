import React from 'react';
import BaseHead from 'components/base-head/BaseHead'
import HomeTemplate from 'components/templates/home/home';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
    <>
      <BaseHead
        title="Página Inicial Oasi"
        description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
      />
      <HomeTemplate />
    </>
);

export default Home;
